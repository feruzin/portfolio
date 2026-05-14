import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TimelineItem from "@/components/TimelineItem";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

export default function Home() {
  const skills = [
    { name: "C / C++", category: "Linguagens" },
    { name: "Python", category: "Linguagens" },
    { name: "Go", category: "Linguagens" },
    { name: "SQL (PostgreSQL/Supabase)", category: "Linguagens" },
    { name: "Arduino / ESP32 / STM32", category: "Microcontroladores" },
    { name: "Raspberry Pi", category: "IoT" },
    { name: "RTSP / SIP / MQTT", category: "Protocolos" },
    { name: "Eletrônica Analógica/Digital", category: "Hardware" },
    { name: "EasyEDA / Proteus", category: "Hardware" },
    { name: "Next.js", category: "Web" },
    { name: "React", category: "Web" },
    { name: "Tailwind CSS", category: "Web" },
    { name: "APIs REST", category: "Web" },
    { name: "Node.js", category: "Web" },
    { name: "OpenCV / YOLO / OCR", category: "IA" },
    { name: "Docker", category: "Infra" },
    { name: "Linux", category: "Infra" },
    { name: "AWS", category: "Infra" },
    { name: "Redes (Mikrotik/Ubiquiti/Cisco)", category: "Infra" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />

      {/* Seção Sobre Mim */}
      <section id="sobre" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-brand-blue">Resumo Profissional</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Engenheiro da Computação formado pela Universidade Positivo (dez/2025), com foco em Sistemas Embarcados e desenvolvimento de hardware.
            Possuo conhecimentos sólidos em eletrônica analógica e digital, microcontroladores e Raspberry Pi, programação em C/C++ e Python,
            além de integração de sensores, aplicações IoT e desenvolvimento WEB. Tenho experiência prática em ambientes corporativos, redes e suporte técnico.
            Sou proativo, organizado e tenho ótima capacidade de aprendizado contínuo.
          </p>
        </div>
      </section>

      {/* Seção Projetos */}
      <section id="projetos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-blue">Projetos Relevantes</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-sm">
              <ProjectCard
                title="Sistema de Portaria Inteligente e Controle de Acesso"
                description="Solução completa de automação de segurança com integração entre hardware industrial e software. Implementação de sistema LPR utilizando YOLO e OCR para identificação veicular via fluxos RTSP. Integração via API com terminais de reconhecimento facial Hikvision. Plataforma em Next.js e orquestração com Docker."
                imageSrc="/projeto_portaria_new.jpg"
                tags={["Next.js", "Docker", "YOLO", "OCR", "IoT", "Hikvision API"]}
              />
            </div>
            <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-sm">
              <ProjectCard
                title="Aplicativo SIP e Servidor de Intercomunicação"
                description="Desenvolvimento de um aplicativo mobile em React Native com módulos nativos em Kotlin para gerenciamento de chamadas SIP/WebRTC. Integração com Firebase Push Notifications, servidor Asterisk e terminais faciais Hikvision para comunicação bidirecional em tempo real."
                imageSrc="/projeto_sip_infra.png"
                tags={["React Native", "Kotlin", "SIP / WebRTC", "Asterisk", "Firebase"]}
              />
            </div>
            <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-sm">
              <ProjectCard
                title="Miniestufa Inteligente (TCC)"
                description="Sistema de monitoramento e automação utilizando ESP32 para coleta de dados e Raspberry Pi como unidade de processamento central. Integração de sensores ambientais para controle de microclima e tomada de decisão automatizada."
                imageSrc="/projeto_estufa_new.png"
                tags={["ESP32", "Raspberry Pi", "IoT", "Sensores"]}
              />
            </div>
            <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-sm">
              <ProjectCard
                title="Outros Projetos Acadêmicos"
                description="Robótica (Seguidor de linha e Summobot), eletrônica de potência (Ponte H, Fonte ATX), instrumentação (Eletrocardiograma), esquemático de carregador para veículos elétricos e sistema de delivery em Go e AWS."
                imageSrc="/projeto_academicos_v3.png"
                tags={["Robótica", "PCB", "Golang", "AWS", "Eletrônica"]}
              />
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-10 italic">
            * As ilustrações acima foram geradas artificialmente pelo Google Gemini, baseadas em imagens reais para fins de apresentação do portfólio.
          </p>
        </div>
      </section>

      {/* Seção Competências */}
      <section id="habilidades" className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-blue">Competências Técnicas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={index} name={skill.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Experiência & Formação */}
      <section id="experiencia" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-blue">Experiência Profissional</h2>
          <div className="mb-20">
            <TimelineItem
              title="Analista de Redes de Teleprocessamento"
              subtitle="Mundivox Telecomunicações"
              date="06/2024 – 04/2025"
              description="Configuração de roteadores Mikrotik, Ubiquiti e Cisco, alocação de portas em switches layer2 e layer3, ativação de serviços em redes corporativas."
            />
            <TimelineItem
              title="Estágio em TI"
              subtitle="COHAB Curitiba"
              date="08/2023 – 06/2024"
              description="Suporte ao usuário, manutenção de estações e equipamentos, HelpDesk."
            />
            <TimelineItem
              title="Assistente Técnico"
              subtitle="Roots Movie"
              date="02/2021 – 12/2021"
              description="Manutenção de computadores e consoles, com foco em atendimento ao cliente e resolução de problemas de hardware."
              isLast={true}
            />
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center text-brand-blue">Formação Acadêmica</h2>
          <div>
            <TimelineItem
              title="Especialização em Sistemas Embarcados para a Indústria Automotiva"
              subtitle="UTFPR - Curitiba/PR"
              date="Previsão 12/2027"
              description="Foco em Sistemas Embarcados, aprofundando em arquiteturas de controle e instrumentação."
            />
            <TimelineItem
              title="Engenharia da Computação"
              subtitle="Universidade Positivo - Curitiba/PR"
              date="Conclusão 12/2025"
              description="Formação abrangente em software e hardware, com forte base em programação, eletrônica e sistemas digitais."
              isLast={true}
            />
          </div>
        </div>
      </section>


      {/* Seção Contato / Footer */}
      <section id="contato" className="py-20 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-brand-blue">Vamos Conversar?</h2>
          <p className="text-lg text-gray-400 mb-10">
            Estou sempre aberto a novas oportunidades e desafios envolvendo desenvolvimento, IoT e hardware.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <a href="mailto:fruzin2002@gmail.com" className="flex items-center text-gray-300 hover:text-brand-blue transition-colors">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              fruzin2002@gmail.com
            </a>
            <a href="https://wa.me/5542988740336" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-brand-blue transition-colors">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (42) 98874-0336
            </a>
            <a href="https://www.linkedin.com/in/felipe-ruzin" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-brand-blue transition-colors">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              LinkedIn
            </a>
            <a href="https://github.com/feruzin" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-brand-blue transition-colors">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              GitHub
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Felipe Ruzin. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </main>
  );
}
