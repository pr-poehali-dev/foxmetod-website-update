import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UchastieVSobesedovaniyah: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <Header 
          formData={{name: '', contact: '', company: '', description: ''}}
          onInputChange={() => {}}
          onSubmit={() => {}}
        />
        
        {/* Breadcrumb */}
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <nav className="flex text-sm text-slate-600">
              <Link to="/" className="hover:text-blue-600">Главная</Link>
              <Icon name="ChevronRight" className="mx-2" size={16} />
              <Link to="/services" className="hover:text-blue-600">Услуги</Link>
              <Icon name="ChevronRight" className="mx-2" size={16} />
              <Link to="/services/ekspress-resheniya" className="hover:text-blue-600">Экспресс-решения</Link>
              <Icon name="ChevronRight" className="mx-2" size={16} />
              <span className="text-slate-900 font-medium">Участие в собеседованиях</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Участие в собеседованиях
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Экспертное участие в собеседованиях для подбора ключевых сотрудников и руководителей. 
                Помогаем найти лучших кандидатов и избежать дорогих ошибок найма.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">от 15 000 ₽</div>
                  <div className="text-slate-300">За собеседование</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">1-3 дня</div>
                  <div className="text-slate-300">Срок реализации</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">95%</div>
                  <div className="text-slate-300">Точность оценки</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Icon name="Phone" className="mr-2" size={20} />
                Заказать участие в собеседовании
              </Button>
            </div>
          </div>
        </section>

        {/* Problems vs Results */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Найдите идеального кандидата с первого раза
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center">
                    <Icon name="AlertCircle" className="mr-3" size={24} />
                    Риски самостоятельного найма
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Неподходящие кандидаты</div>
                        <div className="text-sm text-slate-600">До 60% найма оказываются неудачными без экспертной оценки</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Высокая стоимость ошибок</div>
                        <div className="text-sm text-slate-600">Неудачный найм руководителя стоит от 500 000 ₽</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Потеря времени</div>
                        <div className="text-sm text-slate-600">Переподбор занимает месяцы, бизнес теряет темпы роста</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Субъективность оценки</div>
                        <div className="text-sm text-slate-600">Личные симпатии могут перевесить профессионализм</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center">
                    <Icon name="CheckCircle" className="mr-3" size={24} />
                    Преимущества экспертного участия
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Точная оценка кандидатов</div>
                        <div className="text-sm text-slate-600">Профессиональная методика оценки компетенций</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Экономия на ошибках</div>
                        <div className="text-sm text-slate-600">Инвестиция в экспертизу окупается за 1 месяц</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Быстрое принятие решений</div>
                        <div className="text-sm text-slate-600">Заключение с рекомендациями в течение 24 часов</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Объективная оценка</div>
                        <div className="text-sm text-slate-600">Системный подход без личных предрассудков</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Как проходит экспертное участие в собеседовании
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="FileText" className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">1. Подготовка</h3>
                  <p className="text-slate-600 text-sm">Изучение требований к позиции и профиля кандидата</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">2. Собеседование</h3>
                  <p className="text-slate-600 text-sm">Структурированное интервью с оценкой компетенций</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="BarChart" className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">3. Анализ</h3>
                  <p className="text-slate-600 text-sm">Системная оценка по ключевым критериям</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="FileCheck" className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">4. Заключение</h3>
                  <p className="text-slate-600 text-sm">Детальный отчет с рекомендациями</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Что входит в экспертную оценку</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Профессиональные компетенции</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Экспертиза в предметной области
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Управленческий опыт и навыки
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Аналитические способности
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Стратегическое мышление
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Личностные качества</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Лидерские качества и мотивация
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Коммуникативные навыки
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Культурное соответствие компании
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Стрессоустойчивость и адаптивность
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Form */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Нужна помощь в подборе ключевого сотрудника?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Получите экспертную оценку кандидатов и сделайте правильный выбор
              </p>
              
              <div className="bg-white p-8 rounded-lg max-w-2xl mx-auto">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Телефон или email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Компания"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="На какую позицию нужна помощь в подборе?"
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Заказать участие в собеседовании
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Смежные услуги
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">Системный HR</CardTitle>
                    <CardDescription>
                      Построение HR-процессов от найма до развития талантов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/services/organizacionnaya-effektivnost/sistemnyj-hr">
                      <Button variant="outline" className="w-full">
                        Подробнее
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">Настройка планерок</CardTitle>
                    <CardDescription>
                      Организация эффективных совещаний и встреч
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/services/ekspress-resheniya/nastrojka-planerok">
                      <Button variant="outline" className="w-full">
                        Подробнее
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">Организационный дизайн</CardTitle>
                    <CardDescription>
                      Построение оптимальной структуры компании
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/services/organizacionnaya-effektivnost/organizacionnyj-dizajn">
                      <Button variant="outline" className="w-full">
                        Подробнее
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
};

export default UchastieVSobesedovaniyah;