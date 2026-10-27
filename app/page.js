import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";
import Tabs from "@/components/Tabs";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

const lifeStageTabs = [
  {
    label: "Education Fund Planning",
    content: (
      <div className="panel-inner">
        <div>
          <h3>Education fund planning</h3>
          <p>
            School and university costs are fixed obligations arriving on a
            known timeline. The platform prioritises stability and steady
            growth over this period, reducing exposure to positions that could
            put a near-term fund at risk.
          </p>
        </div>
        <div className="panel-card">
          <h4>Measured outcome</h4>
          <p>
            A funding trajectory designed to stay on schedule, reviewed
            continuously against the target date rather than left to a single
            annual check-in.
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
            As retirement approaches, capital preservation typically matters
            more than growth. The system shifts weighting toward risk reduction
            and inflation protection, in line with a shortening time horizon.
          </p>
        </div>
        <div className="panel-card">
          <h4>Measured outcome</h4>
          <p>
            A portfolio posture that adjusts automatically as retirement draws
            closer, without requiring you to manually re-balance each year.
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
            Passing assets to the next generation involves longer time horizons
            and different tax and liquidity considerations. The platform models
            these constraints alongside market risk.
          </p>
        </div>
        <div className="panel-card">
          <h4>Measured outcome</h4>
          <p>
            A structure intended to preserve value across a longer planning
            window, with visibility into how each recommendation supports that
            goal.
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
        title="Precision risk management for your family's long-term wealth"
        description="Meritancing analyses market data in real time and adjusts your portfolio's risk posture automatically, so your family's plans remain on course as conditions change."
      >
        <Link href="/features" className="btn btn-secondary">
          Explore the Platform
        </Link>
        <Link href="/advantages" className="btn btn-secondary">
          View Data Integrity
        </Link>
      </Hero>

      <section id="context">
        <div className="container">
          <div className="split">
            <div className="split-media">
              <img
                src="/assets/about.jpg"
                alt="Meritancing data analysis dashboard representing market monitoring for families"
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="split-text">
              <span className="eyebrow">Why it matters</span>
              <h2>Markets move quickly. Family plans should not have to.</h2>
              <ul className="pain-list">
                <li>
                  Global volatility now reaches local savings within days, not
                  months, as markets stay interconnected around the clock.
                </li>
                <li>
                  Most families do not have the hours required to track interest
                  rate decisions, currency movements, and sector rotations.
                </li>
                <li>
                  Generic advice rarely accounts for a specific family's
                  timeline, obligations, and tolerance for loss.
                </li>
              </ul>
              <p>
                Meritancing was not built to trade on your behalf. It was built
                to act as a guardian — filtering market noise, flagging genuine
                risk, and protecting the capital your family depends on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt" id="technology">
        <div className="container">
          <SectionHead
            eyebrow="Core technology"
            title="An adaptive model built around your family's risk profile"
            description="The system does not apply one fixed strategy to every household. It learns from declared goals and ongoing data, then recalibrates as circumstances change."
          />
          <div className="feature-grid">
            <div className="feature-panel">
              <div className="feature-number">01</div>
              <h3>Predictive modelling</h3>
              <p>
                The model identifies recurring patterns across large datasets,
                including historical volatility cycles, sector behaviour, and
                macroeconomic indicators, to anticipate shifts before they fully
                unfold.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">02</div>
              <h3>Automated risk mitigation</h3>
              <p>
                Risk exposure is adjusted in line with your family's stated
                goals and life stage, reducing concentration in positions that
                no longer match your tolerance for loss.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">03</div>
              <h3>Real-time optimisation</h3>
              <p>
                Markets are monitored continuously. When conditions move outside
                expected ranges, the platform re-evaluates your allocation
                without waiting for a scheduled review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="methodology">
        <div className="container">
          <SectionHead
            eyebrow="Methodology"
            title="A transparent path from raw data to a tailored recommendation"
            description="Each recommendation can be traced back to the data and reasoning behind it. Nothing is generated without a visible basis."
          />
          <div className="steps">
            <div className="step">
              <div className="step-index">Step 01</div>
              <h3>Data ingestion</h3>
              <p>
                Global financial indicators, interest rates, currency movements,
                and economic releases are aggregated from multiple markets on a
                continuous basis.
              </p>
            </div>
            <div className="step">
              <div className="step-index">Step 02</div>
              <h3>Adaptive analysis</h3>
              <p>
                Learning algorithms process this data against your declared
                goals and risk tolerance, adjusting their calibration as new
                information arrives.
              </p>
            </div>
            <div className="step">
              <div className="step-index">Step 03</div>
              <h3>Tailored recommendation</h3>
              <p>
                You receive a clear, actionable insight with the reasoning
                behind it, so the decision remains informed rather than
                automatic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt" id="use-cases">
        <div className="container">
          <SectionHead
            eyebrow="Relevance by life stage"
            title="Built around measurable outcomes, not speculation"
            description="Every family's priorities shift over time. The platform is designed to recognise which stage you are in and weight its recommendations accordingly."
          />
          <Tabs tabs={lifeStageTabs} />
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <SectionHead
            eyebrow="Transparency"
            title="Questions families ask before relying on an automated system"
            description="We would rather answer these directly than leave them unaddressed."
          />
          <div className="faq-list">
            <details open>
              <summary>How is our family's financial data kept private?</summary>
              <p>
                Data used for analysis is encrypted in storage and in transit,
                and is used solely to generate your own recommendations. It is
                not sold or shared with third parties for marketing purposes.
              </p>
            </details>
            <details>
              <summary>Can the algorithm be biased toward certain outcomes?</summary>
              <p>
                Any model trained on historical data carries some inherited
                bias. We address this by reviewing model outputs regularly and
                by keeping the reasoning behind each recommendation visible, so
                bias can be identified rather than hidden.
              </p>
            </details>
            <details>
              <summary>Does the AI make decisions without our involvement?</summary>
              <p>
                No. Meritancing provides analysis and recommendations; your
                family retains final control over every decision. The platform
                is a decision-support tool, not an autonomous trader.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="section-alt" id="cta-section">
        <div className="container">
          <CtaBanner
            title="Smarter decisions, simplified."
            description="See how continuous data analysis translates into recommendations tailored to your family's goals and risk tolerance."
            cta="Start Analysis"
            href="/contact"
          />
        </div>
      </section>
    </main>
  );
}
