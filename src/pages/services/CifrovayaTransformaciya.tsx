import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const CifrovayaTransformaciya: React.FC = () => {
  const services = [
    {
      id: 'integraciya-ii',
      title: "Интеграция ИИ",
      description: "Внедрение искусственного интеллекта в бизнес-процессы для автоматизации и повышения эффективности",
      price: "от 200 000 ₽",
      duration: "1-3 месяца"
    },
    {
      id: 'migraciya-rossijskoe-po',
      title: "Миграция на российское ПО",
      description: "Переход на отечественные программные решения с сохранением функциональности",
      price: "от 180 000 ₽",
      duration: "2-4 месяца"
    },
    {
      id: 'upravlenie-zadachami',
      title: "Системы управления задачами",
      description: "Внедрение современных систем планирования, контроля и управления проектами",
      price: "от 120 000 ₽",
      duration: "1-2 месяца"
    },
    {
      id: 'cifrovye-processy',
      title: "Цифровизация процессов",
      description: "Автоматизация и оцифровка ключевых бизнес-процессов компании",
      price: "от 250 000 ₽",
      duration: "2-6 месяцев"
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
            <span>Цифровая трансформация</span>
          </div>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Цифровая трансформация</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Внедрение современных технологий, ИИ-решений и цифровизация процессов для повышения конкурентоспособности и эффективности бизнеса
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
                      <Link to={`/services/cifrovaya-transformaciya/${service.id}`}>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Почему цифровая трансформация неизбежна?</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Риски отставания от технологий:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Потеря конкурентоспособности
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Высокие операционные расходы
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Ограничения импортного ПО
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Медленная адаптация к изменениям
                    </li>
                    <li className="flex items-start">
                      <Icon name="AlertCircle" className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Сложность интеграции систем
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Преимущества цифровизации:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Снижение затрат на 20-40%
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Ускорение процессов в 2-5 раз
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Независимость от импорта
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Гибкость и масштабируемость
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      Качественная аналитика
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">Наш подход к цифровизации</h4>
                <p className="text-slate-600 mb-4">
                  Мы не навязываем готовые решения, а создаем индивидуальную стратегию цифровой трансформации, учитывающую специфику вашего бизнеса и бюджетные ограничения.
                </p>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Search" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Аудит</div>
                    <div className="text-slate-600">Анализ текущих систем</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Target" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Стратегия</div>
                    <div className="text-slate-600">План трансформации</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Settings" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Внедрение</div>
                    <div className="text-slate-600">Поэтапная реализация</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Users" className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium text-slate-900">Поддержка</div>
                    <div className="text-slate-600">Обучение команды</div>
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
                    Проведем IT-аудит и составим план цифровой трансформации вашего бизнеса
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
                  <Link to="/services/operacionnaya-deyatelnost" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Операционная деятельность</div>
                    <div className="text-sm text-slate-600">Диагностика процессов, регламенты, ОКМ</div>
                  </Link>
                  <Link to="/services/strategiya-i-upravlenie" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Стратегия и управление</div>
                    <div className="text-sm text-slate-600">Бизнес-трекинг, OKR, стратегические сессии</div>
                  </Link>
                  <Link to="/services/prodazhi-i-marketing" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="font-medium text-slate-900">Продажи и маркетинг</div>
                    <div className="text-sm text-slate-600">Системный отдел продаж, маркетинговые стратегии</div>
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

export default CifrovayaTransformaciya;