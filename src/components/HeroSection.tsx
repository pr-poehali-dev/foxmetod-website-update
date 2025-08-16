import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  formData: {
    name: string;
    contact: string;
    company: string;
    description: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ formData, onInputChange, onSubmit }) => {
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
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ваш бизнес способен на большее. 
              <span className="text-primary block mt-2">Мы докажем это.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
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
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={onInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact">Телефон/Telegram для связи</Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={onInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Название компании</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={onInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Кратко опишите вашу задачу</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={onInputChange}
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
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Миссия и философия Агентства FOXMetoD</h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Мы используем наш опыт и авторскую методологию, чтобы превращать сложные процессы в понятные и управляемые системы. 
              Наша цель — помочь каждому предпринимателю построить компанию, которая работает слаженно и эффективно, приносит стабильную прибыль 
              и, самое главное, — дарит своему владельцу свободу, уверенность в будущем и удовольствие от дела его жизни.
            </p>
          </div>
        </div>
      </section>

      {/* FOXMetoD Meaning */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">FOXMetoD - это:</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Наш подход</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
    </>
  );
};

export default HeroSection;