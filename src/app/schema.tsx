import React from "react";

export function Schema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PetStore"],
    "@id": "https://aurapetatelier.com.br",
    "name": "Aura Pet Atelier & Spa",
    "image": [
      "https://aurapetatelier.com.br/hero_spa.png",
      "https://aurapetatelier.com.br/philosophy_spa.png",
      "https://aurapetatelier.com.br/grooming_service.png"
    ],
    "description": "Atelier de Estética Animal & Spa Orgânico de Luxo. Especialistas em estilização artística, banhos terapêuticos e cromoterapia para cães e gatos em um ambiente warm-minimalist exclusivo.",
    "telephone": "+5511999998888",
    "url": "https://aurapetatelier.com.br",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Europa, 1500",
      "addressLocality": "Jardins",
      "addressRegion": "SP",
      "postalCode": "01449-001",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.571447,
      "longitude": -46.678229
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/aurapetatelier",
      "https://wa.me/5511999998888"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
