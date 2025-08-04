import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      id: 'strategiya-i-upravlenie',
      title: "Стратегия и управление",
      description: "Системные решения для стратегического развития и управления бизнесом",
      icon: "TrendingUp",
      services: [
        "Бизнес-трекинг",
        "Стратегические сессии", 
        "Внедрение OKR",
        "Внедрение ССП/BSC",
        "Интерим-менеджмент",
        "Разработка корпоративной стратегии"
      ]
    },
    {
      id: 'operacionnaya-deyatelnost',
      title: "Операционная деятельность и бизнес-процессы",
      description: "Оптимизация операционных процессов и повышение эффективности",
      icon: "Settings",
      services: [
        "Диагностика бизнес-процессов",
        "Разработка регламентов",
        "Внедрение ОКМ",
        "Программы переобучения",
        "Стратегическое планирование рабочей силы"
      ]
    },
    {
      id: 'organizacionnaya-effektivnost',
      title: "Организационная эффективность и персонал",
      description: "Построение эффективной организационной структуры и HR-систем",
      icon: "Users",
      services: [
        "Организационный дизайн",
        "Создание системы мотивации",
        "Внедрение системного HR управления"
      ]
    },
    {
      id: 'prodazhi-i-marketing',
      title: "Продажи и маркетинг",
      description: "Системное построение отделов продаж и маркетинговых стратегий",
      icon: "Target",
      services: [
        "Построение системного отдела продаж",
        "Разработка маркетинговой стратегии"
      ]
    },
    {
      id: 'cifrovaya-transformaciya',
      title: "Цифровая трансформация и IT",
      description: "Внедрение современных технологий и цифровизация процессов",
      icon: "Cpu",
      services: [
        "Интеграция ИИ в бизнес-процессы",
        "Консалтинг по миграции на отечественные системы",
        "Запуск системы управления задачами"
      ]
    },
    {
      id: 'ekspress-resheniya',
      title: "Экспресс-решения и точечные услуги",
      description: "Быстрые решения для конкретных бизнес-задач",
      icon: "Zap",
      services: [
        "Экспертное участие в собеседовании",
        "Диагностика управленческих планерок",
        "Услуги бизнес-инженеров"
      ]
    },
    {
      id: 'otraslevye-resheniya',
      title: "Отраслевые решения",
      description: "Специализированные пакеты решений для различных отраслей",
      icon: "Building",
      services: [
        "Пакет для ритейла",
        "Пакет для производства",
        "Пакет для АПК"
      ]
    },
    {
      id: 'korporativnye-treningi',
      title: "Корпоративные тренинги",
      description: "Развитие ключевых компетенций управленческой команды",
      icon: "GraduationCap",
      services: [
        "Конфликт-менеджмент",
        "Стресс-менеджмент",
        "Эффективное делегирование",
        "Тайм-менеджмент",
        "Управление изменениями",
        "Развитие эмоционального интеллекта",
        "Формирование системного мышления",
        "Стратегия личной устойчивости"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        formData={{name: '', contact: '', company: '', description: ''}}
        onInputChange={() => {}}
        onSubmit={() => {}}
      />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Профессиональные консалтинговые услуги
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Системные решения для трансформации и развития вашего бизнеса. 
              Каждое направление — это экспертиза, проверенная на практике.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
              <div className="flex items-center">
                <Icon name="CheckCircle" className="mr-2" size={20} />
                280+ успешных проектов
              </div>
              <div className="flex items-center">
                <Icon name="TrendingUp" className="mr-2" size={20} />
                21+ млрд руб. совокупный оборот клиентов
              </div>
              <div className="flex items-center">
                <Icon name="Award" className="mr-2" size={20} />
                20+ лет экспертизы
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Направления консалтинговых услуг
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Выберите категорию услуг для получения детальной информации о решениях 
              и методологиях, применимых к вашему бизнесу
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {serviceCategories.map((category) => (
              <Link 
                key={category.id} 
                to={`/services/${category.id}`}
                className="group"
              >
                <Card className="h-full border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-white">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                      <Icon name={category.icon} className="text-blue-600" size={28} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-6 leading-relaxed">
                      {category.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-slate-700 text-sm">Включает услуги:</h4>
                      <ul className="text-sm text-slate-500 space-y-1">
                        {category.services.slice(0, 3).map((service, index) => (
                          <li key={index} className="flex items-start">
                            <Icon name="ArrowRight" className="mr-2 mt-0.5 text-blue-400" size={14} />
                            {service}
                          </li>
                        ))}
                        {category.services.length > 3 && (
                          <li className="text-blue-600 font-medium">
                            +{category.services.length - 3} услуг
                          </li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FOXMetoD */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Почему выбирают FOXMetoD
              </h2>
              <p className="text-lg text-slate-600">
                Наш подход основан на системном анализе и проверенных методологиях
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Системный подход</h3>
                <p className="text-slate-600 text-sm">Решаем задачи на системном уровне, а не точечно</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BarChart" className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Измеримые результаты</h3>
                <p className="text-slate-600 text-sm">Каждое решение подкреплено конкретными метриками</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Команда экспертов</h3>
                <p className="text-slate-600 text-sm">Аттестованные специалисты с многолетним опытом</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lightbulb" className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Авторские методологии</h3>
                <p className="text-slate-600 text-sm">Уникальные инструменты FOXMetoD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы трансформировать ваш бизнес?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Получите экспертную консультацию по выбору оптимальных решений для вашей компании
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Получить консультацию
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;