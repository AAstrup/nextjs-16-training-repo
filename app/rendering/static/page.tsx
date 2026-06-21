export default async function StaticPage() {
  "use cache";

  // This value is calculated while filling the static cache.
  // Next 16 requires time-dependent work like `new Date()` to be inside a
  // Cache Component or after a request-time boundary such as `connection()`.
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
