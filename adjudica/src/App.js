import React, { useState, useEffect } from "react";
import "./App.css"; 

function App() {
  // Header scroll state: shrink navbar on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll event handler
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050509] text-white">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden pb-24">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: "radial-gradient(circle at top, #B46B83 0%, #8C4E82 49%, #5F2F7B 63%, #2F1942 100%)"
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 pt-6 lg:pt-10">
          <header className={`flex justify-between items-center mb-16 ${isScrolled ? "shrink" : ""}`}>
            {/* Navbar */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#B46B83] via-[#8C4E82] to-[#5F2F7B] flex items-center justify-center text-xs font-bold">
                A
              </div>
              <span className="font-semibold tracking-tight text-sm md:text-base">
                <span className="gradient-text">Adjudica.ai</span>
              </span>
            </div>
            <button
              className="rounded-full bg-gradient-to-r from-[#B46B83] via-[#8C4E82] to-[#5F2F7B] px-6 py-3 text-sm font-semibold shadow-[0_0_25px_rgba(255,122,60,0.6)] hover:brightness-110 transition"
            >
              Log in / Sign up
            </button>
          </header>

          {/* Hero Main */}
          <section className="flex flex-col items-center text-center">
            <p className="text-xs md:text-sm text-white/70 mb-4">
              Join early builders, traders, and funds protecting prediction markets with AI.
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto text-white">
              Your AI-Assisted Dispute Layer for <span className="text-white">Smarter & Safer</span> Prediction Markets
            </h1>
            <p className="mt-5 text-sm md:text-base text-white/70 max-w-2xl">
              Turn hours of monitoring and dispute work into minutes. Adjudica’s dual-engine
              Sentinel + Juror system catches incorrect resolutions, compiles evidence, and
              posts dispute bonds before attackers can cash out.
            </p>

            {/* CTA */}
            <div className="mt-8 w-full max-w-xl flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email to join the waitlist"
                className="flex-1 rounded-full bg-black/70 border border-white/15 px-5 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff7a3c]"
              />
              <button
                className="rounded-full bg-gradient-to-r from-[#B46B83] via-[#8C4E82] to-[#5F2F7B] px-6 py-3 text-sm font-semibold shadow-[0_0_25px_rgba(255,122,60,0.6)] hover:brightness-110 transition"
              >
                Get early access
              </button>
            </div>
          </section>

          {/* Interface Section */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-4xl aspect-[16/9] rounded-[32px] bg-black/90 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="absolute inset-[1px] rounded-[30px] border border-[#ff7a3c]/40 pointer-events-none" />
              {/* Interface */}
              <div
                className="absolute -inset-[2px] opacity-60 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,122,60,0.7), rgba(255,60,106,0.3), rgba(0,0,0,0))",
                  maskImage:
                    "radial-gradient(circle at top, black 0, transparent 55%), radial-gradient(circle at bottom, black 0, transparent 55%)",
                  WebkitMaskComposite: "xor",
                  mixBlendMode: "screen",
                }}
              />
              <div className="relative h-full flex items-center justify-center">
                <img
                  src="/interface.png"
                  alt="Adjudica dashboard"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <section className="bg-[#2F1942] pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Detect, Dispute, <span className="text-[#ff7a3c]">Defend</span>
            </h2>
            <p className="text-sm md:text-base text-white/70 max-w-2xl">
              Adjudica turns every prediction market into a fully defended market.
              Sentinel watches deterministic events 24/7, Juror handles ambiguous cases with
              human-AI intelligence, and the Unified Dispute Vault guarantees bond capital
              is always ready.
            </p>
          </div>

          {/* For Demo? */}
          <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-4xl rounded-[32px] bg-gradient-to-tr from-[#14121f] to-[#050509] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="aspect-[16/9] bg-black flex items-center justify-center">
                {/* Screenshot or Demo */}
                <img
                  src="/interface.png"
                  alt="Adjudica dashboard"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <FeaturePill
              label="Sentinel"
              title="Autonomous Dispute Engine"
              desc="Always-on AI that monitors markets, cross-checks deterministic data, and posts dispute bonds before attackers can finalize incorrect outcomes."
            />
            <FeaturePill
              label="Juror"
              title="Human–AI Collective Intelligence"
              desc="For ambiguous, news-driven, or context-heavy events, Juror opens an evidence window, scores contributor proofs, and synthesizes a unified dispute document."
            />
            <FeaturePill
              label="Unified Dispute Vault"
              title="Single Capital Pool"
              desc="Stake once and secure every market. UDV funds Sentinel and Juror disputes, auto-compounds rewards, and routes yield back to stakers."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2F1942] border-t border-white/10 pt-10 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* CTA */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#ff7a3c] via-[#ff3c6a] to-[#ffdf6b] flex items-center justify-center text-xs font-bold">
                  A
                </div>
                <span className="font-semibold tracking-tight">Adjudica.ai</span>
              </div>
              <p className="text-sm text-white/70 max-w-md">
                Make low-liquidity, low-attention markets as safe as flagship ones. Join the
                early access list and help test Sentinel + Juror live.
              </p>
            </div>

            <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Work email"
                className="flex-1 rounded-full bg-black/70 border border-white/15 px-5 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff7a3c]"
              />
              <button className="rounded-full bg-gradient-to-r from-[#B46B83] via-[#8C4E82] to-[#5F2F7B] px-6 py-3 text-sm font-semibold shadow-[0_0_25px_rgba(255,122,60,0.6)] hover:brightness-110 transition">
                Sign up for free
              </button>
            </div>
          </div>

          {/* Footer links */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">
            <p>© {new Date().getFullYear()} Adjudica Technologies. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <button className="hover:text-white">Terms of Service</button>
              <button className="hover:text-white">Privacy Policy</button>
              <span className="opacity-60">•</span>
              <button className="hover:text-white">X</button>
              <button className="hover:text-white">Discord</button>
              <button className="hover:text-white">GitHub</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeaturePill({ label, title, desc }) {
  return (
    <div className="relative rounded-3xl bg-[#070712] border border-white/10 px-6 py-7 shadow-[0_0_40px_rgba(0,0,0,0.7)]">
      <div className="absolute -inset-px rounded-3xl opacity-40 pointer-events-none bg-gradient-to-r from-[#ff7a3c33] via-transparent to-[#ff3c6a33]" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">{label}</p>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export default App;
