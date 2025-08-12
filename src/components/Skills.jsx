import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Cog, Brain, Globe, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 60, description: "Desenvolvimento avançado, automação, IA" },
        { name: "JavaScript", level: 40, description: "Frontend e backend development" },
        { name: "SQL", level: 35, description: "Consultas complexas e otimização" },
        { name: "HTML/CSS", level: 40, description: "Desenvolvimento web responsivo" }
      ]
    },
    {
      title: "Frameworks & Bibliotecas",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "LangChain", level: 30, description: "Desenvolvimento de aplicações IA" },
        { name: "FastAPI", level: 15, description: "APIs REST de alta performance" },
        { name: "Crew AI", level: 30, description: "Desenvolvimento de aplicações IA" }
      ]
    },
    {
      title: "Ferramentas & Tecnologias",
      icon: <Cog className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 35, description: "Controle de versão avançado" },
        { name: "Linux", level: 42, description: "Administração de sistemas" },
      ]
    },
    {
      title: "Bancos de Dados",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "SQLite", level: 35, description: "Banco leve para desenvolvimento" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: [
        { name: "Resolução de Problemas", level: 37, description: "Análise e soluções criativas" },
        { name: "Aprendizado Contínuo", level: 62, description: "Adaptação a novas tecnologias" },
        { name: "Trabalho em Equipe", level: 80, description: "Colaboração e comunicação" },
        { name: "Gestão de Tempo", level: 57, description: "Organização e produtividade" }
      ]
    }
  ];

  const certifications = [
    "Instalation & Configuration - AX 2009 - Microsoft",
    "Introdução a Inteligência Artificial - Dio.Me",
    "Formação Python Fundamentals - Dio.Me",
    "ChatGpt o Essencial - Dio.Me",
  ];

  const getSkillColor = (level) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 70) return "bg-blue-500";
    if (level >= 60) return "bg-yellow-500";
    return "bg-gray-500";
  };

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
              Um conjunto abrangente de habilidades técnicas e interpessoais desenvolvidas 
              através de projetos práticos e aprendizado contínuo.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <p className="text-xs text-gray-600">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Stack Overview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Stack Tecnológico Principal
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Python", icon: "🐍" },
                { name: "LangChain", icon: "🔗" },
                { name: "Git", icon: "📝" },
              ].map((tech, index) => (
                <div key={index} className="text-center group cursor-pointer">
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
              Certificações & Cursos
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Interessado em saber mais sobre minhas competências técnicas?
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#projetos');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Ver Projetos Práticos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

