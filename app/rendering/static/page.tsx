export const dynamic = "force-static";

export default function StaticPage() {
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Static Rendering</h1>
      <p>This page is rendered statically, so the build time was: {time}</p>
    </div>
  );
}
