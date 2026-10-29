import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Meritancing, AI Platform Advantages for Smarter Wealth Oversight",
  description:
    "Meritancing brings order, discipline, and clarity to family wealth oversight, consistent, evidence-based portfolio monitoring instead of guesswork.",
  alternates: {
    canonical: "/advantages",
  },
};

export default function AdvantagesPage() {
  return (
    <main>
      <Hero
        eyebrow="Advantages"
        title="Why families rely on Meritancing for data-driven decisions"
        description="Meritancing brings order, discipline, and clarity to wealth oversight, replacing guesswork with consistent, evidence-based analysis."
        image="/assets/hero-advantages.webp"
        alt="Two people shaking hands in a professional setting"
      >
        <Link href="#cta-section" className="btn btn-primary btn-white">
          Start Analysis
        </Link>
        <Link href="/features" className="btn btn-secondary btn-white">
          View Features
        </Link>
      </Hero>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Core Advantages"
            title="Built for clarity, not guesswork"
            description="Every part of Meritancing is built on one principle: decisions should rest on data, be reviewed consistently, and stay free of emotional bias."
          />
          <div className="feature-grid advantages-grid">
            <div className="feature-panel">
              <div className="feature-number">01</div>
              <h3>Consistent Methodology</h3>
              <p>
                The same analytical framework runs every time, removing the
                unevenness of ad-hoc manual reviews.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">02</div>
              <h3>Reduced Emotional Bias</h3>
              <p>
                Automated analysis separates decision-making from short-term
                noise and knee-jerk calls.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">03</div>
              <h3>Structured Risk View</h3>
              <p>
                Risk factors are organised into one consistent format, making
                positions easy to compare over time.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">04</div>
              <h3>Time Efficiency</h3>
              <p>
                Data gathering and first-pass analysis run automatically,
                cutting the manual effort needed to stay informed.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">05</div>
              <h3>Clear Reporting</h3>
              <p>
                Results come in a readable, structured format designed to
                support discussion, not replace judgment.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">06</div>
              <h3>Ongoing Monitoring</h3>
              <p>
                Portfolios are reviewed on a regular rhythm, so shifts in
                exposure or risk never slip between check-ins.
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
                src="/assets/analysis.webp"
                alt="Team analysing data on laptops for evidence-based decisions"
                width="900"
                height="700"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <span className="eyebrow">A Different Approach</span>
              <h2>Evidence over guesswork</h2>
              <p>
                Most approaches to family wealth rely on intuition, scattered
                reports, or pressured, spur-of-the-moment decisions. Meritancing
                chooses a different path.
              </p>
              <ul className="pain-list">
                <li>
                  Disconnected spreadsheets and tools give way to one structured
                  view.
                </li>
                <li>
                  Headline-driven reactions give way to scheduled, methodical
                  review.
                </li>
                <li>
                  Opaque assumptions give way to transparent, documented data
                  inputs.
                </li>
                <li>
                  One-off advice is backed by continuous, systematic monitoring.
                </li>
              </ul>
              <p>
                The result: a process that is easier to explain, simpler to
                repeat, and easier to trust for the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Compared to Traditional Methods"
            title="What structured analysis changes"
            description="A side-by-side view of how a systematic approach differs from manual review or occasional adviser meetings alone."
          />
          <div className="steps">
            <div className="step">
              <div className="step-index">Without structured analysis</div>
              <h3>Infrequent reviews</h3>
              <p>
                Portfolio checks happen sporadically, usually triggered by
                market events rather than a fixed schedule.
              </p>
            </div>
            <div className="step">
              <div className="step-index">With Meritancing</div>
              <h3>Scheduled monitoring</h3>
              <p>
                Reviews run on a consistent cadence, so shifts in risk or
                exposure are caught earlier.
              </p>
            </div>
            <div className="step">
              <div className="step-index">Without structured analysis</div>
              <h3>Fragmented data</h3>
              <p>
                Information lives across statements, spreadsheets, and
                conversations, making comparisons difficult.
              </p>
            </div>
            <div className="step">
              <div className="step-index">With Meritancing</div>
              <h3>Centralized view</h3>
              <p>
                Data is organised into one consistent format, so trends and
                changes are easier to track.
              </p>
            </div>
            <div className="step">
              <div className="step-index">Without structured analysis</div>
              <h3>Subjective judgment</h3>
              <p>
                Decisions can be swayed by mood, recent headlines, or
                incomplete information.
              </p>
            </div>
            <div className="step">
              <div className="step-index">With Meritancing</div>
              <h3>Evidence-based input</h3>
              <p>
                Analysis rests on defined data points and is applied the same
                way every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Who Benefits"
            title="Built around the realities of family wealth"
            description="Meritancing is made for situations where holdings, goals, and responsibilities span several people and several time horizons."
          />
          <div className="feature-grid">
            <div className="feature-panel">
              <h3>Multi-generational holdings</h3>
              <p>
                Keep one consistent picture of assets as responsibility passes
                between family members over time.
              </p>
            </div>
            <div className="feature-panel">
              <h3>Diversified portfolios</h3>
              <p>
                Gather scattered holdings into a single structured view that's
                simpler to review as a whole.
              </p>
            </div>
            <div className="feature-panel">
              <h3>Long-term planning</h3>
              <p>
                Anchor long-term discussions in consistent, repeatable data, 
                not one-off snapshots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-section">
        <div className="container">
          <CtaBanner
            title="See structured analysis applied to your portfolio"
            description="Begin with a review of your current holdings and get a clearer picture of where your exposure stands today."
            cta="Start Analysis"
            href="/contact"
          />
        </div>
      </section>
    </main>
  );
}
