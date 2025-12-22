import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from "@/components/ui/icon";

interface TransformationRoadmapProps {
  formData: {
    name: string;
    position?: string;
    company: string;
    phone?: string;
    telegram?: string;
    revenue?: string;
    employees?: string;
    description: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function TransformationRoadmap({ formData, onInputChange, onSubmit }: TransformationRoadmapProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: "Диагностика и Выбор процесса",
      duration: "1-2 недели",
      icon: "Search",
      color: "from-blue-500 to-blue-600",
      description: "Проводим глубинные интервью с собственником и ключевыми руководителями. Определяем ваш текущий Уровень Готовности (от 1 до 3)",
      details: [
        "Аудит текущих процессов и систем учёта",
        "Выбираем 1 ключевой процесс для пилотной оптимизации (Продажи, Найм, Маркетинг)",
        "Находим «узкие горлышки» и зоны потерь",
        "Составляем дорожную карту трансформации"
      ],
      deliverable: "Отчёт о текущем уровне зрелости + План перехода на следующий уровень"
    },
    {
      number: 2,
      title: "Проектирование \"Как должно быть\" («To Be»)",
      duration: "2-3 недели",
      icon: "GitBranch",
      color: "from-purple-500 to-purple-600",
      description: "Разрабатываем целевую модель процесса — «как должно быть». Убираем лишние звенья, пишем живые регламенты",
      details: [
        "Очистка процесса от избыточных шагов и дублирования",
        "Создание регламентов, понятных линейному персоналу",
        "Разработка матрицы ответственности и показателей эффективности",
        "Проектирование системы контроля и отчётности"
      ],
      deliverable: "Целевая модель процесса + Регламенты + Показатели эффективности"
    },
    {
      number: 3,
      title: "Внедрение в цифру",
      duration: "3-5 недель",
      icon: "Wrench",
      color: "from-orange-500 to-orange-600",
      description: "Переносим стандарты в систему управления клиентами, таск-трекеры. Настраиваем так, чтобы совершить ошибку было сложнее, чем сделать правильно",
      details: [
        "Настройка автоматизации в CRM/ERP системах и таск-трекерах",
        "Создание шаблонов, чек-листов и автоматических напоминаний",
        "Интеграция с системами учёта и отчётности",
        "Настройка панелей управления для контроля показателей"
      ],
      deliverable: "Настроенная система + Автоматизированные процессы + Дашборды"
    },
    {
      number: 4,
      title: "Запуск и Передача",
      duration: "2-3 недели",
      icon: "TrendingUp",
      color: "from-green-500 to-green-600",
      description: "Обучаем команду работе по новым стандартам. Проводим «боевое крещение». Передаём управление владельцу процесса",
      details: [
        "Обучение команды новым регламентам и инструментам",
        "Пилотный запуск с сопровождением",
        "Сбор обратной связи и оперативные корректировки",
        "Передача управления: вы получаете процесс, работающий без вас"
      ],
      deliverable: "Обученная команда + Работающий процесс + База знаний для масштабирования"
    }
  ];

