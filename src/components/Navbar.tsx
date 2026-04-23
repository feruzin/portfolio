import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-foreground">
              Felipe<span className="text-brand-blue">Ruzin</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#sobre" className="text-gray-300 hover:text-brand-blue-light transition-colors px-3 py-2 rounded-md text-sm font-medium">Sobre Mim</a>
              <a href="#experiencia" className="text-gray-300 hover:text-brand-blue-light transition-colors px-3 py-2 rounded-md text-sm font-medium">Experiência</a>
              <a href="#habilidades" className="text-gray-300 hover:text-brand-blue-light transition-colors px-3 py-2 rounded-md text-sm font-medium">Competências</a>
              <a href="#projetos" className="text-gray-300 hover:text-brand-blue-light transition-colors px-3 py-2 rounded-md text-sm font-medium">Projetos</a>
              <a href="#contato" className="bg-brand-blue hover:bg-brand-blue-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
