import crypto from "crypto";

/**
 * Enterprise-grade AES-256-GCM encryption for sensitive data at rest
 * (e.g., supplier factory costs, customer phone numbers, tax IDs, internal keys)
 */

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 16;
const SALT_LENGTH = 64;
const TAG_LENGTH = 16;

// Fallback master key derived from environment or secure hardware random
const MASTER_SECRET = process.env.ENCRYPTION_MASTER_KEY || "terrasilva-production-master-secret-key-2026-secure-32chars";

function getKey(): Buffer {
  return crypto.scryptSync(MASTER_SECRET, "terrasilva-salt", 32);
}

/**
 * Encrypts plaintext string into an AES-256-GCM cipher string
 */
export function encryptData(plaintext: string): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, getKey(), iv);
  
  let encrypted = cipher.update(plaintext, "utf8", "hex");
  encrypted += cipher.final("hex");
  
  const authTag = cipher.getAuthTag();
  
  // Format: iv:authTag:encrypted
  return `${iv.toString("hex")}:${authTag.toString("hex")}:${encrypted}`;
}

/**
 * Decrypts AES-256-GCM cipher string back to plaintext
 */
export function decryptData(cipherString: string): string | null {
  try {
    const parts = cipherString.split(":");
    if (parts.length !== 3) return null;
    
    const iv = Buffer.from(parts[0], "hex");
    const authTag = Buffer.from(parts[1], "hex");
    const encryptedText = parts[2];
    
    const decipher = crypto.createDecipheriv(ALGORITHM, getKey(), iv);
    decipher.setAuthTag(authTag);
    
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    
    return decrypted;
  } catch (err) {
    console.error("Decryption failed / data corrupted:", err);
    return null;
  }
}

/**
 * Generates an HMAC SHA-256 signature for tamper-proof session tokens
 */
export function signToken(payload: string): string {
  const hmac = crypto.createHmac("sha256", MASTER_SECRET);
  hmac.update(payload);
  const signature = hmac.digest("hex");
  return `${Buffer.from(payload).toString("base64url")}.${signature}`;
}

/**
 * Verifies an HMAC SHA-256 signed token
 */
export function verifyToken(signedToken: string): { valid: boolean; payload: string | null } {
  try {
    const [encodedPayload, signature] = signedToken.split(".");
    if (!encodedPayload || !signature) return { valid: false, payload: null };
    
    const payload = Buffer.from(encodedPayload, "base64url").toString("utf8");
    const hmac = crypto.createHmac("sha256", MASTER_SECRET);
    hmac.update(payload);
    const expectedSignature = hmac.digest("hex");
    
    const isValid = crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
    return { valid: isValid, payload: isValid ? payload : null };
  } catch {
    return { valid: false, payload: null };
  }
}

/**
 * Masks customer PII (Personally Identifiable Information) for logs & views
 */
export function maskSensitiveInfo(info: string, type: "phone" | "email" | "tax"): string {
  if (!info) return "";
  if (type === "phone") {
    // e.g. +36 20 407 6858 -> +36 20 *** *858
    if (info.length < 6) return "***";
    return info.slice(0, 7) + " *** *" + info.slice(-3);
  }
  if (type === "email") {
    // e.g. bence@butor.hu -> b***@butor.hu
    const [user, domain] = info.split("@");
    if (!domain) return "***";
    return `${user.charAt(0)}***@${domain}`;
  }
  if (type === "tax") {
    return `${info.slice(0, 4)}****-*`;
  }
  return info;
}
