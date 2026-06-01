export default function Footer(){
    return(
        <div className="relative bg-[#0f172a] py-14 px-6 overflow-hidden">
            <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px]"></div>
            <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full bg-sky-500/10 blur-[100px]"></div>
            <div className="relative z-10 max-w-[1100px] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/[0.08] pb-8">
                <h3 className="display-font text-3xl text-slate-100 shimmer-text">
                    EDWIN
                </h3>
                <div className="flex items-center gap-4">

                    <a href="https://wa.me/9052870113" target="_blank" className="w-11 h-11 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center rounded-lg text-white/40 hover:text-green-400 hover:bg-green-400/10 border border-transparent hover:border-green-400/20 transition-all duration-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.549 4.103 1.51 5.833L.055 23.27a.75.75 0 00.916.916l5.44-1.455A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 01-4.951-1.356l-.355-.211-3.676.984.985-3.595-.231-.371A9.694 9.694 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/eadwyne02" target="_blank" className="w-11 h-11 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center rounded-lg text-white/40  hover:bg-white/[0.1] hover:border-white/20 transition">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                    </a>
                    <a href="https://x.com/eadwyne02" target="_blank" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] rounded-lg text-white/40 hover:bg-white/[0.1] hover:border-white/20 transition">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/edwin-adeyi-samuel-b9b791320" target="_blank" className="group w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-blue-500/20 hover:border-blue-400/40 transition">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400 group-hover:text-blue-400 transition-colors duration-200">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>

                    <a href="https://instagram.com/eadwyne02" target="_blank" className="group w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-pink-500/20 hover:border-pink-400/40 transition">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400 group-hover:text-pink-400 transition-colors duration-200">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                    </a>
                </div>
                </div>
                <div className="text-center mt-6">
                <p className="text-slate-500 text-sm tracking-wide">
                    © 2026 <span className="text-slate-300">Adeyi-Samuel Edwin</span>. All rights reserved.
                </p>
                </div>

            </div>
        </div>
    )
}