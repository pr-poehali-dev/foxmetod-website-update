import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PereobucheniePersonala: React.FC = () => {
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
              <Link to="/services/operacionnaya-deyatelnost" className="hover:text-blue-600 transition-colors">Операционная деятельность</Link>
              <Icon name="ChevronRight" size={16} />
              <span>Переобучение персонала</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Переобучение персонала</h1>
                <p className="text-xl text-slate-600">
                  Комплексные программы обучения сотрудников новым процессам, стандартам и технологиям для повышения эффективности работы
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
                      <p className="text-2xl font-bold text-blue-600">от 120 000 ₽</p>
                      <p className="text-sm text-slate-600">За программу обучения команды</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">2-8 недель</p>
                      <p className="text-sm text-slate-600">В зависимости от масштаба изменений</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Проблемы без обучения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Сопротивление изменениям в команде</li>
                      <li>• Медленное внедрение новых процессов</li>
                      <li>• Ошибки при работе по новым стандартам</li>
                      <li>• Снижение качества в период перехода</li>
                      <li>• Демотивация сотрудников</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="CheckCircle" className="text-green-500 mr-2" size={20} />
                      Результаты обучения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Быстрая адаптация к изменениям</li>
                      <li>• Уверенная работа по новым стандартам</li>
                      <li>• Минимальное количество ошибок</li>
                      <li>• Сохранение качества в период перехода</li>
                      <li>• Высокая мотивация и вовлеченность</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Как проходит переобучение</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Анализ потребностей</h4>
                        <p className="text-slate-600">Оценка текущих компетенций команды, определение gaps и разработка индивидуальных программ обучения</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Практическое обучение</h4>
                        <p className="text-slate-600">Проведение тренингов, воркшопов, создание симуляций реальных рабочих ситуаций</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Контроль и поддержка</h4>
                        <p className="text-slate-600">Проверка усвоения материала, индивидуальное сопровождение, корректировка программы</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Анализ компетенций команды</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Индивидуальные программы обучения</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Практические тренинги и воркшопы</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Методические материалы</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Контроль усвоения знаний</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />60 дней поддержки после обучения</li>
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
                      Разработаем программу переобучения для вашей команды
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Консультация по обучению персонала — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/operacionnaya-deyatelnost/razrabotka-reglamentov" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Разработка регламентов</div>
                      <div className="text-sm text-slate-600">Создание стандартов для обучения</div>
                    </Link>
                    <Link to="/services/korporativnye-treningi" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Корпоративные тренинги</div>
                      <div className="text-sm text-slate-600">Развитие управленческих компетенций</div>
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

export default PereobucheniePersonala;