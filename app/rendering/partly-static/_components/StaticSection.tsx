export default function StaticSection() {
  // This is computed during prerendering and ends up in the static shell.
  // Every user initially gets this same HTML until the route is re-rendered.
  const buildTime = new Date().toLocaleTimeString();

  return (
    <section className="mb-6">
      <h1>Partly Static Page</h1>
      <p>
        This section is static. It was generated during prerendering at:{" "}
        {buildTime}
      </p>
      <p>
        The important point is that this section does not need request-time
        data, so Next can include it directly in the initial HTML.
      </p>
    </section>
  );
}
