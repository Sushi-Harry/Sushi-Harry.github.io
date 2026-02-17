import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen p-4 md:p-12 max-w-5xl mx-auto border-x border-terminal-dim">
      
      {/* 1. TOP STATUS BAR */}
      <header className="flex justify-between font-mono items-center border-b border-terminal-dim pb-4 mb-12 text-xs uppercase tracking-widest">
        <span>Portfolio</span>
        <span className="animate-pulse">● ACTIVE</span>
      </header>

      {/* 2. HERO / BIO */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {">"} HARRY CHAUHAN<span className="animate-pulse"><span className="bg-terminal-green text-black px-2"></span></span>
        </h1>

        <h3 className="text-2xl md:text-3xl font-bold mb-3">{"~   "}ABOUT ME</h3>
        <p className="text-xl opacity-80 max-w-xl leading-relaxed">
          Specializing in <b>Graphics Programming (C++/OpenGL)</b> <br />
          Currently working on a 3D Renderer from scratch. <br />
          In my first year of B.Tech at JIIT Sec-62, Noida <br />
          <b>Final Goal?</b> Ray Tracing on a GPU with no RT support. <br />
          <b>Why? </b>Cause not everyone wants to sell a kidney for a good GPU :/
        </p>
      </section>

      {/* 3. DIRECTORY / PROJECTS */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{"~"}/PROJECTS/</h2>
        
        <div className="space-y-8">
          {[
            { name: "3D_RENDER_ENGINE", lang: "C++", detail: "Software Ray Tracer / OpenGL" },
            { name: "FRACTAL_VISUALS", lang: "GLSL", detail: "GPU Accelerated Math" },
            { name: "SOLAR_SYSTEM_SIM", lang: "C", detail: "Matrix Transformations" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="border border-terminal-dim p-6 hover:bg-terminal-green/5 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold">0{i+1}. {item.name}</h3>
                <span className="bg-terminal-dim text-terminal-green px-2 py-1 text-xs">.{item.lang}</span>
              </div>
              <p className="opacity-60">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SKILL MATRIX */}
      <h3 className="text-2xl md:text-3xl font-bold mb-3">{"~"}/SKILLS/</h3>
      <section className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {["C/C++", "OpenGL", "GLSL", "Linux", "Raylib", "Neovim", "Figma", "Godot"].map(skill => (
          <div key={skill} className="border border-terminal-dim p-4 text-center hover:border-terminal-green transition-colors">
            {skill}
          </div>
        ))}
      </section>

      {/* 5. FOOTER / COMMAND LINE */}
      <footer className="mt-40 pt-10 border-t border-terminal-dim opacity-40 text-sm">
        <p className="text-xl"><a href="https://linkedin.com/in/harry-c-" target="_blank" className="hover:bg-terminal-green hover:text-black transition-colors cursor-pointer">$LINKEDIN=https://linkedin.com/in/harry-c-</a></p>
        <p className="text-xl"><a href="mailto:h271737@gmail.com" target="_blank" className="hover:bg-terminal-green hover:text-black transition-colors cursor-pointer">$CONTACT=h271737@gmail.com</a></p>
        <p className="text-xl"><a href="/mary.webp" target="_blank" rel="noopener noreferrer" className="hover:bg-terminal-green hover:text-black transition-colors cursor-pointer">$STATUS=looking_for_mary</a></p>
      </footer>

      {/* Visual Scanline Effect  */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
}