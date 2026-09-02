import { useEffect } from 'react';

export default function GhlChatWidget() {
  useEffect(() => {
    if (document.getElementById('ghl-chat-widget-script')) return;

    const script = document.createElement('script');
    script.id = 'ghl-chat-widget-script';
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.async = true;
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '6a973392eb06b512c20537ad');
    document.body.appendChild(script);
  }, []);

  return null;
}
