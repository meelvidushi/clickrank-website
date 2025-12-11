'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{x: number; y: number; vx: number; vy: number}> = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = 'rgba(0, 255, 170, 0.3)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-20"
      />

      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00ffaa] to-[#00aa88] rotate-45" />
            <span className="text-xl font-bold tracking-tight">CLICKRANK</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono">
            <a href="#mission" className="text-white/60 hover:text-[#00ffaa] transition-colors">MISSION</a>
            <a href="#technology" className="text-white/60 hover:text-[#00ffaa] transition-colors">TECHNOLOGY</a>
            <a href="#data" className="text-white/60 hover:text-[#00ffaa] transition-colors">DATA</a>
            <a href="https://github.com/meelvidushi/clickrank" target="_blank" className="px-4 py-2 border border-[#00ffaa] text-[#00ffaa] hover:bg-[#00ffaa] hover:text-black transition-all">
              REPOSITORY
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-radial from-[#00ffaa]/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-[1400px] w-full">
          <div className="space-y-8">
            <div className="overflow-hidden">
              <h1 className="text-[clamp(3rem,12vw,11rem)] font-black leading-[0.85] tracking-tighter animate-[slideUp_1s_ease-out]">
                CLICK<span className="text-[#00ffaa]">RANK</span>
              </h1>
            </div>
            
            <div className="max-w-3xl space-y-6 animate-[fadeIn_1s_ease-out_0.3s_backwards]">
              <div className="h-[2px] w-24 bg-gradient-to-r from-[#00ffaa] to-transparent" />
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90">
                Next-generation search ranking powered by real-time user behavior analysis and query similarity metrics
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-mono tracking-wide">
                  DYNAMIC RERANKING
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-mono tracking-wide">
                  ZERO PREPROCESSING
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-mono tracking-wide">
                  REAL-TIME ADAPTATION
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-8 animate-[fadeIn_1s_ease-out_0.6s_backwards]">
              <a 
                href="https://github.com/meelvidushi/clickrank"
                target="_blank"
                className="group relative px-10 py-5 bg-[#00ffaa] text-black font-bold text-lg overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10">ACCESS REPOSITORY</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              </a>
              <a 
                href="#mission"
                className="px-10 py-5 border-2 border-white/20 font-bold text-lg hover:border-[#00ffaa] hover:text-[#00ffaa] transition-all"
              >
                LEARN MORE
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 animate-[fadeIn_1s_ease-out_0.9s_backwards]">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#00ffaa]">01</div>
                <div className="text-sm font-mono text-white/60">SIMPLE IMPLEMENTATION</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#00ffaa]">02</div>
                <div className="text-sm font-mono text-white/60">SCALABLE ARCHITECTURE</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#00ffaa]">03</div>
                <div className="text-sm font-mono text-white/60">CONTINUOUS LEARNING</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
          <div className="text-xs font-mono text-white/40">SCROLL TO EXPLORE</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="relative py-32 px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm font-mono text-[#00ffaa] tracking-widest">MISSION_CRITICAL</div>
                <h2 className="text-6xl font-black leading-tight">
                  REDEFINING<br/>SEARCH<br/>RELEVANCE
                </h2>
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#00ffaa] via-white/20 to-transparent" />
            </div>

            <div className="space-y-8 text-lg leading-relaxed text-white/70">
              <p>
                Traditional search ranking systems fail to capture the dynamic nature of user preferences. 
                Static algorithms cannot adapt to real-time behavioral patterns, leading to suboptimal results 
                and degraded user experience.
              </p>
              <p>
                <span className="text-white font-semibold">ClickRank</span> introduces a multiplicative weighting 
                system that integrates user click data with query similarity metrics, creating a continuous 
                re-ranking mechanism that evolves with user behavior.
              </p>
           
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="relative py-32 px-8 bg-gradient-to-b from-transparent via-[#00ffaa]/5 to-transparent">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="text-sm font-mono text-[#00ffaa] tracking-widest">COMPETITIVE_ADVANTAGE</div>
            <h2 className="text-5xl md:text-6xl font-black">TECHNOLOGICAL SUPERIORITY</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "REDUCED COMPLEXITY",
                desc: "Eliminates methodological overhead and computational burden of existing SVM and multi-ranker approaches",
                metric: "10x",
                unit: "FASTER"
              },
              {
                title: "NO FEEDBACK LOOPS",
                desc: "Avoids problematic reinforcement patterns that plague traditional learning-to-rank systems",
                metric: "100%",
                unit: "STABLE"
              },
              {
                title: "MINIMAL TUNING",
                desc: "Zero extensive data requirements. No manual ranker configuration. Immediate deployment capability.",
                metric: "0",
                unit: "SETUP TIME"
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 bg-black border border-white/10 hover:border-[#00ffaa] transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ffaa]/5 blur-3xl group-hover:bg-[#00ffaa]/10 transition-all" />
                <div className="relative space-y-6">
                  <div className="space-y-2">
                    <div className="text-sm font-mono text-[#00ffaa]">[{String(i + 1).padStart(2, '0')}]</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">{item.desc}</p>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-3xl font-bold text-[#00ffaa]">{item.metric}</div>
                    <div className="text-xs font-mono text-white/40">{item.unit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="relative py-32 px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="space-y-4">
            <div className="text-sm font-mono text-[#00ffaa] tracking-widest">IMPLEMENTATION_ARCHITECTURE</div>
            <h2 className="text-5xl md:text-6xl font-black">TECHNICAL EXECUTION</h2>
          </div>

          <div className="grid gap-4">
            {[
              { 
                phase: "PHASE_01", 
                title: "Data Synthesis", 
                desc: "Generate synthetic web page collection with controlled linking structures. Establish PageRank baseline for comparative analysis.",
                tech: "Python • NetworkX • NumPy"
              },
              { 
                phase: "PHASE_02", 
                title: "Core Algorithm", 
                desc: "Implement query vector embeddings with cosine similarity computation between current and historical queries.",
                tech: "all-MiniLM-L6-v2 • Scikit-learn"
              },
              { 
                phase: "PHASE_03", 
                title: "Behavioral Simulation", 
                desc: "Deploy user interaction models to generate click patterns. Dynamic score modification based on observed behaviors.",
                tech: "Pandas • Click Models • Statistical Analysis"
              },
              { 
                phase: "PHASE_04", 
                title: "Performance Metrics", 
                desc: "Side-by-side change of web page rankings",
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 bg-gradient-to-r from-white/5 to-transparent border-l-2 border-[#00ffaa] hover:from-[#00ffaa]/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-sm font-mono text-[#00ffaa] mb-2">{item.phase}</div>
                    <div className="text-2xl font-bold">{item.title}</div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <p className="text-white/70">{item.desc}</p>
                    <div className="text-xs font-mono text-white/40">{item.tech}</div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center font-mono text-2xl text-[#00ffaa] group-hover:border-[#00ffaa] transition-all">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Access */}
      <section id="data" className="relative py-32 px-8 bg-[#00ffaa]/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm font-mono text-[#00ffaa] tracking-widest">REPOSITORY_ACCESS</div>
                <h2 className="text-5xl md:text-6xl font-black">OPEN SOURCE</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-white/70">
                  Complete implementation available on GitHub. Full access to source code, 
                  synthetic datasets, evaluation metrics, and deployment instructions.
                </p>

                <div className="bg-black/50 p-6 font-mono text-sm border border-white/10">
                  <div className="text-[#00ffaa] mb-2"># Clone repository</div>
                  <div className="text-white/60">git clone https://github.com/meelvidushi/clickrank.git</div>
                  <div className="text-white/60">cd clickrank</div>
                  <div className="text-[#00ffaa] mt-4 mb-2"># Execute implementation</div>
                                    <div className="text-white/60">cd ranker</div>

                  <div className="text-white/60">python score.py --'cars to buy'</div>
                </div>

                <a 
                  href="https://github.com/meelvidushi/clickrank"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold hover:bg-[#00ffaa] transition-all group"
                >
                  <span>CLONE REPOSITORY</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

        <div className="space-y-6">
  <div className="space-y-4 p-8 bg-black/50 border border-white/10">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold">PROJECT STRUCTURE</h3>
      <div className="w-2 h-2 bg-[#00ffaa] animate-pulse" />
    </div>

    <div className="space-y-3 font-mono text-sm">

      {/* Database folder */}
      <div className="flex items-center gap-3 text-white/60 hover:text-[#00ffaa] transition-colors">
        <span>├──</span> Database/
      </div>

      {/* ranker folder */}
      <div className="flex items-center gap-3 text-white/60 hover:text-[#00ffaa] transition-colors">
        <span>├──</span> ranker/
      </div>

      {/* .gitignore */}
      <div className="flex items-center gap-3 text-white/60 hover:text-[#00ffaa] transition-colors">
        <span>├──</span> .gitignore
      </div>

      {/* README.md */}
      <div className="flex items-center gap-3 text-white/60 hover:text-[#00ffaa] transition-colors">
        <span>├──</span> README.md
      </div>

      {/* createIndex.py */}
      <div className="flex items-center gap-3 text-white/60 hover:text-[#00ffaa] transition-colors">
        <span>├──</span> createIndex.py
      </div>

      {/* index.html */}
      <div className="flex items-center gap-3 text-white/60 hover:text-[#00ffaa] transition-colors">
        <span>└──</span> index.html
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-32 px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-12">
            <div className="text-sm font-mono text-[#00ffaa] tracking-widest">CLICKRANK_TEAM</div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                "Vidushi Meel",
                "Alton Miles", 
                "Parth Surve",
                "Yugesh Sharma"
              ].map((name, i) => (
                <div key={i} className="group relative p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00ffaa] transition-all">
                  <div className="absolute top-3 right-3 text-xs font-mono text-white/20 group-hover:text-[#00ffaa] transition-colors">
                    [{String(i + 1).padStart(2, '0')}]
                  </div>
                  <div className="space-y-3">
                    <div className="text-xl font-bold">{name}</div>
                    <div className="text-xs font-mono text-white/40">CS 547 / IR</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-[#00ffaa] to-[#00aa88] rotate-45" />
            <span className="font-mono text-sm text-white/40">CLICKRANK © 2024</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-mono">
            <a href="https://github.com/meelvidushi/clickrank" target="_blank" className="text-white/40 hover:text-[#00ffaa] transition-colors">
              GITHUB
            </a>
            <span className="text-white/20">•</span>
            <span className="text-white/40">CS 547 INFORMATION RETRIEVAL</span>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Rajdhani', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: #00ffaa;
        }

        ::selection {
          background: #00ffaa;
          color: #000;
        }
      `}</style>
    </div>
  );
}