import { Suspense } from "react";
import { connection } from "next/server";

async function DynamicContent() {
  // `connection()` tells Next:
  // "stop prerendering here and wait for a real request".
  //
  // This is the correct Next 16 way to make per-request values like `new Date()`
  // dynamic when you are using Cache Components. Components that call it must
  // be wrapped in Suspense so the route can still prerender a static fallback.
  await connection();

  // Because this runs after `connection()`, it is computed at request time.
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Dynamic Rendering</h1>
      <p>
        This page is rendered dynamically, so the current time is: {time}
      </p>
    </div>
  );
}

export default function DynamicPage() {
  return (
    <Suspense fallback={<p>Loading dynamic page...</p>}>
      <DynamicContent />
    </Suspense>
  );
}
