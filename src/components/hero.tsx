import edImg from "../assets/ed.webp"
import { useState, useEffect } from "react"

export default function Hero(){
    function useAnimatedCount(target:number, duration:number, suffix: string, delay:number){
        const [count, setCount] = useState("0" + suffix);

        useEffect(() =>{
            const timeout = setTimeout(() =>{
                const start = performance.now();

                function update(now:number){
                    const elapsed = now-start;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3);

                    setCount(Math.floor(ease*target) + suffix);
                    if (progress < 1) {
                    requestAnimationFrame(update);
                    } else {
                    setCount(target + suffix);
                    }
                }
                requestAnimationFrame(update);
            }, delay);
            return() => clearTimeout(timeout);
        } ,[target, duration, suffix, delay]);
        return count;
    }
    const projects = useAnimatedCount(24, 1800, "+", 800);
    const experience = useAnimatedCount(3, 1200, "+", 800);
    const clients = useAnimatedCount(12, 1600, "+", 800);
    return(
        <>
            <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-20 pt-20 ">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px",}}></div>
                <div className="relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center py-24 lg:py-0">
                <div className="flex flex-col gap-6">
                    <div className="fade-up delay-1 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-indigo-400"></span>
                    <p className="text-indigo-400 text-xs tracking-[0.3em] uppercase font-light md:text-xl lg:text-2xl">Hello, I'm</p>
                    </div>
                    <div className="fade-up delay-2">
                    <h1 className="display-font text-7xl lg:text-8xl font-light leading-none shimmer-text cursor">
                        EDWIN
                    </h1>
                    </div>
                    <div className="fade-up delay-3">
                    <h2 className="text-slate-300 text-sm tracking-[0.25em] uppercase font-light lg:text-xl">
                        Frontend Web Developer
                    </h2>
                    <div className="mt-3 flex items-center gap-3">
                        <div className="h-[1px] w-12 bg-indigo-500"></div>
                        <div className="h-[1px] w-4 bg-sky-500"></div>
                        <div className="h-[1px] w-2 bg-indigo-500/40"></div>
                    </div>
                    </div>
                    <p className="fade-up delay-4 text-slate-400 text-sm leading-relaxed max-w-md font-light lg:text-xl">
                    I craft modern, responsive, and user-focused web interfaces that blend design with
                    functionality. As a frontend developer, I turn ideas into seamless digital experiences.
                    </p>
                    <div className="fade-up delay-5 flex flex-wrap gap-4 mt-2">
                    <button className="btn-primary group flex items-center gap-2 bg-indigo-600 text-white text-xs tracking-[0.15em] uppercase px-7 py-3.5 rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                        <span>View Projects</span>
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </button>
                    <button className="group flex items-center gap-2 border border-slate-600 hover:border-indigo-400 text-slate-300 hover:text-white text-xs tracking-[0.15em] uppercase px-7 py-3.5 rounded-sm transition-all duration-300">
                        <span>Get in Touch</span>
                        <svg className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M7 7h10v10"/>
                        </svg>
                    </button>
                    </div>
                    <div className="fade-up delay-5 flex items-center gap-8 mt-4 pt-6 border-t border-white/5">
                    <div className="text-center">
                        <p className="text-white text-xl font-light">{projects}</p>
                        <p className="text-slate-500 text-[10px] tracking-widest uppercase mt-1 lg:text-[16px]">Projects</p>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10"></div>
                    <div className="text-center">
                        <p className="text-white text-xl font-light">{experience}</p>
                        <p className="text-slate-500 text-[10px] tracking-widest uppercase mt-1 lg:text-[16px]">Years Exp.</p>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10"></div>
                    <div className="text-center">
                        <p className="text-white text-xl font-light">{clients}</p>
                        <p className="text-slate-500 text-[10px] tracking-widest uppercase mt-1 lg:text-[16px]">Clients</p>
                    </div>
                    </div>

                </div>
                <div className="fade-up delay-3 flex justify-center lg:justify-end">
                    <div className="relative">
                    <div className="absolute inset-0 rounded-full border border-indigo-500/20 scale-110"></div>
                    <div className="absolute inset-0 rounded-full border border-sky-500/10 scale-125"></div>
                    <div className="absolute inset-4 rounded-full bg-gradient-to-b from-indigo-600/20 to-sky-500/20 blur-xl"></div>
                    <div className="img-float relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-white/10">
                        <img src={edImg} alt="Edwin" loading="lazy" className="w-full h-full object-cover object-center"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-indigo-500 border-2 border-[#0f172a]"></div>
                    <div className="absolute top-8 left-2 w-2 h-2 rounded-full bg-sky-400/60"></div>

                    </div>
                </div>

                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-up delay-5">
                <div className="w-[1px] h-8 bg-gradient-to-b from-slate-600 to-transparent"></div>
                </div>
            </section>

        </>
    )
}