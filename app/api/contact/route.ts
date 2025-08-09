import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    if (!body?.name || !body?.email || !body?.subject || !body?.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const isDev = process.env.NODE_ENV !== "production";

    const {
      SMTP_HOST = "smtp.gmail.com",
      SMTP_PORT = "465",
      SMTP_SECURE = "true",
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM,
    } = process.env;

    if (!SMTP_USER || !SMTP_PASS) {
      // In development, allow the endpoint to succeed without SMTP to enable local testing
      if (isDev) {
        console.warn(
          "[contact] SMTP not configured. Running in dev mode and returning success without sending email.",
          {
            name: body.name,
            email: body.email,
            subject: body.subject,
          }
        );
        return NextResponse.json({ ok: true, dev: true });
      }
      return NextResponse.json(
        { ok: false, error: "Email transport not configured on server" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true" || SMTP_PORT === "465",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const toAddress = "esrailbblhs@gmail.com";
    const fromAddress = SMTP_FROM || `Portfolio Contact <${SMTP_USER}>`;

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;line-height:1.6;color:#0b1220;">
        <h2 style="margin:0 0 8px">New message from portfolio</h2>
        <p style="margin:0 0 16px"><strong>${body.name}</strong> &lt;${body.email}&gt;</p>
        <p style="margin:0 0 8px"><strong>Subject:</strong> ${body.subject}</p>
        <div style="margin-top:12px;padding:12px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb;white-space:pre-wrap;">${body.message}</div>
      </div>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: body.email,
      subject: `[Portfolio] ${body.subject}`,
      text: `From: ${body.name} <${body.email}>
Subject: ${body.subject}

${body.message}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
