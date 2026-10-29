import SectionHead from "@/components/SectionHead";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Meritancing, Contact Our AI Platform Team",
  description:
    "Meritancing offers direct support for questions about data analysis, risk management, and platform use. Reach the team by form or email.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="contact-page">
        <div className="container">
          <SectionHead
            eyebrow="Get in Touch"
            title="Contact Meritancing"
            as="h1"
            description="Questions about how Meritancing approaches data analysis and risk management for your family's wealth? Send us a message and our team will get back to you."
          />

          <h2>How to Reach Us</h2>
          <ul className="pain-list">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@meritancingai.com">
                support@meritancingai.com
              </a>
            </li>
          </ul>
          <p>
            For general enquiries, platform questions, or partnership talks,
            the form is the fastest route to the right person on our team.
          </p>

          <div className="panel-card form-card contact-form-card" id="contact-form">
            <h4>Contact Form</h4>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
