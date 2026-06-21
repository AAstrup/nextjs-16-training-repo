export default function StaticPage() {
  // This value is calculated during prerendering.
  // Because this component only does synchronous deterministic work from Next's
  // perspective, it becomes part of the static HTML shell.
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Static Rendering</h1>
      <p>
        This page is rendered statically, so the build time was: {time}
      </p>
    </div>
  );
}
