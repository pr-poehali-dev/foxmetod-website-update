import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CifrovyeProcessy: React.FC = () => {
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
              <Link to="/services/cifrovaya-transformaciya" className="hover:text-blue-600 transition-colors">Цифровая трансформация</Link>
              <Icon name="ChevronRight" size={16} />
              <span>Цифровизация процессов</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Цифровизация процессов</h1>
                <p className="text-xl text-slate-600">
                  Автоматизация и оцифровка ключевых бизнес-процессов компании для повышения эффективности и снижения операционных затрат
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
                      <p className="text-2xl font-bold text-blue-600">от 200 000 ₽</p>
                      <p className="text-sm text-slate-600">За цифровизацию бизнес-процессов</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">6-10 недель</p>
                      <p className="text-sm text-slate-600">В зависимости от количества процессов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Проблемы ручных процессов
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Высокие затраты времени на рутину</li>
                      <li>• Человеческие ошибки в процессах</li>
                      <li>• Медленная обработка документов</li>
                      <li>• Сложность контроля и отчетности</li>
                      <li>• Низкая масштабируемость операций</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="CheckCircle" className="text-green-500 mr-2" size={20} />
                      Результаты цифровизации
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Экономия времени до 70%</li>
                      <li>• Исключение ошибок в процессах</li>
                      <li>• Мгновенная обработка данных</li>
                      <li>• Автоматические отчеты и аналитика</li>
                      <li>• Неограниченная масштабируемость</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Как проходит цифровизация</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Аудит и приоритизация</h4>
                        <p className="text-slate-600">Анализ существующих процессов, выявление возможностей для автоматизации, приоритизация по эффекту</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Разработка цифровых решений</h4>
                        <p className="text-slate-600">Создание автоматизированных процессов, разработка интерфейсов, настройка интеграций</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Внедрение и оптимизация</h4>
                        <p className="text-slate-600">Поэтапный запуск цифровых процессов, обучение персонала, мониторинг и улучшение</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Аудит процессов для цифровизации</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Разработка цифровых решений</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Автоматизация рабочих процессов</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Интеграция с существующими системами</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Обучение команды</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />6 месяцев поддержки и оптимизации</li>
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
                      Автоматизируем ваши бизнес-процессы для повышения эффективности
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Консультация по цифровизации — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/cifrovaya-transformaciya/integraciya-ii" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Интеграция ИИ</div>
                      <div className="text-sm text-slate-600">Внедрение ИИ-решений в процессы</div>
                    </Link>
                    <Link to="/services/cifrovaya-transformaciya/upravlenie-zadachami" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Системы управления задачами</div>
                      <div className="text-sm text-slate-600">Внедрение современных систем планирования</div>
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

export default CifrovyeProcessy;