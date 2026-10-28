import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Meritancing, Answers About the AI-Powered Platform",
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
      "Meritancing is an analytical platform that organises financial data and runs structured risk checks, helping families and their advisers make clearer, better-informed wealth decisions. It supports analysis, it doesn't replace independent judgment.",
  },
  {
    question: "Who is Meritancing built for?",
    answer:
      "Meritancing is built for families, family offices, and the advisers who work with them and want a consistent, data-driven way to review holdings, exposure, and risk across accounts.",
  },
  {
    question: "Is Meritancing a substitute for a financial advisor?",
    answer:
      "No. Meritancing is an analysis tool. It's meant to complement the work of advisers and decision-makers by surfacing structured insights, not to give investment advice or replace professional guidance.",
  },
  {
    question: "How is my data handled?",
    answer:
      "Data submitted for analysis is used to generate the reports and insights you request inside the platform. For details on how information is collected, stored, and used, see our Privacy Policy.",
  },
  {
    question: "What kind of data can be analyzed?",
    answer:
      "Meritancing works with common financial data formats such as account summaries, holdings, and transaction records. The exact data types supported depend on your setup and the analysis you request.",
  },
  {
    question: "How accurate are the results?",
    answer:
      "Outputs are only as reliable as the data supplied and the assumptions behind each analysis. We suggest treating results as one input among several when deciding, and reviewing major conclusions with a qualified professional.",
  },
  {
    question: "Can Meritancing be used by a team, or just one person?",
    answer:
      "Meritancing suits an individual reviewing their own holdings as well as a team, such as a family office, coordinating analysis across many accounts and stakeholders.",
  },
  {
    question: "Do I need technical or financial expertise to use it?",
    answer:
      "The platform presents analysis in a clear, structured format that doesn't require specialist technical knowledge. Some familiarity with the underlying financial concepts will help you interpret the results well.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can start an analysis directly from the homepage, or reach out through the Contact page to discuss how Meritancing fits your particular situation.",
  },
  {
    question: "Who can I contact with further questions?",
    answer:
      "For anything not covered here, visit our Contact page. We're glad to walk through specifics about features, setup, or anything else related to Meritancing.",
  },
];

export default function FaqPage() {
  return (
    <main>
      <Hero
        small
        wide
        title="Frequently Asked Questions"
        description="Straight answers to common questions about how Meritancing supports data-driven analysis and risk management for family wealth."
        image="/assets/hero-faq.jpg"
        alt="Person working on a laptop for help and support"
      />

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Help & Support"
            title="Answers to what you want to know"
            description="If you don't find your answer here, our team is glad to help, just reach out through the contact page."
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
            title="Still curious?"
            description="Reach out and we'll help you see how Meritancing can fit into your family's financial review process."
            cta="Contact Us"
            href="/contact"
          />
        </div>
      </section>
    </main>
  );
}
