import { prisma } from "@/lib/db"
import { contactDataValidation } from "@/lib/types"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { name, email, phone, service, message } = body
    const parsedValue = contactDataValidation.safeParse({ name, email, phone, service, message })

    if (!parsedValue.success) {
        return NextResponse.json({ error: parsedValue.error.issues[0]?.message }, { status: 400 })
    }
    try {
        await prisma.contactData.create({ data: { name, email, phone, service, message } })
        return NextResponse.json({ message: "Contact data added successfully!" })
    } catch (error) {
        return NextResponse.json({ error }, { status: 400 })

    }
}