export const dynamic = "force-dynamic";

export default function DynamicPage() {
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Dynamic Rendering</h1>
      <p>This page is rendered dynamically, so the current time is: {time}</p>
    </div>
  );
}
