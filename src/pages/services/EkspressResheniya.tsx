import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const EkspressResheniya: React.FC = () => {
  const services = [
    {
      id: 'uchastie-sobesedovaniya',
      title: "Участие в собеседованиях",
      description: "Экспертное участие в собеседованиях для подбора ключевых сотрудников и руководителей",
      price: "от 15 000 ₽",
      duration: "1-3 дня"
    },
    {
      id: 'nastrojka-planerok',
      title: "Настройка планерок",
      description: "Организация эффективных совещаний, планерок и встреч для повышения продуктивности команды",
      price: "от 25 000 ₽",
      duration: "1-2 недели"
    },
    {
      id: 'biznes-inzhenery',
      title: "Бизнес-инженеры",
      description: "Временное привлечение экспертов для решения конкретных задач и проектов",
      price: "от 50 000 ₽",
      duration: "1-4 недели"
    },
    {
      id: 'express-audit',
      title: "Экспресс-аудит",
      description: "Быстрая диагностика узких мест в бизнесе с конкретными рекомендациями",
      price: "от 35 000 ₽",
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
            <span>Экспресс-решения</span>
          </div>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Экспресс-решения</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Быстрые и точечные решения для конкретных бизнес-задач, когда нужна оперативная экспертная помощь без длительных проектов
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
                      <Link to={`/services/ekspress-resheniya/${service.id}`}>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Когда нужны экспресс-решения?</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Типичные ситуации:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="Clock" className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Срочно нужен эксперт на проект
                    </li>
                    <li className="flex items-start">
                      <Icon name="Clock" className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Необходимо быстро решить конкретную задачу
                    </li>
                    <li className="flex items-start">
                      <Icon name="Clock" className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Нужна помощь в подборе ключевого сотрудника
                    </li>
                    <li className="flex items-start">
                      <Icon name="Clock" className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Требуется оперативная диагностика проблемы
                    </li>
                    <li className="flex items-start">
                      <Icon name="Clock" className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Нет ресурсов на долгосрочный проект
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Преимущества подхода:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Быстрый старт (1-3 дня)
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Фокус на конкретном результате
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Минимальные затраты
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Проверенные эксперты
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Гибкий формат сотрудничества
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">Как это works?</h4>
                <p className="text-slate-600 mb-4">
                  Экспресс-формат позволяет получить экспертную помощь точно в срок и в рамках бюджета. Мы работаем по четкому ТЗ с конкретными дедлайнами.
                </p>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="MessageCircle" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Заявка</div>
                    <div className="text-slate-600">Описываете задачу</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Clock" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Отклик</div>
                    <div className="text-slate-600">Ответ в течение 2 часов</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Play" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Старт</div>
                    <div className="text-slate-600">Начало работы на следующий день</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="CheckCircle" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Результат</div>
                    <div className="text-slate-600">Готовое решение в срок</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Быстрая заявка</CardTitle>
                  <CardDescription>
                    Опишите вашу задачу — мы ответим в течение 2 часов и предложим решение
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Zap" className="mr-2" size={16} />
                    Оставить заявку
                  </Button>
                  <p className="text-sm text-slate-600 mt-4 text-center">
                    Работаем 24/7, готовы приступить уже завтра
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-6 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Популярные запросы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 text-sm">«Нужна помощь в найме директора по продажам»</div>
                    <div className="text-xs text-slate-600 mt-1">2-3 дня, от 15 000 ₽</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 text-sm">«Настроить еженедельные планерки»</div>
                    <div className="text-xs text-slate-600 mt-1">1 неделя, от 25 000 ₽</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 text-sm">«Понять почему падают продажи»</div>
                    <div className="text-xs text-slate-600 mt-1">3-5 дней, от 35 000 ₽</div>
                  </div>
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
                  <Link to="/services/organizacionnaya-effektivnost" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Организационная эффективность</div>
                    <div className="text-sm text-slate-600">Организационный дизайн, системы мотивации</div>
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

export default EkspressResheniya;