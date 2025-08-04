import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Delegirovanie: React.FC = () => {
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
              <Link to="/services/korporativnye-treningi" className="hover:text-blue-600">Корпоративные тренинги</Link>
              <Icon name="ChevronRight" className="mx-2" size={16} />
              <span className="text-slate-900 font-medium">Эффективное делегирование</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Эффективное делегирование
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Практические навыки постановки задач, контроля и мотивации подчиненных 
                для повышения эффективности руководителя и развития команды.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">от 70 000 ₽</div>
                  <div className="text-slate-300">Стоимость тренинга</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">1-2 дня</div>
                  <div className="text-slate-300">Продолжительность</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">до 15 человек</div>
                  <div className="text-slate-300">Размер группы</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Icon name="Phone" className="mr-2" size={20} />
                Записаться на тренинг
              </Button>
            </div>
          </div>
        </section>

        {/* Problems vs Results */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Освободите время для стратегических задач
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center">
                    <Icon name="AlertCircle" className="mr-3" size={24} />
                    Проблемы неэффективного делегирования
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Все делаю сам</div>
                        <div className="text-sm text-slate-600">Руководитель перегружен рутинными задачами</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Команда не развивается</div>
                        <div className="text-sm text-slate-600">Сотрудники не получают новых компетенций</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Низкая мотивация</div>
                        <div className="text-sm text-slate-600">Подчиненные не чувствуют доверия и ответственности</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Узкие места в процессах</div>
                        <div className="text-sm text-slate-600">Все решения проходят через руководителя</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center">
                    <Icon name="CheckCircle" className="mr-3" size={24} />
                    Результаты правильного делегирования
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Освобождение времени на 50%</div>
                        <div className="text-sm text-slate-600">Больше времени на стратегические задачи</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Развитие команды</div>
                        <div className="text-sm text-slate-600">Сотрудники приобретают новые навыки и компетенции</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Рост мотивации на 40%</div>
                        <div className="text-sm text-slate-600">Команда чувствует доверие и ответственность</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Масштабируемость</div>
                        <div className="text-sm text-slate-600">Процессы работают без постоянного контроля</div>
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
                Программа тренинга
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Блок 1: Основы делегирования</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Что можно и нельзя делегировать
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Выбор подходящих исполнителей
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Преодоление страхов делегирования
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Модель SMART для постановки задач
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Блок 2: Практические навыки</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Техники мотивации исполнителей
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Системы контроля и обратной связи
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Работа с ошибками и неудачами
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Развитие подчиненных через делегирование
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Методы обучения</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" className="text-blue-600" size={32} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Ролевые игры</h4>
                    <p className="text-slate-600 text-sm">Отработка навыков на реальных ситуациях</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="MessageCircle" className="text-blue-600" size={32} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Кейс-стади</h4>
                    <p className="text-slate-600 text-sm">Разбор успешных примеров делегирования</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Target" className="text-blue-600" size={32} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Практические задания</h4>
                    <p className="text-slate-600 text-sm">Создание планов делегирования для участников</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="CheckCircle" className="text-blue-600" size={32} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Обратная связь</h4>
                    <p className="text-slate-600 text-sm">Индивидуальная работа с каждым участником</p>
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
                Готовы освоить эффективное делегирование?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Научитесь передавать задачи так, чтобы освободить время и развить команду
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
                    placeholder="Какие задачи вам сложно делегировать?"
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Записаться на тренинг
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
                    <CardTitle className="text-lg">Развитие лидерства</CardTitle>
                    <CardDescription>
                      Комплексная программа развития лидерских качеств
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/services/korporativnye-treningi/liderstvo">
                      <Button variant="outline" className="w-full">
                        Подробнее
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">Системы мотивации</CardTitle>
                    <CardDescription>
                      Разработка комплексных систем мотивации и KPI
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/services/organizacionnaya-effektivnost/sistemy-motivacii">
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

export default Delegirovanie;