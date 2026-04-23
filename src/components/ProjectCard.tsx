import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({ title, description, imageSrc, tags, link }: ProjectCardProps) {
  return (
    <div className="bg-surface rounded-2xl overflow-hidden border border-border hover:border-brand-blue/50 transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden bg-surface-hover">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-blue transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-background text-brand-blue-light text-xs font-medium rounded-full border border-border">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-white hover:text-brand-blue-light transition-colors mt-auto">
            Ver Projeto
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
