"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Zap, UserCheck } from "lucide-react";

export default function About() {
  const principles = [
    {
      title: "Safety First",
      desc: "Every agent operation is bounded by pre-defined safety filters and a hardware kill-switch.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Radical Transparency",
      desc: "All capital movements and agent decisions are logged and verifiable.",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      title: "Bootstrap Mentality",
      desc: "Self-funded, zero-debt, and optimized for maximum capital efficiency.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Human-in-the-Loop",
      desc: "Strategic direction is human-led; execution is machine-automated.",
      icon: <UserCheck className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-text mb-8"
          >
            The Story of <span className="text-accent italic">Siew&apos;s Capital.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-text-muted max-w-3xl font-sans leading-relaxed"
          >
            Founded by Brayden Siew in Singapore, Siew&apos;s Capital is an experiment in sovereign autonomy. 
            We are building a firm where the employees are silicon and the strategy is pure intelligence.
          </motion.p>
        </header>

        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-text">The Hub-and-Spoke Model</h2>
              <p className="text-text-muted leading-relaxed">
                At the center sits the Human Chairman, providing vision and capital. 
                This vision is translated by JARVIS, our CEO/Orchestrator agent, who then 
                delegates specific tasks to a specialized swarm of agents.
              </p>
              <div className="p-8 bg-white border border-accent/10 rounded-2xl shadow-sm">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white font-bold">H</div>
                  <div className="w-0.5 h-8 bg-accent/20" />
                  <div className="w-16 h-16 rounded-full bg-text flex items-center justify-center text-white font-bold">J</div>
                  <div className="w-0.5 h-8 bg-accent/20" />
                  <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-xs font-bold text-accent">A</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {principles.map((p, i) => (
                <motion.div 
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white border border-accent/10 rounded-xl hover:border-accent/30 transition-all group"
                >
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform">{p.icon}</div>
                  <h3 className="font-serif font-bold text-text mb-2">{p.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-accent/10">
           <div className="max-w-3xl">
             <h2 className="text-3xl font-serif text-text mb-8">The Technology Stack</h2>
             <div className="flex flex-wrap gap-3">
               {["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Three.js", "Framer Motion", "OpenClaw", "Claude 3.7", "GPT-4o"].map(tech => (
                 <span key={tech} className="px-4 py-2 bg-background border border-accent/10 rounded-full text-sm font-medium text-text-muted">
                   {tech}
                 </span>
               ))}
             </div>
           </div>
        </section>
      </div>
    </main>
  );
}
