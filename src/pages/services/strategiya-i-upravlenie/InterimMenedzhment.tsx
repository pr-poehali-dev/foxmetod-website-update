import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const InterimMenedzhment: React.FC = () => {
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
              <span>Интерим-менеджмент</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Интерим-менеджмент</h1>
                <p className="text-xl text-slate-600">
                  Профессиональные топ-менеджеры на аутсорсинг для временного усиления команды без увеличения штата и долгосрочных обязательств
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
                      <p className="text-2xl font-bold text-blue-600">от 180 000 ₽/мес</p>
                      <p className="text-sm text-slate-600">В зависимости от уровня и специализации</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">3-12 месяцев</p>
                      <p className="text-sm text-slate-600">Гибкие условия продления</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Когда нужен интерим
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Временное отсутствие ключевого руководителя</li>
                      <li>• Реализация сложного проекта трансформации</li>
                      <li>• Кризисная ситуация в компании</li>
                      <li>• Подготовка к продаже/слиянию бизнеса</li>
                      <li>• Нехватка экспертизы в команде</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="CheckCircle" className="text-green-500 mr-2" size={20} />
                      Результаты работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Профессиональное управление функцией</li>
                      <li>• Внедрение лучших практик отрасли</li>
                      <li>• Быстрое решение стратегических задач</li>
                      <li>• Развитие внутренней команды</li>
                      <li>• Освобождение собственника от операций</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Как работает интерим-менеджмент</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Анализ потребностей</h4>
                        <p className="text-slate-600">Определение задач, требуемых компетенций, подбор подходящего интерим-менеджера из нашей базы экспертов</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Быстрый старт</h4>
                        <p className="text-slate-600">Погружение в специфику бизнеса, анализ текущей ситуации, выработка плана действий в первые 2 недели</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Реализация и передача</h4>
                        <p className="text-slate-600">Выполнение поставленных задач, внедрение изменений, передача знаний команде, подготовка преемника</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Подбор и оценка кандидата</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Полноценное управление функцией</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Регулярная отчетность собственнику</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Передача знаний команде</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Подготовка преемника</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Гибкие условия сотрудничества</li>
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
                      Обсудим ваши потребности в интерим-менеджменте и подберем подходящего эксперта
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Консультация по интерим-менеджменту — бесплатно
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
                      <div className="text-sm text-slate-600">Комплексное сопровождение развития</div>
                    </Link>
                    <Link to="/services/organizacionnaya-effektivnost" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Организационная эффективность</div>
                      <div className="text-sm text-slate-600">Повышение эффективности организации</div>
                    </Link>
                    <Link to="/services/korporativnye-treningi" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Корпоративные тренинги</div>
                      <div className="text-sm text-slate-600">Развитие управленческих компетенций</div>
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

export default InterimMenedzhment;