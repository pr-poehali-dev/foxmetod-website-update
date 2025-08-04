import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection: React.FC = () => {
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

  return (
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
  );
};

export default ServicesSection;