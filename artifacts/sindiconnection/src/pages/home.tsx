import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, CheckCircle2, Shield, Eye, TrendingUp, Building2, Users, FileText, Wrench, Scale, Phone, Mail, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/logo_1783277518875.png";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5521992240752"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
      aria-label="Contact on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.88-.653-1.473-1.46-1.646-1.758-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img src={logo} alt="Sindiconnection" className="h-10 w-10 object-contain" />
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? "text-primary" : "text-primary md:text-white"}`}>
            Sindiconnection
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Sobre", "Processo", "Resultados", "Serviços", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium hover:text-secondary transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
          <Button
            asChild
            className={
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-primary hover:bg-white/90"
            }
          >
            <a href="https://wa.me/5521992240752" target="_blank" rel="noreferrer">
              Fale Conosco
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? "text-primary" : "text-primary"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
          {["Sobre", "Processo", "Resultados", "Serviços", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button asChild className="w-full mt-4" size="lg">
            <a href="https://wa.me/5521992240752" target="_blank" rel="noreferrer">
              Fale Conosco
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [condo, setCondo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}, do condomínio ${condo}. ${message}`;
    const url = `https://wa.me/5521992240752?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-border/50 space-y-5">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-primary mb-2">
          Nome
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome completo"
          className="w-full h-12 rounded-lg border border-border px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
        />
      </div>
      <div>
        <label htmlFor="contact-condo" className="block text-sm font-semibold text-primary mb-2">
          Condomínio
        </label>
        <input
          id="contact-condo"
          type="text"
          required
          value={condo}
          onChange={(e) => setCondo(e.target.value)}
          placeholder="Nome do seu condomínio"
          className="w-full h-12 rounded-lg border border-border px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-primary mb-2">
          Mensagem
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Conte um pouco sobre o que você precisa"
          className="w-full rounded-lg border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary resize-none"
        />
      </div>
      <Button type="submit" size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 text-lg">
        Enviar pelo WhatsApp
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Ao enviar, você será redirecionado ao WhatsApp com sua mensagem pronta.
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.png"
            alt="Modern Condominium"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase">Gestão de Excelência</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Conectando Pessoas,<br/>
              <span className="text-secondary">Patrimônio</span> e Resultados.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl">
              Gestão profissional para condomínios que buscam transparência, eficiência e valorização patrimonial no Rio de Janeiro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg h-14 px-8" asChild>
                <a href="https://wa.me/5521992240752" target="_blank" rel="noreferrer">
                  Solicitar Diagnóstico
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white h-14 px-8 bg-transparent" asChild>
                <a href="#processo">
                  Conheça nosso método
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Badges - Absolute Bottom */}
        <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-primary/80 backdrop-blur-md hidden md:block">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between py-6">
              {[
                { icon: Shield, text: "Gestão Profissional" },
                { icon: Eye, text: "Transparência Total" },
                { icon: TrendingUp, text: "Orientada por Resultados" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <badge.icon className="h-6 w-6 text-secondary" />
                  <span className="font-medium text-lg">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Mobile */}
      <div className="bg-primary py-6 md:hidden">
        <div className="container mx-auto px-6 flex flex-col gap-4">
          {[
            { icon: Shield, text: "Gestão Profissional" },
            { icon: Eye, text: "Transparência Total" },
            { icon: TrendingUp, text: "Orientada por Resultados" }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-3 text-white/90">
              <badge.icon className="h-5 w-5 text-secondary" />
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-3xl transform -rotate-3 z-0"></div>
              <img
                src="/about.png"
                alt="Equipe Sindiconnection"
                className="relative z-10 rounded-2xl shadow-xl shadow-primary/10 object-cover aspect-[4/3] w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px] border border-border/50">
                <div className="flex gap-2 text-secondary mb-2">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <p className="text-sm font-semibold text-primary">Confiança e Excelência em cada decisão.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Quem Somos</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Muito além da administração condominial tradicional.
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A <strong>Sindiconnection</strong> é especializada em administração e gestão de condomínios, oferecendo soluções completas e personalizadas para síndicos e moradores. Trazemos ordem e transparência para o que normalmente é caótico.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Transparência total",
                  "Atendimento personalizado",
                  "Tecnologia e inovação",
                  "Comprometimento e ética"
                ].map((value, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <span className="font-medium text-primary">{value}</span>
                  </div>
                ))}
              </div>
              
              <blockquote className="mt-10 border-l-4 border-secondary pl-6 italic text-lg text-muted-foreground">
                "Boa gestão não é apenas administrar. É cuidar de pessoas, patrimônio e confiança."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Process / Differentiator Section */}
      <section id="processo" className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Nosso Diferencial</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              O fornecedor certo para o condomínio certo.
            </h3>
            <p className="text-lg text-muted-foreground">
              Não assumimos um condomínio às cegas. Nosso trabalho começa com um mergulho profundo na sua realidade.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {[
                { title: "Diagnóstico", desc: "Análise de histórico, saúde financeira e inadimplência." },
                { title: "Planejamento", desc: "Mapeamento de contratos e necessidades de manutenção." },
                { title: "Metas", desc: "Alinhamento com as demandas dos moradores." },
                { title: "Prioridades", desc: "Foco nos riscos e oportunidades de melhoria." },
                { title: "Resultados", desc: "Gestão executada com previsibilidade." }
              ].map((step, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow relative text-center group">
                  <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-primary mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Soluções Completas</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary">
              Serviços desenhados para a sua tranquilidade.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Administração Condominial", desc: "Gestão completa do seu condomínio com transparência e eficiência." },
              { icon: TrendingUp, title: "Gestão Financeira", desc: "Controle de receitas, despesas e inadimplência com relatórios claros." },
              { icon: Wrench, title: "Manutenção Preventiva", desc: "Planejamento e execução de manutenções para valorizar seu patrimônio." },
              { icon: Users, title: "Atendimento Personalizado", desc: "Comunicação clara e próxima com síndicos e moradores." },
              { icon: FileText, title: "Gestão de Contratos", desc: "Seleção e acompanhamento de fornecedores com qualidade e custo-benefício." },
              { icon: Scale, title: "Assembleias", desc: "Organização e condução de assembleias com transparência total." }
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-card border border-border/60 hover:border-secondary/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Resultados que Geram Valor</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Gestão com metas, transparência e previsibilidade financeira.
              </h3>
              
              <div className="space-y-4">
                {[
                  "Valorização patrimonial constante",
                  "Controle rigoroso de custos",
                  "Prestação de contas 100% transparente",
                  "Cumprimento fiel das deliberações assembleares",
                  "Planejamento de manutenções preventivas",
                  "Redução efetiva da inadimplência"
                ].map((result, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <span className="font-medium text-white/90">{result}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 text-center text-primary shadow-2xl">
              <h4 className="text-2xl font-bold mb-4">Pronto para transformar seu condomínio?</h4>
              <p className="text-muted-foreground mb-8">
                Chega de gestão amadora. Fale com nossos especialistas e agende um diagnóstico sem compromisso.
              </p>
              <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 text-lg" asChild>
                <a href="https://wa.me/5521992240752" target="_blank" rel="noreferrer">
                  Falar no WhatsApp agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Fale Conosco</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Vamos conversar sobre o seu condomínio.
              </h3>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Preencha o formulário ao lado e envie sua mensagem diretamente para o nosso WhatsApp. Respondemos rapidamente para agendar seu diagnóstico gratuito.
              </p>

              <div className="space-y-5">
                <a href="https://wa.me/5521992240752" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-colors shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">WhatsApp</p>
                    <p className="text-muted-foreground text-sm">(21) 99224-0752</p>
                  </div>
                </a>
                <a href="mailto:sindiconnection@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-colors shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">E-mail</p>
                    <p className="text-muted-foreground text-sm">sindiconnection@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background pt-20 pb-10 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-6">
                <img src={logo} alt="Sindiconnection" className="h-10 w-10 object-contain" />
                <span className="text-2xl font-bold text-primary">Sindiconnection</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Conectando Pessoas, Patrimônio e Resultados através de uma gestão profissional e inovadora no Rio de Janeiro.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-primary mb-6">Contato</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://wa.me/5521992240752" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-5 w-5" />
                    (21) 99224-0752
                  </a>
                </li>
                <li>
                  <a href="mailto:sindiconnection@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                    sindiconnection@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/sindiconnection" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                    @sindiconnection
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-primary mb-6">Localização</h4>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 mt-1" />
                <p>Rio de Janeiro, RJ<br/>Atendimento em toda a região metropolitana.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Sindiconnection. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
