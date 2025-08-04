import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AnalitikaProdazh: React.FC = () => {
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
              <Link to="/services/prodazhi-i-marketing" className="hover:text-blue-600 transition-colors">Продажи и маркетинг</Link>
              <Icon name="ChevronRight" size={16} />
              <span>Аналитика продаж</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Аналитика продаж</h1>
                <p className="text-xl text-slate-600">
                  Создание системы аналитики и отчетности для контроля эффективности продаж с дашбордами и автоматическими уведомлениями
                </p>
              </div>

              <Card className="mb-8 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Детали услуги</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Стоимость</h4>
                      <p className="text-2xl font-bold text-blue-600">от 100 000 ₽</p>
                      <p className="text-sm text-slate-600">За создание системы аналитики</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">2-4 недели</p>
                      <p className="text-sm text-slate-600">В зависимости от количества источников</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Проблемы без аналитики
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Принятие решений на основе догадок</li>
                      <li>• Неясность в эффективности каналов</li>
                      <li>• Отсутствие контроля KPI команды</li>
                      <li>• Невозможность прогнозирования</li>
                      <li>• Потери от неэффективных активностей</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="CheckCircle" className="text-green-500 mr-2" size={20} />
                      Результаты внедрения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Данные-ориентированные решения</li>
                      <li>• Понимание ROI всех каналов</li>
                      <li>• Прозрачный контроль команды</li>
                      <li>• Точные прогнозы продаж</li>
                      <li>• Оптимизация затрат на 20-30%</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Как создается система аналитики</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Определение метрик</h4>
                        <p className="text-slate-600">Анализ бизнес-целей, определение ключевых показателей, выбор источников данных</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Настройка сбора данных</h4>
                        <p className="text-slate-600">Интеграция систем, настройка автоматического сбора данных, создание витрин данных</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Создание дашбордов</h4>
                        <p className="text-slate-600">Разработка интерактивных дашбордов, настройка автоматических отчетов и уведомлений</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Что включено в стоимость</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Определение ключевых метрик</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Интеграция источников данных</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Интерактивные дашборды</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Автоматические отчеты</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Обучение команды работе</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />90 дней поддержки системы</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="border-blue-200 bg-blue-50 mb-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">Заказать услугу</CardTitle>
                    <CardDescription>
                      Создадим систему аналитики для контроля эффективности продаж
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Консультация по аналитике — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/prodazhi-i-marketing/crm-avtomatizaciya" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">CRM и автоматизация</div>
                      <div className="text-sm text-slate-600">Внедрение и настройка CRM-систем</div>
                    </Link>
                    <Link to="/services/prodazhi-i-marketing/sistemnyj-otdel-prodazh" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Системный отдел продаж</div>
                      <div className="text-sm text-slate-600">Построение эффективной системы продаж</div>
                    </Link>
                    <Link to="/services/strategiya-i-upravlenie" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Стратегия и управление</div>
                      <div className="text-sm text-slate-600">Системное управление развитием</div>
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

export default AnalitikaProdazh;