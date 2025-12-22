import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function SolutionCasesTools() {
  const phases = [
    {
      icon: "Search",
      title: "Аудит & Диагностика",
      duration: "1-2 недели",
      desc: "Глубокий анализ текущего состояния: структура, процессы, зоны риска, потери"
    },
    {
      icon: "GitBranch",
      title: "Проектирование системы",
      duration: "2-3 недели",
      desc: "Разработка целевой модели: оргструктура, матрица ответственности, KPI, регламенты"
    },
    {
      icon: "Wrench",
      title: "Внедрение и настройка",
      duration: "3-5 недель",
      desc: "Запуск новых процессов, систем учёта, автоматизация рутины, обучение команды"
    },
    {
      icon: "TrendingUp",
      title: "Стабилизация и рост",
      duration: "2-3 недели",
      desc: "Мониторинг результатов, коррекция, передача управления владельцу, масштабирование"
    }
  ];

  const cases = [
    {
      company: "Дистрибьютор стройматериалов",
      revenue: "450 млн руб",
      problem: "Хаос в закупках и логистике. Владелец работал 12 часов/день, склад простаивал.",
      results: [
        "Внедрили управленческий учёт + автоматизация закупок",
        "Владелец сократил рабочий день до 4 часов",
        "Прибыль выросла на 23% за 3 месяца"
      ],
      metrics: { time: 75, profit: 23 }
    },
    {
      company: "Производство мебели",
      revenue: "280 млн руб",
      problem: "Производство срывало сроки. Каждый проект — уникальный кризис.",
      results: [
        "Стандартизировали процессы + регламенты",
        "KPI для мастеров и отдела продаж",
        "Сократили сроки производства с 45 до 28 дней"
      ],
      metrics: { time: 38, quality: 91 }
    },
    {
      company: "IT-аутсорсинг компания",
      revenue: "120 млн руб",
      problem: "Текучка кадров 40%/год. Клиенты уходили вместе с менеджерами.",
      results: [
        "Построили систему управления проектами",
        "Внедрили базу знаний и онбординг",
        "Текучка упала до 12%, рост выручки +35%"
      ],
      metrics: { retention: 70, growth: 35 }
    }
  ];

  const tools = [
    {
      icon: "BarChart",
      title: "Управленческий учёт",
      desc: "Прозрачность финансов в реальном времени. Видите, где зарабатываете и где теряете."
    },
    {
      icon: "Users",
      title: "Оргструктура и KPI",
      desc: "Чёткие зоны ответственности и измеримые цели для каждого сотрудника."
    },
    {
      icon: "FileText",
      title: "Регламенты процессов",
      desc: "Документированные бизнес-процессы. Бизнес работает без вас."
    },
    {
      icon: "Zap",
      title: "Автоматизация рутины",
      desc: "Внедрение CRM, складской учёт, отчёты — всё работает само."
    },
    {
      icon: "Target",
      title: "Стратегическое планирование",
      desc: "Дорожная карта на 12-36 месяцев с конкретными этапами роста."
    },
    {
      icon: "Shield",
      title: "Система контроля рисков",
      desc: "Раннее обнаружение угроз. Снижение потерь от форс-мажоров."
    }
  ];

  return (
    <>
      <section id="solution" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Как проходит трансформация
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Четыре последовательных этапа превращения хаоса в систему
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {phases.map((phase, idx) => (
              <Card key={idx} className="p-8 bg-white hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex items-center gap-6 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon name={phase.icon} className="text-white" size={28} />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-3xl font-bold text-blue-600 mb-1">#{idx + 1}</div>
                      <div className="text-sm text-slate-500 font-medium">{phase.duration}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{phase.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-lg">
              <Icon name="CheckCircle" size={24} />
              <span className="text-lg font-semibold">Итого: полная трансформация за 8-12 недель</span>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Кейсы трансформации
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Реальные результаты наших клиентов с измеримыми показателями
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{caseItem.company}</h3>
                        <div className="text-blue-600 font-semibold">Оборот: {caseItem.revenue}</div>
                      </div>
                    </div>

                    <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-400 rounded">
                      <div className="font-semibold text-red-900 mb-1">Проблема:</div>
                      <p className="text-slate-700">{caseItem.problem}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="font-semibold text-green-900 mb-2">Результаты:</div>
                      {caseItem.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Icon name="CheckCircle" className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                          <span className="text-slate-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-64 space-y-4">
                    <div className="text-center font-semibold text-slate-700 mb-4">Ключевые метрики</div>
                    {Object.entries(caseItem.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-600 capitalize">
                            {key === 'time' && 'Освобождение времени'}
                            {key === 'profit' && 'Рост прибыли'}
                            {key === 'quality' && 'Качество процессов'}
                            {key === 'retention' && 'Удержание кадров'}
                            {key === 'growth' && 'Рост выручки'}
                          </span>
                          <span className="font-bold text-blue-600">{value}%</span>
                        </div>
                        <Progress value={value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Инструменты трансформации
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Проверенные решения для построения системного бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, idx) => (
              <Card key={idx} className="p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name={tool.icon} className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{tool.title}</h3>
                <p className="text-slate-600 leading-relaxed">{tool.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Готовы превратить хаос в систему?</h3>
            <p className="text-xl mb-6 opacity-90">
              Начните с бесплатной диагностики текущего состояния вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#diagnosis" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-all text-lg">
                <Icon name="Rocket" size={20} className="mr-2" />
                Заказать диагностику
              </a>
              <a href="https://t.me/natalyatomasheva" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-all text-lg border-2 border-white/20">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
