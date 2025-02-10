import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const authorized = getServerSession()

    if (!authorized) {
        return new Response("Unauthorized", { status: 401 })
    }

    const data = await prisma.contactData.findMany()
    return NextResponse.json({ msg: "Thank You for Contacting Us! We will get back to you soon.", data })
}