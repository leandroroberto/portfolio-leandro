import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Retornarei em breve.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "leandrodev.roberto@gmail.com",
      link: "mailto:leandrodev.roberto@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      value: "+55 (11) 95229-9631",
      link: "tel:+5511999999999"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "https://github.com/leandroroberto",
      description: "Veja meus projetos e contribuições"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/leandro-tech",
      description: "Conecte-se comigo profissionalmente"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      name: "WhatsApp",
      url: "https://wa.me/5511952299631",
      description: "Conversa rápida e direta"
    }
  ];

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tem um projeto em mente? Quer discutir uma oportunidade? 
              Estou sempre aberto a novas conversas e colaborações.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Envie uma Mensagem
                  </CardTitle>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e retornarei em até 24 horas.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Sobre o que você gostaria de conversar?"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Descreva seu projeto, ideia ou como posso ajudá-lo..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Redes Sociais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {social.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-sm text-gray-600">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <div className="bg-primary/5 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Resposta Rápida Garantida
                </h3>
                <p className="text-sm text-gray-600">
                  Comprometo-me a responder todas as mensagens em até 24 horas. 
                  Para assuntos urgentes, prefira o WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Seja para desenvolver uma automação, criar um chatbot inteligente ou 
              construir uma aplicação web, estou aqui para transformar suas ideias em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='mailto:leandrodev.roberto@gmail.com'>
              <Button size="lg" className="px-8">
                <Mail className="h-5 w-5 mr-2" />
                Enviar Email
              </Button>
              </a>
              <a href='https://wa.me/5511952299631'>
              <Button size="lg" variant="outline" className="px-8">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

