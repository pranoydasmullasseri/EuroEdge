import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, location, message } = await req.json()

    // 1. Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Please provide your name." }, { status: 400 })
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
    }
    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json({ error: "Please provide your phone or WhatsApp number." }, { status: 400 })
    }

    const clientName = name.trim()
    const clientEmail = email.trim()
    const clientPhone = phone.trim()
    const requestedService = service || "General Technical Inquiry"
    const propertyLocation = location || "Dubai, UAE"
    const clientMessage = message || "No additional requirements specified."
    const timestamp = new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })

    // 2. Check if SMTP credentials exist in environment
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpHost = process.env.SMTP_HOST || "smtp.zoho.com"
    const smtpPort = Number(process.env.SMTP_PORT) || 465
    const smtpSecure = process.env.SMTP_SECURE !== "false"
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@euroedgets.com"

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials not configured in environment variables. Lead logged safely:", {
        clientName,
        clientEmail,
        clientPhone,
        requestedService,
        propertyLocation,
        timestamp,
      })

      return NextResponse.json({
        success: true,
        delivered: "simulated",
        message: "Thank you! Your inquiry has been registered. Our team will contact you shortly.",
      })
    }

    // 3. Create Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // EMAIL 1: Internal Notification to Euro Edge
    const internalMailOptions = {
      from: `"Euro Edge Website" <${smtpUser}>`,
      to: notificationEmail,
      replyTo: clientEmail,
      subject: `🚨 New Technical Inquiry: ${requestedService} — ${clientName}`,
      text: `EURO EDGE TECHNICAL SERVICES L.L.C.
New Technical Inquiry Received

Submitted on: ${timestamp} (UAE Time)

Client Details:
• Name: ${clientName}
• Email: ${clientEmail}
• Phone / WhatsApp: ${clientPhone}
• Service Required: ${requestedService}
• Location: ${propertyLocation}

Requirement / Scope:
${clientMessage}

Direct Reply: You can reply directly to this email to contact the client.
Website: https://euroedgets.com`,
      html: `
        <div style="font-family: Arial, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
          <div style="background-color: #0a2540; padding: 24px; color: #ffffff;">
            <p style="margin: 0 0 4px 0; color: #fbb03b; font-size: 11px; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase;">EURO EDGE TECHNICAL SERVICES L.L.C.</p>
            <h2 style="margin: 0; font-size: 20px; font-weight: bold;">New Technical Inquiry Received</h2>
            <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 12px;">Submitted on: ${timestamp} (UAE Time)</p>
          </div>
          <div style="padding: 24px; color: #334155; font-size: 14px; line-height: 1.6;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;">Client Name:</td>
                <td style="padding: 8px 0; color: #0a2540; font-weight: bold;">${clientName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email Address:</td>
                <td style="padding: 8px 0;"><a href="mailto:${clientEmail}" style="color: #0066cc; text-decoration: none;">${clientEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone / WhatsApp:</td>
                <td style="padding: 8px 0;"><a href="tel:${clientPhone}" style="color: #0066cc; text-decoration: none; font-weight: bold;">${clientPhone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Service Required:</td>
                <td style="padding: 8px 0; color: #0a2540; font-weight: bold;">${requestedService}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Project Location:</td>
                <td style="padding: 8px 0; color: #0a2540;">${propertyLocation}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border-left: 4px solid #0066cc; border-radius: 4px; padding: 16px; margin: 16px 0;">
              <p style="margin: 0 0 6px 0; font-weight: bold; color: #0a2540; font-size: 13px;">Requirement Scope / Message:</p>
              <p style="margin: 0; white-space: pre-wrap; color: #475569;">${clientMessage}</p>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
              Direct Reply: You can reply directly to this email to contact the client.
            </div>
          </div>
        </div>
      `,
    }

    // EMAIL 2: Auto-Response to Customer
    const customerMailOptions = {
      from: `"Euro Edge Technical Services" <${smtpUser}>`,
      to: clientEmail,
      subject: `Inquiry Received – Euro Edge Technical Services L.L.C.`,
      text: `Dear ${clientName},

Thank you for contacting Euro Edge Technical Services L.L.C.

We have received your technical inquiry regarding "${requestedService}" for "${propertyLocation}".

Our engineering and operations team is reviewing your requirements, and a dedicated team member will contact you shortly to discuss project details or schedule a site survey.

Summary of Your Inquiry:
• Service Required: ${requestedService}
• Location: ${propertyLocation}
• Received: ${timestamp} (UAE Time)

Need Immediate Assistance?
• Phone: +971 54 390 9946
• WhatsApp: https://wa.me/971543909946
• Email: info@euroedgets.com

Best regards,
Operations Management
Euro Edge Technical Services L.L.C.
Al Quoz Industrial Area, Dubai, United Arab Emirates
https://euroedgets.com`,
      html: `
        <div style="font-family: Arial, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
          <div style="background-color: #0a2540; padding: 28px 24px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 1px;">EURO EDGE</h1>
            <p style="margin: 6px 0 0 0; color: #fbb03b; font-size: 11px; font-weight: 600; letter-spacing: 2px;">THE EDGE OF QUALITY BUILT ON TRUST</p>
          </div>
          <div style="padding: 28px 24px; color: #334155; font-size: 14px; line-height: 1.6;">
            <p style="font-size: 16px; color: #0a2540; margin-top: 0;">Dear <strong>${clientName}</strong>,</p>
            <p>Thank you for reaching out to <strong>Euro Edge Technical Services L.L.C.</strong></p>
            <p>We have successfully received your inquiry regarding <strong>${requestedService}</strong>. Our engineering operations desk is reviewing your requirements, and a dedicated team member will contact you shortly to discuss details or arrange a site survey.</p>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0;">
              <p style="margin: 0 0 8px 0; font-weight: bold; color: #0a2540; font-size: 13px;">Summary of Your Inquiry:</p>
              <ul style="margin: 0; padding-left: 20px; color: #64748b; font-size: 13px; line-height: 1.8;">
                <li><strong>Service:</strong> ${requestedService}</li>
                <li><strong>Location:</strong> ${propertyLocation}</li>
                <li><strong>Received:</strong> ${timestamp} (UAE Time)</li>
              </ul>
            </div>

            <p style="margin-top: 20px; font-weight: 600; color: #0a2540;">Need Immediate Assistance or 24/7 Emergency Support?</p>
            <table style="width: 100%; margin-top: 10px; margin-bottom: 20px;">
              <tr>
                <td style="padding: 4px 0;">📞 <strong>Direct Hotline:</strong> <a href="tel:+971543909946" style="color: #0066cc; text-decoration: none; font-weight: bold;">+971 54 390 9946</a></td>
              </tr>
              <tr>
                <td style="padding: 4px 0;">💬 <strong>WhatsApp:</strong> <a href="https://wa.me/971543909946" style="color: #25D366; text-decoration: none; font-weight: bold;">Click to Chat on WhatsApp</a></td>
              </tr>
              <tr>
                <td style="padding: 4px 0;">✉️ <strong>Official Email:</strong> <a href="mailto:info@euroedgets.com" style="color: #0066cc; text-decoration: none; font-weight: bold;">info@euroedgets.com</a></td>
              </tr>
            </table>

            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 28px 0 16px 0;" />
            <p style="margin: 0; font-size: 11px; color: #94a3b8; text-align: center;">
              Euro Edge Technical Services L.L.C. • Al Quoz Industrial Area, Dubai, United Arab Emirates<br>
              <a href="https://euroedgets.com" style="color: #0066cc; text-decoration: none;">https://euroedgets.com</a>
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(internalMailOptions),
      transporter.sendMail(customerMailOptions),
    ])

    return NextResponse.json({
      success: true,
      delivered: "sent",
      message: "Thank you! Your inquiry and confirmation email have been sent successfully.",
    })
  } catch (error: any) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Could not send email automatically. Please use the WhatsApp button or call us directly." },
      { status: 500 }
    )
  }
}
