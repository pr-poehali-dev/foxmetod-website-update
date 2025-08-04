import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BiznesTreking: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    contact: '',
    company: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600">Главная</Link>
            <Icon name="ChevronRight" className="mx-2" size={16} />
            <Link to="/services" className="hover:text-blue-600">Услуги</Link>
            <Icon name="ChevronRight" className="mx-2" size={16} />
            <Link to="/services/strategiya-i-upravlenie" className="hover:text-blue-600">Стратегия и управление</Link>
            <Icon name="ChevronRight" className="mx-2" size={16} />
            <span className="text-slate-900 font-medium">Бизнес-трекинг</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-800/30 text-blue-100 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
              1.1. Стратегия и управление
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Бизнес-трекинг
            </h1>
            <h2 className="text-2xl text-blue-100 mb-8 font-medium">
              Мы превращаем хаос в управляемую систему роста с измеримыми результатами
            </h2>
            <div className="flex flex-wrap gap-6 text-blue-200">
              <div className="flex items-center">
                <Icon name="Clock" className="mr-2" size={20} />
                1-6 месяцев
              </div>
              <div className="flex items-center">
                <Icon name="DollarSign" className="mr-2" size={20} />
                от 25 000 ₽/сессия
              </div>
              <div className="flex items-center">
                <Icon name="TrendingUp" className="mr-2" size={20} />
                Рост показателей на 20-40%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Description */}
            <div className="mb-16">
              <p className="text-lg text-slate-700 leading-relaxed">
                FOXMetoD предлагает комплексное сопровождение, которое трансформирует хаотичное управление 
                в прозрачную, автоматизированную систему с четкими показателями успеха, высвобождая ваше время 
                для стратегического развития и личной жизни, а не для "тушения пожаров". Ваш бизнес начинает 
                работать на вас, стабильно растет и приносит предсказуемую прибыль.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                
                {/* Problem */}
                <Card className="border-red-200 bg-red-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <Icon name="AlertTriangle" className="mr-2" size={24} />
                      Проблема
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 leading-relaxed">
                      Собственник тратит большую часть времени на рутинные задачи вместо стратегического 
                      развития, бизнес держится исключительно на нем, отсутствует прозрачность процессов, 
                      а рост замедлился или остановился.
                    </p>
                  </CardContent>
                </Card>

                {/* Value & Benefits */}
                <Card className="border-green-200 bg-green-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Icon name="Target" className="mr-2" size={24} />
                      Ценность и выгоды для вас
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      Освобождение времени владельца до 60-70% для решения стратегических задач, повышение 
                      прибыльности на 20-40%, полная прозрачность и контроль через еженедельные ОКМ, создание 
                      самостоятельной и адаптивной команды, и готовность бизнеса к масштабированию.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Icon name="CheckCircle" className="mr-2 mt-1 text-green-600" size={16} />
                        <span className="text-sm text-slate-600">Освобождение времени до 60-70%</span>
                      </div>
                      <div className="flex items-start">
                        <Icon name="CheckCircle" className="mr-2 mt-1 text-green-600" size={16} />
                        <span className="text-sm text-slate-600">Рост прибыли на 20-40%</span>
                      </div>
                      <div className="flex items-start">
                        <Icon name="CheckCircle" className="mr-2 mt-1 text-green-600" size={16} />
                        <span className="text-sm text-slate-600">Еженедельные ОКМ</span>
                      </div>
                      <div className="flex items-start">
                        <Icon name="CheckCircle" className="mr-2 mt-1 text-green-600" size={16} />
                        <span className="text-sm text-slate-600">Готовность к масштабированию</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* How It Works */}
                <Card className="border-blue-200 bg-blue-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Icon name="Settings" className="mr-2" size={24} />
                      Как проходит работа
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                        <span className="text-slate-700">Еженедельные спринты с экспертом (60-90 минут)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                        <span className="text-slate-700">Установка измеримых целей и KPI</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                        <span className="text-slate-700">Разработка и тестирование гипотез роста</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                        <span className="text-slate-700">Непрерывный анализ результатов и корректировка стратегии</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</div>
                        <span className="text-slate-700">Экспертные рекомендации в слепых зонах бизнеса</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Results */}
                <Card className="border-purple-200 bg-purple-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Icon name="Trophy" className="mr-2" size={24} />
                      Ваши результаты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon name="Award" className="mr-2 mt-1 text-purple-600" size={16} />
                        <span className="text-slate-700">Устойчивый рост ключевых показателей (выручка, прибыль, конверсия)</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Award" className="mr-2 mt-1 text-purple-600" size={16} />
                        <span className="text-slate-700">Системный подход к развитию бизнеса</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Award" className="mr-2 mt-1 text-purple-600" size={16} />
                        <span className="text-slate-700">Повышение личной эффективности руководителя</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Award" className="mr-2 mt-1 text-purple-600" size={16} />
                        <span className="text-slate-700">Внедренные инструменты регулярного менеджмента</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Pricing */}
                <Card className="border-slate-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <Icon name="DollarSign" className="mr-2" size={24} />
                      Стоимость
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-b border-slate-200 pb-3">
                      <div className="font-semibold text-slate-900">Трекинг бизнеса</div>
                      <div className="text-lg font-bold text-blue-600">от 25 000 ₽</div>
                      <div className="text-sm text-slate-600">за сессию при пакетном сопровождении</div>
                    </div>
                    <div className="border-b border-slate-200 pb-3">
                      <div className="font-semibold text-slate-900">Экспресс-Старт</div>
                      <div className="text-lg font-bold text-blue-600">от 500 000 ₽</div>
                      <div className="text-sm text-slate-600">до 3 месяцев</div>
                    </div>
                    <div className="border-b border-slate-200 pb-3">
                      <div className="font-semibold text-slate-900">Системная Трансформация</div>
                      <div className="text-lg font-bold text-blue-600">от 1 500 000 ₽</div>
                      <div className="text-sm text-slate-600">3-6 месяцев</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Стратегическое партнерство</div>
                      <div className="text-lg font-bold text-blue-600">от 3 000 000 ₽</div>
                      <div className="text-sm text-slate-600">от 6 месяцев</div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="border-blue-300 bg-blue-50">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-slate-900 mb-4 text-center">
                      Готовы начать трансформацию?
                    </h3>
                    <p className="text-sm text-slate-600 mb-6 text-center">
                      Получите персональную консультацию по внедрению бизнес-трекинга в вашей компании
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Заказать консультацию по бизнес-трекингу
                          <Icon name="ArrowRight" className="ml-2" size={16} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Консультация по бизнес-трекингу</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <Label htmlFor="name">Ваше имя</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="contact">Телефон/Telegram для связи</Label>
                            <Input
                              id="contact"
                              name="contact"
                              value={formData.contact}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="company">Название компании</Label>
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="description">Опишите текущую ситуацию в управлении</Label>
                            <Textarea
                              id="description"
                              name="description"
                              value={formData.description}
                              onChange={handleInputChange}
                              rows={3}
                              placeholder="Какие проблемы в управлении вы хотите решить?"
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full">Отправить заявку</Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>

                {/* Related Services */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-slate-800">Связанные услуги</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/services/strategiya-i-upravlenie/strategicheskie-sessii" className="block text-sm text-blue-600 hover:text-blue-800">
                      → Стратегические сессии
                    </Link>
                    <Link to="/services/strategiya-i-upravlenie/vnedrenie-okr" className="block text-sm text-blue-600 hover:text-blue-800">
                      → Внедрение OKR
                    </Link>
                    <Link to="/services/operacionnaya-deyatelnost/vnedrenie-okm" className="block text-sm text-blue-600 hover:text-blue-800">
                      → Внедрение ОКМ
                    </Link>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BiznesTreking;