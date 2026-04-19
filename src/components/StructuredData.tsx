export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Irene Ong — Financial Planning Consultant",
    description:
      "Personalised financial planning for individuals and families in Singapore. Life protection, savings, investment, and retirement planning with Prudential.",
    url: "https://ongireneportfolio.com",
    telephone: "+6596502430",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Singapore",
      addressCountry: "SG",
    },
    employee: {
      "@type": "Person",
      name: "Irene Ong",
      jobTitle: "Financial Planning Consultant",
      worksFor: {
        "@type": "Organization",
        name: "Prudential Assurance Company Singapore",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Portsmouth",
      },
      award: "Strategic Partners Award 2026",
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    serviceType: [
      "Financial Planning",
      "Life Insurance",
      "Critical Illness Coverage",
      "Retirement Planning",
      "Savings & Investment Planning",
      "Portfolio Monitoring",
    ],
    sameAs: [
      "https://www.linkedin.com/in/ong-irene-591799134",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ongireneportfolio.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://ongireneportfolio.com/about" },
      { "@type": "ListItem", position: 3, name: "Services", item: "https://ongireneportfolio.com/services" },
      { "@type": "ListItem", position: 4, name: "Testimonials", item: "https://ongireneportfolio.com/testimonials" },
      { "@type": "ListItem", position: 5, name: "Contact", item: "https://ongireneportfolio.com/contact" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What financial planning services does Irene Ong offer in Singapore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Irene offers comprehensive financial planning, life and health protection, savings and investment planning, retirement planning, and ongoing portfolio monitoring and review.",
        },
      },
      {
        "@type": "Question",
        name: "Is the initial consultation free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Irene offers a free, no-obligation discovery call to understand your goals, concerns, and current financial situation before making any recommendations.",
        },
      },
      {
        "@type": "Question",
        name: "Which insurance company does Irene Ong represent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Irene is a Financial Planning Consultant representing Prudential Assurance Company Singapore (Pte) Ltd, one of Singapore's most established insurers with over 90 years of heritage.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a consultation with Irene?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach Irene via WhatsApp at +65 9650 2430, or fill out the contact form on the website. Consultations are by appointment with flexible scheduling.",
        },
      },
      {
        "@type": "Question",
        name: "What qualifications does Irene have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Irene holds a Bachelor of Arts in Accounting from the University of Portsmouth and was recognised at Prudential's Strategic Partners Awards Night 2026 for excellence in client-centred financial planning.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
