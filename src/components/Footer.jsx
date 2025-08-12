import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Contato', href: '#contato' }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/leandroroberto",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/leandro-tech",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:leandrodev.roberto@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">💻</span>
              </div>
              <span className="text-2xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Desenvolvedor em formação Python especializando-se em LangChain, automação e soluções inteligentes. 
              Transformando ideias em código que faz a diferença.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <p>São Paulo, SP - Brasil</p>
              <a
                href="mailto:leandrodev.roberto@gmail.com"
                className="block hover:text-white transition-colors"
              >
                leandrodev.roberto@gmail.com
              </a>
              <a
                href="tel:+5511952299631"
                className="block hover:text-white transition-colors"
              >
                +55 (11) 95229-9631
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} DevPortfolio. Feito com</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>e muito código.</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>Construído com:</span>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">Tailwind</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">Vite</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            Sempre aberto a novas oportunidades e colaborações. 
            <button
              onClick={() => scrollToSection('#contato')}
              className="text-primary hover:text-primary/80 ml-1 underline"
            >
              Vamos conversar!
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

