import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Partners from "@/components/Partners";
import ReadyToShip from "@/components/ReadyToShip";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://westfreight.com/#business",
        "name": "West Freight Shipping",
        "image": "https://westfreight.com/logo.png",
        "description": "West Freight Shipping – logistics services in Dubai, UAE. Premier freight and shipping company offering air freight, ocean freight, road transport, warehousing, and customs clearance. Powering global connections.",
        "url": "https://westfreight.com",
        "telephone": "+971547810370",
        "email": "info@westfreightshipping.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Quasis 1",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "addressCountry": "AE",
          "postalCode": "77660"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.28489",
          "longitude": "55.37095"
        },
        "areaServed": [
          { "@type": "City", "name": "Dubai", "containedInPlace": { "@type": "Country", "name": "United Arab Emirates" } },
          { "@type": "Country", "name": "United Arab Emirates" },
          "Middle East",
          "Global"
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "$$"
      },
      {
        "@type": "Organization",
        "@id": "https://westfreight.com/#organization",
        "name": "West Freight Shipping",
        "url": "https://westfreight.com",
        "logo": "https://westfreight.com/logo.png",
        "sameAs": [
          "https://www.facebook.com/westfreight",
          "https://www.linkedin.com/company/westfreight",
          "https://twitter.com/westfreight"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971547810370",
          "contactType": "customer service",
          "availableLanguage": ["English", "Arabic"]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What freight services does West Freight offer in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "West Freight offers comprehensive logistics services including air freight, ocean freight, road transportation, warehousing, customs clearance, and supply chain management throughout Dubai, UAE, and internationally."
            }
          },
          {
            "@type": "Question",
            "name": "Where is West Freight Shipping located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "West Freight Shipping is located in Al Quasis 1, Dubai, UAE (P.O Box 77660). We serve clients across Dubai, the UAE, and worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "What are West Freight's business hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our office hours are Monday to Friday, 9:00 AM to 6:00 PM (GST). However, our logistics operations run 24/7 to ensure timely deliveries."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>West Freight Shipping | Logistics Services in Dubai, UAE – Freight & Shipping</title>
        <meta name="description" content="West Freight Shipping – logistics services in Dubai, UAE. Air freight, ocean freight, road transport, warehousing & customs clearance. Powering global connections. Get a free quote: +971 54 781 0370" />
        <meta name="keywords" content="westfreight shipping, West Freight Shipping, logistics services Dubai UAE, logistics services in Dubai, freight shipping Dubai, logistics company UAE, air freight Dubai, ocean freight UAE, shipping company Dubai, freight forwarding UAE, cargo shipping Al Quasis Dubai, international shipping Dubai UAE, warehousing Dubai, customs clearance Dubai UAE" />
        <link rel="canonical" href="https://westfreight.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="West Freight Shipping | Logistics Services in Dubai, UAE" />
        <meta property="og:description" content="West Freight Shipping – logistics services in Dubai, UAE. Air, ocean, road freight, warehousing & customs. Powering global connections. Call +971 54 781 0370." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://westfreight.com" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:site_name" content="West Freight Shipping" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="West Freight Shipping | Logistics Services Dubai, UAE" />
        <meta name="twitter:description" content="West Freight Shipping – logistics services in Dubai, UAE. Freight, shipping, warehousing. Powering global connections." />
        
        {/* Geo tags – local SEO Dubai, UAE */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <meta name="geo.position" content="25.28489;55.37095" />
        <meta name="ICBM" content="25.28489, 55.37095" />
        <meta name="geo.country" content="AE" />
        <meta name="geo.city" content="Dubai" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="West Freight Shipping" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <main className="overflow-x-hidden">
        <Header />
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChooseUs />
        <Partners />
        <ReadyToShip />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
