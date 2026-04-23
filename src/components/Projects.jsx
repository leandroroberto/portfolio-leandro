import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const projects = [
    {
      id: 1,
      title: "Automação Web com Selenium",
      description:
        "Em breve um projeto completo de automação web utilizando Python e Selenium para automatizar tarefas repetitivas em navegadores.",
      technologies: ["Python", "Selenium", "Automação"],
      category: "Automação",
      github: "https://github.com/leandroroberto",
      demo: null,
      featured: true
    },

    {
      id: 2,
      title: "Integração com APIs",
      description:
        "Projeto futuro focado em integração de APIs utilizando Python para consumo, tratamento e automação de dados.",
      technologies: ["Python", "APIs", "FastAPI"],
      category: "Backend",
      github: "https://github.com/leandroroberto",
      demo: null,
      featured: true
    },

    {
      id: 3,
      title: "Projetos com IA Aplicada",
      description:
        "Espaço reservado para futuros projetos utilizando Inteligência Artificial aplicada e automações inteligentes.",
      technologies: ["Python", "IA", "LangChain"],
      category: "IA",
      github: "https://github.com/leandroroberto",
      demo: null,
      featured: false
    }
  ];

  const categories = ['Todos', 'IA', 'Automação', 'Backend'];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section id="projetos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meus <span className="text-gradient">Projetos</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Atualmente estou desenvolvendo novos projetos focados em
              <strong> Python</strong>, <strong>automação</strong>,
              <strong> Selenium</strong> e
              <strong> Inteligência Artificial aplicada</strong>.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Projetos em Desenvolvimento
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="card-hover border-0 shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🚧</div>
                    </div>

                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      Em breve
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      </a>

                      {project.demo && (
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="h-5 w-5 text-gray-500 mt-2" />

            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  activeFilter === category
                    ? 'default'
                    : 'outline'
                }
                onClick={() => setActiveFilter(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="card-hover border-0 shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-4xl opacity-30">
                    {project.category === 'IA'
                      ? '🤖'
                      : project.category === 'Automação'
                      ? '⚙️'
                      : '🌐'}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </a>

                    {project.demo && (
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Novos projetos serão adicionados conforme minha evolução
              nos estudos e desenvolvimento prático.
            </p>

            <a
              href="https://github.com/leandroroberto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="px-8">
                <Github className="h-5 w-5 mr-2" />
                Acompanhar no GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
