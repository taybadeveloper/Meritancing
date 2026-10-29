import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import Tabs from "@/components/Tabs";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

const homeFaqs = [
  {
    question: "How is our family's financial data kept private?",
    answer:
      "All data used for analysis is encrypted both in storage and in transit, and it serves one purpose only: generating your recommendations. It is never sold or shared with third parties for marketing.",
  },
  {
    question: "Can the algorithm be biased toward certain outcomes?",
    answer:
      "Every model trained on past data carries some inherited bias. We counter this by reviewing outputs regularly and keeping the reasoning behind each recommendation visible, so bias can be spotted, not buried.",
  },
  {
    question: "Does the AI make decisions without our involvement?",
    answer:
      "No. Meritancing offers analysis and suggestions; final control over every decision stays with your family. The platform supports decisions, it does not trade on its own.",
  },
];

const lifeStageTabs = [
  {
    label: "Education Fund Planning",
    content: (
      <div className="panel-inner">
        <div>
          <h3>Education fund planning</h3>
          <p>
            School and university fees are fixed commitments with known due
            dates. During this window the platform favours stability and steady
            growth, reducing positions that could put near-term funds at risk.
          </p>
        </div>
        <div className="panel-card">
          <h4>Measured outcome</h4>
          <p>
            A funding plan built to stay on schedule, monitored continuously
            against the target date instead of waiting for one yearly review.
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Retirement Stability",
    content: (
      <div className="panel-inner">
        <div>
          <h3>Retirement stability</h3>
          <p>
            Closer to retirement, protecting capital usually matters more than
            chasing growth. The system shifts toward lower risk and inflation
            protection as your time horizon shortens.
          </p>
        </div>
        <div className="panel-card">
          <h4>Measured outcome</h4>
          <p>
            A portfolio position that adjusts itself as retirement nears, with
            no manual rebalancing required.
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Generational Wealth Transfer",
    content: (
      <div className="panel-inner">
        <div>
          <h3>Generational wealth transfer</h3>
          <p>
            Handing assets to the next generation involves longer horizons and
            different tax and liquidity needs. The platform models these
            constraints alongside market risk.
          </p>
        </div>
        <div className="panel-card">
          <h4>Measured outcome</h4>
          <p>
            A structure built to preserve value over an extended planning
            window, showing exactly how each recommendation supports that aim.
          </p>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main>
      <Hero
        title="Precise risk management for the wealth your family builds over a lifetime"
        description="Meritancing monitors market data around the clock and automatically fine-tunes your portfolio's risk settings, keeping your family's plans on course as conditions change."
        image="/assets/hero-home.webp"
        alt="Family wealth planning discussion around a table"
      >
        <Link href="/features" className="btn btn-secondary btn-white">
          Discover the Platform
        </Link>
        <Link href="/advantages" className="btn btn-secondary btn-white">
          See Our Data Standards
        </Link>
      </Hero>

      <section id="context">
        <div className="container">
          <div className="split">
            <div className="split-media">
              <img
                src="/assets/markets.webp"
                alt="Stock market chart showing shifting prices and volatility"
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="split-text">
              <span className="eyebrow">The Problem We Solve</span>
              <h2>Markets can shift overnight. Your family's plan shouldn't have to.</h2>
              <ul className="pain-list">
                <li>
                  With markets connected around the clock, global shocks now hit
                  local savings within days, not months.
                </li>
                <li>
                  Few families have the time to follow interest-rate decisions,
                  currency swings, and sector shifts.
                </li>
                <li>
                  One-size-fits-all advice seldom reflects a family's own
                  timeline, commitments, and appetite for loss.
                </li>
              </ul>
              <p>
                Meritancing was never designed to trade on your behalf. It
                exists to act as a guardian, cutting through market noise,
                highlighting genuine risk, and safeguarding the capital your
                family relies on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt" id="technology">
        <div className="container">
          <SectionHead
            eyebrow="The Technology"
            title="An adaptive model shaped around your family's risk profile"
            description="The system never applies one fixed strategy to every household. It learns from your stated goals and live data, then recalibrates as circumstances evolve."
          />
          <div className="feature-grid">
            <div className="feature-panel">
              <div className="feature-number">01</div>
              <h3>Predictive modelling</h3>
              <p>
                The model spots recurring patterns in vast datasets, past
                volatility cycles, sector behaviour, and macroeconomic signals, 
                so it can anticipate changes before they fully play out.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">02</div>
              <h3>Automated risk mitigation</h3>
              <p>
                Exposure is adjusted to match your family's goals and stage of
                life, trimming positions that no longer fit your tolerance for
                loss.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">03</div>
              <h3>Real-time optimisation</h3>
              <p>
                Markets are tracked continuously. When conditions drift outside
                expected ranges, the platform reviews your allocation
                immediately, no waiting for the next scheduled check.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="methodology">
        <div className="container">
          <SectionHead
            eyebrow="How It Works"
            title="A clear path from raw data to a personalised recommendation"
            description="Every recommendation can be traced back to the data and logic behind it. Nothing is produced without a visible foundation."
          />
          <div className="steps how-it-works">
            <div className="step">
              <div className="step-badge">01</div>
              <h3>Data ingestion</h3>
              <p>
                Financial indicators, interest rates, currency movements, and
                economic releases from across global markets are gathered
                continuously.
              </p>
            </div>
            <div className="step">
              <div className="step-badge">02</div>
              <h3>Adaptive analysis</h3>
              <p>
                Learning algorithms weigh this data against your stated goals
                and risk tolerance, retuning themselves as new information
                arrives.
              </p>
            </div>
            <div className="step">
              <div className="step-badge">03</div>
              <h3>Tailored recommendation</h3>
              <p>
                You get a clear, actionable insight complete with its reasoning
              , so every decision stays informed, never automatic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt" id="use-cases">
        <div className="container">
          <SectionHead
            eyebrow="Built for Every Life Stage"
            title="Designed around real outcomes, not guesswork"
            description="Every family's priorities change with time. The platform recognises your current stage and adjusts its recommendations to match."
          />
          <Tabs tabs={lifeStageTabs} />
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <SectionHead
            eyebrow="Openness"
            title="What families ask before trusting an automated system"
            description="We'd rather answer these openly than leave them unanswered."
          />
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      <section className="section-alt" id="cta-section">
        <div className="container">
          <div className="cta-banner cta-split">
            <div className="cta-copy">
              <h2>Smarter decisions, made simple.</h2>
              <p>
                See how continuous data analysis becomes recommendations shaped
                around your family's goals and risk tolerance.
              </p>
            </div>
            <div className="cta-form">
              <h4>Contact Form</h4>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
