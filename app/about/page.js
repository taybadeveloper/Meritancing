import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Meritancing, About Our Family Wealth AI Platform",
  description:
    "Learn about Meritancing, the AI platform that brings structure, discipline, and clarity to family wealth management.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Hero
        eyebrow="About Us"
        title="Built for families who plan in decades, not days"
        description="Meritancing exists to bring structure, discipline, and clarity to the way families manage long-term wealth."
        image="/assets/hero-about.webp"
        alt="Team working together around a table"
      />

      <section>
        <div className="container">
          <div className="split">
            <div className="split-media about-story-media">
              <img
                src="/assets/story.webp"
                alt="Team in a strategy meeting discussing Meritancing"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <span className="eyebrow">Our Story</span>
              <h2>Why we built Meritancing</h2>
              <p>
                Family wealth decisions were increasingly being driven by noise:
                scattered statements, conflicting opinions, and reactive calls
                made under pressure. The tools that existed were built for
                traders and institutions, not for families planning across
                generations.
              </p>
              <ul className="pain-list">
                <li>
                  We saw families lose sight of their own goals amid short-term
                  market noise.
                </li>
                <li>
                  We saw important decisions resting on intuition rather than
                  evidence.
                </li>
                <li>
                  We saw no system that combined monitoring, reasoning, and
                  documentation in one place.
                </li>
              </ul>
              <p>
                So we built Meritancing: a platform that watches the data
                continuously, explains what it sees, and keeps every decision
                documented, so families stay in control of their own plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="What We Stand For"
            title="Three principles behind everything we do"
            description="Every feature in Meritancing traces back to one of these ideas."
          />
          <div className="feature-grid">
            <div className="feature-panel">
              <div className="feature-number">01</div>
              <h3>Clarity over complexity</h3>
              <p>
                Wealth data is complicated; the output should not be. We present
                risk, exposure, and reasoning in plain, structured formats any
                family stakeholder can follow.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">02</div>
              <h3>Evidence over guesswork</h3>
              <p>
                Every recommendation carries the data and logic behind it.
                Decisions should be grounded in what the numbers show, not in
                mood or headlines.
              </p>
            </div>
            <div className="feature-panel">
              <div className="feature-number">03</div>
              <h3>Family-first design</h3>
              <p>
                The platform is shaped around life stages, obligations, and
                goals that span generations, not around short-term trading
                tactics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="How We Think"
            title="A guardian, not a trader"
            description="Meritancing was never designed to trade on your behalf. It acts as a protective layer around the capital your family depends on."
          />
          <div className="steps">
            <div className="step">
              <div className="step-index">Step 01</div>
              <h3>Listen to your goals</h3>
              <p>
                Every analysis begins with what your family is actually trying
                to achieve, not with a generic market view.
              </p>
            </div>
            <div className="step">
              <div className="step-index">Step 02</div>
              <h3>Watch the data</h3>
              <p>
                Markets are monitored continuously, so shifts are noticed early,
                while there is still time to respond calmly.
              </p>
            </div>
            <div className="step">
              <div className="step-index">Step 03</div>
              <h3>Explain every move</h3>
              <p>
                You receive recommendations with their reasoning attached, and
                the final decision always stays in your hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <CtaBanner
            title="See Meritancing for yourself"
            description="Start an analysis and see how continuous data monitoring translates into recommendations shaped around your family."
            cta="Contact Us"
            href="/contact"
          />
        </div>
      </section>
    </main>
  );
}
