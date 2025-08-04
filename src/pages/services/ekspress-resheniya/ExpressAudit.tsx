import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ExpressAudit: React.FC = () => {
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
              <Link to="/services/ekspress-resheniya" className="hover:text-blue-600 transition-colors">Экспресс-решения</Link>
              <Icon name="ChevronRight" size={16} />
              <span>Экспресс-аудит</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Экспресс-аудит</h1>
                <p className="text-xl text-slate-600">
                  Быстрая диагностика узких мест в бизнесе с конкретными рекомендациями и планом действий для устранения проблем
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
                      <p className="text-2xl font-bold text-blue-600">от 40 000 ₽</p>
                      <p className="text-sm text-slate-600">За комплексный экспресс-аудит</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">1-2 недели</p>
                      <p className="text-sm text-slate-600">Быстрая диагностика с результатом</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Симптомы проблем в бизнесе
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Падение выручки или прибыли</li>
                      <li>• Снижение мотивации команды</li>
                      <li>• Рост операционных затрат</li>
                      <li>• Потеря конкурентных позиций</li>
                      <li>• Неясность причин проблем</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="CheckCircle" className="text-green-500 mr-2" size={20} />
                      Результаты аудита
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Точная диагностика проблем</li>
                      <li>• Приоритезированный план действий</li>
                      <li>• Конкретные рекомендации</li>
                      <li>• Оценка потенциала роста</li>
                      <li>• Готовые к реализации решения</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Как проходит экспресс-аудит</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Экспресс-диагностика</h4>
                        <p className="text-slate-600">Анализ ключевых показателей, интервью с руководством, изучение основных процессов</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Выявление узких мест</h4>
                        <p className="text-slate-600">Определение критических проблем и потенциала улучшений, бенчмаркинг с отраслью</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Рекомендации и план</h4>
                        <p className="text-slate-600">Конкретные решения с оценкой эффекта, план быстрых побед и долгосрочной стратегии</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Анализ финансовых показателей</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Интервью с ключевыми сотрудниками</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Диагностика основных процессов</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Детальный отчет с выводами</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />План конкретных действий</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Консультация по реализации</li>
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
                      Получите быструю диагностику проблем вашего бизнеса
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Предварительная оценка — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/operacionnaya-deyatelnost/diagnostika-processov" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Диагностика процессов</div>
                      <div className="text-sm text-slate-600">Подробный анализ бизнес-процессов</div>
                    </Link>
                    <Link to="/services/strategiya-i-upravlenie/biznes-treking" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Бизнес-трекинг</div>
                      <div className="text-sm text-slate-600">Системное сопровождение развития</div>
                    </Link>
                    <Link to="/services/ekspress-resheniya/biznes-inzhenery" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Бизнес-инженеры</div>
                      <div className="text-sm text-slate-600">Реализация рекомендаций аудита</div>
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

export default ExpressAudit;