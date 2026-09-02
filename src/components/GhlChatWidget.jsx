import React, { useEffect } from 'react';

/**
 * GhlChatWidget
 * Mounts the GoHighLevel Live Chat widget script.
 * When you have your GHL script URL or code, update the script src below.
 */
export default function GhlChatWidget({ widgetScriptUrl = null }) {
  useEffect(() => {
    if (!widgetScriptUrl) return;

    const script = document.createElement('script');
    script.src = widgetScriptUrl;
    script.async = true;
    script.id = 'ghl-chat-script';
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById('ghl-chat-script');
      if (existing) existing.remove();
    };
  }, [widgetScriptUrl]);

  return (
    <div id="ghl-chat-widget-slot" className="hidden">
      {/* 
        ========================================================================
        GOHIGHLEVEL CHAT WIDGET PLACEHOLDER:
        When ready, pass your script URL to <GhlChatWidget widgetScriptUrl="..." />
        or paste your LeadConnector script tag in index.html right before </body>.
        ========================================================================
      */}
    </div>
  );
}
