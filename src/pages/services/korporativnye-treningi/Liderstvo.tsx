import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Liderstvo: React.FC = () => {
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
              <span className="text-slate-900 font-medium">Развитие лидерства</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Развитие лидерства
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Комплексная программа развития лидерских качеств для управленческой команды. 
                От личного лидерства до управления командами и изменениями.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">от 120 000 ₽</div>
                  <div className="text-slate-300">Стоимость программы</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">3-5 дней</div>
                  <div className="text-slate-300">Продолжительность</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">до 12 человек</div>
                  <div className="text-slate-300">Размер группы</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Icon name="Phone" className="mr-2" size={20} />
                Записаться на программу
              </Button>
            </div>
          </div>
        </section>

        {/* Problems vs Results */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Растите лидеров, способных вести команды к успеху
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center">
                    <Icon name="AlertCircle" className="mr-3" size={24} />
                    Проблемы слабого лидерства
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Низкая мотивация команды</div>
                        <div className="text-sm text-slate-600">Сотрудники работают без энтузиазма и вовлеченности</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Отсутствие видения</div>
                        <div className="text-sm text-slate-600">Команда не понимает стратегию и цели компании</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Слабые результаты</div>
                        <div className="text-sm text-slate-600">Команды не достигают поставленных целей</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Высокая текучесть</div>
                        <div className="text-sm text-slate-600">Талантливые сотрудники покидают компанию</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center">
                    <Icon name="CheckCircle" className="mr-3" size={24} />
                    Результаты сильного лидерства
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Высокая вовлеченность</div>
                        <div className="text-sm text-slate-600">Команда работает с энтузиазмом и преданностью</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Четкое видение</div>
                        <div className="text-sm text-slate-600">Каждый понимает свой вклад в общий успех</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Превышение KPI на 30%</div>
                        <div className="text-sm text-slate-600">Команды регулярно перевыполняют планы</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Удержание талантов</div>
                        <div className="text-sm text-slate-600">Лучшие сотрудники остаются и развиваются</div>
                      </div>
                    </div>
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
                Готовы развить лидерский потенциал вашей команды?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Запишитесь на программу развития лидерства и создайте команду победителей
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
                    placeholder="Какие лидерские компетенции нужно развить?"
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Записаться на программу
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
};

export default Liderstvo;