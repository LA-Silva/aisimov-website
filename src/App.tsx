/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="sticky top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tighter">Aisimov</h1>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#tech" className="hover:text-gray-900">Technology</a>
            <a href="#solutions" className="hover:text-gray-900">Solutions</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-16">
        <section id="hero" className="mb-32">
          <h2 className="text-7xl font-extrabold tracking-tighter mb-8">Building the future of artificial intelligence.</h2>
          <p className="text-2xl text-gray-600 mb-10 max-w-2xl">Aisimov is developing next-generation AI agents to accelerate scientific discovery, automate complex enterprise workflows, and redefine human-machine collaboration.</p>
          <a href="#contact" className="bg-gray-900 text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">Request Demo</a>
        </section>

        <section id="about" className="mb-32">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Our Mission</h3>
          <p className="text-3xl font-medium tracking-tight text-gray-900 max-w-4xl">We believe in augmenting human potential through autonomous systems that prioritize safety, interpretability, and unprecedented performance at scale.</p>
        </section>

        <section id="tech" className="mb-32">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Adaptive Agents", desc: "Dynamic systems that learn and evolve with real-time feedback." },
              { title: "Neural Architectures", desc: "Customized transformer models optimized for reasoning and speed." },
              { title: "Efficiency Core", desc: "Hyper-optimized inference engines reducing operational latency." }
            ].map(item => (
              <div key={item.title} className="bg-gray-50 p-8 rounded-3xl">
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="mb-32">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Solutions</h3>
          <div className="space-y-8">
            <div className="border border-gray-100 p-8 rounded-3xl">
              <h4 className="text-2xl font-semibold mb-3">Scientific Discovery</h4>
              <p className="text-gray-600">Accelerating breakthroughs by scanning massive datasets to find hidden patterns in biology, material science, and physics.</p>
            </div>
            <div className="border border-gray-100 p-8 rounded-3xl">
              <h4 className="text-2xl font-semibold mb-3">Enterprise Automation</h4>
              <p className="text-gray-600">Automating complex, multi-step business processes with intelligent, human-in-the-loop autonomous agents.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 text-white p-16 rounded-3xl text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to collaborate?</h3>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">Get in touch to learn how Aisimov can accelerate your research or transform your enterprise workflows.</p>
          <a href="mailto:contact@aisimov.ai" className="bg-white text-gray-900 px-10 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors">contact@aisimov.ai</a>
        </section>
      </main>

      <footer className="p-16 text-center text-gray-500 border-t border-gray-100">© 2026 Aisimov AI. All rights reserved.</footer>
    </div>
  );
}
