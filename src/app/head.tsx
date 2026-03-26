export default function Head() {
  return (
    <>
      <title>Weboryn | Modern apps, websites and clearer systems for real workflows</title>
      <meta
        name="description"
        content="Weboryn designs and builds modern apps, websites, portals and internal tools for teams in Finland and internationally."
      />
      <meta property="og:title" content="Weboryn | Modern apps, websites and clearer systems for real workflows" />
      <meta
        property="og:description"
        content="Focused portals, internal tools and digital systems with cleaner scope, better handoff and less friction."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Weboryn",
            url: "https://weboryn.com",
            email: "hello@weboryn.com",
            areaServed: ["FI", "Worldwide"],
            knowsAbout: ["Next.js", "React", "Portals", "Internal tools", "Websites"],
          }),
        }}
      />
    </>
  );
}
