import { connection } from "next/server";

export default async function DynamicSection() {
  // This marks everything below as request-time work.
  // The parent page can still be partially prerendered, but this component
  // itself will wait for a real request and then stream in later.
  await connection();

  // This now runs per request, not at build time.
  const requestTime = new Date().toLocaleTimeString();

  // Adding a small delay makes the streaming behavior easier to see in the UI.
  // You can remove this once the concept is clear.
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <section>
      <h2>Dynamic Section</h2>
      <p>
        This section is dynamic. It was generated for the current request at:{" "}
        {requestTime}
      </p>
      <p>
        It appears after the fallback because it is inside a Suspense boundary
        and waits for request-time rendering.
      </p>
    </section>
  );
}
