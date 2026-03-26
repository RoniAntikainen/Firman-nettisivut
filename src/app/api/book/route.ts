import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/server/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json() as {
      email?: string;
      slot?: string;
      note?: string;
    };

    const email = (body.email || "").trim();
    const slot = (body.slot || "").trim();
    const note = (body.note || "").trim();

    if (!email || !slot) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    await sendEmail({
      subject: "New 15 minute call request",
      replyTo: email,
      text: [
        "New call request from weboryn.com",
        "",
        `Email: ${email}`,
        `Preferred slot: ${slot}`,
        `Notes: ${note || "-"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Call request submit failed", error);
    return NextResponse.json(
      { ok: false, error: "Unable to request the call right now." },
      { status: 500 }
    );
  }
}
