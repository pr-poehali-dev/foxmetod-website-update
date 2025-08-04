import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'strategiya-i-upravlenie',
      title: "Стратегия и управление",
      description: "Системные решения для стратегического развития и управления бизнесом",
      icon: "TrendingUp"
    },
    {
      id: 'operacionnaya-deyatelnost',
      title: "Операционная деятельность",
      description: "Оптимизация операционных процессов и повышение эффективности",
      icon: "Settings"
    },
    {
      id: 'organizacionnaya-effektivnost',
      title: "Организационная эффективность",
      description: "Построение эффективной организационной структуры и HR-систем",
      icon: "Users"
    },
    {
      id: 'prodazhi-i-marketing',
      title: "Продажи и маркетинг",
      description: "Системное построение отделов продаж и маркетинговых стратегий",
      icon: "Target"
    },
    {
      id: 'cifrovaya-transformaciya',
      title: "Цифровая трансформация",
      description: "Внедрение современных технологий и цифровизация процессов",
      icon: "Cpu"
    },
    {
      id: 'ekspress-resheniya',
      title: "Экспресс-решения",
      description: "Быстрые решения для конкретных бизнес-задач",
      icon: "Zap"
    },
    {
      id: 'otraslevye-resheniya',
      title: "Отраслевые решения",
      description: "Специализированные пакеты решений для различных отраслей",
      icon: "Building"
    },
    {
      id: 'korporativnye-treningi',
      title: "Корпоративные тренинги",
      description: "Развитие ключевых компетенций управленческой команды",
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
            <Link key={index} to={`/services/${service.id}`} className="group">
              <Card className="h-full border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon name={service.icon} className="text-blue-600" size={24} />
                  </div>
                  <CardTitle className="text-lg text-slate-900 group-hover:text-blue-900 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;