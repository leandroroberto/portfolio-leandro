import { Button } from '@/components/ui/button';
import { Download, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar/Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center animate-float">
            <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">👨‍💻</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Olá, sou o Leandro
            <span className="block text-accent">Desenvolvedor em Formação Python</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
           Aprendendo sobre <strong>Python</strong>, <strong>LangChain</strong> e <strong>Automação</strong>. 
            Para criar soluções tecnológicas simples e eficazes.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Python', 'LangChain', 'Automação', 'IA', 'Web Development', 'APIs'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href='public\curriculo_leandro.pdf'>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
              onClick={() => scrollToSection('#contato')}
            >
              <Mail className="h-5 w-5 mr-2" />
              Entre em Contato
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('#sobre')}
              className="text-white/70 hover:text-white transition-colors"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
              <span className="block text-sm mt-2">Conheça mais</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-1/4 left-10 text-white/20 font-mono text-sm hidden lg:block">
        {'<code>'}
      </div>
      <div className="absolute bottom-1/4 right-10 text-white/20 font-mono text-sm hidden lg:block">
        {'</code>'}
      </div>
      <div className="absolute top-1/3 right-1/4 text-white/20 font-mono text-xs hidden lg:block">
        def hello_world():
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-white/20 font-mono text-xs hidden lg:block">
        return "Hello, World!"
      </div>
    </section>
  );
};

export default Hero;

