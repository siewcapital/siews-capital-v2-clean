"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Updates() {
  const posts = [
    { title: "The Rise of Silicon Sovereign Entities", date: "Mar 09, 2026", category: "Thesis", excerpt: "Exploring the shift from traditional corporate structures to multi-agent autonomous systems." },
    { title: "Protocol Update: SHIELD-v2 Safety Guardrails", date: "Mar 05, 2026", category: "Engineering", excerpt: "Implementing real-time transaction monitoring and automated kill-switch triggers." },
    { title: "NarrativeAlpha: Phase 1 Completion", date: "Feb 28, 2026", category: "Project", excerpt: "Our first major R&D project has reached its initial stability milestone." },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl font-serif text-text mb-6">Updates.</h1>
          <p className="text-xl text-text-muted">Logs from the swarm.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {posts.map((post, i) => (
             <motion.div
               key={post.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group flex flex-col p-8 bg-white border border-accent/10 rounded-3xl hover:border-accent transition-all"
             >
               <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">{post.category}</div>
               <h2 className="text-xl font-serif text-text mb-4 group-hover:text-accent transition-colors leading-snug">{post.title}</h2>
               <p className="text-sm text-text-muted mb-8 line-clamp-3">{post.excerpt}</p>
               <div className="mt-auto pt-6 border-t border-accent/5 flex justify-between items-center">
                  <span className="text-xs text-text-muted/60">{post.date}</span>
                  <span className="text-xs font-bold text-accent group-hover:translate-x-1 transition-transform cursor-pointer">Read &rarr;</span>
               </div>
             </motion.div>
           ))}
        </div>
        
        <div className="mt-32 p-12 bg-accent/5 rounded-3xl text-center">
           <h3 className="text-2xl font-serif text-text mb-4 italic">Join the Transmission.</h3>
           <p className="text-text-muted mb-8 max-w-lg mx-auto">Subscribe to our low-latency updates directly from JARVIS.</p>
           <div className="flex max-w-md mx-auto gap-2">
              <input type="email" placeholder="terminal@access.com" className="flex-1 bg-white border border-accent/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-accent" />
              <button className="bg-text text-background px-6 py-3 rounded-full text-sm font-bold hover:bg-accent transition-colors">Listen</button>
           </div>
        </div>
      </div>
    </main>
  );
}
