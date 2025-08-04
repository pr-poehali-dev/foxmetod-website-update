import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const OtraslevyeResheniya: React.FC = () => {
  const services = [
    {
      id: 'paket-ritejl',
      title: "Пакет для ритейла",
      description: "Комплексные решения для розничной торговли: от мерчендайзинга до управления запасами",
      price: "от 180 000 ₽",
      duration: "1-3 месяца"
    },
    {
      id: 'paket-proizvodstvo',
      title: "Пакет для производства",
      description: "Оптимизация производственных процессов, lean-подходы, управление качеством",
      price: "от 250 000 ₽",
      duration: "2-4 месяца"
    },
    {
      id: 'paket-apk',
      title: "Пакет для АПК",
      description: "Специализированные решения для агропромышленного комплекса и сельского хозяйства",
      price: "от 200 000 ₽",
      duration: "2-6 месяцев"
    },
    {
      id: 'paket-services',
      title: "Пакет для услуг",
      description: "Решения для сферы услуг: клиентский сервис, стандартизация, качество",
      price: "от 150 000 ₽",
      duration: "1-3 месяца"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <Link to="/services" className="hover:text-blue-600 transition-colors">Услуги</Link>
            <Icon name="ChevronRight" size={16} />
            <span>Отраслевые решения</span>
          </div>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Отраслевые решения</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Специализированные пакеты консалтинговых услуг, адаптированные под специфику конкретных отраслей экономики
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid gap-6 mb-12">
              {services.map((service, index) => (
                <Card key={index} className="border-slate-200 hover:border-blue-300 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-slate-900 mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-slate-600 text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <div className="text-sm text-slate-600">
                          <span className="font-medium">Стоимость:</span> {service.price}
                        </div>
                        <div className="text-sm text-slate-600">
                          <span className="font-medium">Срок:</span> {service.duration}
                        </div>
                      </div>
                      <Link to={`/services/otraslevye-resheniya/${service.id}`}>
                        <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                          Подробнее
                          <Icon name="ArrowRight" className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Почему важна отраслевая экспертиза?</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Проблемы универсальных решений:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Не учитывают отраслевую специфику
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Требуют длительную адаптацию
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Игнорируют регулятивные особенности
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Не работают с отраслевыми метриками
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Упускают ключевые риски и возможности
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Преимущества отраслевого подхода:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Готовые решения для отрасли
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Быстрое внедрение (в 2-3 раза)
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Учет нормативных требований
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Отраслевые KPI и метрики
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Лучшие практики индустрии
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <Icon name="ShoppingCart" className="mr-2 text-blue-600" size={20} />
                    Ритейл
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Категорийный менеджмент</li>
                    <li>• Управление запасами</li>
                    <li>• Мерчендайзинг</li>
                    <li>• Омниканальность</li>
                    <li>• Лояльность клиентов</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <Icon name="Factory" className="mr-2 text-green-600" size={20} />
                    Производство
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Lean Manufacturing</li>
                    <li>• Управление качеством</li>
                    <li>• Планирование производства</li>
                    <li>• Снижение потерь</li>
                    <li>• TPM и OEE</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <Icon name="Wheat" className="mr-2 text-orange-600" size={20} />
                    АПК
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Агрономическое планирование</li>
                    <li>• Управление урожайностью</li>
                    <li>• Сезонное планирование</li>
                    <li>• Логистика скоропорта</li>
                    <li>• Субсидии и льготы</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <Icon name="Briefcase" className="mr-2 text-purple-600" size={20} />
                    Услуги
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Стандартизация сервиса</li>
                    <li>• Customer Journey</li>
                    <li>• Управление очередями</li>
                    <li>• NPS и CSI</li>
                    <li>• Обучение персонала</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Консультация по отрасли</CardTitle>
                  <CardDescription>
                    Обсудим специфику вашей отрасли и подберем оптимальный пакет решений
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Phone" className="mr-2" size={16} />
                    Записаться на консультацию
                  </Button>
                  <p className="text-sm text-slate-600 mt-4 text-center">
                    Консультация длится 60 минут и проводится онлайн
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-6 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Популярные запросы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 text-sm">«Оптимизация товарных остатков в розничной сети»</div>
                    <div className="text-xs text-slate-600 mt-1">Ритейл • 2-3 месяца</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 text-sm">«Внедрение Lean на производстве»</div>
                    <div className="text-xs text-slate-600 mt-1">Производство • 3-4 месяца</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 text-sm">«Планирование посевной кампании»</div>
                    <div className="text-xs text-slate-600 mt-1">АПК • 2-4 месяца</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Смежные услуги</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/services/operacionnaya-deyatelnost" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Операционная деятельность</div>
                    <div className="text-sm text-slate-600">Диагностика процессов, регламенты, ОКМ</div>
                  </Link>
                  <Link to="/services/strategiya-i-upravlenie" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Стратегия и управление</div>
                    <div className="text-sm text-slate-600">Бизнес-трекинг, OKR, стратегические сессии</div>
                  </Link>
                  <Link to="/services/cifrovaya-transformaciya" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Цифровая трансформация</div>
                    <div className="text-sm text-slate-600">Интеграция ИИ, миграция на российское ПО</div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default OtraslevyeResheniya;