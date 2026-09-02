import React, { useEffect } from 'react';

/**
 * GhlChatWidget
 * Designated placeholder for the GoHighLevel (GHL) Chat Widget script.
 * 
 * INSTRUCTIONS:
 * When you export your Chat Widget code from GoHighLevel / LeadConnector,
 * you can pass your script URL as the `scriptUrl` prop or paste it directly in index.html.
 */
export default function GhlChatWidget({ scriptUrl = null }) {
  useEffect(() => {
    if (!scriptUrl) return;

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    script.id = 'ghl-chat-widget-script';
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById('ghl-chat-widget-script');
      if (existing) existing.remove();
    };
  }, [scriptUrl]);

  return (
    <div id="ghl-chat-widget-container" className="fixed bottom-4 right-4 z-40">
      {/* ========================================================================
          GOHIGHLEVEL (GHL) CHAT WIDGET SLOT
          Cole o script do LeadConnector / GoHighLevel Chat Widget aqui.
          ======================================================================== */}
    </div>
  );
}
