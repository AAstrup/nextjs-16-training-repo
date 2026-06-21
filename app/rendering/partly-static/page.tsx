import { Suspense } from "react";
import DynamicSection from "./_components/DynamicSection";
import StaticSection from "./_components/StaticSection";

export default function PartlyStaticPage() {
  return (
    <div>
      {/*
        This section is rendered during prerendering and becomes part of the
        static shell that can be sent immediately.
      */}
      <StaticSection />

      {/*
        This Suspense fallback is also part of the static shell.
        The user sees it immediately while Next waits for the dynamic section
        to render at request time.
      */}
      <Suspense fallback={<p>Loading dynamic section...</p>}>
        {/*
          This child calls `connection()`, so it cannot be prerendered.
          Instead, it is streamed in later as the dynamic portion of the route.
        */}
        <DynamicSection />
      </Suspense>
    </div>
  );
}
