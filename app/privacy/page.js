import Link from "next/link";
import SectionHead from "@/components/SectionHead";

export const metadata = {
  title: "Meritancing — Privacy Policy for Our AI Platform",
  description:
    "Discover with Meritancing how your personal data is collected, used, and protected across our AI platform. Read this policy to understand your rights and our data practices.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-head">
        <div className="container">
          <SectionHead
            eyebrow="Legal"
            title="Privacy Policy"
            description="This Privacy Policy explains how Meritancing collects, uses, and safeguards information when you visit our website or use our services. This is a general template provided for informational purposes and should be reviewed and adapted to reflect your actual data practices and applicable law before publication."
          />
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="legal-body">
            <h2>1. Who We Are</h2>
            <p>
              Meritancing ("we", "us", or "our") provides AI-driven data
              analysis and risk-management tools for family wealth management.
              This policy applies to all information collected through our
              website, applications, and related services (collectively, the
              "Services").
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect the following categories of information when you
              interact with our Services:
            </p>
            <ul className="pain-list">
              <li>
                Contact details you provide, such as your name, email address,
                and phone number, for example when submitting a contact form.
              </li>
              <li>
                Account and usage information, including login credentials,
                preferences, and activity within the Services.
              </li>
              <li>
                Financial and portfolio data that you choose to upload or
                connect for the purpose of analysis.
              </li>
              <li>
                Technical data such as IP address, browser type, device
                identifiers, and pages visited, collected automatically through
                cookies and similar technologies.
              </li>
              <li>
                Communications you send to us, including support requests and
                feedback.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information collected to operate, maintain, and improve
              the Services, including to:
            </p>
            <ul className="pain-list">
              <li>
                Provide and personalize the data analysis and risk-management
                features you request.
              </li>
              <li>
                Communicate with you about your account, updates, or support
                inquiries.
              </li>
              <li>
                Monitor, analyze, and improve the performance, security, and
                functionality of our Services.
              </li>
              <li>
                Detect, prevent, and address fraud, abuse, or technical issues.
              </li>
              <li>
                Comply with applicable legal obligations and enforce our terms.
              </li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>
              Where applicable law requires a legal basis for processing
              personal information, we rely on one or more of the following:
              your consent, the necessity of processing to perform a contract
              with you, our legitimate interests in operating and improving the
              Services, and compliance with legal obligations.
            </p>

            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to recognize your browser,
              remember preferences, and understand how our Services are used.
              You can control cookies through your browser settings; disabling
              cookies may limit certain features of the Services.
            </p>

            <h2>6. How We Share Information</h2>
            <p>
              We do not sell personal information. We may share information in
              the following circumstances:
            </p>
            <ul className="pain-list">
              <li>
                With service providers and vendors who perform functions on our
                behalf, such as hosting, analytics, or customer support, under
                appropriate confidentiality obligations.
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
              We retain personal information for as long as necessary to fulfill
              the purposes described in this policy, unless a longer retention
              period is required or permitted by law. When information is no
              longer needed, we take reasonable steps to delete or anonymize it.
            </p>

            <h2>8. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and
              organizational measures designed to protect information from
              unauthorized access, disclosure, alteration, or destruction.
              However, no method of transmission or storage is completely
              secure, and we cannot guarantee absolute security.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Depending on where you are located, your information may be
              transferred to and processed in countries other than your own.
              Where required by applicable law, we take steps intended to ensure
              that such transfers are subject to appropriate safeguards.
            </p>

            <h2>10. Your Rights and Choices</h2>
            <p>
              Depending on your jurisdiction, you may have rights regarding your
              personal information, which may include the right to access,
              correct, delete, restrict, or object to certain processing, and
              the right to data portability. To exercise any applicable rights,
              please contact us using the details on our Contact page.
            </p>

            <h2>11. Children's Privacy</h2>
            <p>
              Our Services are not directed to individuals under the age of 18,
              and we do not knowingly collect personal information from
              children. If you believe a child has provided us with personal
              information, please contact us so we can take appropriate action.
            </p>

            <h2>12. Third-Party Links</h2>
            <p>
              Our Services may contain links to third-party websites or services
              that are not operated by us. We are not responsible for the
              privacy practices of such third parties, and we encourage you to
              review their privacy policies before providing any information.
            </p>

            <h2>13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will post the updated policy with a revised
              effective date. Continued use of the Services after changes become
              effective constitutes acceptance of the revised policy.
            </p>

            <h2>14. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our
              data practices, please reach out through the details provided on
              our <Link href="/contact">Contact</Link> page.
            </p>

            <p style={{ marginTop: "var(--space-6)", fontSize: "14px" }}>
              <em>
                This document is a general template and does not constitute
                legal advice. Meritancing recommends obtaining professional
                legal review before relying on this policy for compliance
                purposes.
              </em>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
