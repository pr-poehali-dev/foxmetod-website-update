import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function SolutionCasesTools() {
  const phases = [
    {
      icon: "Search",
      title: "Аудит и Диагностика",
      duration: "1-2 недели",
      desc: "Глубинный анализ текущего состояния: организационная структура, бизнес-процессы, зоны риска и потери"
    },
    {
      icon: "GitBranch",
      title: "Проектирование системы",
      duration: "2-3 недели",
      desc: "Разработка целевой модели: организационная структура, матрица ответственности, показатели эффективности, регламенты"
    },
    {
      icon: "Wrench",
      title: "Внедрение и настройка",
      duration: "3-5 недель",
      desc: "Запуск новых процессов, систем учёта, автоматизация повторяющихся задач, обучение команды"
    },
    {
      icon: "TrendingUp",
      title: "Стабилизация и рост",
      duration: "2-3 недели",
      desc: "Мониторинг результатов, корректировки, передача управления владельцу, подготовка к масштабированию"
    }
  ];

  const cases = [
    {
      company: "Дистрибьютор материалов для строительства",
      revenue: "Серьёзные обороты",
      problem: "Управление «интуицией с завязанными глазами». Нет единой панели приборов. Отклонения замечают, когда уже поздно что-то менять.",
      tools: [
        "ОКМ (Отчёт по Ключевым Метрикам) — 45 критических показателей бизнеса",
        "Структура: Цель → Факт → Отклонение → Прогноз для каждой метрики",
        "Ритм бизнеса: ежедневные и еженедельные показатели",
        "Месяц сопровождения для приживания системы"
      ],
      results: [
        "Время на совещания сократилось в 2 раза",
        "Команда начала оперировать фактами, а не ощущениями",
        "Управленческие решения стали быстрее и точнее",
        "ОКМ стал фундаментом для стратегии и мотивации"
      ],
      metrics: { meetings: 50, decisions: 85 },
      quote: "Мы наконец-то видим, где мы, куда идём и что мешает"
    },
    {
      company: "Услуги для бизнеса",
      revenue: "Операционный убыток 700 тыс/мес",
      problem: "Узкое горлышко: собственник тратит 9+ часов в день на операционные задачи. Без него всё останавливается.",
      tools: [
        "Sales Playbook (Книга продаж) — единые скрипты и стандарты",
        "CRM-система с автоматизацией воронки продаж",
        "Партнёрская программа для масштабирования потока клиентов",
        "Система адаптации для быстрого найма"
      ],
      results: [
        "Выручка выросла с 170 тыс до 2 млн руб/мес за 4 месяца",
        "Собственник освободил 5 часов/день для стратегии",
        "Прибыль вышла в плюс, кассовый разрыв закрыт",
        "Бизнес перестал зависеть от одного человека"
      ],
      metrics: { revenue: 100, time: 56 },
      quote: "Впервые за годы я могу заниматься развитием, а не тушить пожары"
    },
    {
      company: "Дистрибьютор оборудования для салонов красоты",
      revenue: "Падение эффективности каналов",
      problem: "Маркетинговый хаос: коммуникация разбросана по мессенджерам. Об убыточности каналов узнают постфактум, после слива бюджета.",
      tools: [
        "ОКМ (Отчёт по Ключевым Метрикам) — связь каждого рубля маркетинга с выручкой",
        "Единая панель управления всеми каналами трафика",
        "Юнит-экономика по каналам в режиме реального времени",
        "Система тегов и сегментации клиентской базы"
      ],
      results: [
        "Восстановили поток заявок до 1500-2000/мес",
        "Окупаемость маркетинга выросла благодаря прозрачности",
        "Маркетплейсы перестали «сжигать» прибыль",
        "Подрядчики стали управляемыми"
      ],
      metrics: { leads: 100, roi: 73 },
      quote: "Наконец-то маркетинг стал прозрачным и управляемым"
    },
    {
      company: "Автосалон",
      revenue: "Продажи на плато",
      problem: "Оклад убивает продажи: ТОП-менеджеры получают фиксированную зарплату. Премия 5-10% не стимулирует на результат.",
      tools: [
        "ЦКП (Ценный Конечный Продукт) — что именно создаёт каждая должность",
        "Система показателей эффективности с тремя сценариями дохода",
        "Сбалансированная модель фонда оплаты труда",
        "Прозрачная связь личных усилий с доходом"
      ],
      results: [
        "Вовлечённость персонала выросла на 11%",
        "Сотрудники видят прямую связь усилий и дохода",
        "Стратегия компании синхронизировалась с интересами команды",
        "Продажи начали расти без увеличения штата"
      ],
      metrics: { engagement: 11, performance: 28 },
      quote: "Люди начали работать иначе, когда увидели личную выгоду"
    },
    {
      company: "Компания с высоким потоком заявок",
      revenue: "Парадокс: рост лидов + падение продаж",
      problem: "Тонем в заявках: 9 исторических воронок в CRM, тысячи просроченных задач. Менеджеры выгорают, база лежит мёртвым грузом.",
      tools: [
        "Генеральная уборка CRM: сегментация, система тегов",
        "CJM (Карта пути клиента) — когда и с каким предложением выходить",
        "Папка адаптации и регламенты для быстрого найма",
        "База знаний для ИИ-квалификации (автоматизация 70% рутины)"
      ],
      results: [
        "9 запутанных воронок упрощены до 3 прозрачных",
        "Новый менеджер адаптируется быстро и показывает результат",
        "Создан фундамент для роста продаж в 2 раза",
        "Масштабирование без линейного роста штата"
      ],
      metrics: { simplification: 67, scalability: 100 },
      quote: "Система стала прозрачной — теперь мы готовы к двукратному росту"
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
      title: "Организационная структура и показатели",
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
      desc: "Внедрение систем управления клиентами, складской учёт, отчёты — всё работает само."
    },
    {
      icon: "Target",
      title: "Стратегическое планирование",
      desc: "Дорожная карта на 12-36 месяцев с конкретными этапами роста."
    },
    {
      icon: "Shield",
      title: "Система контроля рисков",
      desc: "Раннее обнаружение угроз. Снижение потерь от непредвиденных ситуаций."
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
              <Card key={idx} className="p-8 bg-white hover:shadow-2xl transition-all duration-300 border-l-4 border-primary group">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex items-center gap-6 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
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
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all">
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
              <Card key={idx} className="p-8 bg-gradient-to-br from-slate-50 to-primary/5 hover:shadow-2xl transition-all duration-300 border-2 border-primary/10">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{caseItem.company}</h3>
                      <div className="text-primary font-semibold">{caseItem.revenue}</div>
                    </div>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg shadow-sm">
                    <div className="flex items-start gap-2 mb-2">
                      <Icon name="AlertTriangle" className="text-red-600 flex-shrink-0 mt-1" size={20} />
                      <div className="font-bold text-red-900">Проблема:</div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{caseItem.problem}</p>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-secondary rounded-lg shadow-sm">
                    <div className="flex items-start gap-2 mb-3">
                      <Icon name="Wrench" className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <div className="font-bold text-secondary">Инструменты FOXMetoD:</div>
                    </div>
                    <div className="space-y-2">
                      {caseItem.tools.map((tool, i) => (
                        <div key={i} className="flex items-start gap-2 bg-white/60 p-3 rounded-lg">
                          <Icon name="Check" className="text-secondary mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-slate-700 text-sm leading-relaxed">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg shadow-sm">
                    <div className="flex items-start gap-2 mb-3">
                      <Icon name="TrendingUp" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <div className="font-bold text-green-900">Результаты:</div>
                    </div>
                    <div className="space-y-2">
                      {caseItem.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Icon name="CheckCircle" className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                          <span className="text-slate-700 leading-relaxed">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {caseItem.quote && (
                    <div className="p-5 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg border-l-4 border-slate-400 italic">
                      <Icon name="Quote" className="text-slate-400 mb-2" size={24} />
                      <p className="text-slate-700 font-medium">«{caseItem.quote}»</p>
                    </div>
                  )}

                  <div className="pt-4 border-t-2 border-dashed border-slate-200">
                    <div className="text-center font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
                      <Icon name="BarChart3" size={20} className="text-primary" />
                      Ключевые метрики
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(caseItem.metrics).map(([key, value]) => (
                        <div key={key} className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-600 font-medium">
                              {key === 'revenue' && 'Рост выручки'}
                              {key === 'profit' && 'Выход в прибыль'}
                              {key === 'time' && 'Освобождение времени'}
                              {key === 'leads' && 'Рост потока заявок'}
                              {key === 'efficiency' && 'Рост эффективности'}
                              {key === 'engagement' && 'Вовлечённость'}
                              {key === 'performance' && 'Рост продаж'}
                              {key === 'simplification' && 'Упрощение процессов'}
                              {key === 'scalability' && 'Готовность к росту'}
                              {key === 'meetings' && 'Экономия времени'}
                              {key === 'decisions' && 'Скорость решений'}
                              {key === 'roi' && 'Окупаемость маркетинга'}
                            </span>
                            <span className="font-bold text-primary text-lg">+{value}%</span>
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
              <Card key={idx} className="p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
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
              <a href="https://t.me/official_xmetod" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-xl font-semibold hover:bg-secondary/90 transition-all text-lg border-2 border-white/20">
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
