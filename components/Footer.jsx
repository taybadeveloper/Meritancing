import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Meritancing</div>
            <p>
              AI-driven data analysis and risk management for family wealth,
              built for clarity rather than speculation.
            </p>
            <address>
              <a href="tel:+6560000000">+65 6000 0000</a>
              <a href="mailto:support@meritancing.com">support@meritancing.com</a>
            </address>
          </div>
          <div className="footer-nav">
            <Link href="/features">Features</Link>
            <Link href="/advantages">Advantages</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-nav">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Meritancing. All rights reserved.</span>
          <span>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
