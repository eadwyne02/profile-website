import { useNavigate } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
export default function Header(){
    const navigate = useNavigate()
    const [isOpen, setIsOpen ] = useState(false)
    const hamburgerRef = useRef<HTMLButtonElement> (null);
    const mobileMenuRef = useRef<HTMLDivElement> (null)

    // const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    useEffect(() =>{
        const handleOutsideClick = (e: MouseEvent) =>{
            if(
                hamburgerRef.current && mobileMenuRef.current && !hamburgerRef.current.contains(e.target as Node) && !mobileMenuRef.current.contains(e.target as Node)
            ){
                closeMenu()
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);
    return(
        <>
        <div className="flex justify-between items-center fixed top-0 left-0 right-0 z-50 h-20 bg-[#0f172a]/60 backdrop-blur-lg border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-6 pl-6 lg:pl-14">
                <h3 className="text-white font-light tracking-widest uppercase text-lg lg:text-2xl">EDWIN</h3>
                <div className="hidden lg:flex items-center gap-1 ml-4">
                    <div className="bg-white/20 h-[1px] w-32 mr-3"></div>
                    <a href="https://wa.me/9052870113" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-lg text-white/40 hover:text-green-400 hover:bg-green-400/10 border border-transparent hover:border-green-400/20 transition-all duration-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.549 4.103 1.51 5.833L.055 23.27a.75.75 0 00.916.916l5.44-1.455A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 01-4.951-1.356l-.355-.211-3.676.984.985-3.595-.231-.371A9.694 9.694 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                        </svg>
                    </a>
                    <a href="https://x.com/eadwyne02" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-lg text-white/40 hover:text-sky-400 hover:bg-sky-400/10 border border-transparent hover:border-sky-400/20 transition-all duration-200">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/eadwyne02" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                    </a>
                </div>
            </div>
             <button ref={hamburgerRef} onClick={toggleMenu} className="flex md:hidden pr-6 flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer">
                <span className={`block w-6 h-[1.5px] bg-white/70 transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                <span className={`block w-6 h-[1.5px] bg-white/70 transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block w-6 h-[1.5px] bg-white/70 transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>
            <div className="hidden md:flex items-center h-full px-[60px] bg-white/5 border-l border-white/10">
                <nav className="flex items-center gap-2 h-full">
                    {[
                    { label: "Home", action: () => navigate("/") },
                    { label: "About", action: () => navigate("/about") },
                    { label: "Projects", action: () => navigate("/projects") },
                    { label: "Contact", action: () => navigate("/contact") },
                    ].map(({ label, action }) => (
                    <button key={label} onClick={action} className="relative text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-200 px-3 py-1 lg:text-[1.1rem] group">
                        {label}
                        <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-in-out" />
                    </button>))}
                </nav>
            </div>
        </div>
        <div ref={mobileMenuRef} className={`${isOpen ? "flex" : "hidden"} md:hidden fixed top-20 left-0 right-0 z-40 flex-col items-start gap-2 px-6 py-6 bg-[#0f172a]/95 backdrop-blur-lg border-b border-white/10`}>
            <a href="/" onClick={closeMenu} className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-200 px-3 py-2 w-full">Home</a>
            <a href="/about" onClick={closeMenu} className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-200 px-3 py-2 w-full">About</a>
            <a href="/projects" onClick={closeMenu} className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-200 px-3 py-2 w-full">Projects</a>
            <a href="/contact" onClick={closeMenu} className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-200 px-3 py-2 w-full">Contact</a>
        </div>
        </>
    )
}