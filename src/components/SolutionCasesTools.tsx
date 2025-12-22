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
      company: "Услуги для бизнеса",
      revenue: "Операционный убыток 700 тыс/мес",
      problem: "Собственник работал 9+ часов/день в операционке. Финансовый разрыв угрожал закрытием бизнеса.",
      tools: [
        "Sales Playbook — единая «Книга продаж» со скриптами",
        "CRM-система с автоматизацией воронки",
        "Партнёрская программа для масштабирования лидогенерации"
      ],
      results: [
        "Выручка выросла с 170 тыс до 2 млн руб/мес за 4 месяца",
        "Собственник освободил 5 часов/день для стратегии",
        "Прибыль вышла в плюс, кассовый разрыв закрыт"
      ],
      metrics: { revenue: 1076, profit: 100 }
    },
    {
      company: "Дистрибьютор оборудования для салонов красоты",
      revenue: "Падение эффективности каналов",
      problem: "Маркетинг разбросан по мессенджерам. Узнавали об убыточности каналов постфактум, после слива бюджета.",
      tools: [
        "ОКМ (Отчёт по Ключевым Метрикам) — связь каждого рубля с выручкой",
        "Единая панель управления маркетингом",
        "Unit-экономика по каналам в реальном времени"
      ],
      results: [
        "Восстановили поток лидов до 1500-2000/мес",
        "ROMI вырос благодаря прозрачности затрат",
        "Маркетплейсы перестали «сливать» прибыль"
      ],
      metrics: { leads: 133, efficiency: 85 }
    },
    {
      company: "Автосалон",
      revenue: "Продажи на плато",
      problem: "ТОП-менеджеры на окладах без реальной привязки к результату. Премии 5-10% не мотивировали на сверхусилия.",
      tools: [
        "ЦКП (Ценный Конечный Продукт) для каждой должности",
        "KPI-диапазоны с тремя сценариями дохода",
        "Сбалансированная модель ФОТ"
      ],
      results: [
        "Вовлечённость персонала выросла на 11%",
        "Прозрачность: сотрудники видят связь усилий и дохода",
        "Стратегия компании синхронизировалась с карманами команды"
      ],
      metrics: { engagement: 11, alignment: 90 }
    },
    {
      company: "Компания с высоким входящим потоком",
      revenue: "Парадоксальное падение продаж при росте лидов",
      problem: "9 исторических воронок в CRM, тысячи просроченных задач. Менеджеры выгорали, база лежала мёртвым грузом.",
      tools: [
        "Гигиена CRM: сегментация, система тегов, карта пути клиента",
        "Папка адаптации и регламенты для новичков",
        "Подготовка базы знаний для ИИ-квалификации (автоматизация 70% рутины)"
      ],
      results: [
        "9 воронок упрощены до 3 прозрачных",
        "Новый менеджер адаптирован быстро, показывает высокие результаты",
        "Фундамент для роста продаж в 2 раза без раздувания штата"
      ],
      metrics: { simplification: 67, scalability: 200 }
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
      <section id="solution" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
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
              <Card key={idx} className="p-8 bg-white hover:shadow-2xl transition-all duration-300 border-l-4 border-primary">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex items-center gap-6 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon name={phase.icon} className="text-white" size={28} />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-3xl font-bold text-primary mb-1">#{idx + 1}</div>
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
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl shadow-lg">
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
              Реальные результаты клиентов с измеримыми показателями и инструментами FOXMetoD
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="p-8 bg-gradient-to-br from-slate-50 to-primary/10 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{caseItem.company}</h3>
                      <div className="text-primary font-semibold">{caseItem.revenue}</div>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
                    <div className="font-semibold text-red-900 mb-1">Проблема:</div>
                    <p className="text-slate-700">{caseItem.problem}</p>
                  </div>

                  <div className="p-4 bg-blue-50 border-l-4 border-secondary rounded">
                    <div className="font-semibold text-secondary mb-2">Инструменты FOXMetoD:</div>
                    <div className="space-y-2">
                      {caseItem.tools.map((tool, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Icon name="Wrench" className="text-secondary mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-slate-700 text-sm">{tool}</span>
                        </div>
                      ))}
                    </div>
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

                  <div className="pt-4 border-t">
                    <div className="text-center font-semibold text-slate-700 mb-4">Ключевые метрики</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(caseItem.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-600">
                              {key === 'revenue' && 'Рост выручки'}
                              {key === 'profit' && 'Выход в плюс'}
                              {key === 'leads' && 'Рост лидов'}
                              {key === 'efficiency' && 'Эффективность'}
                              {key === 'engagement' && 'Вовлечённость'}
                              {key === 'alignment' && 'Синхронизация'}
                              {key === 'simplification' && 'Упрощение'}
                              {key === 'scalability' && 'Масштабируемость'}
                            </span>
                            <span className="font-bold text-primary">+{value}%</span>
                          </div>
                          <Progress value={Math.min(value, 100)} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="py-20 bg-gradient-to-br from-slate-50 to-secondary/10">
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
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name={tool.icon} className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{tool.title}</h3>
                <p className="text-slate-600 leading-relaxed">{tool.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Готовы превратить хаос в систему?</h3>
            <p className="text-xl mb-6 opacity-90">
              Начните с бесплатной диагностики текущего состояния вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#diagnosis" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:shadow-xl transition-all text-lg">
                <Icon name="Rocket" size={20} className="mr-2" />
                Заказать диагностику
              </a>
              <a href="https://t.me/natalyatomasheva" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-xl font-semibold hover:bg-secondary/90 transition-all text-lg border-2 border-white/20">
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
