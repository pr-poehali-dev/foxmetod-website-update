import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BiznesInzhenery: React.FC = () => {
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
              <span>Бизнес-инженеры</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Бизнес-инженеры</h1>
                <p className="text-xl text-slate-600">
                  Временное привлечение квалифицированных экспертов для решения конкретных задач и проектов без увеличения штата
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
                      <p className="text-2xl font-bold text-blue-600">от 50 000 ₽/мес</p>
                      <p className="text-sm text-slate-600">В зависимости от экспертизы и объема</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">1-6 месяцев</p>
                      <p className="text-sm text-slate-600">Гибкие условия сотрудничества</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Когда нужен бизнес-инженер
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Пиковая нагрузка по проекту</li>
                      <li>• Нехватка экспертизы в команде</li>
                      <li>• Срочная задача с дедлайном</li>
                      <li>• Временная замена сотрудника</li>
                      <li>• Нет смысла нанимать в штат</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="CheckCircle" className="text-green-500 mr-2" size={20} />
                      Преимущества подхода
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Быстрый старт работ (1-3 дня)</li>
                      <li>• Экспертный уровень исполнения</li>
                      <li>• Нет затрат на поиск и адаптацию</li>
                      <li>• Гибкость масштабирования команды</li>
                      <li>• Фокус на результате, а не процессе</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Как работают бизнес-инженеры</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Анализ задач и подбор эксперта</h4>
                        <p className="text-slate-600">Определение требований к компетенциям, подбор подходящего бизнес-инженера из нашего пула</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Быстрое погружение в проект</h4>
                        <p className="text-slate-600">Изучение специфики бизнеса, анализ текущей ситуации, выработка плана работ</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Выполнение и передача результатов</h4>
                        <p className="text-slate-600">Реализация поставленных задач, регулярная отчетность, передача знаний команде</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Подбор и оценка эксперта</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Погружение в проект</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Выполнение поставленных задач</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Регулярная отчетность</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Передача знаний команде</li>
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
                      Получите квалифицированного эксперта для решения ваших задач
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Подбор эксперта — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/strategiya-i-upravlenie/interim-menedzhment" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Интерим-менеджмент</div>
                      <div className="text-sm text-slate-600">Профессиональные топ-менеджеры</div>
                    </Link>
                    <Link to="/services/ekspress-resheniya/express-audit" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Экспресс-аудит</div>
                      <div className="text-sm text-slate-600">Быстрая диагностика бизнеса</div>
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

export default BiznesInzhenery;