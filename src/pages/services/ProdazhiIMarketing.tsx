import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ProdazhiIMarketing: React.FC = () => {
  const services = [
    {
      id: 'sistemnyj-otdel-prodazh',
      title: "Системный отдел продаж",
      description: "Построение эффективной системы продаж от воронки продаж до CRM и мотивации",
      price: "от 300 000 ₽",
      duration: "2-3 месяца"
    },
    {
      id: 'marketingovye-strategii',
      title: "Маркетинговые стратегии",
      description: "Разработка комплексных маркетинговых стратегий и планов продвижения",
      price: "от 200 000 ₽",
      duration: "1-2 месяца"
    },
    {
      id: 'crm-avtomatizaciya',
      title: "CRM и автоматизация",
      description: "Внедрение и настройка CRM-систем, автоматизация бизнес-процессов",
      price: "от 150 000 ₽",
      duration: "3-6 недель"
    },
    {
      id: 'analitika-prodazh',
      title: "Аналитика продаж",
      description: "Создание системы аналитики и отчетности для контроля эффективности продаж",
      price: "от 120 000 ₽",
      duration: "2-4 недели"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <Link to="/services" className="hover:text-blue-600 transition-colors">Услуги</Link>
            <Icon name="ChevronRight" size={16} />
            <span>Продажи и маркетинг</span>
          </div>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Продажи и маркетинг</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Системное построение отделов продаж и маркетинговых стратегий для устойчивого роста выручки и клиентской базы
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
                      <Link to={`/services/prodazhi-i-marketing/${service.id}`}>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Почему системный подход к продажам критичен?</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Проблемы хаотичных продаж:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Нестабильная выручка и прогнозы
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Зависимость от отдельных сейлзов
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Высокая стоимость привлечения
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Низкая конверсия лидов
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Отсутствие контроля над процессом
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Результаты системного подхода:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Рост выручки на 40-80%
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Предсказуемые продажи
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Снижение CAC на 30-50%
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Рост конверсии в 2-3 раза
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Масштабируемая команда
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">Наша методология</h4>
                <p className="text-slate-600 mb-4">
                  Строим не просто отдел продаж, а полноценную sales-машину с прозрачными процессами, аналитикой и возможностью масштабирования.
                </p>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Target" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Стратегия</div>
                    <div className="text-slate-600">Анализ и планирование</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Users" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Команда</div>
                    <div className="text-slate-600">Подбор и обучение</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Settings" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Процессы</div>
                    <div className="text-slate-600">Автоматизация</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="BarChart" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Контроль</div>
                    <div className="text-slate-600">Аналитика и KPI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Бесплатная консультация</CardTitle>
                  <CardDescription>
                    Проведем аудит текущих продаж и предложим план по увеличению выручки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Phone" className="mr-2" size={16} />
                    Записаться на консультацию
                  </Button>
                  <p className="text-sm text-slate-600 mt-4 text-center">
                    Консультация длится 90 минут и проводится онлайн
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-6 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Смежные услуги</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/services/strategiya-i-upravlenie" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Стратегия и управление</div>
                    <div className="text-sm text-slate-600">Бизнес-трекинг, OKR, стратегические сессии</div>
                  </Link>
                  <Link to="/services/operacionnaya-deyatelnost" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Операционная деятельность</div>
                    <div className="text-sm text-slate-600">Диагностика процессов, регламенты, ОКМ</div>
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
  );
};

export default ProdazhiIMarketing;