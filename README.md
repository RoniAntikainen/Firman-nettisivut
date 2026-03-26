This is a Next.js project for the Weboryn website.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Copy the environment template before using the backend form routes:

```bash
cp .env.example .env.local
```

Required environment variables:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=hello@weboryn.com
CONTACT_FROM_EMAIL=Weboryn <onboarding@resend.dev>
```

The contact and booking forms submit through Next.js route handlers:

- `POST /api/contact`
- `POST /api/book`

If the email service is unavailable, the UI still exposes a mailto fallback.
