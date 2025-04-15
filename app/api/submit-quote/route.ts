// app/api/submit-quote/route.ts
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    console.log("🚀 Received Quotation Form:", body)

    // You can later:
    // - Store it in a DB
    // - Send an email
    // - Push it to a webhook
    // For now, just return success
    return NextResponse.json({
      success: true,
      message: "Quotation received successfully!",
    })
  } catch (error) {
    console.error("❌ API Error:", error)
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    )
  }
}
