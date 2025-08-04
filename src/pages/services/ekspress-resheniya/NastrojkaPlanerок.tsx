import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NastrojkaPlanerок: React.FC = () => {
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
              <span className="text-slate-900 font-medium">Настройка планерок</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Настройка планерок
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Организация эффективных совещаний, планерок и встреч для повышения продуктивности команды. 
                Превратим хаотичные встречи в структурированный инструмент управления.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">от 25 000 ₽</div>
                  <div className="text-slate-300">Стоимость услуги</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">1-2 недели</div>
                  <div className="text-slate-300">Срок внедрения</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">-50%</div>
                  <div className="text-slate-300">Время на совещания</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Icon name="Phone" className="mr-2" size={20} />
                Настроить планерки
              </Button>
            </div>
          </div>
        </section>

        {/* Problems vs Results */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Сделайте совещания продуктивными и короткими
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center">
                    <Icon name="AlertCircle" className="mr-3" size={24} />
                    Проблемы неэффективных совещаний
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Потеря времени</div>
                        <div className="text-sm text-slate-600">До 3 часов в день тратится на бессмысленные встречи</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Отсутствие результатов</div>
                        <div className="text-sm text-slate-600">Встречи заканчиваются без конкретных решений</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Демотивация сотрудников</div>
                        <div className="text-sm text-slate-600">Команда воспринимает совещания как наказание</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Информационный хаос</div>
                        <div className="text-sm text-slate-600">Важная информация теряется в потоке обсуждений</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center">
                    <Icon name="CheckCircle" className="mr-3" size={24} />
                    Результаты эффективных планерок
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Экономия времени 50%</div>
                        <div className="text-sm text-slate-600">Совещания становятся короче и продуктивнее</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Конкретные решения</div>
                        <div className="text-sm text-slate-600">Каждая встреча заканчивается планом действий</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Вовлеченность команды</div>
                        <div className="text-sm text-slate-600">Сотрудники активно участвуют в обсуждениях</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Прозрачность</div>
                        <div className="text-sm text-slate-600">Все участники понимают цели и задачи</div>
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
                Как мы настраиваем эффективные планерки
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Search" className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">1. Аудит встреч</h3>
                  <p className="text-slate-600 text-sm">Анализируем текущие совещания и их эффективность</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Settings" className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">2. Разработка форматов</h3>
                  <p className="text-slate-600 text-sm">Создаем структуру и регламенты планерок</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">3. Обучение команды</h3>
                  <p className="text-slate-600 text-sm">Обучаем правилам проведения встреч</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">4. Контроль качества</h3>
                  <p className="text-slate-600 text-sm">Мониторим внедрение и корректируем процесс</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Типы планерок, которые мы настраиваем</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Оперативные встречи</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Ежедневные stand-up встречи (15 мин)
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Еженедельные планерки отделов (30 мин)
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Ретроспективы проектов (45 мин)
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Стратегические встречи</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Месячные управленческие планерки (90 мин)
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Квартальные стратегические сессии (4 часа)
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                        Проблемные совещания (по необходимости)
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
                Готовы сделать совещания эффективными?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Настроим планерки так, чтобы они экономили время и приносили результат
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
                    placeholder="Какие проблемы с совещаниями у вас есть?"
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Настроить планерки
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

export default NastrojkaPlanerок;