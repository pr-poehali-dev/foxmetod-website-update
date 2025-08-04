import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const KonfliktMenedzhment: React.FC = () => {
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
              <span className="text-slate-900 font-medium">Конфликт-менеджмент</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Конфликт-менеджмент
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Практический тренинг по работе с конфликтными ситуациями, их профилактике 
                и превращению в возможности для развития команды.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">от 80 000 ₽</div>
                  <div className="text-slate-300">Стоимость тренинга</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">2-3 дня</div>
                  <div className="text-slate-300">Продолжительность</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">до 20 человек</div>
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
                Превращаем конфликты в возможности для роста
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center">
                    <Icon name="AlertCircle" className="mr-3" size={24} />
                    Проблемы конфликтов в команде
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Токсичная атмосфера</div>
                        <div className="text-sm text-slate-600">Постоянное напряжение, недоверие между сотрудниками</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Снижение продуктивности</div>
                        <div className="text-sm text-slate-600">Энергия тратится на конфликты, а не на работу</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Высокая текучесть кадров</div>
                        <div className="text-sm text-slate-600">Ценные сотрудники уходят из-за конфликтной среды</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Плохая репутация</div>
                        <div className="text-sm text-slate-600">Сложно привлекать талантливых специалистов</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center">
                    <Icon name="CheckCircle" className="mr-3" size={24} />
                    Результаты эффективного управления конфликтами
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Здоровый микроклимат</div>
                        <div className="text-sm text-slate-600">Открытое общение, конструктивное решение разногласий</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Рост эффективности на 35%</div>
                        <div className="text-sm text-slate-600">Вся энергия направлена на достижение целей</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Снижение текучести на 60%</div>
                        <div className="text-sm text-slate-600">Сотрудники чувствуют себя комфортно и защищенно</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Сильная команда</div>
                        <div className="text-sm text-slate-600">Разногласия становятся источником инноваций</div>
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
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">День 1: Природа конфликтов</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Типы и причины конфликтов в организации
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Раннее выявление конфликтных ситуаций
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Анализ собственного стиля поведения в конфликте
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Практические упражнения и кейсы
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">День 2: Техники управления</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Стратегии разрешения конфликтов
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Техники активного слушания и медиации
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Работа с эмоциями в конфликте
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Ролевые игры и симуляции
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Что получат участники</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Brain" className="text-blue-600" size={32} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Знания</h4>
                    <p className="text-slate-600 text-sm">Понимание природы конфликтов и способов их решения</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Tool" className="text-blue-600" size={32} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Навыки</h4>
                    <p className="text-slate-600 text-sm">Практические техники управления конфликтными ситуациями</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="FileText" className="text-blue-600" size={32} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Инструменты</h4>
                    <p className="text-slate-600 text-sm">Готовые шаблоны и алгоритмы для работы с конфликтами</p>
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
                Готовы научиться управлять конфликтами?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Запишитесь на тренинг и создайте здоровую атмосферу в команде
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
                    placeholder="Опишите конфликтные ситуации в вашей команде"
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
                    <CardTitle className="text-lg">Эффективное делегирование</CardTitle>
                    <CardDescription>
                      Практические навыки постановки задач и мотивации подчиненных
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/services/korporativnye-treningi/delegirovanie">
                      <Button variant="outline" className="w-full">
                        Подробнее
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
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
                    <CardTitle className="text-lg">Корпоративная культура</CardTitle>
                    <CardDescription>
                      Формирование ценностей и стандартов поведения
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/services/organizacionnaya-effektivnost/korporativnaya-kultura">
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

export default KonfliktMenedzhment;