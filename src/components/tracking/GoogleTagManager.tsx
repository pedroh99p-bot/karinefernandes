import Script from "next/script";

type GoogleTagManagerProps = {
  containerId: string | null;
};

const googleTagManagerIdPattern = /^GTM-[A-Z0-9]+$/;

export function GoogleTagManager({ containerId }: GoogleTagManagerProps) {
  if (!containerId || !googleTagManagerIdPattern.test(containerId)) {
    return null;
  }

  const iframeSource = `https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(containerId)}`;

  return (
    <>
      <Script
        id={`google-tag-manager-${containerId}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${containerId}');`
        }}
      />
      <noscript>
        <iframe
          src={iframeSource}
          height="0"
          width="0"
          title="Google Tag Manager"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
