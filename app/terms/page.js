import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Meritancing, Terms of Use for the AI Platform",
  description:
    "Meritancing is the AI platform whose terms outline your rights, responsibilities, and the conditions governing use of its analytical tools. Review the full terms before using the service.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: (
      <p>
        By creating an account, visiting our website, or using any feature of
        Meritancing, you confirm that you have read, understood, and agree to be
        bound by these Terms, together with our Privacy Policy. These Terms
        apply to all visitors, users, and others who access or use the service.
      </p>
    ),
  },
  {
    title: "2. Description of Service",
    body: (
      <p>
        Meritancing provides AI-powered data analysis and risk-management tools
        intended for informational and analytical purposes related to wealth
        oversight. The service helps users review data patterns and is not a
        substitute for independent financial, legal, or tax advice.
      </p>
    ),
  },
  {
    title: "3. No Financial Advice",
    body: (
      <p>
        Nothing offered through Meritancing constitutes investment, legal, tax,
        or financial advice, nor a recommendation or solicitation to buy, sell,
        or hold any asset. All outputs, reports, and insights produced by our
        tools are for informational purposes only. You alone are responsible for
        decisions based on information obtained through the service, and we
        strongly recommend consulting a qualified professional before making
        financial decisions.
      </p>
    ),
  },
  {
    title: "4. Eligibility and Account Responsibilities",
    body: (
      <p>
        You must be of legal age in your jurisdiction to use Meritancing. You
        are responsible for keeping your account credentials confidential and
        for all activity under your account. You agree to notify us promptly of
        any unauthorised use of your account.
      </p>
    ),
  },
  {
    title: "5. Acceptable Use",
    body: (
      <p>
        You agree not to use Meritancing for any unlawful purpose or in any way
        that could damage, disable, overburden, or impair the service. This
        includes, without limitation, attempting to gain unauthorised access to
        our systems, reverse-engineering our software, or using automated means
        to extract data without permission.
      </p>
    ),
  },
  {
    title: "6. Intellectual Property",
    body: (
      <p>
        All content, software, trademarks, logos, and materials associated with
        Meritancing belong to Meritancing or its licensors and are protected by
        applicable intellectual property laws. Nothing in these Terms grants you
        ownership rights to our platform, branding, or underlying technology.
      </p>
    ),
  },
  {
    title: "7. Subscription, Fees, and Payment",
    body: (
      <p>
        Certain features of Meritancing may require payment. Where applicable,
        pricing, billing cycles, and renewal terms will be disclosed before you
        purchase. You are responsible for providing accurate billing information
        and for any charges incurred under your account.
      </p>
    ),
  },
  {
    title: "8. Data and Privacy",
    body: (
      <p>
        Your use of Meritancing is also governed by our{" "}
        <Link href="/privacy">Privacy Policy</Link>, which explains how we
        collect, use, and safeguard information. By using our services, you
        consent to the practices described there.
      </p>
    ),
  },
  {
    title: "9. Disclaimers",
    body: (
      <p>
        Meritancing is provided on an "as is" and "as available" basis without
        warranties of any kind, whether express or implied, including but not
        limited to warranties of merchantability, fitness for a particular
        purpose, or non-infringement. We do not guarantee uninterrupted or
        error-free service, or that any analysis will be accurate, complete, or
        suitable for your specific circumstances.
      </p>
    ),
  },
  {
    title: "10. Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, Meritancing and its affiliates
        shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages, or any loss of profits, data, or
        goodwill, arising from your use of or inability to use the service, even
        if advised of the possibility of such damages.
      </p>
    ),
  },
  {
    title: "11. Indemnification",
    body: (
      <p>
        You agree to indemnify and hold harmless Meritancing, its officers,
        employees, and partners from any claims, damages, liabilities, and
        expenses arising from your use of the service, your violation of these
        Terms, or your infringement of any third-party rights.
      </p>
    ),
  },
  {
    title: "12. Termination",
    body: (
      <p>
        We reserve the right to suspend or terminate your access to Meritancing
        at our discretion, with or without notice, if we believe you have
        violated these Terms or engaged in conduct that may harm the service,
        other users, or third parties. You may also stop using the service at
        any time.
      </p>
    ),
  },
  {
    title: "13. Changes to the Service and Terms",
    body: (
      <p>
        We may modify, suspend, or discontinue any part of Meritancing at any
        time, and may update these Terms periodically. Material changes will be
        indicated by revising the "last updated" date. Continued use of the
        service after changes take effect means you accept the revised Terms.
      </p>
    ),
  },
  {
    title: "14. Governing Law",
    body: (
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws applicable in the jurisdiction where Meritancing operates, without
        regard to conflict-of-law principles. This section should be reviewed
        and finalised based on your specific jurisdictional requirements.
      </p>
    ),
  },
  {
    title: "15. Severability",
    body: (
      <p>
        If any provision of these Terms is found unenforceable or invalid, that
        provision shall be limited or eliminated to the minimum extent
        necessary, and the remaining provisions shall remain in full force and
        effect.
      </p>
    ),
  },
  {
    title: "16. Contact",
    body: (
      <p>
        For questions regarding these Terms, please reach out through the
        contact options on our <Link href="/contact">Contact</Link> page.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main>
      <Hero
        small
        eyebrow="Legal"
        title="Terms and Conditions"
        description='These Terms and Conditions ("Terms") govern your access to and use of the Meritancing website and services. By accessing or using Meritancing, you agree to be bound by these Terms. If you do not agree, please do not use our services.'
        image="/assets/hero-terms.webp"
        alt="Signing a document representing terms and agreements"
      />

      <section className="section-alt">
        <div className="container">
          <div className="terms-body">
            {sections.map((section) => (
              <div className="terms-item" key={section.title}>
                <h2>{section.title}</h2>
                {section.body}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
