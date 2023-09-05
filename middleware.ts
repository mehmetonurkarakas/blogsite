import * as jose from "jose";
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export async function middleware(request: NextRequest) {

    const url = new URL(request.url);

    if (url.pathname === "/admin/login" || url.pathname === "/admin/login/action") {
        return NextResponse.next();
    }

    const token = request.cookies.get("token");
    if (!token) {
        console.log("NO TOKEN");
        url.pathname = "/admin/login";
        return NextResponse.redirect(url.href, {status: 303});
    }
    const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || ""
    );

    let payload;
    try {
        payload = await jose.jwtVerify(token.value, secret, {
            issuer: "urn:cihan:issuer",
            audience: "urn:cihan:audience"
        });

    } catch (e) {
        console.log("TOKEN ERROR");
    }

    if (!payload) {
        console.log("NO PAYLOAD");
        url.pathname = "/admin/login";
        return NextResponse.redirect(url.href, {status: 303});
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/admin/:path*"
};
