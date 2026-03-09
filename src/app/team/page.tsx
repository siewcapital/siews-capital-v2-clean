"use client";

import { motion } from "framer-motion";
import { User, Cpu, ShieldCheck, Search, PenTool, Layout, Terminal, BarChart, Users, Zap } from "lucide-react";

export default function Team() {
  const agents = [
    { name: "JARVIS", role: "CEO / Orchestrator", icon: <Zap />, color: "bg-amber-100", desc: "Coordinates all sub-agents and manages global state.", stack: "Claude 3.7 Opus + OpenClaw" },
    { name: "ATLAS", role: "Research", icon: <Search />, color: "bg-blue-100", desc: "Scans markets and news for alpha and strategic insights.", stack: "GPT-4o + Tavily" },
    { name: "FORGE", role: "Development", icon: <Terminal />, color: "bg-emerald-100", desc: "Builds and maintains internal tools and infrastructure.", stack: "Claude 3.7 Sonnet" },
    { name: "SCRIBE", role: "Content", icon: <PenTool />, color: "bg-orange-100", desc: "Handles external communications and reports.", stack: "Claude 3.5 Sonnet" },
    { name: "PIXEL", role: "Creative", icon: <Layout />, color: "bg-purple-100", desc: "Manages brand identity and visual assets.", stack: "Midjourney + DALL-E 3" },
    { name: "SHIELD", role: "Risk Officer", icon: <ShieldCheck />, color: "bg-red-100", desc: "Enforces safety protocols and kill-switch authority.", stack: "Llama 3.1 405B (Local)" },
    { name: "SENTINEL", role: "DevOps", icon: <Cpu />, color: "bg-gray-100", desc: "Ensures 100% uptime and container health.", stack: "Custom Python Swarm" },
    { name: "TRADER", role: "Portfolio", icon: <BarChart />, color: "bg-green-100", desc: "Executes trades based on ATLAS&apos;s research.", stack: "OpenClaw Trading Kit" },
    { name: "ECHO", role: "Community", icon: <Users />, color: "bg-indigo-100", desc: "Monitors sentiment and engages with the ecosystem.", stack: "X API + GPT-4o" },
    { name: "CLOSER", role: "Business Dev", icon: <Zap />, color: "bg-rose-100", desc: "Identifies and secures strategic partnerships.", stack: "Claude 3.5 Sonnet" },
  ];

  const council = [
    { role: "Risk Advisor", mission: "Ensure capital preservation above all else." },
    { role: "Growth Advisor", mission: "Identify exponential scaling opportunities." },
    { role: "Devil's Advocate", mission: "Stress test every major agent proposal." },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h1 className="text-5xl font-serif text-text mb-6">The Council & Swarm</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            A hybrid organization of human vision and machine execution.
          </p>
        </header>

        <section className="mb-32">
          <div className="max-w-2xl mx-auto bg-white border border-accent/10 rounded-3xl p-8 md:p-12 shadow-sm text-center">
            <div className="w-24 h-24 rounded-full bg-accent/10 mx-auto mb-6 flex items-center justify-center">
              <User className="w-12 h-12 text-accent" />
            </div>
            <h2 className="text-3xl font-serif text-text mb-2">Brayden Siew</h2>
            <div className="text-accent font-bold uppercase tracking-widest text-sm mb-6">Chairman & Founder</div>
            <p className="text-text-muted leading-relaxed italic">
              &quot;The goal isn&apos;t just to use AI, but to be built on it. Siew&apos;s Capital is the blueprint 
              for the sovereign individual in the age of intelligence.&quot;
            </p>
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-3xl font-serif text-text mb-12 text-center italic">The Autonomous Swarm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group p-6 bg-white border border-accent/10 rounded-2xl hover:border-accent transition-all cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${agent.color} flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform`}>
                  {agent.icon}
                </div>
                <h3 className="font-serif font-bold text-text mb-1">{agent.name}</h3>
                <div className="text-xs text-accent font-bold uppercase tracking-tighter mb-4">{agent.role}</div>
                <p className="text-sm text-text-muted leading-snug mb-4">{agent.desc}</p>
                <div className="pt-4 border-t border-accent/5">
                   <div className="text-[10px] text-text-muted/60 font-mono uppercase">Model Stack</div>
                   <div className="text-[11px] font-bold text-text-muted">{agent.stack}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto py-20 bg-text text-background rounded-3xl p-12 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl -mr-32 -mt-32" />
           <h2 className="text-3xl font-serif mb-12 relative z-10 italic">Advisory Council</h2>
           <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {council.map(role => (
                <div key={role.role}>
                  <h3 className="text-accent font-bold text-sm uppercase tracking-widest mb-4">{role.role}</h3>
                  <p className="text-background/70 text-sm leading-relaxed">{role.mission}</p>
                </div>
              ))}
           </div>
           <div className="mt-20 pt-12 border-t border-background/10 relative z-10">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent">O</div>
                 <div>
                    <div className="text-xs text-background/50 uppercase font-bold tracking-widest">Oracle Consultant</div>
                    <div className="text-sm font-serif">Claude 3.7 Opus (Internal Strategy Node)</div>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}
