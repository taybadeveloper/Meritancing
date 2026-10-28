import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";
import Tabs from "@/components/Tabs";

export const metadata = {
  title: "Meritancing, AI Platform for Structured Portfolio Analysis",
  description:
    "Meritancing unifies scattered holdings into one risk-aware picture, exposure mapping, scoring, and scenario review in a single disciplined workflow.",
  alternates: {
    canonical: "/features",
  },
};

const workflowTabs = [
  {
    label: "Data & Mapping",
    content: (
      <div className="panel-inner">
        <div className="panel-card">
          <h4>Unified Data Intake + Exposure Mapping</h4>
          <p>
            Holdings from multiple sources are aligned into one dataset, then
            mapped by asset class, geography, and counterparty. This stage lays
            the foundation every later analysis depends on, without it, risk
            figures only tell part of the story.
          </p>
        </div>
        <div className="panel-card">
          <h4>What this resolves</h4>
          <p>
            Manual reconciliation mistakes, duplicated reporting across
            advisers, and blind spots that appear when accounts are viewed in
            isolation instead of as a whole.
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Risk & Scenarios",
    content: (
      <div className="panel-inner">
        <div className="panel-card">
          <h4>Risk Scoring + Scenario Review</h4>
          <p>
            Once exposure is mapped, every position is scored for volatility and
            liquidity, then stress-tested against defined scenarios. The result
            is a ranked view of where risk concentrates and how the portfolio
            might react in specific conditions.
          </p>
        </div>
        <div className="panel-card">
          <h4>What this resolves</h4>
          <p>
            Decisions made on return expectations alone, with no matching view
            of downside, or of how correlated holdings might move together under
            stress.
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Monitoring & Records",
    content: (
      <div className="panel-inner">
        <div className="panel-card">
          <h4>Ongoing Monitoring + Decision Records</h4>
          <p>
            Allocations are checked against targets on a continuing basis, with
            deviations flagged early. Every adjustment and review is logged,
            building a record that keeps advisers and family stakeholders
            accountable.
          </p>
        </div>
        <div className="panel-card">
          <h4>What this resolves</h4>
          <p>
            Drift that goes unnoticed between periodic reviews, and the missing
            rationale trail when past decisions are questioned or revisited.
          </p>
        </div>
      </div>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <Hero
        className="hero-tight"
        title="Tools built for clarity, not guesswork"
        description="Meritancing converts scattered financial data into an organised view of risk, exposure, and allocation, so family wealth decisions are grounded in analysis, not instinct."
        image="/assets/hero-features.webp"
        alt="Analytics dashboard on a laptop showing growth charts"
      >
        <Link href="#cta-section" className="btn btn-primary btn-white">
          Start Analysis
        </Link>
        <Link href="#feature-detail" className="btn btn-secondary btn-white">
          Explore Features
        </Link>
      </Hero>

      <section>
        <div className="container split">
          <div className="split-media">
            <img
              src="/assets/dashboard.webp"
              alt="Analytics dashboard consolidating data into a single overview"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <span className="eyebrow">What the Platform Does</span>
            <h2>One system, one full picture</h2>
            <p>
              Family wealth usually sits across accounts, advisers, and asset
              classes that rarely connect. Meritancing pulls all of it into a
              single analytical layer, exposing concentration, correlation, and
              drift before they turn into expensive surprises.
            </p>
            <ul className="pain-list">
              <li>Scattered holdings reviewed as one connected portfolio</li>
              <li>Risk signals raised automatically, never buried in reports</li>
              <li>A clear paper trail behind every allocation decision</li>
            </ul>
            <Link href="/contact" className="btn btn-secondary btn-sm">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-alt" id="feature-detail">
        <div className="container">
          <SectionHead
            eyebrow="Six Core Capabilities"
            title="Six tools, one disciplined process"
            description="Each capability targets a specific place where family offices and private investors tend to lose sight of their portfolios, from first data intake through to continuous monitoring."
          />
          <div className="feature-grid">
            <div className="feature-panel">
              <div className="feature-number">01</div>
              <h3>Unified Data Intake</h3>
              <p>
                Bring statements, custodian feeds, and manual records together
                into one structured dataset, no more hand-reconciling
                spreadsheets.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">02</div>
              <h3>Exposure Mapping</h3>
              <p>
                See how positions link across asset classes, currencies, and
                counterparties, so hidden concentration is found, not assumed
                away.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">03</div>
              <h3>Risk Scoring</h3>
              <p>
                Measure volatility, drawdown sensitivity, and liquidity limits
                for every position, giving each holding a comparable risk
                profile.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">04</div>
              <h3>Scenario Review</h3>
              <p>
                Test how a portfolio behaves under defined stress conditions, so
                downside is understood before capital is committed.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">05</div>
              <h3>Ongoing Monitoring</h3>
              <p>
                Follow drift from the target allocation over time, with
                deviations flagged, instead of periodic reviews that let
                gradual change slip by.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">06</div>
              <h3>Decision Records</h3>
              <p>
                Every analysis leaves a documented rationale, building an audit
                trail that supports governance across generations of a family's
                wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="How They Work Together"
            title="How the pieces fit together"
            description="These capabilities aren't separate tools, they run as stages of one workflow, moving from raw data to a documented, risk-aware position."
          />
          <Tabs tabs={workflowTabs} />
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Getting Started"
            title="From scattered records to a documented position"
            description="Implementing Meritancing follows the same sequence regardless of how the portfolio is currently organised."
          />
          <div className="steps">
            <div className="step">
              <div className="step-index">Step 01</div>
              <h3>Connect Holdings</h3>
              <p>
                Import statements and records into the unified data layer,
                establishing one consistent source for every analysis that
                follows.
              </p>
            </div>
            <div className="step">
              <div className="step-index">Step 02</div>
              <h3>Review Exposure & Risk</h3>
              <p>
                Examine the mapped exposures and risk scores, then run scenarios
                against the positions carrying the most concentration.
              </p>
            </div>
            <div className="step">
              <div className="step-index">Step 03</div>
              <h3>Monitor & Document</h3>
              <p>
                Set monitoring thresholds and let the system flag drift, while
                every review and adjustment is recorded for future reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-section">
        <div className="container">
          <CtaBanner
            title="See your portfolio through a sharper lens"
            description="Start an analysis with Meritancing and move from scattered statements to a structured, risk-aware view of family wealth."
            cta="Start Analysis"
            href="/contact"
          />
        </div>
      </section>
    </main>
  );
}
