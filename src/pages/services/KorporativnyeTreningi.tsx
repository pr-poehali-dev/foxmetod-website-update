import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const KorporativnyeTreningi: React.FC = () => {
  const services = [
    {
      id: 'konflikt-menedzhment',
      title: "Конфликт-менеджмент",
      description: "Обучение навыкам работы с конфликтными ситуациями и их профилактике в коллективе",
      price: "от 80 000 ₽",
      duration: "2-3 дня"
    },
    {
      id: 'delegirovanie',
      title: "Эффективное делегирование",
      description: "Практические навыки постановки задач, контроля и мотивации подчиненных",
      price: "от 70 000 ₽",
      duration: "1-2 дня"
    },
    {
      id: 'upravlenie-izmeneniyami',
      title: "Управление изменениями",
      description: "Методы проведения изменений в компании с минимальным сопротивлением персонала",
      price: "от 90 000 ₽",
      duration: "2-3 дня"
    },
    {
      id: 'liderstvo',
      title: "Развитие лидерства",
      description: "Комплексная программа развития лидерских качеств для управленческой команды",
      price: "от 120 000 ₽",
      duration: "3-5 дней"
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
            <span>Корпоративные тренинги</span>
          </div>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Корпоративные тренинги</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Практические тренинги для развития ключевых управленческих компетенций и повышения эффективности командной работы
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
                      <Link to={`/services/korporativnye-treningi/${service.id}`}>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Почему корпоративное обучение критично?</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Проблемы неразвитых компетенций:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Частые конфликты в коллективе
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Неэффективное делегирование задач
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Сопротивление изменениям
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Низкая мотивация команды
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Отсутствие лидеров в компании
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Результаты обучения:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Снижение конфликтов на 60-80%
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Рост продуктивности на 25-40%
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Быстрая адаптация к изменениям
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Высокая вовлеченность персонала
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Сильная управленческая команда
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">Наш подход к обучению</h4>
                <p className="text-slate-600 mb-4">
                  Мы не проводим теоретические лекции, а фокусируемся на практических кейсах из вашего бизнеса. 80% времени — это отработка навыков на реальных ситуациях.
                </p>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Search" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Диагностика</div>
                    <div className="text-slate-600">Анализ потребностей</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Target" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Адаптация</div>
                    <div className="text-slate-600">Кейсы под ваш бизнес</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Users" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Тренинг</div>
                    <div className="text-slate-600">Практическая отработка</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="CheckCircle" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Закрепление</div>
                    <div className="text-slate-600">Поддержка после тренинга</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Форматы проведения:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="Users" className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Очные тренинги в офисе (до 20 человек)
                    </li>
                    <li className="flex items-start">
                      <Icon name="Monitor" className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Online-тренинги (до 30 человек)
                    </li>
                    <li className="flex items-start">
                      <Icon name="Calendar" className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Модульные программы (2-6 месяцев)
                    </li>
                    <li className="flex items-start">
                      <Icon name="User" className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Индивидуальный коучинг
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Включено в стоимость:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="FileText" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Методические материалы
                    </li>
                    <li className="flex items-start">
                      <Icon name="Coffee" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Кофе-брейки и обеды
                    </li>
                    <li className="flex items-start">
                      <Icon name="Award" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Сертификаты участникам
                    </li>
                    <li className="flex items-start">
                      <Icon name="MessageCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      30 дней поддержки тренера
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Подбор программы</CardTitle>
                  <CardDescription>
                    Проведем диагностику команды и подберем оптимальную программу обучения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Phone" className="mr-2" size={16} />
                    Обсудить программу
                  </Button>
                  <p className="text-sm text-slate-600 mt-4 text-center">
                    Консультация длится 45 минут и проводится онлайн
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-6 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Популярные форматы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 text-sm">Интенсив "Управленческие навыки"</div>
                    <div className="text-xs text-slate-600 mt-1">3 дня • до 15 человек • от 150 000 ₽</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 text-sm">Модульная программа развития лидеров</div>
                    <div className="text-xs text-slate-600 mt-1">3 месяца • до 12 человек • от 300 000 ₽</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 text-sm">Online-тренинг по конфликтам</div>
                    <div className="text-xs text-slate-600 mt-1">2 дня • до 25 человек • от 120 000 ₽</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Смежные услуги</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/services/organizacionnaya-effektivnost" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Организационная эффективность</div>
                    <div className="text-sm text-slate-600">Организационный дизайн, системы мотивации</div>
                  </Link>
                  <Link to="/services/strategiya-i-upravlenie" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Стратегия и управление</div>
                    <div className="text-sm text-slate-600">Бизнес-трекинг, OKR, стратегические сессии</div>
                  </Link>
                  <Link to="/services/operacionnaya-deyatelnost" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Операционная деятельность</div>
                    <div className="text-sm text-slate-600">Диагностика процессов, регламенты, ОКМ</div>
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

export default KorporativnyeTreningi;