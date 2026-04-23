interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({ title, subtitle, date, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Linha vertical */}
      {!isLast && (
        <div className="absolute left-4 sm:left-[7.5rem] top-10 bottom-0 w-px bg-border group-hover:bg-brand-blue/50 transition-colors"></div>
      )}
      
      {/* Bolinha / Marcador */}
      <div className="absolute left-[0.5625rem] sm:left-[7.125rem] top-8 w-3 h-3 rounded-full bg-brand-blue ring-4 ring-background z-10"></div>
      
      {/* Data (visível à esquerda em telas grandes) */}
      <div className="hidden sm:block absolute left-0 top-6 w-24 text-right text-sm font-medium text-brand-blue-light">
        {date}
      </div>

      {/* Conteúdo do item */}
      <div className="bg-surface border border-border rounded-xl p-6 hover:border-brand-blue/30 transition-colors shadow-lg hover:shadow-brand-blue-glow/10">
        <span className="sm:hidden text-xs font-semibold text-brand-blue-light mb-2 block">{date}</span>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <h4 className="text-md text-gray-400 mb-4">{subtitle}</h4>
        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
}
