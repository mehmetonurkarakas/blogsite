import { NextResponse,NextRequest } from 'next/server'
import * as jose from 'jose'
import {createHash} from "node:crypto";

export async function POST(request:NextRequest) {
    const fd = await request.formData();
    const password = fd.get("password");
    const url = new URL(request.url);
    if (!password){
        //TODO: show error
        url.pathname = "/admin/login";
        url.searchParams.set("error", "1");
        console.log("PASS BOŞ");
        return NextResponse.redirect(url.href, {status:303});
    }

    const salt = process.env.PASSWORD_SALT || "";
    const realHash = process.env.PASSWORD_HASH || "";
    console.log("SALT: " + salt);
    console.log("REAL HASH: " + realHash);

    const currentHash = createHash('sha256').update(password + salt).digest('hex');
    console.log("CURRENT HASH: " + currentHash);
    if (realHash !== currentHash){
        //WRONG
        url.pathname = "/admin/login";
        url.searchParams.set("error", "1");
        console.log("HASH TUTMADI");

        return NextResponse.redirect(url.href, {status:303});
    }

    const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "",
    )
    const alg = 'HS256'

    const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('urn:cihan:issuer')
        .setAudience('urn:cihan:audience')
        .setExpirationTime('2h')
        .sign(secret)


    const cookie = request.cookies.get('token')

    if (request.cookies.has('token')){
        request.cookies.delete('token');
    } // => true
    url.pathname = "/admin/dashboard";
    const response = NextResponse.redirect(url.href, {status:303});
    response.cookies.set('token', jwt);
    return response;
}
