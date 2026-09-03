import React from 'react';
import { companyInfo } from '../data/company';
import { faqData } from '../data/faq';
import { servicesData } from '../data/services';

export default function SeoStructuredData() {
  const origin = typeof window === 'undefined' ? '' : window.location.origin;
  const businessId = `${origin}/#business`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: `${origin}/`,
        name: companyInfo.name,
        inLanguage: 'en-US'
      },
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: companyInfo.name,
        legalName: companyInfo.name,
        description: 'Family-owned private chauffeur and luxury transportation service for Scottsdale, Phoenix and the surrounding Arizona communities.',
        url: `${origin}/`,
        logo: `${origin}/sv-rental-car-logo.svg`,
        image: `${origin}/og-sv-rental-car.jpg`,
        telephone: `+1-${companyInfo.phoneRaw.slice(0, 3)}-${companyInfo.phoneRaw.slice(3, 6)}-${companyInfo.phoneRaw.slice(6)}`,
        priceRange: '$$$',
        currenciesAccepted: 'USD',
        address: {
          '@type': 'PostalAddress',
          streetAddress: companyInfo.address.street,
          addressLocality: companyInfo.address.city,
          addressRegion: companyInfo.address.state,
          postalCode: companyInfo.address.zip,
          addressCountry: 'US'
        },
        areaServed: ['Scottsdale', 'Phoenix', 'Glendale', 'Tempe', 'Gilbert', 'Maricopa County'].map((name) => ({
          '@type': name === 'Maricopa County' ? 'AdministrativeArea' : 'City',
          name
        })),
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
          description: 'Available by prior reservation'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Private Chauffeur Services',
          itemListElement: servicesData.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
              areaServed: 'Phoenix Valley, Arizona'
            }
          }))
        }
      },
      {
        '@type': 'TaxiService',
        '@id': `${origin}/#chauffeur-service`,
        name: 'SV Private Chauffeur Service',
        provider: { '@id': businessId },
        serviceType: 'Private chauffeur and luxury transportation',
        providerMobility: 'dynamic',
        areaServed: 'Scottsdale, Phoenix and Maricopa County, Arizona',
        availableChannel: {
          '@type': 'ServiceChannel',
          servicePhone: {
            '@type': 'ContactPoint',
            telephone: `+1-${companyInfo.phoneRaw.slice(0, 3)}-${companyInfo.phoneRaw.slice(3, 6)}-${companyInfo.phoneRaw.slice(6)}`,
            contactType: 'reservations',
            availableLanguage: ['English', 'Portuguese']
          }
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${origin}/#faq-schema`,
        mainEntity: faqData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
