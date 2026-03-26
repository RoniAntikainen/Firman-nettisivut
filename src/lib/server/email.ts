type EmailPayload = {
  subject: string;
  replyTo: string;
  text: string;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export async function sendEmail(payload: EmailPayload) {
  const apiKey = getRequiredEnv("RESEND_API_KEY");
  const to = getRequiredEnv("CONTACT_TO_EMAIL");
  const from = process.env.CONTACT_FROM_EMAIL || "Weboryn <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.replyTo,
      subject: payload.subject,
      text: payload.text,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Email send failed: ${errorText}`);
  }
}
