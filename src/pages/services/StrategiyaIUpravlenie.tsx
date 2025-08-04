import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StrategiyaIUpravlenie: React.FC = () => {
  const services = [
    {
      id: 'biznes-treking',
      title: "1.1. Бизнес-трекинг",
      subtitle: "Превращаем хаос в управляемую систему роста с измеримыми результатами",
      description: "Комплексное сопровождение, которое трансформирует хаотичное управление в прозрачную, автоматизированную систему с четкими показателями успеха.",
      price: "от 25 000 ₽",
      duration: "1-6 месяцев",
      results: ["Рост показателей на 20-40%", "Освобождение времени до 60%", "Прозрачность через ОКМ"]
    },
    {
      id: 'strategicheskie-sessii',
      title: "1.2. Стратегические сессии",
      subtitle: "Трансформируем разрозненные цели в единую стратегию развития",
      description: "Интенсивные стратегические сессии для выработки четкого плана действий и вовлечения команды.",
      price: "от 350 000 ₽",
      duration: "2-3 дня",
      results: ["Согласованная стратегия", "План реализации", "Вовлеченная команда"]
    },
    {
      id: 'vnedrenie-okr',
      title: "1.3. Внедрение OKR",
      subtitle: "Система целеполагания для достижения амбициозных результатов",
      description: "Внедрение методологии OKR для фокусировки команды на приоритетах и синхронизации действий.",
      price: "от 150 000 ₽",
      duration: "12 месяцев",
      results: ["Фокус на приоритетах", "Синхронизация целей", "Ускорение результатов"]
    },
    {
      id: 'vnedrenie-ssp-bsc',
      title: "1.4. Внедрение ССП/BSC",
      subtitle: "Сбалансированная система показателей для устойчивого роста",
      description: "Связываем видение и миссию компании с конкретными, измеримыми целями и действиями.",
      price: "от 150 000 ₽",
      duration: "6-12 месяцев",
      results: ["Стратегическая ясность", "Систематизация задач", "Снижение издержек на 15%"]
    },
    {
      id: 'interim-menedzhment',
      title: "1.5. Интерим-менеджмент",
      subtitle: "Профессиональные топ-менеджеры на аутсорсинг",
      description: "Высококвалифицированные управленцы для временного усиления команды без увеличения штата.",
      price: "от 135 000 ₽/мес",
      duration: "3-12 месяцев",
      results: ["Профессиональное управление", "Внедрение лучших практик", "Освобождение собственника"]
    },
    {
      id: 'korporativnaya-strategiya',
      title: "1.6. Разработка корпоративной стратегии в условиях деглобализации",
      subtitle: "Превращаем неопределенность в ресурс для роста",
      description: "Практическая стратегия, которая превратит вызовы деглобализации в конкурентное преимущество.",
      price: "от 450 000 ₽",
      duration: "3-6 месяцев",
      results: ["Стратегия на 3-5 лет", "План выхода на новые рынки", "Снижение геополитических рисков"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        formData={{name: '', contact: '', company: '', description: ''}}
        onInputChange={() => {}}
        onSubmit={() => {}}
      />
      
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600">Главная</Link>
            <Icon name="ChevronRight" className="mx-2" size={16} />
            <Link to="/services" className="hover:text-blue-600">Услуги</Link>
            <Icon name="ChevronRight" className="mx-2" size={16} />
            <span className="text-slate-900 font-medium">Стратегия и управление</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Стратегия и управление
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Системные решения для стратегического развития бизнеса. От постановки целей 
              до их достижения — полный цикл управленческого консалтинга.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-300">
              <div className="flex items-center">
                <Icon name="Target" className="mr-2" size={20} />
                Стратегическое планирование
              </div>
              <div className="flex items-center">
                <Icon name="TrendingUp" className="mr-2" size={20} />
                Системы целеполагания
              </div>
              <div className="flex items-center">
                <Icon name="Users" className="mr-2" size={20} />
                Управленческий консалтинг
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Услуги по стратегии и управлению
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Каждая услуга — это проверенная методология с измеримыми результатами 
              для вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <Link 
                key={service.id} 
                to={`/services/strategiya-i-upravlenie/${service.id}`}
                className="group"
              >
                <Card className="h-full border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {service.duration}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-slate-900">{service.price}</div>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-blue-900 transition-colors mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-medium text-sm">
                      {service.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-slate-700 text-sm">Ключевые результаты:</h4>
                      <ul className="text-sm text-slate-500 space-y-1">
                        {service.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <Icon name="CheckCircle" className="mr-2 mt-0.5 text-green-500" size={14} />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                        Подробнее об услуге
                        <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Category */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Почему стратегия и управление — основа роста
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Без четкой стратегии и системного управления даже самые талантливые команды 
              работают вслепую. Наши методологии создают фундамент для устойчивого развития.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Фокус на результат</h3>
                <p className="text-slate-600 text-sm">Каждое решение направлено на достижение конкретных бизнес-целей</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BarChart" className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Измеримость</h3>
                <p className="text-slate-600 text-sm">Все изменения отслеживаются через КПЭ и метрики эффективности</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Вовлечение команды</h3>
                <p className="text-slate-600 text-sm">Стратегия создается совместно с командой для максимального buy-in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы выстроить систему управления?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Получите экспертную консультацию по выбору оптимальных инструментов 
            стратегического управления для вашего бизнеса
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Обсудить стратегию
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StrategiyaIUpravlenie;