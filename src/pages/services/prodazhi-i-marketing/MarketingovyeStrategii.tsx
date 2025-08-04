import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MarketingovyeStrategii: React.FC = () => {
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
              <span>Маркетинговые стратегии</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Маркетинговые стратегии</h1>
                <p className="text-xl text-slate-600">
                  Разработка комплексных маркетинговых стратегий и планов продвижения для эффективного привлечения клиентов и роста бренда
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
                      <p className="text-2xl font-bold text-blue-600">от 150 000 ₽</p>
                      <p className="text-sm text-slate-600">За разработку маркетинговой стратегии</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">4-8 недель</p>
                      <p className="text-sm text-slate-600">В зависимости от сложности проекта</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Проблемы без стратегии
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Хаотичные маркетинговые активности</li>
                      <li>• Высокая стоимость привлечения клиентов</li>
                      <li>• Размытое позиционирование бренда</li>
                      <li>• Неэффективное использование бюджета</li>
                      <li>• Отсутствие измерения результатов</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="CheckCircle" className="text-green-500 mr-2" size={20} />
                      Результаты стратегии
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Системный подход к продвижению</li>
                      <li>• Снижение CAC на 25-40%</li>
                      <li>• Четкое позиционирование на рынке</li>
                      <li>• Оптимизация маркетингового бюджета</li>
                      <li>• Измеримые маркетинговые результаты</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Как разрабатывается стратегия</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Исследование и анализ</h4>
                        <p className="text-slate-600">Анализ рынка, конкурентов, целевой аудитории, текущих маркетинговых активностей</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Стратегическое планирование</h4>
                        <p className="text-slate-600">Определение позиционирования, каналов продвижения, разработка маркетинг-микса</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Реализация и контроль</h4>
                        <p className="text-slate-600">Создание плана реализации, настройка метрик, запуск кампаний и оптимизация</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Анализ рынка и конкурентов</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Портрет целевой аудитории</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Стратегия позиционирования</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />План маркетинговых активностей</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Бюджет и метрики</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />60 дней поддержки запуска</li>
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
                      Разработаем эффективную маркетинговую стратегию для вашего бизнеса
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Консультация по маркетингу — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/prodazhi-i-marketing/sistemnyj-otdel-prodazh" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Системный отдел продаж</div>
                      <div className="text-sm text-slate-600">Построение эффективной системы продаж</div>
                    </Link>
                    <Link to="/services/prodazhi-i-marketing/analitika-prodazh" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Аналитика продаж</div>
                      <div className="text-sm text-slate-600">Система отчетности и контроля</div>
                    </Link>
                    <Link to="/services/cifrovaya-transformaciya" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Цифровая трансформация</div>
                      <div className="text-sm text-slate-600">Интеграция ИИ, автоматизация</div>
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

export default MarketingovyeStrategii;