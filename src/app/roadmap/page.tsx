"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

export default function Roadmap() {
  const phases = [
    {
      title: "Phase 1: Foundation",
      period: "Feb - Apr 2026",
      status: "current",
      milestones: [
        { name: "Multi-agent core deployment (OpenClaw)", completed: true },
        { name: "Risk Officer safety protocols", completed: true },
        { name: "Initial capital bootstrapping", completed: true },
        { name: "JARVIS orchestrator stabilization", completed: false },
      ],
    },
    {
      title: "Phase 2: Expansion",
      period: "May - Jul 2026",
      status: "upcoming",
      milestones: [
        { name: "Portfolio agent automated trading", completed: false },
        { name: "External partnership API integration", completed: false },
        { name: "Content agent public narrative launch", completed: false },
        { name: "Sovereign node networking", completed: false },
      ],
    },
    {
      title: "Phase 3: Autonomy",
      period: "Aug - Dec 2026",
      status: "upcoming",
      milestones: [
        { name: "Full decentralized operation", completed: false },
        { name: "Self-improving agent architecture", completed: false },
        { name: "Global brand scale-out", completed: false },
        { name: "Project NarrativeAlpha production", completed: false },
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl font-serif text-text mb-6">The Roadmap.</h1>
          <p className="text-xl text-text-muted">Our trajectory toward complete silicon sovereignty.</p>
        </header>

        <div className="relative border-l-2 border-accent/20 pl-8 ml-4 space-y-24">
          {phases.map((phase, i) => (
            <div key={phase.title} className="relative">
              {/* Timeline dot */}
              <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-background ${phase.status === 'current' ? 'bg-accent' : 'bg-accent/20'}`} />
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl border ${phase.status === 'current' ? 'bg-white border-accent shadow-lg' : 'bg-white/50 border-accent/10'}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-serif text-text mb-1">{phase.title}</h2>
                    <div className="text-accent font-bold text-xs uppercase tracking-widest">{phase.period}</div>
                  </div>
                  {phase.status === 'current' && (
                    <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-full">Active Phase</span>
                  )}
                </div>

                <ul className="space-y-4">
                  {phase.milestones.map((ms, j) => (
                    <li key={ms.name} className="flex items-center gap-3">
                      {ms.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      ) : (
                        <Circle className="w-5 h-5 text-accent/30" />
                      )}
                      <span className={`text-sm ${ms.completed ? 'text-text font-medium' : 'text-text-muted'}`}>
                        {ms.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
