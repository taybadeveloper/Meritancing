import SectionHead from "@/components/SectionHead";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Meritancing — Contact Our AI Platform Team",
  description:
    "Meritancing offers direct support for questions about data analysis, risk management, and platform use. Reach the team by form, phone, or email during business hours.",
};

export default function ContactPage() {
  return (
    <main>
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Get in Touch"
            title="Contact Meritancing"
            description="Have a question about how Meritancing approaches data analysis and risk management for your family's wealth? Send us a message and our team will follow up."
          />

          <div className="split media-right">
            <div className="split-media">
              <img
                src="/assets/about.jpg"
                alt="Meritancing office workspace where client inquiries are reviewed"
                width="640"
                height="480"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h2>How to Reach Us</h2>
              <ul className="pain-list">
                <li>
                  <strong>Address:</strong> 8 Jurong Town Hall Road, Singapore
                  609434
                </li>
                <li>
                  <strong>Phone:</strong> +65 6000 0000
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:contact@meritancing.net">
                    contact@meritancing.net
                  </a>
                </li>
                <li>
                  <strong>Hours:</strong> Monday to Friday, 9:00 AM – 6:00 PM
                  (SGT)
                </li>
              </ul>
              <p>
                For general enquiries, platform questions, or partnership
                discussions, the form below is the quickest way to reach the
                right person on our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Send a Message"
            title="Tell Us What You Need"
            description="Fill out the form below and we'll get back to you as soon as possible. This form is a placeholder and does not currently submit data."
          />

          <div className="panel-inner">
            <div className="panel-card">
              <h4>Contact Form</h4>
              <ContactForm />
            </div>

            <div className="panel-card">
              <h4>Our Location</h4>
              <div className="map-placeholder">Map Placeholder</div>
              <p style={{ marginTop: "var(--space-4)" }}>
                8 Jurong Town Hall Road, Singapore 609434
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
