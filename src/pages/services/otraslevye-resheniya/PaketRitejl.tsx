import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PaketRitejl: React.FC = () => {
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
              <Link to="/services/otraslevye-resheniya" className="hover:text-blue-600 transition-colors">Отраслевые решения</Link>
              <Icon name="ChevronRight" size={16} />
              <span>Пакет для ритейла</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Пакет для ритейла</h1>
                <p className="text-xl text-slate-600">
                  Комплексные решения для розничной торговли: от мерчендайзинга и управления запасами до омниканальности и лояльности клиентов
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
                      <p className="text-2xl font-bold text-blue-600">от 400 000 ₽</p>
                      <p className="text-sm text-slate-600">За комплексное решение для ритейла</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">3-6 месяцев</p>
                      <p className="text-sm text-slate-600">С поэтапным внедрением процессов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Вызовы ритейла
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Неэффективное управление запасами</li>
                      <li>• Низкая оборачиваемость товаров</li>
                      <li>• Отсутствие омниканальности</li>
                      <li>• Слабая программа лояльности</li>
                      <li>• Неоптимальный мерчендайзинг</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="CheckCircle" className="text-green-500 mr-2" size={20} />
                      Результаты оптимизации
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Снижение остатков на 25-40%</li>
                      <li>• Рост оборачиваемости в 1.5-2 раза</li>
                      <li>• Единая система продаж</li>
                      <li>• Увеличение повторных покупок на 30%</li>
                      <li>• Рост средней чеки на 15-25%</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Что включает пакет для ритейла</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Категорийный менеджмент</h4>
                        <p className="text-slate-600">Оптимизация ассортимента, управление категориями товаров, анализ прибыльности продуктов</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Управление запасами</h4>
                        <p className="text-slate-600">Автоматическое планирование закупок, контроль остатков, минимизация неликвидов</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Омниканальность и лояльность</h4>
                        <p className="text-slate-600">Интеграция онлайн и офлайн продаж, программа лояльности, персонализация предложений</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Анализ и оптимизация ассортимента</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Система управления запасами</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Мерчендайзинг и планограммы</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Омниканальная стратегия</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Программа лояльности</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />12 месяцев сопровождения</li>
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
                      Получите комплексное решение для эффективного управления ритейлом
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Консультация по ритейлу — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/prodazhi-i-marketing" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Продажи и маркетинг</div>
                      <div className="text-sm text-slate-600">Системы продаж и маркетинговые стратегии</div>
                    </Link>
                    <Link to="/services/cifrovaya-transformaciya" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Цифровая трансформация</div>
                      <div className="text-sm text-slate-600">Интеграция ИИ, автоматизация</div>
                    </Link>
                    <Link to="/services/operacionnaya-deyatelnost" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Операционная деятельность</div>
                      <div className="text-sm text-slate-600">Оптимизация бизнес-процессов</div>
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

export default PaketRitejl;