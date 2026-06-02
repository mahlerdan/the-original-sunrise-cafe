import React, { useEffect } from "react";

export default function LocalBusinessSchema() {
  useEffect(() => {
    // Check if the script tag already exists to avoid duplicates
    const existingScript = document.getElementById("local-business-jsonld");
    if (existingScript) {
      existingScript.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "The Original Sunrise Cafe",
      "image": "https://the-original-sunrise-cafe.manus.space/og-image.jpg",
      "@id": "https://the-original-sunrise-cafe.manus.space/#restaurant",
      "url": "https://the-original-sunrise-cafe.manus.space",
      "telephone": "(208) 888-4517",
      "priceRange": "$$",
      "menu": "https://the-original-sunrise-cafe.manus.space/services",
      "servesCuisine": [
        "American",
        "Breakfast",
        "Brunch"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "805 N Main St",
        "addressLocality": "Meridian",
        "addressRegion": "ID",
        "postalCode": "83642",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.6122,
        "longitude": -116.3915
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "06:00",
          "closes": "14:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/TheOriginalSunriseCafe/",
        "https://www.instagram.com/theoriginalsunrisecafe/"
      ]
    };

    const script = document.createElement("script");
    script.id = "local-business-jsonld";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("local-business-jsonld");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null; // This component doesn't render any visible UI
}
