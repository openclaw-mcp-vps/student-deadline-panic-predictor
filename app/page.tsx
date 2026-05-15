export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase border border-[#30363d]">
          For Academic Advisors
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Student Stress<br />
          <span className="text-[#58a6ff]">Before Burnout Hits</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze assignment due dates, estimated completion times, and past performance to forecast overwhelming periods — so you can intervene early.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $9/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No setup fees.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📅", title: "Deadline Mapping", desc: "Visualize assignment clusters and crunch periods across all students." },
          { icon: "📊", title: "Stress Predictions", desc: "ML-style scoring flags students at risk days before they spiral." },
          { icon: "🔔", title: "Advisor Alerts", desc: "Get notified when a student's workload crosses critical thresholds." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Advisor Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to support your students</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited student profiles",
              "Real-time stress dashboard",
              "Automated advisor alerts",
              "Assignment & deadline tracking",
              "Historical performance analytics"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the stress prediction work?",
              a: "We analyze each student's assignment load, estimated hours, historical completion rates, and deadline proximity to generate a stress score updated daily."
            },
            {
              q: "Is student data kept private?",
              a: "Yes. All data is encrypted at rest and in transit. We never share student information with third parties and are FERPA-compliant."
            },
            {
              q: "Can I integrate with my existing LMS?",
              a: "We support CSV import and are building direct integrations with Canvas and Blackboard. API access is included in the plan."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-8 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Student Deadline Panic Predictor. All rights reserved.
      </footer>
    </main>
  )
}
