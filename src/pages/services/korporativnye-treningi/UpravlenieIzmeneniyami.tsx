import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UpravlenieIzmeneniyami: React.FC = () => {
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
              <span className="text-slate-900 font-medium">Управление изменениями</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Управление изменениями
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Методы проведения изменений в компании с минимальным сопротивлением персонала 
                и максимальной эффективностью внедрения.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">от 90 000 ₽</div>
                  <div className="text-slate-300">Стоимость тренинга</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">2-3 дня</div>
                  <div className="text-slate-300">Продолжительность</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">до 18 человек</div>
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
                Превратите сопротивление в поддержку изменений
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center">
                    <Icon name="AlertCircle" className="mr-3" size={24} />
                    Типичные проблемы при изменениях
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Сопротивление персонала</div>
                        <div className="text-sm text-slate-600">Сотрудники боятся и противятся нововведениям</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Затягивание внедрения</div>
                        <div className="text-sm text-slate-600">Изменения внедряются месяцами без видимого результата</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Потеря мотивации</div>
                        <div className="text-sm text-slate-600">Команда теряет веру в успех проекта изменений</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <Icon name="X" className="text-red-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Откат к старому</div>
                        <div className="text-sm text-slate-600">После внедрения процессы возвращаются к исходному состоянию</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center">
                    <Icon name="CheckCircle" className="mr-3" size={24} />
                    Результаты правильного управления изменениями
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Поддержка команды</div>
                        <div className="text-sm text-slate-600">Сотрудники становятся союзниками и драйверами изменений</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Быстрое внедрение</div>
                        <div className="text-sm text-slate-600">Изменения внедряются в 2-3 раза быстрее</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Высокая вовлеченность</div>
                        <div className="text-sm text-slate-600">Команда активно участвует в процессе трансформации</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-slate-900">Устойчивый результат</div>
                        <div className="text-sm text-slate-600">Изменения закрепляются и становятся частью культуры</div>
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
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">День 1: Психология изменений</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Почему люди сопротивляются изменениям
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Кривая принятия изменений
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Типы сотрудников при изменениях
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Создание видения изменений
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">День 2: Инструменты управления</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Модель Коттера (8 шагов)
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Анализ заинтересованных сторон
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Коммуникационная стратегия
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      План управления рисками
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">День 3: Практическое применение</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Кейсы участников
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Разработка плана изменений
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Техники преодоления сопротивления
                    </li>
                    <li className="flex items-start">
                      <Icon name="Play" className="text-blue-500 mr-2 mt-1" size={16} />
                      Индивидуальные планы действий
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Инструменты для участников</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="FileText" className="text-blue-500 mr-2 mt-1" size={16} />
                      Шаблон плана управления изменениями
                    </li>
                    <li className="flex items-start">
                      <Icon name="FileText" className="text-blue-500 mr-2 mt-1" size={16} />
                      Матрица анализа заинтересованных сторон
                    </li>
                    <li className="flex items-start">
                      <Icon name="FileText" className="text-blue-500 mr-2 mt-1" size={16} />
                      Коммуникационный календарь
                    </li>
                  </ul>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <Icon name="FileText" className="text-blue-500 mr-2 mt-1" size={16} />
                      Чек-лист готовности к изменениям
                    </li>
                    <li className="flex items-start">
                      <Icon name="FileText" className="text-blue-500 mr-2 mt-1" size={16} />
                      Карта рисков и противодействий
                    </li>
                    <li className="flex items-start">
                      <Icon name="FileText" className="text-blue-500 mr-2 mt-1" size={16} />
                      Методики измерения прогресса
                    </li>
                  </ul>
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
                Готовы стать мастером управления изменениями?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Научитесь проводить изменения быстро, эффективно и с поддержкой команды
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
                    placeholder="Какие изменения планируете провести?"
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
                      Программа развития лидерских качеств для управленческой команды
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
                    <CardTitle className="text-lg">Стратегические сессии</CardTitle>
                    <CardDescription>
                      Интенсивные сессии для выработки стратегии развития
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/services/strategiya-i-upravlenie/strategicheskie-sessii">
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
                      Построение эффективной организационной структуры
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

export default UpravlenieIzmeneniyami;