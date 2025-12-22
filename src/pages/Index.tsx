import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    description: ''
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">FOXMetoD</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#diagnosis" className="text-gray-600 hover:text-primary transition-colors">Диагностика</a>
              <a href="#solution" className="text-gray-600 hover:text-primary transition-colors">Решение</a>
              <a href="#cases" className="text-gray-600 hover:text-primary transition-colors">Кейсы</a>
              <a href="#tools" className="text-gray-600 hover:text-primary transition-colors">Инструменты</a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90">Получить консультацию</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Заказать диагностику</DialogTitle>
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
                      <Label htmlFor="description">Опишите текущую ситуацию в бизнесе</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Отправить заявку</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
          <Icon name="Zap" size={16} />
          <span>Системная трансформация бизнеса</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          От хаоса к системе.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            За 8-12 недель.
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Превратите свой бизнес из зависимого от вас в масштабируемый актив. 
          Проверенная методология для SMB с оборотом 200-800 млн рублей.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all" onClick={() => scrollToSection('diagnosis')}>
            <Icon name="Rocket" size={20} className="mr-2" />
            Начать трансформацию
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('cases')}>
            Посмотреть кейсы
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">8-12</div>
            <div className="text-slate-600">недель до результата</div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
            <div className="text-slate-600">рост управляемости</div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-slate-600">млн оборот клиентов</div>
          </Card>
        </div>
      </section>

      {/* Problem Section */}
      <section id="diagnosis" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Узнаете свой бизнес?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Классические симптомы операционного хаоса в растущих компаниях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "AlertCircle",
                title: "Узкое горлышко",
                desc: "Собственник тратит 9+ часов в день на операционные задачи. Без вас всё останавливается."
              },
              {
                icon: "Users",
                title: "Кадровая хрупкость",
                desc: "Уход ключевого сотрудника = кризис. Знания «живут» в головах, а не в регламентах."
              },
              {
                icon: "TrendingDown",
                title: "Потеря управляемости",
                desc: "Маркетинг разбросан по мессенджерам. Узнаёте о проблемах постфактум, после потери бюджета."
              },
              {
                icon: "Flame",
                title: "Режим пожарника",
                desc: "Постоянное тушение кризисов. Нет времени на стратегию и развитие новых направлений."
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Maturity Matrix */}
          <div className="mt-20 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Матрица готовности: где вы сейчас?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  level: "Уровень 1",
                  title: "Ручное управление",
                  color: "red",
                  progress: 33,
                  features: ["Героизм отдельных сотрудников", "Регламенты игнорируются", "Тотальная зависимость от людей"]
                },
                {
                  level: "Уровень 2", 
                  title: "Переходный",
                  color: "yellow",
                  progress: 66,
                  features: ["CRM внедрена, но не используется", "Лоскутная автоматизация", "Недоверие к данным"]
                },
                {
                  level: "Уровень 3",
                  title: "Системный актив",
                  color: "green",
                  progress: 100,
                  features: ["Процессы работают автономно", "Отклонения видны на дашбордах", "Адаптация за 2 недели"]
                }
              ].map((item, idx) => (
                <Card key={idx} className={`p-6 border-2 ${idx === 2 ? 'border-green-300 bg-green-50/50' : 'border-slate-200'}`}>
                  <div className={`text-sm font-semibold mb-2 ${idx === 0 ? 'text-red-600' : idx === 1 ? 'text-yellow-600' : 'text-green-600'}`}>
                    {item.level}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <Progress value={item.progress} className="mb-4" />
                  <ul className="space-y-2">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600">
                        <Icon name={idx === 2 ? "CheckCircle" : "Circle"} size={16} className={`mt-0.5 flex-shrink-0 ${idx === 2 ? 'text-green-600' : 'text-slate-400'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Архитектура трансформации
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Спринтовая методология: фиксированный результат за фиксированный срок
            </p>
          </div>

          {/* Sprint Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 -translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-8">
                {[
                  {
                    weeks: "Недели 1-2",
                    title: "Диагностика и Выбор",
                    desc: "Аудит текущего состояния, выбор критического процесса для пилотной оптимизации",
                    icon: "Search"
                  },
                  {
                    weeks: "Недели 3-5",
                    title: "Проектирование TO BE",
                    desc: "Разработка идеальной модели процесса, написание живых регламентов",
                    icon: "Pencil"
                  },
                  {
                    weeks: "Недели 6-9",
                    title: "Цифровая имплантация",
                    desc: "Перенос стандартов в IT-среду (CRM, ERP). Ошибиться становится сложнее, чем сделать правильно",
                    icon: "Cpu"
                  },
                  {
                    weeks: "Недели 10-12",
                    title: "Запуск и Передача",
                    desc: "Боевое крещение команды и передача управления владельцу процесса",
                    icon: "Rocket"
                  }
                ].map((phase, idx) => (
                  <div key={idx} className="relative">
                    <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}>
                      <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Icon name={phase.icon as any} className="text-blue-600" size={24} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-blue-600 mb-1">{phase.weeks}</div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h4>
                            <p className="text-slate-600 text-sm">{phase.desc}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    
                    <div className="absolute left-1/2 top-6 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 hidden md:block border-4 border-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hierarchy Pyramid */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Иерархия внедрения
            </h3>
            <p className="text-center text-slate-600 mb-8">
              Ключевая ошибка — одновременное внедрение по всем фронтам. Эффективная стратегия — строгая последовательность.
            </p>
            
            <div className="space-y-3">
              {[
                { title: "4. Комплаенс", desc: "Юридическая и нормативная обвязка", color: "from-slate-400 to-slate-500", width: "w-1/4" },
                { title: "3. Цифры", desc: "P&L, Unit-экономика, Дашборды", color: "from-blue-500 to-blue-600", width: "w-2/4" },
                { title: "2. Люди", desc: "Профили должностей, ЦКП, Адаптация", color: "from-indigo-500 to-indigo-600", width: "w-3/4" },
                { title: "1. Процессы", desc: "Фундамент: стандартизация «от лида до денег»", color: "from-purple-500 to-purple-600", width: "w-full" }
              ].map((layer, idx) => (
                <div key={idx} className="flex justify-center">
                  <Card className={`${layer.width} p-5 bg-gradient-to-r ${layer.color} text-white border-none hover:scale-105 transition-transform`}>
                    <div className="text-center">
                      <div className="font-bold text-lg mb-1">{layer.title}</div>
                      <div className="text-sm opacity-90">{layer.desc}</div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Экономика трансформации
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Реальные метрики «До» и «После» из практики
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Case 1: Ectem */}
            <Card className="p-8 border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <Icon name="AlertTriangle" className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">IT-компания Ectem</h3>
                  <p className="text-sm text-slate-600">Выход из смертельной спирали</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-slate-700 font-medium">Операционный убыток:</span>
                  <span className="text-red-600 font-bold">-700K ₽/мес</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-slate-700 font-medium">Выручка:</span>
                  <span className="text-red-600 font-bold">170-187K ₽/мес</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-slate-700 font-medium">Время собственника:</span>
                  <span className="text-red-600 font-bold">9 часов/день</span>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-red-200 via-green-200 to-green-300 my-6"></div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-slate-700 font-medium">Целевая выручка:</span>
                  <span className="text-green-600 font-bold">2M ₽/мес</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-slate-700 font-medium">Срок достижения:</span>
                  <span className="text-green-600 font-bold">4 месяца</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-slate-900 mb-2">Рычаги роста:</div>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-blue-600" />
                    Найм менеджера по продажам
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-blue-600" />
                    Sales Playbook + CRM
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-blue-600" />
                    Партнерская программа
                  </li>
                </ul>
              </div>
            </Card>

            {/* Case 2: Beauty Shop */}
            <Card className="p-8 border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                  <Icon name="TrendingDown" className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Beauty Shop</h3>
                  <p className="text-sm text-slate-600">Реанимация маркетинга</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="text-slate-700 font-medium">Проблема:</span>
                  <span className="text-yellow-700 font-bold">Системный сбой</span>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="text-slate-700 font-medium mb-2">Симптомы:</div>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• Падение эффективности SEO/Avito</li>
                    <li>• Убыточные маркетплейсы</li>
                    <li>• Потеря управления подрядчиками</li>
                    <li>• Коммуникация в мессенджерах</li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 my-6"></div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-slate-700 font-medium">Целевой поток лидов:</span>
                  <span className="text-green-600 font-bold">1500-2000/мес</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-slate-700 font-medium">Инвестиция:</span>
                  <span className="text-green-600 font-bold">от 1.01M ₽</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-slate-900 mb-2">Решение:</div>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-blue-600" />
                    Внедрение ОКМ (Отчет по Ключевым Метрикам)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-blue-600" />
                    Связка бюджета с выручкой
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-blue-600" />
                    Переход к CPL/CPA модели
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Инструменты управления
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Жизнь в точке Б: управление через панели, а не через вмешательство
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <Icon name="BarChart3" className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Дашборды</h3>
              <p className="text-slate-600 mb-4">
                Вид с высоты птичьего полёта. Финансы, Маркетинг, Продажи, Качество в одном окне.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-green-600" />
                  <span>Агрегация из CRM, 1С, рекламных кабинетов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-green-600" />
                  <span>Отклонения видны в реальном времени</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6">
                <Icon name="BookOpen" className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Книги процессов</h3>
              <p className="text-slate-600 mb-4">
                Стандартизация знаний. Книга Сотрудника и Книга Продаж как операционные мануалы.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-green-600" />
                  <span>Адаптация за 4 дня вместо месяцев</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-green-600" />
                  <span>Знания стали активом компании</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <Icon name="Target" className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Стратсессии</h3>
              <p className="text-slate-600 mb-4">
                3-дневный интенсив для синхронизации команды и декомпозиции целей (OKR).
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-green-600" />
                  <span>Единое видение и приоритеты</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-green-600" />
                  <span>Ответственность за метрики</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы превратить хаос в систему?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Переход от ручного управления к системному активу — решаемая инженерная задача. 
            Начните с честной диагностики.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на диагностику
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
              <Icon name="FileText" size={20} className="mr-2" />
              Скачать полный отчёт
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12 border-t border-white/20">
            {[
              { icon: "Search", text: "Честная диагностика" },
              { icon: "Eye", text: "Визуализация процессов" },
              { icon: "RefreshCw", text: "Итеративность" },
              { icon: "TrendingUp", text: "Цифровизация" }
            ].map((pillar, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name={pillar.icon as any} size={24} />
                </div>
                <div className="text-sm font-medium">{pillar.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-2xl font-bold">FOXMetoD</span>
              </div>
              <p className="text-gray-400">
                Консалтинговое агентство для системной трансформации и развития бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#diagnosis" className="hover:text-white transition-colors">Диагностика</a></li>
                <li><a href="#solution" className="hover:text-white transition-colors">Решение</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#tools" className="hover:text-white transition-colors">Инструменты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (922) 022-72-25</p>
                <p>tomasheva.natalia@yandex.ru</p>
                <p>@natalyatomasheva</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; FOXMetoD, 2025. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}