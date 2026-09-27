import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // 1. Enterprise HTTP Security Headers
  response.headers.set("X-Frame-Options", "DENY"); // Anti-Clickjacking
  response.headers.set("X-Content-Type-Options", "nosniff"); // Anti-MIME sniffing
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(self)");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload" // Force HTTPS
  );

  // 2. Anti-Scraping / Bad Bot Protection
  const userAgent = request.headers.get("user-agent") || "";
  const badBots = ["HTTrack", "Scrapy", "Nmap", "DotBot", "SemrushBot", "MJ12bot", "sqlmap"];
  if (badBots.some((bot) => userAgent.toLowerCase().includes(bot.toLowerCase()))) {
    return new NextResponse("Access Denied (Security Shield Active)", { status: 403 });
  }

  // 3. Admin Security Gate Protection
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/admin/api/protected")) {
    const authHeader = request.headers.get("authorization");
    const secretKey = process.env.ADMIN_API_SECRET || "terrasilva-admin-key-2026";
    if (!authHeader || !authHeader.includes(secretKey)) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized access to internal ERP endpoint" }), {
        status: 401,
        headers: { "content-type": "application/json" },
      });
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
