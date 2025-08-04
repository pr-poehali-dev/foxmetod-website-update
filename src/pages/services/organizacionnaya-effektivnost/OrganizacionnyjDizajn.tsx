import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const OrganizacionnyjDizajn: React.FC = () => {
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
              <span>Организационный дизайн</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Организационный дизайн</h1>
                <p className="text-xl text-slate-600">
                  Построение оптимальной организационной структуры компании с четким распределением ролей, зон ответственности и эффективных связей между подразделениями
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
                      <p className="text-2xl font-bold text-blue-600">от 300 000 ₽</p>
                      <p className="text-sm text-slate-600">За проектирование организационной структуры</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">6-12 недель</p>
                      <p className="text-sm text-slate-600">С поэтапным внедрением изменений</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Проблемы неэффективной структуры
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Размытые зоны ответственности</li>
                      <li>• Дублирование функций между отделами</li>
                      <li>• Медленное принятие решений</li>
                      <li>• Конфликты между подразделениями</li>
                      <li>• Сложности в масштабировании бизнеса</li>
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
                      <li>• Четкое понимание ролей и задач</li>
                      <li>• Эффективное взаимодействие отделов</li>
                      <li>• Быстрое принятие решений</li>
                      <li>• Рост производительности на 25-40%</li>
                      <li>• Готовность к быстрому росту</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Как проектируется организация</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Анализ текущего состояния</h4>
                        <p className="text-slate-600">Исследование существующей структуры, процессов взаимодействия, выявление проблемных зон и точек роста</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Проектирование новой модели</h4>
                        <p className="text-slate-600">Создание оптимальной организационной структуры, определение ролей, функций и связей между подразделениями</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Поэтапное внедрение</h4>
                        <p className="text-slate-600">Планомерный переход к новой структуре, управление изменениями, адаптация команды</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Диагностика текущей структуры</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Проектирование новой модели</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Описание ролей и функций</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />План внедрения изменений</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Управление переходным периодом</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />3 месяца поддержки</li>
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
                      Создадим эффективную организационную структуру для вашей компании
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Консультация по орг. дизайну — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/organizacionnaya-effektivnost/sistemy-motivacii" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Системы мотивации</div>
                      <div className="text-sm text-slate-600">Разработка систем мотивации и KPI</div>
                    </Link>
                    <Link to="/services/organizacionnaya-effektivnost/sistemnyj-hr" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Системный HR</div>
                      <div className="text-sm text-slate-600">Построение HR-процессов</div>
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

export default OrganizacionnyjDizajn;