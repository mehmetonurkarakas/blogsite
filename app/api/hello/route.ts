import {Response} from "next/dist/compiled/@edge-runtime/primitives";

export async function GET(request:Request){
    return new Response('hi')
}

export async function POST(req:Request){
    console.log("post function in api")
    const body = await req.json()
    console.log(body)

    return new Response('OK')
}

export async function PUT(req:Request){
    console.log("put function in api")

    console.log("Req: ",req)

    const body = await req.json()

    let title = body.title
    let content = body.content

    console.log(body)
    console.log("Title: " + title)
    console.log("Content: " + content)

    return new Response('OK')
}