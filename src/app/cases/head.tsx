export default function Head() {
  return (
    <>
      <title>Cases | Weboryn</title>
      <meta
        name="description"
        content="See anonymized Weboryn cases with problem, change and metric across booking flows, portals and focused digital systems."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Weboryn Cases",
            about: ["Booking flows", "Client portals", "Dashboards"],
          }),
        }}
      />
    </>
  );
}
