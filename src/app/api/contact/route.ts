import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/server/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json() as {
      email?: string;
      problem?: string;
      users?: string;
      preferredTimes?: string;
      company?: string;
    };

    if ((body.company || "").trim()) {
      return NextResponse.json({ ok: true });
    }

    const email = (body.email || "").trim();
    const problem = (body.problem || "").trim();
    const users = (body.users || "").trim();
    const preferredTimes = (body.preferredTimes || "").trim();

    if (!email || !problem || !users) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    await sendEmail({
      subject: "New project inquiry",
      replyTo: email,
      text: [
        "New inquiry from weboryn.com",
        "",
        `Email: ${email}`,
        `What needs to work better: ${problem}`,
        `Who uses it today: ${users}`,
        `Preferred times: ${preferredTimes || "-"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submit failed", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send the inquiry right now." },
      { status: 500 }
    );
  }
}
