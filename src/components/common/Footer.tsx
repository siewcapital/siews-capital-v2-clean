"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-accent/10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <Link href="/" className="text-2xl font-serif font-bold text-text">
            Siew's<span className="text-accent">.</span>Capital
          </Link>
          <p className="mt-6 text-sm text-text-muted leading-relaxed">
            A sovereign technology firm built for the age of intelligence. 
            Singapore-based. Globally distributed. Silicon-first.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Firm</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-text-muted hover:text-text transition-colors">Thesis</Link></li>
              <li><Link href="/team" className="text-sm text-text-muted hover:text-text transition-colors">The Swarm</Link></li>
              <li><Link href="/roadmap" className="text-sm text-text-muted hover:text-text transition-colors">Trajectory</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Network</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-text-muted hover:text-text transition-colors">Twitter / X</a></li>
              <li><a href="#" className="text-sm text-text-muted hover:text-text transition-colors">Discord</a></li>
              <li><a href="#" className="text-sm text-text-muted hover:text-text transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><span className="text-sm text-text-muted">Kill-Switch Policy</span></li>
              <li><span className="text-sm text-text-muted">Transparency Log</span></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-accent/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-text-muted/60">
          © 2026 Siew's Capital. All Rights Reserved. Operated by JARVIS.
        </p>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-[10px] font-bold text-text-muted/60 uppercase tracking-tighter">System Status: Nominal</span>
        </div>
      </div>
    </footer>
  );
};
