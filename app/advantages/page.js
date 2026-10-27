import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Meritancing — AI Platform Advantages for Smarter Wealth Oversight",
  description:
    "Meritancing: structured AI-driven analysis platform for family wealth management. Optimise your financial oversight with consistent, evidence-based portfolio monitoring.",
  alternates: {
    canonical: "/advantages",
  },
};

export default function AdvantagesPage() {
  return (
    <main>
      <Hero
        eyebrow="Advantages"
        title="Why families choose Meritancing for data-driven decisions"
        description="Meritancing brings structure, discipline, and clarity to wealth oversight — replacing guesswork with consistent, evidence-based analysis."
        alt="Meritancing dashboard overview showing portfolio risk analysis"
        container={false}
      >
        <Link href="#cta-section" className="btn btn-primary">
          Start Analysis
        </Link>
        <Link href="/features" className="btn btn-secondary">
          View Features
        </Link>
      </Hero>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Core Advantages"
            title="Built for clarity, not speculation"
            description="Every part of Meritancing is designed around one principle: decisions should be grounded in data, reviewed consistently, and free from emotional bias."
          />
          <div className="feature-grid">
            <div className="feature-panel">
              <div className="feature-number">01</div>
              <h3>Consistent Methodology</h3>
              <p>
                The same analytical framework is applied every time, removing
                the inconsistency that comes with ad-hoc, manual reviews.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">02</div>
              <h3>Reduced Emotional Bias</h3>
              <p>
                Automated analysis helps separate decision-making from
                short-term market noise and reactive judgment calls.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">03</div>
              <h3>Structured Risk View</h3>
              <p>
                Risk factors are organized and presented in a consistent format,
                making it easier to compare positions over time.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">04</div>
              <h3>Time Efficiency</h3>
              <p>
                Data aggregation and initial analysis are handled
                systematically, reducing the manual effort required to stay
                informed.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">05</div>
              <h3>Clear Reporting</h3>
              <p>
                Outputs are presented in a readable, structured format intended
                to support discussion rather than replace judgment.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">06</div>
              <h3>Ongoing Monitoring</h3>
              <p>
                Portfolios are reviewed on a recurring basis, so changes in
                exposure or risk profile don't go unnoticed between check-ins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="split media-right">
            <div className="split-media">
              <img
                src="/assets/about.jpg"
                alt="Meritancing team reviewing family wealth analytics on screen"
                width="900"
                height="700"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <span className="eyebrow">A Different Approach</span>
              <h2>Analysis over speculation</h2>
              <p>
                Many approaches to family wealth management rely on intuition,
                fragmented reports, or reactive decisions made under pressure.
                Meritancing takes a different path.
              </p>
              <ul className="pain-list">
                <li>
                  Fragmented spreadsheets and disconnected tools are replaced
                  with a single structured view.
                </li>
                <li>
                  Reactive, headline-driven decisions give way to scheduled,
                  methodical review.
                </li>
                <li>
                  Opaque assumptions are replaced with transparent, documented
                  data inputs.
                </li>
                <li>
                  One-off advice is supplemented with continuous, systematic
                  monitoring.
                </li>
              </ul>
              <p>
                The result is a process that's easier to explain, easier to
                repeat, and easier to trust over the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Compared to Traditional Methods"
            title="What changes when you add structured analysis"
            description="A side-by-side look at how a systematic approach differs from relying solely on manual review or periodic advisory meetings."
          />
          <div className="steps">
            <div className="step">
              <div className="step-index">Without structured analysis</div>
              <h3>Infrequent reviews</h3>
              <p>
                Portfolio checks happen sporadically, often triggered by market
                events rather than a set schedule.
              </p>
            </div>
            <div className="step">
              <div className="step-index">With Meritancing</div>
              <h3>Scheduled monitoring</h3>
              <p>
                Reviews follow a consistent cadence, so changes in risk or
                exposure are identified earlier.
              </p>
            </div>
            <div className="step">
              <div className="step-index">Without structured analysis</div>
              <h3>Fragmented data</h3>
              <p>
                Information is spread across statements, spreadsheets, and
                conversations, making comparisons difficult.
              </p>
            </div>
            <div className="step">
              <div className="step-index">With Meritancing</div>
              <h3>Centralized view</h3>
              <p>
                Data is organized into one consistent format, making trends and
                changes easier to track.
              </p>
            </div>
            <div className="step">
              <div className="step-index">Without structured analysis</div>
              <h3>Subjective judgment</h3>
              <p>
                Decisions can be shaped by mood, recent headlines, or incomplete
                information.
              </p>
            </div>
            <div className="step">
              <div className="step-index">With Meritancing</div>
              <h3>Evidence-based input</h3>
              <p>
                Analysis is grounded in defined data points and applied the same
                way each time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Who Benefits"
            title="Designed around the realities of family wealth"
            description="Meritancing is built for situations where holdings, goals, and responsibilities span multiple people and multiple time horizons."
          />
          <div className="feature-grid">
            <div className="feature-panel">
              <h3>Multi-generational holdings</h3>
              <p>
                Keep a consistent picture of assets as responsibility shifts
                between family members over time.
              </p>
            </div>
            <div className="feature-panel">
              <h3>Diversified portfolios</h3>
              <p>
                Bring scattered holdings together into a single structured view
                that's easier to review as a whole.
              </p>
            </div>
            <div className="feature-panel">
              <h3>Long-term planning</h3>
              <p>
                Support discussions about long-term goals with consistent,
                repeatable data rather than one-off snapshots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-section">
        <div className="container">
          <CtaBanner
            title="See how structured analysis applies to your portfolio"
            description="Start with a review of your current holdings and get a clearer picture of where your exposure stands today."
            cta="Start Analysis"
            href="/contact"
          />
        </div>
      </section>
    </main>
  );
}
