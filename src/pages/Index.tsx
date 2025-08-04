import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет интеграция с Telegram
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      title: "Стратегия и управление",
      description: "Бизнес-трекинг, стратегические сессии, OKR, интерим-менеджмент",
      icon: "TrendingUp"
    },
    {
      title: "Операционная деятельность",
      description: "Диагностика процессов, регламенты, ОКМ, переобучение персонала",
      icon: "Settings"
    },
    {
      title: "Организационная эффективность",
      description: "Организационный дизайн, системы мотивации, системный HR",
      icon: "Users"
    },
    {
      title: "Продажи и маркетинг",
      description: "Системный отдел продаж, маркетинговые стратегии",
      icon: "Target"
    },
    {
      title: "Цифровая трансформация",
      description: "Интеграция ИИ, миграция на российское ПО, управление задачами",
      icon: "Cpu"
    },
    {
      title: "Экспресс-решения",
      description: "Участие в собеседованиях, настройка планерок, бизнес-инженеры",
      icon: "Zap"
    },
    {
      title: "Отраслевые решения",
      description: "Пакеты для ритейла, производства, АПК",
      icon: "Building"
    },
    {
      title: "Корпоративные тренинги",
      description: "Конфликт-менеджмент, делегирование, управление изменениями",
      icon: "GraduationCap"
    }
  ];

  const team = [
    {
      name: "Наталья Томашёва",
      role: "Генеральный директор, Интерим-менеджер, Бизнес-трекер",
      image: "/img/e04cb7ab-1c7d-4909-bbf0-5451ffda00ac.jpg",
      experience: "20+ лет опыта в управлении и автоматизации"
    },
    {
      name: "Юлия Михеенко",
      role: "Бизнес-трекер, Консультант по организационному развитию",
      image: "/img/5418a717-8518-4c40-9c23-534fa775541a.jpg",
      experience: "21+ лет опыта, эксперт по оптимизации"
    },
    {
      name: "Елена Харитоненко",
      role: "Эксперт по HR и организационному развитию",
      image: "/img/880045b8-be80-47b7-b6d5-aeccea185479.jpg",
      experience: "Специалист по системному HR управлению"
    }
  ];

  const testimonials = [
    {
      text: "Благодаря FOXMetoD мы не только выстроили четкую систему продаж, но и увеличили конверсию на 25% за полгода. Теперь я вижу реальные цифры и могу планировать рост, а не гадать.",
      author: "Генеральный директор крупной производственной компании"
    },
    {
      text: "Внедрение ОКМ с FOXMetoD стало прорывом для нашей команды. Мы перестали работать вслепую, каждый сотрудник понимает свой вклад в общий результат.",
      author: "Владелец IT-стартапа с оборотом 400 млн. руб. в год"
    },
    {
      text: "Интерим-менеджмент от FOXMetoD позволил мне делегировать операционные задачи и сосредоточиться на стратегии. Это инвестиция в реальный рост и мою личную свободу.",
      author: "Собственник ритейл-сети"
    }
  ];

  const approaches = [
    {
      title: "Системность во всем",
      description: "Мы не решаем отдельные проблемы, а строим целостные, работающие системы",
      icon: "Network"
    },
    {
      title: "Измеримый результат",
      description: "Каждое решение направлено на достижение конкретных показателей",
      icon: "BarChart3"
    },
    {
      title: "Авторская методология",
      description: "Уникальные инструменты FOXMetoD, проверенные временем",
      icon: "Lightbulb"
    },
    {
      title: "Индивидуальный подход",
      description: "Анализируем специфику бизнеса для идеальных решений",
      icon: "User"
    },
    {
      title: "Подготовка к будущему",
      description: "Делаем бизнес готовым к передовым технологиям",
      icon: "Rocket"
    },
    {
      title: "Экспертиза и профессионализм",
      description: "Команда аттестованных специалистов с глубокими знаниями",
      icon: "Award"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">FOXMetoD</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Команда</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90">Получить консультацию</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Заказать консультацию</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact">Телефон/Telegram для связи</Label>
                      <Input
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Название компании</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Кратко опишите вашу задачу</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Отправить заявку</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ваш бизнес способен на большее. 
              <span className="text-primary block mt-2">Мы докажем это.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Мы помогаем предпринимателям обрести свободу и уверенность, превращая их бизнес в слаженную и эффективную систему.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                  Получить консультацию
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Заказать консультацию</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact">Телефон/Telegram для связи</Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Название компании</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Кратко опишите вашу задачу</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Отправить заявку</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Миссия и философия Агентства FOXMetoD</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы используем наш опыт и авторскую методологию, чтобы превращать сложные процессы в понятные и управляемые системы. 
              Наша цель — помочь каждому предпринимателю построить компанию, которая работает слаженно и эффективно, приносит стабильную прибыль 
              и, самое главное, — дарит своему владельцу свободу, уверенность в будущем и удовольствие от дела его жизни.
            </p>
          </div>
        </div>
      </section>

      {/* FOXMetoD Meaning */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FOXMetoD - это:</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">F</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Foundation</h3>
              <p className="text-gray-600 text-sm">Прочный фундамент для стабильного роста</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">O</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">Оптимизация ресурсов для максимальной прибыли</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">X</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Xpertise</h3>
              <p className="text-gray-600 text-sm">Глубокая экспертиза и опыт</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">M</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">MetoD</h3>
              <p className="text-gray-600 text-sm">Методология на основе данных и аналитики</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наш подход</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {approaches.map((approach, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={approach.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для систематизации и развития вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша команда — Ваша уверенность в результате</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              За каждым успешным проектом FOXMetoD стоит команда высококвалифицированных экспертов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Icon name="Quote" className="text-primary" size={32} />
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <p className="text-sm text-gray-500 font-medium">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы систематизировать ваш бизнес и обрести свободу?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте, как FOXMetoD может трансформировать ваш бизнес
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Заказать консультацию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Заказать консультацию</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact">Телефон/Telegram для связи</Label>
                  <Input
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company">Название компании</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Кратко опишите вашу задачу</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Отправить заявку</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
              <p className="text-gray-600">
                Готовы обсудить задачи вашего бизнеса? Оставьте заявку для бесплатной консультации.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="User" className="text-primary mr-3" size={20} />
                    <div>
                      <p className="font-medium">Наталья Томашёва</p>
                      <p className="text-gray-600 text-sm">Генеральный директор</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" className="text-primary mr-3" size={20} />
                    <p>+7 (922) 022-72-25</p>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="text-primary mr-3" size={20} />
                    <p>tomasheva.natalia@yandex.ru</p>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MessageCircle" className="text-primary mr-3" size={20} />
                    <p>@natalyatomasheva</p>
                  </div>
                </div>
              </div>
              
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact">Телефон/Telegram для связи</Label>
                      <Input
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Название компании</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Кратко опишите вашу задачу</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Отправить заявку</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-2xl font-bold">FOXMetoD</span>
              </div>
              <p className="text-gray-400">
                Консалтинговое агентство для систематизации и развития бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (922) 022-72-25</p>
                <p>tomasheva.natalia@yandex.ru</p>
                <p>@natalyatomasheva</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; FOXMetoD, 2025. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;