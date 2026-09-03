import React from 'react';

export default function PageStructuredData({ nodes }) {
  if (!nodes || !nodes.length) return null;
  const graph = { '@context': 'https://schema.org', '@graph': nodes };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
