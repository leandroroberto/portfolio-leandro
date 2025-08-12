import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Heart, Code2 } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Formação",
      description: "Estudante de programação com foco em tecnologias modernas e práticas de desenvolvimento. Graduação em Desenvolvimento Mobile e cursando Pós graduação em Ciência de Dados & Inteligência Artificial."
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Especialização",
      description: "Python, LangChain, automação de processos e desenvolvimento de soluções inteligentes."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Objetivo",
      description: "Criar soluções tecnológicas que simplifiquem processos e agreguem valor aos negócios."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Paixão",
      description: "Apaixonado por tecnologia, inovação e pelo impacto positivo que a programação pode gerar."
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
              Sou um estudante apaixonado por programação, sempre em busca de novos desafios 
              e oportunidades para aplicar tecnologia na solução de problemas reais.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam 
                  por trás das telas. Hoje, me especializo em <strong>Python</strong>, uma linguagem versátil 
                  que me permite criar desde automações simples até sistemas complexos de inteligência artificial.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Com <strong>LangChain</strong>, exploro as fronteiras da IA conversacional e processamento 
                  de linguagem natural, criando aplicações que podem entender e responder de forma inteligente. 
                  A <strong>automação</strong> é minha ferramenta para eliminar tarefas repetitivas e otimizar processos.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Acredito que a tecnologia deve ser acessível e útil. Por isso, busco sempre criar soluções 
                  que não apenas funcionem bem tecnicamente, mas que também tenham um impacto positivo na 
                  vida das pessoas e nos negócios.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-gray-600">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <div className="text-gray-600">Ano de Estudo</div>
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
                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
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
              Interessado em colaborar ou saber mais sobre meu trabalho?
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
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

