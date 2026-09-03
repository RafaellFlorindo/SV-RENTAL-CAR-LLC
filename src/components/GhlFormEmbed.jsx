import React, { useEffect } from 'react';

const GHL_FORM_URL = 'https://api.leadconnectorhq.com/widget/form/x5SVDVc0hf14MEHWd3Bf';
const GHL_FORM_ID = 'x5SVDVc0hf14MEHWd3Bf';
const GHL_IFRAME_ID = `inline-${GHL_FORM_ID}`;

export default function GhlFormEmbed({ formId = 'ghl-booking-form', title = 'Website Form', ghlIframeUrl = GHL_FORM_URL }) {
  useEffect(() => {
    if (document.getElementById('ghl-form-embed-script')) return;

    const script = document.createElement('script');
    script.id = 'ghl-form-embed-script';
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id={formId} className="min-h-[625px] w-full rounded-[10px] bg-white shadow-editorial">
      <iframe
        src={ghlIframeUrl}
        title={title}
        id={GHL_IFRAME_ID}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form"
        data-height="625"
        data-layout-iframe-id={GHL_IFRAME_ID}
        data-form-id={GHL_FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        className="min-h-[625px] w-full rounded-[10px] border-0"
      />
    </div>
  );
}
