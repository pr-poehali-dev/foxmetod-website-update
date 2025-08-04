import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const SistemyMotivacii: React.FC = () => {
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
              <Link to="/services/organizacionnaya-effektivnost" className="hover:text-blue-600 transition-colors">Организационная эффективность</Link>
              <Icon name="ChevronRight" size={16} />
              <span>Системы мотивации</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Системы мотивации</h1>
                <p className="text-xl text-slate-600">
                  Разработка комплексных систем мотивации, KPI и компенсационных пакетов для различных подразделений с учетом специфики ролей и бизнес-целей
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
                      <p className="text-2xl font-bold text-blue-600">от 180 000 ₽</p>
                      <p className="text-sm text-slate-600">За разработку системы мотивации</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">4-8 недель</p>
                      <p className="text-sm text-slate-600">В зависимости от размера команды</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Проблемы немотивированной команды
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Низкая вовлеченность сотрудников</li>
                      <li>• Высокая текучесть кадров</li>
                      <li>• Несправедливое вознаграждение</li>
                      <li>• Отсутствие связи зарплаты с результатом</li>
                      <li>• Демотивация лучших сотрудников</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="CheckCircle" className="text-green-500 mr-2" size={20} />
                      Результаты новой системы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Рост производительности на 30-50%</li>
                      <li>• Снижение текучести на 40-60%</li>
                      <li>• Справедливая оценка вклада</li>
                      <li>• Прямая связь результата и вознаграждения</li>
                      <li>• Удержание ключевых сотрудников</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Как создается система мотивации</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Анализ мотивационных факторов</h4>
                        <p className="text-slate-600">Исследование текущих подходов к мотивации, опрос сотрудников, анализ факторов вовлеченности и демотивации</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Разработка системы KPI</h4>
                        <p className="text-slate-600">Создание показателей эффективности для каждой роли, определение целевых значений и весов показателей</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Внедрение и настройка</h4>
                        <p className="text-slate-600">Запуск новой системы, обучение руководителей, тестирование и корректировка схем мотивации</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Анализ мотивационных факторов</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Система KPI для всех ролей</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Компенсационные схемы</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Нефинансовая мотивация</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Обучение руководителей</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />6 месяцев поддержки</li>
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
                      Создадим справедливую и эффективную систему мотивации для вашей команды
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Консультация по системам мотивации — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/organizacionnaya-effektivnost/organizacionnyj-dizajn" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Организационный дизайн</div>
                      <div className="text-sm text-slate-600">Построение оптимальной структуры</div>
                    </Link>
                    <Link to="/services/operacionnaya-deyatelnost/okm-sistema" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Система ОКМ</div>
                      <div className="text-sm text-slate-600">Организация качественной мотивации</div>
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

export default SistemyMotivacii;