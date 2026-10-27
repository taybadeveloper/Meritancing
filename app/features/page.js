import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";
import Tabs from "@/components/Tabs";

export const metadata = {
  title: "Meritancing — AI Platform for Structured Portfolio Analysis",
  description:
    "Meritancing is the AI platform that consolidates fragmented holdings into a single risk-aware view, covering exposure, scoring, and scenario review. Discover a disciplined process from raw data to documented decisions.",
};

const workflowTabs = [
  {
    label: "Data & Mapping",
    content: (
      <div className="panel-inner">
        <div className="panel-card">
          <h4>Unified Data Intake + Exposure Mapping</h4>
          <p>
            Holdings from multiple sources are aligned into a single dataset,
            then mapped by asset class, geography, and counterparty. This stage
            establishes the foundation that every later analysis depends on —
            without it, risk figures only reflect part of the picture.
          </p>
        </div>
        <div className="panel-card">
          <h4>What this resolves</h4>
          <p>
            Manual reconciliation errors, duplicate reporting across advisors,
            and blind spots created when accounts are reviewed in isolation
            rather than as a whole.
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
            Once exposure is mapped, each position is scored for volatility and
            liquidity, then tested against defined scenarios. The result is a
            ranked view of where risk concentrates and how the portfolio might
            respond to specific conditions.
          </p>
        </div>
        <div className="panel-card">
          <h4>What this resolves</h4>
          <p>
            Decisions made on return expectations alone, without a corresponding
            view of downside exposure or how correlated holdings might move
            together under stress.
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
            Allocations are tracked against targets on a continuing basis, with
            deviations flagged early. Each adjustment or review is logged,
            building a record that supports accountability across advisors and
            family stakeholders.
          </p>
        </div>
        <div className="panel-card">
          <h4>What this resolves</h4>
          <p>
            Drift that goes unnoticed between periodic reviews, and the lack of
            a clear rationale trail when decisions are later questioned or
            revisited.
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
        title="Features built for clarity, not speculation"
        description="Meritancing turns scattered financial data into a structured view of risk, exposure, and allocation — so family wealth decisions rest on analysis, not guesswork."
        alt="Meritancing dashboard showing portfolio risk analysis and data visualizations"
        container={false}
      >
        <Link href="#cta-section" className="btn btn-primary">
          Start Analysis
        </Link>
        <Link href="#feature-detail" className="btn btn-secondary">
          Explore Features
        </Link>
      </Hero>

      <section>
        <div className="container split">
          <div className="split-media">
            <img
              src="/assets/about.jpg"
              alt="Meritancing data analysis interface reviewed alongside family wealth records"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <span className="eyebrow">What Meritancing Does</span>
            <h2>One system, a complete picture</h2>
            <p>
              Family wealth is usually spread across accounts, advisors, and
              asset classes that rarely talk to each other. Meritancing
              consolidates that information into a single analytical layer,
              highlighting concentration, correlation, and drift before they
              become costly surprises.
            </p>
            <ul className="pain-list">
              <li>Fragmented holdings reviewed as one connected portfolio</li>
              <li>Risk signals surfaced automatically, not buried in reports</li>
              <li>Clear documentation trail for every allocation decision</li>
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
            eyebrow="Core Capabilities"
            title="Six features, one disciplined process"
            description="Each capability below addresses a specific point where family offices and private investors typically lose visibility — from initial data intake through to ongoing monitoring."
          />
          <div className="feature-grid">
            <div className="feature-panel">
              <div className="feature-number">01</div>
              <h3>Unified Data Intake</h3>
              <p>
                Consolidate statements, custodial feeds, and manual records into
                one structured dataset, removing the need to reconcile
                spreadsheets by hand.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">02</div>
              <h3>Exposure Mapping</h3>
              <p>
                See how holdings connect across asset classes, currencies, and
                counterparties, so hidden concentration is identified rather
                than assumed away.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">03</div>
              <h3>Risk Scoring</h3>
              <p>
                Quantify volatility, drawdown sensitivity, and liquidity
                constraints for each position, giving every holding a comparable
                risk profile.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">04</div>
              <h3>Scenario Review</h3>
              <p>
                Model how a portfolio behaves under defined stress conditions,
                helping decisions account for downside before capital is
                committed.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">05</div>
              <h3>Ongoing Monitoring</h3>
              <p>
                Track drift from target allocation over time, with flagged
                deviations rather than periodic reviews that miss gradual
                change.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">06</div>
              <h3>Decision Records</h3>
              <p>
                Every analysis produces a documented rationale, creating an
                audit trail that supports governance across generations of a
                family's holdings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="In Practice"
            title="How the features fit together"
            description="These capabilities are not separate tools — they operate as stages of a single workflow, moving from raw data to a documented, risk-aware position."
          />
          <Tabs tabs={workflowTabs} />
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Getting Started"
            title="From raw data to a documented position"
            description="Implementing Meritancing follows a consistent sequence, regardless of how the portfolio is currently organized."
          />
          <div className="steps">
            <div className="step">
              <div className="step-index">Step 01</div>
              <h3>Connect Holdings</h3>
              <p>
                Import statements and records into the unified data layer,
                establishing one consistent source for all later analysis.
              </p>
            </div>
            <div className="step">
              <div className="step-index">Step 02</div>
              <h3>Review Exposure & Risk</h3>
              <p>
                Examine the mapped exposures and risk scores, then run scenarios
                against the positions that carry the most concentration.
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
            title="See your portfolio through a clearer lens"
            description="Start an analysis with Meritancing and move from scattered statements to a structured, risk-aware view of family wealth."
            cta="Start Analysis"
            href="/contact"
          />
        </div>
      </section>
    </main>
  );
}
