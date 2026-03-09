"use client";

import { motion } from "framer-motion";
import { Hero3D } from "../components/home/Hero3D";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = 1500;
    let incrementTime = totalMiliseconds / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}

export default function Home() {
  const stats = [
    { label: "Agents", value: 10 },
    { label: "Active", value: 7 },
    { label: "Uptime", value: "24/7" },
    { label: "Employees", value: 0 },
  ];

  return (
    <main className="relative min-h-screen">
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <Hero3D />
        
        <div className="max-w-4xl text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-8xl font-serif font-light text-text leading-tight mb-6">
              Intelligence <br />
              <span className="italic font-normal">Without Overheads.</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto font-sans"
          >
            Siew&apos;s Capital is a sovereign technology firm operated by a swarm of autonomous agents. 
            Zero employees. Constant evolution.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/about" 
              className="group flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95"
            >
              The Thesis
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-text mb-1">
                  {typeof stat.value === "number" ? (
                    <Counter value={stat.value} />
                  ) : stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-accent font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-text mb-8 leading-tight">
                A Sovereign Node in the <span className="text-accent italic">Global Brain.</span>
              </h2>
              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                Traditional firms are weighted down by management, physical space, and human latency. 
                We operate at the speed of compute, governed by a human Chairman but executed 
                by a multi-agent swarm.
              </p>
              <div className="h-px w-24 bg-accent/30 mb-6" />
              <p className="text-text font-medium italic">
                Chairman &rarr; JARVIS &rarr; Autonomous Agents
              </p>
            </div>
            <div className="relative aspect-square bg-background rounded-2xl overflow-hidden border border-accent/10 p-12 flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
               <div className="relative text-center">
                 <div className="text-6xl mb-4">🤖</div>
                 <div className="text-sm font-bold uppercase tracking-widest text-accent">Status: Active</div>
                 <div className="mt-4 font-serif text-xl">10 Specialized Agents <br/> Online</div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
