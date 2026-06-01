export default function Skills(){
    return(
        <div className="relative bg-[#0f172a] py-10 px-6 overflow-hidden">
    <h2 className="text-3xl text-center md:text-4xl font-semibold text-slate-100 mb-3 tracking-tight">
      Skills & Expertise
    </h2>
    <p className="text-slate-500  text-center  mb-14 text-sm lg:text-xl">
      Technologies and tools I use to craft modern web experiences.
    </p>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="skill-card group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 text-left
                  overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.15] hover:bg-white/[0.05]">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: "radial-gradient(ellipse at top left, rgba(99,102,241,0.12), transparent 65%)"}}></div>
        <div className="relative z-10">
          <div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"  className="w-6 h-6 
            text-indigo-400 fill-current"> <g>
            <circle cx="420.9" cy="296.5" r="45.7"/>
            <path d="M520.5 78.1c-52.2-30.2-123.6-19.2-183.3 26.2-59.7-45.4-131.1-56.4-183.3-26.2-52.2 30.2-76.5 96.5-66.2 173.4-63.4 24.7-104.5 66.2-104.5 111s41.1 86.3 104.5 111c-10.3 76.9 14 143.2 66.2 173.4 52.2 30.2 123.6 19.2 183.3-26.2 59.7 45.4 131.1 56.4 183.3 26.2 52.2-30.2 76.5-96.5 66.2-173.4 63.4-24.7 104.5-66.2 104.5-111s-41.1-86.3-104.5-111c10.3-76.9-14-143.2-66.2-173.4zM420.9 341.2c-24.6 0-44.7-20.1-44.7-44.7s20.1-44.7 44.7-44.7 44.7 20.1 44.7 44.7-20.1 44.7-44.7 44.7z"/>
            </g>
          </svg>
          </div>
          <h3 className="text-slate-200 font-semibold text-base mb-5 lg:text-[1.4rem]">Frontend</h3>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-slate-300 transition-colors">
              <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path fill="#e44d26" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.418 10.015-112.076z"/>
                <path fill="#f16529" d="M64 116.8l36.284-10.073 8.562-95.832H64z"/>
                <path fill="#ebebeb" d="M64 52.455H45.788l-1.244-13.988H64V25.289H29.021l.329 3.686 3.382 37.878H64zm0 36.258l-.061.017-15.327-4.14-.979-10.975H34.337l1.929 21.609 27.664 7.668.07-.019z"/>
                <path fill="#fff" d="M63.952 52.455v13.178h16.886l-1.584 17.654-15.302 4.143v13.708l27.682-7.661.203-2.274 3.132-35.057.325-3.691H63.952zm0-27.166v13.178h33.164l.276-3.092.628-6.898.329-3.188z"/>
              </svg>HTML5
            </li>
            <li className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-slate-300 transition-colors">
              <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path fill="#1572b6" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.418 10.015-112.076z"/>
              <path fill="#33a9dc" d="M64 116.8l36.284-10.073 8.562-95.832H64z"/>
              <path fill="#fff" d="M64 52.455H29.021l1.442 15.932H64V52.455zm0-27.166H27.134l1.443 15.932H64V25.289zm0 55.14l-.061.017-15.327-4.14-.979-10.975H34.337l1.929 21.609 27.664 7.668.07-.019V80.429z"/>
              <path fill="#ebebeb" d="M63.952 52.455v15.932h15.837l-1.487 16.621-14.35 3.886v16.6l27.682-7.661.203-2.274 3.132-35.057.325-3.691-1.212-.356H63.952zm0-27.166v15.932H96.59l.276-3.092.628-6.898.329-3.188-1.08-.754H63.952z"/>
            </svg>CSS3
            </li>
            <li className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-slate-300 transition-colors">
              <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="124" height="124" rx="4" fill="#f7df1e"/>
              <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.036l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.272z"/>
            </svg>JavaScript
            </li>
            <li className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-slate-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 lg:w-[1.4rem] fill-current text-[#38bdf8]">
                <path d="M6 32c6-3 12-3 18 0 6 3 12 3 18 0v4c-6 3-12 3-18 0-6-3-12-3-18 0v-4zm0-12c6-3 12-3 18 0 6 3 12 3 18 0v4c-6 3-12 3-18 0-6-3-12-3-18 0v-4zm0-12c6-3 12-3 18 0 6 3 12 3 18 0v4c-6 3-12 3-18 0-6-3-12-3-18 0v-4z"/>
              </svg> Tailwind CSS
            </li> 
            <li className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-slate-300 transition-colors">
             <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="124" height="124" rx="4" fill="#007acc"/>
              <path fill="#fff" d="M19.373 54.729h26.17v7.91H35.87v35.832H26.7V62.638H19.373v-7.91zm55.402 0h-9.154v17.74h-4.714v-17.74h-9.154v-7.91h23.022v7.91zm2.824 26.938c1.487 1.453 3.843 2.741 7.023 2.741 2.849 0 4.658-.873 4.658-2.576 0-1.703-1.51-2.578-5.353-3.613-4.981-1.337-9.218-3.277-9.218-9.077 0-5.798 4.712-9.39 11.462-9.39 3.78 0 7.019.953 9.524 2.99l-3.513 6.259c-1.704-1.26-3.812-2.108-6.011-2.108-2.531 0-3.872.848-3.872 2.41 0 1.648 1.455 2.36 5.38 3.43 5.341 1.448 9.256 3.481 9.256 9.258 0 5.778-4.416 9.632-12.061 9.632-4.086 0-7.931-1.177-10.721-3.609l3.446-6.347z"/>
            </svg>TypeScript
            </li>
            <li className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-slate-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="20" height="20">
                <ellipse cx="64" cy="64" rx="55" ry="20.8" fill="none" stroke="#61dafb" stroke-width="6"/>
                <ellipse cx="64" cy="64" rx="55" ry="20.8" fill="none" stroke="#61dafb" stroke-width="6" transform="rotate(60 64 64)"/>
                <ellipse cx="64" cy="64" rx="55" ry="20.8" fill="none" stroke="#61dafb" stroke-width="6" transform="rotate(120 64 64)"/>
                <circle cx="64" cy="64" r="7" fill="#61dafb"/>
              </svg> React.js
            </li>
            <li className="h-px bg-white/[0.06] my-1"></li>
            <li className="flex items-center gap-2.5 text-slate-500 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 lg:text-[1.4rem]"></span> Responsive Design
            </li>
            <li className="flex items-center gap-2.5 text-slate-500 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 lg:text-[1.4rem]"></span> Accessibility
            </li>
          </ul>
        </div>
      </div>
      <div className="skill-card group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 text-left
                  overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.15] hover:bg-white/[0.05]">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style={{background: "radial-gradient(ellipse at top left, rgba(236,72,153,0.10), transparent 65%)"}}></div>
        <div className="relative z-10 ">
          <div className="w-11 h-11 rounded-xl bg-pink-500/15 flex items-center justify-center mb-5">
            <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path fill="#0acf83" d="M45.5 129c11.874 0 21.5-9.626 21.5-21.5V86H45.5C33.626 86 24 95.626 24 107.5S33.626 129 45.5 129z"/>
              <path fill="#a259ff" d="M24 64.5C24 52.626 33.626 43 45.5 43H67v43H45.5C33.626 86 24 76.374 24 64.5z"/>
              <path fill="#f24e1e" d="M24 21.5C24 9.626 33.626 0 45.5 0H67v43H45.5C33.626 43 24 33.374 24 21.5z"/>
              <path fill="#ff7262" d="M67 0h21.5C100.374 0 110 9.626 110 21.5S100.374 43 88.5 43H67V0z"/>
              <path fill="#1abcfe" d="M110 64.5c0 11.874-9.626 21.5-21.5 21.5S67 76.374 67 64.5 76.626 43 88.5 43 110 52.626 110 64.5z"/>
            </svg>
          </div>
          <h3 className="text-slate-200 font-semibold text-base mb-5 lg:text-[1.4rem]">UI / UX</h3>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-slate-300 transition-colors">
              <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path fill="#0acf83" d="M45.5 129c11.874 0 21.5-9.626 21.5-21.5V86H45.5C33.626 86 24 95.626 24 107.5S33.626 129 45.5 129z"/>
                <path fill="#a259ff" d="M24 64.5C24 52.626 33.626 43 45.5 43H67v43H45.5C33.626 86 24 76.374 24 64.5z"/>
                <path fill="#f24e1e" d="M24 21.5C24 9.626 33.626 0 45.5 0H67v43H45.5C33.626 43 24 33.374 24 21.5z"/>
                <path fill="#ff7262" d="M67 0h21.5C100.374 0 110 9.626 110 21.5S100.374 43 88.5 43H67V0z"/>
                <path fill="#1abcfe" d="M110 64.5c0 11.874-9.626 21.5-21.5 21.5S67 76.374 67 64.5 76.626 43 88.5 43 110 52.626 110 64.5z"/>
              </svg>Figma → Code
            </li>
            <li className="h-px bg-white/[0.06] my-1"></li>
            <li className="flex items-center gap-2.5 text-slate-500 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 lg:text-[1.4rem]"></span> Modern UI Design
            </li>
            <li className="flex items-center gap-2.5 text-slate-500 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 lg:text-[1.4rem]"></span> Mobile-First Design
            </li>
            <li className="flex items-center gap-2.5 text-slate-500 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 lg:text-[1.4rem]"></span> User Experience
            </li>
          </ul>
        </div>
      </div>
      <div className="skill-card group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 text-left
                  overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.15] hover:bg-white/[0.05]">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style={{background: "radial-gradient(ellipse at top left, rgba(14,165,233,0.10), transparent 65%)"}}></div>
        <div className="relative z-10">
          <div className="w-11 h-11 rounded-xl bg-sky-500/15 flex items-center justify-center mb-5">
            <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path fill="#f05032" d="M124.737 58.378L69.621 3.264a8.687 8.687 0 00-12.284 0l-12.22 12.22 15.52 15.52a10.294 10.294 0 0113.012 13.085l14.952 14.952a10.292 10.292 0 0110.345 2.476 10.3 10.3 0 010 14.563 10.3 10.3 0 01-14.563 0 10.306 10.306 0 01-2.207-11.133l-13.948-13.948v36.693a10.3 10.3 0 012.717 19.777 10.302 10.302 0 01-14.119-9.482 10.3 10.3 0 015.68-9.196v-37.09a10.28 10.28 0 01-5.568-5.517l-15.37-15.37-40.558 40.55a8.688 8.688 0 000 12.283l55.117 55.117a8.687 8.687 0 0012.284 0l55.117-55.117a8.689 8.689 0 00-.002-12.285z"/>
            </svg>
          </div>
          <h3 className="text-slate-200 font-semibold text-base mb-5 lg:text-[1.4rem]">Tools</h3>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-slate-300 transition-colors">
              <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path fill="#38bdf8" d="M124.737 58.378L69.621 3.264a8.687 8.687 0 00-12.284 0l-12.22 12.22 15.52 15.52a10.294 10.294 0 0113.012 13.085l14.952 14.952a10.292 10.292 0 0110.345 2.476 10.3 10.3 0 010 14.563 10.3 10.3 0 01-14.563 0 10.306 10.306 0 01-2.207-11.133l-13.948-13.948v36.693a10.3 10.3 0 012.717 19.777 10.302 10.302 0 01-14.119-9.482 10.3 10.3 0 015.68-9.196v-37.09a10.28 10.28 0 01-5.568-5.517l-15.37-15.37-40.558 40.55a8.688 8.688 0 000 12.283l55.117 55.117a8.687 8.687 0 0012.284 0l55.117-55.117a8.689 8.689 0 00-.002-12.285z"/>
              </svg> Git
            </li>
            <li className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-slate-300 transition-colors">
              <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path fill="#cbd5e1" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.103 64 5.103z"/>
              </svg> GitHub
            </li>
            <li className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-slate-300 transition-colors">
              <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path fill="#007acc" d="M90.767 11.239l-33.674 30.68L39.009 28.57 28.082 34.3l21.275 19.018L28.082 72.35l11.085 5.729 18.03-13.363 33.57 30.634L99.918 90V38L90.767 11.239zM99.918 55.393v17.214L86.3 64l13.618-8.607z"/>
              </svg> VS Code
            </li>
            <li className="h-px bg-white/[0.06] my-1"></li>
            <li className="flex items-center gap-2.5 text-slate-500 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 lg:text-[1.4rem]"></span> Debugging
            </li>
          </ul>
        </div>
      </div>
      <div className="skill-card group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 text-left
                  overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.15] hover:bg-white/[0.05]">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style={{background: "radial-gradient(ellipse at top left, rgba(16,185,129,0.10), transparent 65%)"}}></div>
        <div className="relative z-10">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-5">
           <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path fill="#3c873a" d="M66.958 4.192a5.853 5.853 0 00-5.916 0L8.398 34.764C5.88 36.235 4 39.001 4 41.937v56.126c0 2.935 1.88 5.701 4.398 7.172l52.644 30.573a5.853 5.853 0 005.916 0l52.644-30.573c2.518-1.471 4.398-4.237 4.398-7.172V41.937c0-2.936-1.88-5.702-4.398-7.173L66.958 4.192zm-2.958 14.2l45.8 26.607v53.002L64 124.608 18.2 98.001V45.999L64 18.392z"/>
            </svg>

          </div>
          <h3 className="text-slate-200 font-semibold text-base mb-5 lg:text-[1.4rem]">Other</h3>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-slate-300 transition-colors">
              <svg viewBox="0 0 128 128" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path fill="#34d399" d="M66.958 4.192a5.853 5.853 0 00-5.916 0L8.398 34.764C5.88 36.235 4 39.001 4 41.937v56.126c0 2.935 1.88 5.701 4.398 7.172l52.644 30.573a5.853 5.853 0 005.916 0l52.644-30.573c2.518-1.471 4.398-4.237 4.398-7.172V41.937c0-2.936-1.88-5.702-4.398-7.173L66.958 4.192zm-2.958 14.2l45.8 26.607v53.002L64 124.608 18.2 98.001V45.999L64 18.392z"/>
              </svg>REST APIs
            </li>
            <li className="h-px bg-white/[0.06] my-1"></li>
            <li className="flex items-center gap-2.5 text-slate-500 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 lg:text-[1.4rem]"></span> Performance Optimization
            </li>
            <li className="flex items-center gap-2.5 text-slate-500 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 lg:text-[1.4rem]"></span> Clean Code
            </li>
            <li className="flex items-center gap-2.5 text-slate-500 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 lg:text-[1.4rem]"></span> Problem Solving
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
    )
}