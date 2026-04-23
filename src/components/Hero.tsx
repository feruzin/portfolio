export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue-glow/20 via-background to-background z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Olá, eu sou <span className="text-brand-blue">Felipe Ruzin</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
          Engenheiro da Computação especializado em Sistemas Embarcados, IoT e Desenvolvimento Web Full Stack.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projetos" className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-3 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
            Ver Meus Projetos
          </a>
          <a href="#contato" className="bg-surface hover:bg-surface-hover border border-border text-foreground px-8 py-3 rounded-full font-medium transition-all">
            Entre em Contato
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="text-gray-400 hover:text-brand-blue transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
