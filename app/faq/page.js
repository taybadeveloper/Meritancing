import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Meritancing — Answers About the AI-Powered Platform",
  description:
    "Meritancing explains how its analytical platform supports data-driven risk management and family wealth decisions. Browse common questions or reach out for tailored guidance.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "What does Meritancing actually do?",
    answer:
      "Meritancing is an analytical platform that organizes financial data and applies structured risk checks to help families and their advisors make clearer, better-informed decisions about wealth management. It is designed to support analysis, not to replace independent judgment.",
  },
  {
    question: "Who is Meritancing built for?",
    answer:
      "Meritancing is intended for families, family offices, and the advisors who work with them and who want a consistent, data-driven way to review holdings, exposure, and risk across accounts.",
  },
  {
    question: "Is Meritancing a substitute for a financial advisor?",
    answer:
      "No. Meritancing is an analysis tool. It is meant to complement the work of advisors and decision-makers by surfacing structured insights, not to provide investment advice or replace professional guidance.",
  },
  {
    question: "How is my data handled?",
    answer:
      "Data submitted for analysis is used to generate the reports and insights you request within the platform. For details on how information is collected, stored, and used, please see our Privacy Policy.",
  },
  {
    question: "What kind of data can be analyzed?",
    answer:
      "Meritancing is designed to work with common financial data formats such as account summaries, holdings, and transaction records. The exact data types supported depend on your setup and the analysis requested.",
  },
  {
    question: "How accurate are the results?",
    answer:
      "Outputs are only as reliable as the data provided and the assumptions behind each analysis. We recommend treating results as one input among several when making decisions, and reviewing significant conclusions with a qualified professional.",
  },
  {
    question: "Can Meritancing be used by a team, or just one person?",
    answer:
      "Meritancing can be used by an individual reviewing their own holdings or by a team, such as a family office, coordinating analysis across multiple accounts and stakeholders.",
  },
  {
    question: "Do I need technical or financial expertise to use it?",
    answer:
      "The platform is designed to present analysis in a clear, structured format so it can be understood without specialized technical knowledge. Some familiarity with the underlying financial concepts will help you interpret results effectively.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can begin by starting an analysis directly from the homepage or by contacting us through the Contact page to discuss how Meritancing fits your specific situation.",
  },
  {
    question: "Who can I contact with further questions?",
    answer:
      "For anything not covered here, please visit our Contact page. We're glad to walk through specifics about features, setup, or anything else related to Meritancing.",
  },
];

export default function FaqPage() {
  return (
    <main>
      <Hero
        small
        container={false}
        wide
        title="Frequently Asked Questions"
        description="Answers to common questions about how Meritancing supports data-driven analysis and risk management for family wealth."
        alt="Meritancing dashboard overview used for family wealth analysis"
      />

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Support"
            title="Everything you need to know"
            description="If you don't find what you're looking for here, our team is happy to help — reach out through the contact page."
          />
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <CtaBanner
            title="Still have questions?"
            description="Reach out and we'll help you understand how Meritancing can fit into your family's financial review process."
            cta="Contact Us"
            href="/contact"
          />
        </div>
      </section>
    </main>
  );
}
