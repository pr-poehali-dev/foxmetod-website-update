import { useState } from 'react';
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function TransformationRoadmap() {
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
      title: "Проектирование «To Be»",
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
        "Настройка автоматизации в CRM/ERP системах",
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
    <section id="solution" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Icon name="Map" size={16} className="inline mr-2" />
            Дорожная карта трансформации
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Как проходит трансформация
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Четыре последовательных этапа превращения хаоса в систему. От диагностики до передачи работающего процесса — <span className="text-primary font-semibold">за 8-12 недель</span>
          </p>
        </div>

        {/* Interactive Roadmap */}
        <div className="max-w-6xl mx-auto relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 via-orange-200 to-green-200 -translate-x-1/2 z-0"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <Card
                    className={`p-6 bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 ${
                      activeStep === idx ? 'border-primary shadow-2xl scale-105' : 'border-transparent'
                    }`}
                    onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Icon name={step.icon} className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-primary">Этап {step.number}</span>
                          <span className="text-sm text-slate-500">• {step.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeStep === idx ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="space-y-3 border-t pt-4">
                        <div className="font-semibold text-slate-800 flex items-center gap-2">
                          <Icon name="CheckSquare" size={18} className="text-primary" />
                          Что делаем:
                        </div>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                              <Icon name="ArrowRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                          <div className="font-semibold text-green-900 text-sm mb-1 flex items-center gap-2">
                            <Icon name="Package" size={16} />
                            Что вы получаете:
                          </div>
                          <p className="text-sm text-green-800">{step.deliverable}</p>
                        </div>
                      </div>
                    </div>

                    {/* Expand Hint */}
                    <button
                      className="mt-3 text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveStep(activeStep === idx ? null : idx);
                      }}
                    >
                      {activeStep === idx ? (
                        <>
                          <Icon name="ChevronUp" size={16} />
                          Свернуть
                        </>
                      ) : (
                        <>
                          <Icon name="ChevronDown" size={16} />
                          Подробнее
                        </>
                      )}
                    </button>
                  </Card>
                </div>

                {/* Step Number Circle (Center) */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center transition-all duration-500 ${
                      activeStep === idx ? 'scale-125 shadow-2xl' : ''
                    }`}
                  >
                    <span className="text-white font-bold text-2xl">{step.number}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="md:hidden absolute top-16 left-1/2 w-1 h-12 bg-gradient-to-b from-slate-300 to-slate-200 -translate-x-1/2"></div>
                  )}
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>

          {/* Result Banner */}
          <div className="mt-16 relative">
            <Card className="p-8 bg-gradient-to-r from-primary via-secondary to-primary text-white text-center shadow-2xl border-0 overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
              <div className="relative z-10">
                <Icon name="Target" size={48} className="mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-3">Итого: полная трансформация за 8-12 недель</h3>
                <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
                  Вы получаете не просто документы, а <span className="font-bold">работающий процесс</span>, который функционирует автономно. Новые сотрудники адаптируются за 2 недели вместо месяцев
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center gap-2 text-white/90">
                    <Icon name="CheckCircle" size={20} />
                    <span>Фиксированный результат</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Icon name="Clock" size={20} />
                    <span>Фиксированный срок</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Icon name="Shield" size={20} />
                    <span>Без риска «сломать» бизнес</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a href="#diagnosis">
            <button className="group px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-primary">
              <Icon name="Rocket" size={20} className="inline mr-2 group-hover:translate-x-1 transition-transform" />
              Оценить автономность моего бизнеса
            </button>
          </a>
          <p className="text-sm text-slate-500 mt-3">
            Бесплатная диагностика текущего уровня готовности
          </p>
        </div>
      </div>
    </section>
  );
}
