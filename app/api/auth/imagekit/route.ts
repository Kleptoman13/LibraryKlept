import config from "@/lib/config";
import ImageKit from "imagekit"
import { NextResponse } from "next/server";

const { env: { imagekit: { publicKey, privateKey, urlEndpoint } } } = config

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

export async function GET() {
    const response = NextResponse.json(imagekit.getAuthenticationParameters());

    response.headers.set("Access-Control-Allow-Origin", "https://library-klept.vercel.app");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return response
}

export async function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });

    response.headers.set("Access-Control-Allow-Origin", "https://library-klept.vercel.app");
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return response;
}