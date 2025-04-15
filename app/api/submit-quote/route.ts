import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      phone,
      propertyType,
      location,
      areaSize,
      projectCategory,
      serviceType,
      focusAreas, // or serviceDetails if renamed
      designStyle,
      hasDrawings,
      startDate,
      budget,
    } = body

    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM || "no-reply@fanisatelier.vercel.app",
      to: ["briankuria1812@gmail.com", "briannkuria@gmail.com"], // 👈 multiple recipients
      subject: "New Quotation Request",
      html: `
        <h2>New Quotation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Area Size:</strong> ${areaSize}</p>
        <p><strong>Project Category:</strong> ${projectCategory}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Service Details:</strong> ${focusAreas}</p>
        <p><strong>Design Style:</strong> ${designStyle}</p>
        <p><strong>Has Drawings:</strong> ${hasDrawings}</p>
        <p><strong>Preferred Start Date:</strong> ${startDate}</p>
        <p><strong>Budget:</strong> ${budget}</p>
      `,
    })

    console.log("📤 Email response:", response)

    return NextResponse.json({ success: true, message: "Email sent!" })
  } catch (error) {
    console.error("❌ Failed to send email:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    )
  }
}
