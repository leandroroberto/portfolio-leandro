import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Heart, Code2 } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Estudos",
      description:
        "Atualmente estudando Python, automação de processos, APIs e Inteligência Artificial aplicada através de cursos, projetos práticos e estudos contínuos."
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Foco Atual",
      description:
        "Aprendendo automação com Python e Selenium, além de explorar ferramentas modernas de IA e desenvolvimento backend."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Objetivo",
      description:
        "Evoluir profissionalmente na área de tecnologia criando soluções úteis, automatizando processos e desenvolvendo projetos práticos."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Paixão",
      description:
        "Apaixonado por tecnologia, computadores e aprendizado constante desde muito cedo."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-gradient">Mim</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sou um estudante de programação apaixonado por tecnologia e atualmente
              focado em aprender Python, automação e Inteligência Artificial aplicada.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  Minha jornada com tecnologia começou há muitos anos, movida pela
                  curiosidade de entender como computadores, sistemas e aplicações
                  funcionam por trás das telas. Hoje, sigo aprofundando meus estudos
                  em <strong>Python</strong>, explorando automação de tarefas,
                  integração de APIs e soluções inteligentes.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Atualmente estou focado em aprender <strong>automação com Selenium</strong>,
                  desenvolvimento backend e ferramentas modernas de Inteligência Artificial.
                  Gosto de criar projetos práticos que me ajudem a evoluir constantemente
                  e transformar teoria em experiência real.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Acredito que a tecnologia pode simplificar processos e facilitar o dia a dia.
                  Por isso, busco aprender cada vez mais sobre automação, produtividade e
                  desenvolvimento de soluções úteis para pessoas e empresas.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-gray-600">Projetos Publicados</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1+</div>
                  <div className="text-gray-600">Ano de Estudos</div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights Cards */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="card-hover border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Estou em constante aprendizado e sempre aberto a novas oportunidades,
              projetos e conexões na área de tecnologia.
            </p>

            <button
              onClick={() => {
                const element = document.querySelector('#contato');
                if (element)
                  element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Vamos Conversar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
