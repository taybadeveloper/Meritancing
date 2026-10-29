import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Meritancing, Privacy Policy for Our AI Platform",
  description:
    "Learn how Meritancing collects, uses, and protects your personal data across our AI platform. Review your rights and our data practices.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <Hero
        small
        eyebrow="Legal"
        title="Privacy Policy"
        description="This Privacy Policy describes how Meritancing gathers, uses, and protects information when you visit our website or use our services. It is a general template shared for informational purposes and should be reviewed and tailored to your actual data practices and applicable law before publication."
        image="/assets/hero-privacy.webp"
        alt="Trading chart representing financial data analysis"
      />

      <section className="section-alt">
        <div className="container">
          <div className="legal-body">
            <h2>1. Who We Are</h2>
            <p>
              Meritancing ("we", "us", or "our") provides AI-powered data
              analysis and risk-management tools for family wealth management.
              This policy covers all information collected through our website,
              applications, and related services (together, the "Services").
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may gather the following categories of information when you
              interact with our Services:
            </p>
            <ul className="pain-list">
              <li>
                Contact details you share, such as your name, email address, and
                phone number, for example, when submitting a contact form.
              </li>
              <li>
                Account and usage information, including login credentials,
                preferences, and activity within the Services.
              </li>
              <li>
                Financial and portfolio data you choose to upload or connect for
                analysis.
              </li>
              <li>
                Technical data such as IP address, browser type, device
                identifiers, and pages visited, collected automatically through
                cookies and similar technologies.
              </li>
              <li>
                Communications you send us, including support requests and
                feedback.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information collected to run, maintain, and improve the
              Services, including to:
            </p>
            <ul className="pain-list">
              <li>
                Deliver and personalise the data analysis and risk-management
                features you request.
              </li>
              <li>
                Communicate with you about your account, updates, or support
                enquiries.
              </li>
              <li>
                Monitor, analyse, and improve the performance, security, and
                functionality of our Services.
              </li>
              <li>
                Detect, prevent, and address fraud, abuse, or technical issues.
              </li>
              <li>
                Meet applicable legal obligations and enforce our terms.
              </li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>
              Where applicable law requires a legal basis for processing
              personal information, we rely on one or more of the following:
              your consent, the need to process data to perform a contract with
              you, our legitimate interests in operating and improving the
              Services, and compliance with legal obligations.
            </p>

            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to recognise your browser,
              remember preferences, and understand how the Services are used.
              You can manage cookies through your browser settings; disabling
              them may limit certain features of the Services.
            </p>

            <h2>6. How We Share Information</h2>
            <p>We do not sell personal information. We may share it:</p>
            <ul className="pain-list">
              <li>
                With service providers and vendors who perform functions for us
              , hosting, analytics, or customer support, under appropriate
                confidentiality obligations.
              </li>
              <li>
                To comply with legal obligations, respond to lawful requests, or
                protect the rights and safety of Meritancing, its users, or the
                public.
              </li>
              <li>
                In connection with a business transaction such as a merger,
                acquisition, or asset sale, subject to appropriate safeguards.
              </li>
            </ul>

            <h2>7. Data Retention</h2>
            <p>
              We keep personal information for as long as needed to fulfil the
              purposes described in this policy, unless a longer retention
              period is required or permitted by law. Once information is no
              longer needed, we take reasonable steps to delete or anonymise it.
            </p>

            <h2>8. Data Security</h2>
            <p>
              We apply reasonable administrative, technical, and organisational
              measures designed to protect information from unauthorised access,
              disclosure, alteration, or destruction. Still, no method of
              transmission or storage is entirely secure, and we cannot
              guarantee absolute security.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Depending on where you are located, your information may be
              transferred to and processed in countries other than your own.
              Where required by applicable law, we take steps intended to ensure
              such transfers are covered by appropriate safeguards.
            </p>

            <h2>10. Your Rights and Choices</h2>
            <p>
              Depending on your jurisdiction, you may have rights regarding your
              personal information, including the right to access, correct,
              delete, restrict, or object to certain processing, and the right
              to data portability. To exercise any applicable rights, contact us
              using the details on our Contact page.
            </p>

            <h2>11. Children's Privacy</h2>
            <p>
              Our Services are not aimed at individuals under 18, and we do not
              knowingly collect personal information from children. If you
              believe a child has given us personal information, please contact
              us so we can take appropriate action.
            </p>

            <h2>12. Third-Party Links</h2>
            <p>
              Our Services may contain links to third-party websites or services
              not operated by us. We are not responsible for their privacy
              practices, and we encourage you to review their policies before
              providing any information.
            </p>

            <h2>13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will post the updated policy with a revised
              effective date. Continuing to use the Services after changes take
              effect means you accept the revised policy.
            </p>

            <h2>14. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our
              data practices, please reach out through the details on our{" "}
              <Link href="/contact">Contact</Link> page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
