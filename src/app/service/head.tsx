export default function Head() {
  return (
    <>
      <title>Services | Weboryn</title>
      <meta
        name="description"
        content="See what Weboryn builds: focused pages, portals, internal tools and scoped digital systems with clean handoff."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            provider: {
              "@type": "Organization",
              name: "Weboryn",
            },
            serviceType: "Modern websites, portals and internal tools",
            areaServed: ["FI", "Worldwide"],
          }),
        }}
      />
    </>
  );
}
