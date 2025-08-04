import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const KorporativnayaStrategiya: React.FC = () => {
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
              <Link to="/services/strategiya-i-upravlenie" className="hover:text-blue-600 transition-colors">Стратегия и управление</Link>
              <Icon name="ChevronRight" size={16} />
              <span>Разработка корпоративной стратегии</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Разработка корпоративной стратегии в условиях деглобализации</h1>
                <p className="text-xl text-slate-600">
                  Практическая стратегия, которая превратит вызовы деглобализации в конкурентное преимущество и обеспечит устойчивое развитие бизнеса
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
                      <p className="text-2xl font-bold text-blue-600">от 650 000 ₽</p>
                      <p className="text-sm text-slate-600">За полную разработку корпоративной стратегии</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">4-8 месяцев</p>
                      <p className="text-sm text-slate-600">С поэтапной разработкой и тестированием</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Вызовы деглобализации
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Разрыв глобальных цепочек поставок</li>
                      <li>• Санкционные ограничения и барьеры</li>
                      <li>• Необходимость импортозамещения</li>
                      <li>• Потеря привычных рынков сбыта</li>
                      <li>• Неопределенность в планировании</li>
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
                      <li>• Стратегия роста на 3-5 лет</li>
                      <li>• План выхода на новые рынки</li>
                      <li>• Снижение геополитических рисков</li>
                      <li>• Новые источники конкурентных преимуществ</li>
                      <li>• Устойчивая бизнес-модель</li>
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
                        <h4 className="font-semibold text-slate-900 mb-2">Анализ текущей ситуации</h4>
                        <p className="text-slate-600">Комплексный анализ влияния деглобализации на бизнес, оценка рисков и возможностей, анализ конкурентной среды</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Сценарное планирование</h4>
                        <p className="text-slate-600">Разработка сценариев развития внешней среды, стресс-тестирование бизнес-модели, поиск новых возможностей</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Формирование стратегии</h4>
                        <p className="text-slate-600">Выбор стратегических направлений, разработка плана реализации, система мониторинга и адаптации</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Комплексный анализ воздействий</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Сценарное планирование</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Стратегический документ</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Дорожная карта реализации</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Система мониторинга рисков</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />12 месяцев консультационной поддержки</li>
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
                      Обсудим разработку стратегии развития вашего бизнеса в новых условиях
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Консультация по стратегическому планированию — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/strategiya-i-upravlenie/strategicheskie-sessii" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Стратегические сессии</div>
                      <div className="text-sm text-slate-600">Выработка долгосрочной стратегии развития</div>
                    </Link>
                    <Link to="/services/strategiya-i-upravlenie/biznes-treking" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Бизнес-трекинг</div>
                      <div className="text-sm text-slate-600">Контроль реализации стратегии</div>
                    </Link>
                    <Link to="/services/otraslevye-resheniya" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Отраслевые решения</div>
                      <div className="text-sm text-slate-600">Специализированные пакеты по отраслям</div>
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

export default KorporativnayaStrategiya;