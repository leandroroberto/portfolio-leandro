import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Code,
  Database,
  Cog,
  Brain,
  Users
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: <Code className="h-6 w-6" />,
      skills: [
        {
          name: "Python",
          level: 45,
          description:
            "Estudando automação, APIs e desenvolvimento backend"
        },
        {
          name: "JavaScript",
          level: 30,
          description:
            "Conhecimentos básicos em frontend e manipulação web"
        },
        {
          name: "SQL",
          level: 25,
          description:
            "Consultas básicas e estudos em banco de dados"
        },
        {
          name: "HTML/CSS",
          level: 35,
          description:
            "Criação de interfaces simples e responsivas"
        }
      ]
    },

    {
      title: "Frameworks & Bibliotecas",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        {
          name: "Selenium",
          level: 25,
          description:
            "Aprendendo automação web com Python"
        },
        {
          name: "FastAPI",
          level: 15,
          description:
            "Estudos iniciais em APIs REST"
        },
        {
          name: "LangChain",
          level: 20,
          description:
            "Explorando aplicações com IA"
        }
      ]
    },

    {
      title: "Ferramentas & Tecnologias",
      icon: <Cog className="h-6 w-6" />,
      skills: [
        {
          name: "Git & GitHub",
          level: 35,
          description:
            "Versionamento e publicação de projetos"
        },
        {
          name: "Linux",
          level: 30,
          description:
            "Uso básico para desenvolvimento e estudos"
        },
        {
          name: "Vercel",
          level: 25,
          description:
            "Deploy de projetos pessoais"
        }
      ]
    },

    {
      title: "Banco de Dados",
      icon: <Database className="h-6 w-6" />,
      skills: [
        {
          name: "SQLite",
          level: 25,
          description:
            "Banco leve utilizado em projetos de estudo"
        },

        {
          name: "MySQL",
          level: 20,
          description:
            "Aprendendo modelagem e consultas básicas"
        }
      ]
    },

    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: [
        {
          name: "Resolução de Problemas",
          level: 65,
          description:
            "Persistência na busca por soluções práticas"
        },

        {
          name: "Aprendizado Contínuo",
          level: 80,
          description:
            "Sempre estudando novas tecnologias"
        },

        {
          name: "Organização",
          level: 60,
          description:
            "Compromisso com evolução constante"
        },

        {
          name: "Curiosidade Tecnológica",
          level: 85,
          description:
            "Interesse constante por tecnologia e inovação"
        }
      ]
    }
  ];

  const certifications = [
    "Introdução à Inteligência Artificial - DIO",
    "Python Fundamentals - DIO",
    "ChatGPT Essentials - DIO",
    "Estudos em Automação com Python"
  ];

  return (
    <section id="habilidades" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Minhas <span className="text-gradient">Habilidades</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tecnologias e ferramentas que venho estudando e praticando
              durante minha jornada de aprendizado em desenvolvimento,
              automação e Inteligência Artificial.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="card-hover border-0 shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {category.icon}
                    </div>

                    <span className="text-lg">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">
                          {skill.name}
                        </span>

                        <Badge
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill.level}%
                        </Badge>
                      </div>

                      <Progress
                        value={skill.level}
                        className="h-2"
                      />

                      <p className="text-xs text-gray-600">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Stack */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Tecnologias em Estudo
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Python", icon: "🐍" },
                { name: "Selenium", icon: "⚙️" },
                { name: "GitHub", icon: "🐙" },
                { name: "APIs", icon: "🔗" },
                { name: "Automação", icon: "🤖" },
                { name: "FastAPI", icon: "🚀" },
                { name: "IA", icon: "🧠" },
                { name: "SQL", icon: "🗄️" },
                { name: "JavaScript", icon: "🟨" },
                { name: "HTML/CSS", icon: "🌐" },
                { name: "Git", icon: "📂" },
                { name: "Linux", icon: "🐧" }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-primary/10 transition-colors">
                    {tech.icon}
                  </div>

                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Cursos & Certificações
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      ✓
                    </span>
                  </div>

                  <span className="text-gray-700 font-medium">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Atualmente focado em evoluir meus conhecimentos através
              de projetos práticos e aprendizado contínuo.
            </p>

            <button
              onClick={() => {
                const element =
                  document.querySelector('#projetos');

                if (element)
                  element.scrollIntoView({
                    behavior: 'smooth'
                  });
              }}
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Ver Projetos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