  return (
    <section id="solution" className="py-16 md:py-20 bg-white">

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 md:px-4 py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            <Icon name="Map" size={14} className="inline mr-2" />
            Дорожная карта трансформации
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 px-2">
            Как проходит трансформация
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Четыре последовательных этапа превращения хаоса в систему. От диагностики до передачи работающего процесса — <span className="text-primary font-semibold">за 8-12 недель</span>
          </p>
          <p className="text-xs md:text-sm text-slate-500 mt-2 px-4">
            <Icon name="ArrowDown" size={14} className="inline mr-1" />
            Всё начинается с бесплатной оценки (Шаг 0)
          </p>
          <Card className="mt-6 md:mt-8 max-w-3xl mx-auto bg-blue-50 border-2 border-[#7CB1C4] shadow-lg">
            <div className="p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#7CB1C4] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Icon name="Sparkles" className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                    <span className="px-2 md:px-3 py-1 bg-[#7CB1C4] text-white text-xs font-bold rounded-full w-fit">ШАГ 0</span>
                    <span className="text-xs md:text-sm font-semibold text-[#19374A]">• БЕСПЛАТНО • 30-60 минут</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Оценка автономности бизнеса</h3>
                  <p className="text-sm md:text-base text-slate-700 mb-3">
                    На встрече разберём "узкие места" в процессах и составим индивидуальное предложение по оптимизации 1 процесса с планом перехода
                  </p>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600">
                    <Icon name="CheckCircle" size={14} className="text-green-600" />
                    <span>Без обязательств • Конкретный план действий</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Interactive Roadmap */}
        <div className="max-w-6xl mx-auto relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 via-orange-200 to-green-200 -translate-x-1/2 z-0"></div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <Card
                    className={`p-4 md:p-6 bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 ${
                      activeStep === idx ? 'border-primary shadow-2xl md:scale-105' : 'border-transparent'
                    }`}
                    onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                  >
                    <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 ${
                        step.number === 1 ? 'bg-[#7CB1C4]' :
                        step.number === 2 ? 'bg-[#4D7085]' :
                        step.number === 3 ? 'bg-[#E8551B]' :
                        'bg-[#19374A]'
                      }`}>
                        <Icon name={step.icon} className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                          <span className="text-xs md:text-sm font-bold text-primary">Этап {step.number}</span>
                          <span className="text-xs md:text-sm text-slate-500">• {step.duration}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeStep === idx ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="space-y-3 border-t pt-3 md:pt-4">
                        <div className="font-semibold text-sm md:text-base text-slate-800 flex items-center gap-2">
                          <Icon name="CheckSquare" size={16} className="text-primary" />
                          Что делаем:
                        </div>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                              <Icon name="ArrowRight" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-3 md:mt-4 p-2 md:p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                          <div className="font-semibold text-green-900 text-xs md:text-sm mb-1 flex items-center gap-2">
                            <Icon name="Package" size={14} />
                            Что вы получаете:
                          </div>
                          <p className="text-xs md:text-sm text-green-800">{step.deliverable}</p>
                        </div>
                      </div>
                    </div>

                    {/* Expand Hint */}
                    <button
                      className="mt-2 md:mt-3 text-xs md:text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveStep(activeStep === idx ? null : idx);
                      }}
                    >
                      {activeStep === idx ? (
                        <>
                          <Icon name="ChevronUp" size={14} />
                          Свернуть
                        </>
                      ) : (
                        <>
                          <Icon name="ChevronDown" size={14} />
                          Подробнее
                        </>
                      )}
                    </button>
                  </Card>
                </div>

                {/* Step Number Circle (Center) */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${
                      step.number === 1 ? 'bg-[#7CB1C4]' :
                      step.number === 2 ? 'bg-[#4D7085]' :
                      step.number === 3 ? 'bg-[#E8551B]' :
                      'bg-[#19374A]'
                    } shadow-xl flex items-center justify-center transition-all duration-500 ${
                      activeStep === idx ? 'md:scale-125 shadow-2xl' : ''
                    }`}
                  >
                    <span className="text-white font-bold text-lg md:text-2xl">{step.number}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="md:hidden absolute top-12 left-1/2 w-1 h-8 bg-gradient-to-b from-slate-300 to-slate-200 -translate-x-1/2"></div>
                  )}
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>

          {/* Result Banner */}
          <div className="mt-12 md:mt-16 relative">
            <Card className="p-6 md:p-8 bg-[#E8551B] text-white text-center shadow-2xl border-2 border-[#E8551B]">
              <div className="relative z-10">
                <Icon name="Target" size={36} className="mx-auto mb-3 md:mb-4 md:w-12 md:h-12" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Итого: полная трансформация за 8-12 недель</h3>
                <p className="text-sm md:text-base lg:text-lg opacity-90 max-w-3xl mx-auto mb-5 md:mb-6">
                  Вы получаете не просто документы, а <span className="font-bold">работающий процесс</span>, который функционирует автономно. Новые сотрудники адаптируются за 2 недели вместо месяцев
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                  <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                    <Icon name="CheckCircle" size={18} />
                    <span>Фиксированный результат</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                    <Icon name="Clock" size={18} />
                    <span>Фиксированный срок</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                    <Icon name="Shield" size={18} />
                    <span>Без риска «сломать» бизнес</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-xl hover:shadow-2xl w-full md:w-auto">
                <Icon name="Rocket" size={18} className="mr-2" />
                Оценить автономность моего бизнеса
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Оценить автономность бизнеса</DialogTitle>
                <p className="text-sm text-slate-600 mt-2">
                  На встрече разберём "узкие места" в процессах и составим индивидуальное предложение по оптимизации 1 процесса
                </p>
              </DialogHeader>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="roadmap-name">ФИО *</Label>
                    <Input
                      id="roadmap-name"
                      name="name"
                      value={formData.name}
                      onChange={onInputChange}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="roadmap-position">Должность *</Label>
                    <Input
                      id="roadmap-position"
                      name="position"
                      value={formData.position || ''}
                      onChange={onInputChange}
                      placeholder="Генеральный директор"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="roadmap-company">Название компании *</Label>
                  <Input
                    id="roadmap-company"
                    name="company"
                    value={formData.company}
                    onChange={onInputChange}
                    placeholder="ООО Название"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="roadmap-phone">Телефон</Label>
                    <Input
                      id="roadmap-phone"
                      name="phone"
                      value={formData.phone || ''}
                      onChange={onInputChange}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <Label htmlFor="roadmap-telegram">Telegram *</Label>
                    <Input
                      id="roadmap-telegram"
                      name="telegram"
                      value={formData.telegram || ''}
                      onChange={onInputChange}
                      placeholder="@username"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="roadmap-revenue">Текущий оборот (млн/год) *</Label>
                    <Input
                      id="roadmap-revenue"
                      name="revenue"
                      value={formData.revenue || ''}
                      onChange={onInputChange}
                      placeholder="200-800"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="roadmap-employees">Кол-во сотрудников *</Label>
                    <Input
                      id="roadmap-employees"
                      name="employees"
                      value={formData.employees || ''}
                      onChange={onInputChange}
                      placeholder="10-50"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="roadmap-description">"Узкие места" в процессах компании *</Label>
                  <Textarea
                    id="roadmap-description"
                    name="description"
                    value={formData.description}
                    onChange={onInputChange}
                    placeholder="Опишите главную боль: нехватка времени, зависимость от вас, хаос в процессах..."
                    rows={3}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Отправить заявку</Button>
              </form>
            </DialogContent>
          </Dialog>
          <p className="text-xs md:text-sm text-slate-500 mt-3">
            Бесплатная диагностика текущего уровня готовности
          </p>
        </div>
      </div>
    </section>
  );
}