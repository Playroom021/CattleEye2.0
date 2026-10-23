
import { useEffect, useRef } from "react";

export default function PredictionAd() {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current || adRef.current.dataset.adInitialized) {
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adRef.current.dataset.adInitialized = "true";
    } catch (error) {
      console.error("AdSense initialization failed:", error);
    }
  }, []);

  return (
    <div className="my-5 w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-3">
      <p className="mb-2 text-center text-xs text-gray-500">
        Advertisement
      </p>

      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", minHeight: "100px" }}
        data-ad-client="ca-pub-5361328304455260"
        data-ad-slot="8922824319"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
