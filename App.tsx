import React, { useState } from 'react';
import { 
  Brain, 
  Activity, 
  Clock, 
  ShieldCheck, 
  Smartphone, 
  FileText, 
  Microscope, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Zap,
  MousePointerClick,
  BarChart3,
  Quote
} from 'lucide-react';
import { Button } from './components/Button';

// --- Sub-components for clean structure ---

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
    {children}
  </span>
);

const SectionHeading: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const TestCard: React.FC<{ title: string; description: string; delay?: number }> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
    <div className="h-2 w-12 bg-blue-900 rounded-full mb-4"></div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const ComparisonCard: React.FC<{ title: string; antecedes: string; description: string }> = ({ title, antecedes, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full">
    <div className="h-2 w-12 bg-blue-900 rounded-full mb-4"></div>
    <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
    <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-3">Rastreio Funcional</p>
    <p className="text-slate-600 text-sm mb-6 flex-grow">{description}</p>
    
    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
      <p className="text-xs text-slate-400 font-bold uppercase mb-1">Antecede / Orienta</p>
      <p className="text-slate-800 font-medium text-sm">{antecedes}</p>
    </div>
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <Container>
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <Brain className="h-8 w-8 text-blue-900" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">NEURO<span className="text-blue-900">RASTREIO</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo('solucao')} className="text-slate-600 hover:text-blue-900 font-medium">Solução</button>
              <button onClick={() => scrollTo('testes')} className="text-slate-600 hover:text-blue-900 font-medium">Testes</button>
              <button onClick={() => scrollTo('ciencia')} className="text-slate-600 hover:text-blue-900 font-medium">Ciência</button>
              <Button onClick={() => scrollTo('contato')} variant="primary" className="py-2 px-4 text-sm">
                Solicitar Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollTo('solucao')} className="block w-full text-left py-2 text-slate-600 font-medium">Solução</button>
              <button onClick={() => scrollTo('testes')} className="block w-full text-left py-2 text-slate-600 font-medium">Testes</button>
              <button onClick={() => scrollTo('ciencia')} className="block w-full text-left py-2 text-slate-600 font-medium">Ciência</button>
              <div className="pt-2">
                <Button onClick={() => scrollTo('contato')} className="w-full justify-center">Solicitar Demo</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
        
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge>Para Clínicas e Psicopedagogos</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Leve a precisão de laboratório para dentro da sua <span className="text-blue-900">clínica</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Rastreio neurocognitivo funcional para crianças de 6 a 14 anos, com dados objetivos. Identifique riscos, monitore a evolução e fundamente decisões clínicas em evidências — não apenas na observação.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => scrollTo('contato')} className="text-lg px-8 shadow-lg shadow-blue-900/10">
                Solicitar Demonstração
              </Button>
              <Button onClick={() => scrollTo('testes')} variant="outline" className="text-lg px-8">
                Conhecer os Testes
              </Button>
            </div>
            <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
              <Microscope className="w-4 h-4" /> Baseado em paradigmas cognitivos clássicos amplamente consolidados na literatura científica internacional.
            </p>
          </div>
        </Container>
      </section>

      {/* Context & Problem */}
      <Section className="bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">O Contexto Clínico</h2>
              <p className="text-lg text-slate-600 mb-6">
                Na prática psicopedagógica, o maior risco não é errar o diagnóstico. É <span className="font-semibold text-slate-900">demorar para identificar o problema funcional</span> e conduzir intervenções sem dados objetivos.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 p-1 rounded">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Perda de tempo precioso</h4>
                    <p className="text-sm text-slate-600">Intervenções iniciadas sem clareza do foco funcional.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 p-1 rounded">
                    <Activity className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Falta de baseline objetivo</h4>
                    <p className="text-sm text-slate-600">Dificuldade em demonstrar evolução técnica para a família.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">A Solução NeuroRastreio</h3>
              <p className="text-slate-600 mb-6">
                Transforme percepção clínica em dado funcional objetivo em menos de 15 minutos.
              </p>
              <ul className="space-y-3">
                {[
                  "Identifique sinais precoces de risco funcional",
                  "Organize hipóteses clínicas com base em dados objetivos",
                  "Estabeleça baseline funcional cognitivo",
                  "Acompanhe a evolução ao longo do acompanhamento clínico"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-500 italic">
                  "Não é diagnóstico. É base técnica para decisão clínica qualificada."
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tests Showcase */}
      <Section id="testes">
        <Container>
          <SectionHeading 
            title="Padrão-Ouro Operacional" 
            subtitle="Utilizamos exclusivamente paradigmas cognitivos clássicos, amplamente consolidados na literatura científica internacional."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestCard 
              title="Stroop (Infantil)" 
              description="Avalia atenção inibitória e a capacidade de resistência à interferência cognitiva."
            />
            <TestCard 
              title="Flanker Task" 
              description="Mede a atenção seletiva e o processamento eficiente de estímulos conflitantes."
            />
            <TestCard 
              title="Go / No-Go" 
              description="Fundamental para avaliação do controle inibitório motor e sinais de impulsividade."
            />
            <TestCard 
              title="Corsi Blocks" 
              description="Clássico para avaliação da memória de curto prazo visuoespacial."
            />
            <TestCard 
              title="N-Back" 
              description="Standard para memória operacional e capacidade de atualização de informação."
            />
            <TestCard 
              title="Reaction Time" 
              description="Mensuração precisa da velocidade de processamento e vigilância atencional."
            />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-200">
              <Zap className="w-6 h-6 text-yellow-500 mr-3" />
              <div className="text-left">
                <h4 className="font-bold text-slate-900">Precisão Digital de Milissegundos</h4>
                <p className="text-sm text-slate-600">Tempo de reação real, sem erro humano de cronometragem.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* New Comparison Section */}
      <Section className="bg-slate-50 border-t border-slate-200">
        <Container>
          <SectionHeading 
            title="Rastreio Funcional que Antecede a Avaliação Clínica" 
            subtitle="O NeuroRastreio não substitui testes clínicos. Ele antecede, orienta e complementa."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ComparisonCard 
              title="Atenção Inibitória" 
              description="Avalia a capacidade de filtrar distrações e manter o foco no objetivo."
              antecedes="WISC, BPA-2, Conners"
            />
            <ComparisonCard 
              title="Atenção Seletiva" 
              description="Identifica a capacidade de selecionar estímulos relevantes em meio a distratores."
              antecedes="WISC, BPA-2, Conners"
            />
            <ComparisonCard 
              title="Controle Inibitório" 
              description="Mede a capacidade de frear impulsos e respostas automáticas."
              antecedes="WISC, Conners, SNAP-IV"
            />
            <ComparisonCard 
              title="Memória Visuoespacial" 
              description="Analisa a retenção e manipulação de informações visuais e espaciais."
              antecedes="WISC, RAVLT"
            />
            <ComparisonCard 
              title="Memória Operacional" 
              description="Avalia o gerenciamento ativo e a atualização de informações na mente."
              antecedes="WISC, WAIS, RAVLT"
            />
            <ComparisonCard 
              title="Velocidade de Processamento" 
              description="Mensura a rapidez na identificação e reação eficiente a estímulos."
              antecedes="WISC, WAIS, BPA-2"
            />
          </div>
          <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto italic">
            "O NeuroRastreio não substitui avaliações clínicas formais. Atua como rastreio funcional inicial para orientar decisões clínicas."
          </p>
        </Container>
      </Section>

      {/* Remote / Workflow */}
      <Section id="solucao" className="bg-blue-900 text-white">
        <Container>
          <div className="md:flex md:items-center md:justify-between mb-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Aplicação Remota via WhatsApp</h2>
              <p className="text-blue-100 text-lg mb-8">
                O consultório se estende para além do espaço físico. O WhatsApp é apenas o meio de envio; a execução ocorre em um ambiente seguro e controlado.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-bold">Profissional gera o link</h4>
                    <p className="text-blue-200 text-sm">Criação de link único e seguro no sistema.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-bold">Envio aos pais</h4>
                    <p className="text-blue-200 text-sm">Família recebe via WhatsApp para aplicação em casa.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-bold">Execução & Relatório</h4>
                    <p className="text-blue-200 text-sm">Dados retornam automaticamente processados.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-5/12 mt-12 md:mt-0">
               <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
                 <div className="flex items-center gap-3 mb-6">
                   <Smartphone className="w-8 h-8 text-green-600" />
                   <h3 className="text-xl font-bold">Valor para o Online</h3>
                 </div>
                 <ul className="space-y-4">
                   <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                     <MousePointerClick className="w-5 h-5 text-blue-600" />
                     <span className="font-medium">Triagem pré-sessão</span>
                   </li>
                   <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                     <Clock className="w-5 h-5 text-blue-600" />
                     <span className="font-medium">Redução de tempo presencial</span>
                   </li>
                   <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                     <FileText className="w-5 h-5 text-blue-600" />
                     <span className="font-medium">Relatório pronto antes da devolutiva</span>
                   </li>
                 </ul>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Report Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] bg-slate-100 border-2 border-slate-200 rounded-lg p-6 shadow-xl">
                {/* Mockup of a report */}
                <div className="w-full h-4 bg-slate-300 rounded mb-4 w-1/3"></div>
                <div className="space-y-6">
                   <div className="space-y-2">
                      <div className="w-full h-2 bg-slate-200 rounded"></div>
                      <div className="w-full h-2 bg-slate-200 rounded"></div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="text-blue-300 w-12 h-12" />
                      </div>
                      <div className="h-24 bg-teal-100 rounded-lg flex items-center justify-center">
                         <Activity className="text-teal-300 w-12 h-12" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="w-full h-2 bg-slate-200 rounded"></div>
                      <div className="w-3/4 h-2 bg-slate-200 rounded"></div>
                      <div className="w-5/6 h-2 bg-slate-200 rounded"></div>
                   </div>
                   <div className="p-4 bg-green-50 border border-green-100 rounded text-xs text-green-800">
                     Indicadores Funcionais Preservados
                   </div>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="bg-white p-2 rounded-full shadow-lg">
                     <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Badge>Automação Inteligente</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Dois relatórios. Um para o profissional. Outro para os pais.</h2>
              <p className="text-lg text-slate-600 mb-6">
                A partir de uma única aplicação, o NeuroRastreio gera automaticamente duas versões de relatório, cada uma no nível correto de leitura.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    <span className="font-bold">Relatório Clínico:</span> visão técnica completa, com indicadores funcionais e apoio à decisão profissional
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    <span className="font-bold">Relatório para Pais:</span> versão simplificada, clara e sem termos técnicos desnecessários
                  </span>
                </div>
              </div>
              <p className="mt-6 text-slate-900 font-medium">
                O profissional mantém a profundidade técnica. Os pais recebem clareza.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Routine Use Grid */}
      <Section className="bg-slate-50">
        <Container>
          <SectionHeading title="Uso na Rotina Clínica" subtitle="Versátil para diferentes momentos do acompanhamento." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: "Primeira Consulta", desc: "Baseline funcional imediato" },
              { title: "Início da Intervenção", desc: "Direcionamento técnico preciso" },
              { title: "Reavaliações", desc: "Monitoramento evolutivo" },
              { title: "Atendimento Online", desc: "Aplicação remota integrada" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Structured Anamnesis Section */}
      <Section className="bg-white border-t border-slate-100">
        <Container>
          <SectionHeading 
            title="Anamnese Estruturada que Precede o Rastreio" 
            subtitle="Antes de qualquer teste cognitivo, o NeuroRastreio organiza o contexto clínico com uma anamnese objetiva, padronizada e funcional."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
               <div className="h-2 w-12 bg-blue-900 rounded-full mb-6"></div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Anamnese Funcional Estruturada</h3>
               <p className="text-slate-600 leading-relaxed text-sm">
                 Coleta sistematizada de informações clínicas, comportamentais e contextuais, organizada para orientar o rastreio cognitivo e evitar aplicações desnecessárias ou mal direcionadas.
               </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
               <div className="h-2 w-12 bg-blue-900 rounded-full mb-6"></div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Base Técnica Antes dos Testes</h3>
               <p className="text-slate-600 leading-relaxed text-sm">
                 A anamnese antecede o rastreio, ajudando o profissional a definir foco, interpretar resultados with mais precisão e reduzir ruído clínico desde o início do acompanhamento.
               </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
               <div className="h-2 w-12 bg-blue-900 rounded-full mb-6"></div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Anamnese → Rastreio → Relatórios</h3>
               <p className="text-slate-600 leading-relaxed text-sm">
                 O profissional inicia pelo contexto clínico, aplica os testes cognitivos funcionais e recebe relatórios coerentes com a história do paciente, fortalecendo a tomada de decisão.
               </p>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-slate-400 max-w-2xl mx-auto">
            A anamnese não substitui avaliação clínica aprofundada. Ela organiza o ponto de partida técnico para o rastreio funcional.
          </p>
        </Container>
      </Section>

      {/* Professional Plan Section */}
      <Section className="bg-white">
        <Container>
          <SectionHeading 
            title="Plano profissional — versão atual" 
            subtitle="Acesso completo aos 6 testes cognitivos funcionais atualmente disponíveis no NeuroRastreio."
          />
          <div className="flex justify-center">
            <div className="w-full max-w-lg bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Plano Profissional — uso clínico individual</h3>
              <p className="text-sm text-slate-500 font-medium mb-6">Aprendentes ilimitados • aplicação clínica contínua</p>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-blue-900">R$ 97</span>
                <span className="text-slate-500 text-lg font-medium ml-2">/ ano</span>
              </div>

              <ul className="space-y-4 mb-10 text-left">
                {[
                  "Aprendentes ilimitados",
                  "6 testes cognitivos funcionais",
                  "Rastreio neurocognitivo para crianças de 6 a 14 anos",
                  "Relatório técnico para o profissional",
                  "Relatório simplificado para os pais",
                  "Aplicação remota via link seguro",
                  "Precisão temporal em milissegundos",
                  "Licença vinculada a 1 dispositivo ativo"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full text-lg py-4 mb-6">
                Adquirir assinatura por dispositivo
              </Button>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                Aprendentes ilimitados por assinatura. Cada assinatura corresponde a 1 dispositivo ativo.
              </p>
            </div>
          </div>
          <p className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto italic">
            Licença individual vinculada a dispositivo para garantir uso ético, estabilidade técnica e qualidade dos dados.
          </p>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white">
        <Container>
          <SectionHeading 
            title="Quem usa, recomenda" 
            subtitle="Profissionais que elevaram o padrão técnico de suas clínicas com o NeuroRastreio."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Paula Souza",
                role: "Psicopedagoga Clínica",
                clinic: "Clínica Integrar",
                image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                quote: "O NeuroRastreio mudou a forma como apresento os resultados para os pais. Os dados objetivos tornam a evolução da criança tangível e indiscutível."
              },
              {
                name: "Dr. Marcos Oliveira",
                role: "Neuropsicólogo",
                clinic: "Instituto Cognitivo",
                image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
                quote: "A precisão dos milissegundos nos testes de reação é algo que eu não conseguia com testes manuais. Trouxe uma segurança técnica fundamental para minha prática."
              },
              {
                name: "Fernanda Lima",
                role: "Fonoaudióloga",
                clinic: "Espaço Aprender",
                image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
                quote: "A possibilidade de enviar o link para casa agilizou muito nossa triagem inicial. Chego na primeira sessão já com dados estruturados para discutir."
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 fill-blue-100" />
                <p className="text-slate-600 mb-6 relative z-10 italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-blue-600 font-medium">{t.role}</p>
                    <p className="text-xs text-slate-500">{t.clinic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section id="contato" className="bg-white border-t border-slate-100">
        <Container>
          <div className="bg-blue-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
             {/* Abstract circles for decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Decisão clínica começa com dados objetivos.</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
              Rastreio neurocognitivo funcional para orientar a próxima sessão com base técnica real.
            </p>
            <div className="flex justify-center relative z-10">
              <Button variant="secondary" className="bg-teal-500 text-white hover:bg-teal-600 border-none text-lg px-8">
                Veja a plataforma por dentro
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200 text-sm">
        <Container>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-slate-400" />
                <span className="font-bold text-slate-700">NEURORASTREIO</span>
              </div>
              <p className="text-slate-500 mb-4">
                Ciência cognitiva. Precisão operacional. Prática clínica.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Produto</h4>
              <ul className="space-y-2 text-slate-500">
                <li>Status: Pronto para execução</li>
                <li>Público: Crianças de 6 a 14 anos</li>
                <li>Suporte Remoto</li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
               <h4 className="font-bold text-slate-900 mb-4">Segurança e Ética</h4>
               <div className="flex items-start gap-3 text-slate-500">
                 <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                 <p>
                   Ferramenta de rastreio cognitivo funcional para apoio à decision profissional. 
                   Não substitui avaliação clínica completa. Não realiza diagnóstico automático.
                 </p>
               </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-400">
            <p>© NeuroRastreio — Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido com rigor científico.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default App;