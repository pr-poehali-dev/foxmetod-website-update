import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const UchastieSobesedovaniya: React.FC = () => {
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
              <span>Участие в собеседованиях</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Участие в собеседованиях</h1>
                <p className="text-xl text-slate-600">
                  Экспертное участие в собеседованиях для подбора ключевых сотрудников и руководителей с оценкой профессиональных компетенций
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
                      <p className="text-2xl font-bold text-blue-600">от 25 000 ₽</p>
                      <p className="text-sm text-slate-600">За участие в серии собеседований</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Срок реализации</h4>
                      <p className="text-2xl font-bold text-slate-900">1-2 недели</p>
                      <p className="text-sm text-slate-600">В зависимости от количества кандидатов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="AlertCircle" className="text-red-500 mr-2" size={20} />
                      Риски неправильного найма
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Субъективная оценка кандидатов</li>
                      <li>• Высокие затраты на переподбор</li>
                      <li>• Снижение мотивации команды</li>
                      <li>• Потеря времени на адаптацию</li>
                      <li>• Репутационные риски компании</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center">
                      <Icon name="CheckCircle" className="text-green-500 mr-2" size={20} />
                      Результаты экспертной оценки
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Объективная оценка компетенций</li>
                      <li>• Точность подбора до 95%</li>
                      <li>• Сокращение периода адаптации</li>
                      <li>• Повышение результативности найма</li>
                      <li>• Экономия на HR-процессах</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Как проходит участие в собеседованиях</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Подготовка к собеседованию</h4>
                        <p className="text-slate-600">Изучение требований к позиции, разработка профессиональных вопросов, подготовка оценочных критериев</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Проведение интервью</h4>
                        <p className="text-slate-600">Структурированное интервью с оценкой hard и soft skills, кейсы и практические задания</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Экспертное заключение</h4>
                        <p className="text-slate-600">Детальная оценка каждого кандидата с рекомендациями по принятию решения</p>
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
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Подготовка вопросов и кейсов</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Участие в собеседованиях</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Оценка профессиональных компетенций</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Детальные заключения по кандидатам</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Рекомендации по выбору</li>
                      <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Консультация по адаптации</li>
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
                      Получите экспертную помощь в подборе ключевых сотрудников
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Связаться с нами
                    </Button>
                    <p className="text-sm text-slate-600 text-center">
                      Консультация по подбору — бесплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/organizacionnaya-effektivnost/sistemnyj-hr" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Системный HR</div>
                      <div className="text-sm text-slate-600">Построение HR-процессов</div>
                    </Link>
                    <Link to="/services/ekspress-resheniya/biznes-inzhenery" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="font-medium text-slate-900">Бизнес-инженеры</div>
                      <div className="text-sm text-slate-600">Временное привлечение экспертов</div>
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

export default UchastieSobesedovaniya;