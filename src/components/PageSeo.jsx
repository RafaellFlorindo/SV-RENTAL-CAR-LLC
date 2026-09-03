import { useEffect } from 'react';

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export default function PageSeo({ title, description, path }) {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) document.title = title;
    if (description) setMeta('meta[name="description"]', 'content', description);
    if (title) {
      setMeta('meta[property="og:title"]', 'content', title);
      setMeta('meta[name="twitter:title"]', 'content', title);
    }
    if (description) {
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }
    if (path) {
      const origin = window.location.origin;
      setMeta('link[rel="canonical"]', 'href', `${origin}${path}`);
      setMeta('meta[property="og:url"]', 'content', `${origin}${path}`);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, path]);

  return null;
}
