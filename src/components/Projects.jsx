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
      title: "Chatbot Inteligente com LangChain",
      description: "Sistema de chatbot avançado usando LangChain para processamento de linguagem natural, capaz de responder perguntas complexas e manter contexto de conversação.",
      image: "/assets/coming_soon.png",
      technologies: ["Python", "LangChain", "OpenAI", "Streamlit"],
      category: "IA",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Assistente Virtual",
      description: "Assistente virtual com reconhecimento de voz e processamento de comandos naturais usando IA.",
      image: "/assets/coming_soon.png",
      technologies: ["Python", "SpeechRecognition", "LangChain", "TTS"],
      category: "IA",
      github: "https://github.com",
      demo: null,
      featured: false
    }
  ];

  const categories = ['Todos', 'IA', 'Automação', 'Web'];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

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
              Uma seleção dos meus trabalhos mais recentes, demonstrando habilidades em 
              Python, LangChain, automação e desenvolvimento web.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Projetos em Destaque</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="card-hover border-0 shadow-lg overflow-hidden">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🚀</div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      em breve
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Button>
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
                variant={activeFilter === category ? "default" : "outline"}
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
              <Card key={project.id} className="card-hover border-0 shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-4xl opacity-30">
                    {project.category === 'IA' ? '🤖' : 
                     project.category === 'Automação' ? '⚙️' : '🌐'}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
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
              Quer ver mais projetos ou discutir uma colaboração?
            </p>
            <a href='https://github.com/leandroroberto'>
            <Button size="lg" className="px-8">
              <Github className="h-5 w-5 mr-2" />
              Ver Todos no GitHub
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

