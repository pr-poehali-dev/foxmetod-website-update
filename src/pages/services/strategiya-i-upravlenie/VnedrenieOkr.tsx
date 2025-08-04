import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const VnedrenieOkr: React.FC = () => {
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
              <span>Внедрение OKR</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Внедрение OKR</h1>
                <p className="text-xl text-slate-600">
                  Система целеполагания для достижения амбициозных результатов через фокусировку команды на приоритетах и синхронизацию действий
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
                      <p className="text-2xl font-bold text-blue-600">от 250 000 ₽</p>
                      <p className="text-sm text-slate-600">За полный цикл внедрения OKR-системы</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">3-6 месяцев</p>
                      <p className="text-sm text-slate-600">С поддержкой на период адаптации</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Проблемы без OKR
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Размытые цели и приоритеты команды</li>
                      <li>• Отсутствие фокуса на главном</li>
                      <li>• Несогласованность между отделами</li>
                      <li>• Сложность отслеживания прогресса</li>
                      <li>• Низкая мотивация и вовлеченность</li>
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
                      <li>• Четкие и амбициозные цели на всех уровнях</li>
                      <li>• Фокус команды на приоритетных задачах</li>
                      <li>• Синхронизация целей по всей компании</li>
                      <li>• Прозрачный контроль достижения результатов</li>
                      <li>• Рост производительности на 25-40%</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Как проходит внедрение OKR</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Обучение и подготовка</h4>
                        <p className="text-slate-600">Обучение команды принципам OKR, анализ текущих целей, подготовка к внедрению методологии</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Разработка OKR</h4>
                        <p className="text-slate-600">Формулирование целей (Objectives) и ключевых результатов (Key Results) для компании, подразделений и сотрудников</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Внедрение и поддержка</h4>
                        <p className="text-slate-600">Запуск системы, регулярные ретроспективы, корректировка процессов, обеспечение адаптации команды</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Обучение команды методологии OKR</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Разработка OKR для всех уровней</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Настройка процессов и инструментов</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Регулярные ретроспективы (3 месяца)</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Шаблоны и методические материалы</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Поддержка в период адаптации</li>
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
                      Обсудим внедрение OKR-системы в вашей компании для достижения амбициозных целей
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Консультация по внедрению OKR — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/strategiya-i-upravlenie/biznes-treking" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Бизнес-трекинг</div>
                      <div className="text-sm text-slate-600">Комплексное сопровождение достижения целей</div>
                    </Link>
                    <Link to="/services/strategiya-i-upravlenie/strategicheskie-sessii" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Стратегические сессии</div>
                      <div className="text-sm text-slate-600">Выработка долгосрочной стратегии развития</div>
                    </Link>
                    <Link to="/services/organizacionnaya-effektivnost" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Организационная эффективность</div>
                      <div className="text-sm text-slate-600">Повышение эффективности организации</div>
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

export default VnedrenieOkr;