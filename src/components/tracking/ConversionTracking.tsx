"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/tracking";

function getWhatsAppContext(url: URL): string {
  const message = url.searchParams.get("text") ?? "";
  const match = message.match(/Origem do clique:\s*([^\n]+)/i);
  return match?.[1]?.trim() || "nao-identificado";
}

export function ConversionTracking() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]");

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);

      if (url.hostname === "wa.me" || url.hostname.endsWith("whatsapp.com")) {
        trackConversion("whatsapp_click", {
          cta_context: getWhatsAppContext(url),
          page_path: window.location.pathname
        });
        return;
      }

      if (url.hostname.includes("instagram.com")) {
        trackConversion("social_click", {
          platform: "instagram",
          page_path: window.location.pathname
        });
        return;
      }

      if (url.hostname.includes("google.com") && url.pathname.includes("maps")) {
        trackConversion("route_click", {
          page_path: window.location.pathname
        });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
