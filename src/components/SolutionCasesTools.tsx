import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function SolutionCasesTools() {
  const cases = [
    {
      company: "Дистрибьютор материалов для строительства",
      niche: "Дистрибуция",
      nicheIcon: "Package",
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
      niche: "B2B услуги",
      nicheIcon: "Briefcase",
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
      niche: "Салоны красоты",
      nicheIcon: "Sparkles",
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
      niche: "Автомобили",
      nicheIcon: "Car",
      revenue: "Продажи на плато",
      problem: "Оклад убивает продажи: ТОП-менеджеры получают фиксированную зарплату. Премия 5-10% не стимулирует на результат.",
      tools: [
        "ЦКП (Ценный Конечный Продукт) — что именно создаёт каждая должность",
        "Система показателей эффективности с тремя сценариями дохода",
        "Сбалансированная модель фонда оплаты труда",
        "Прозрачная связь личных усилий с доходом"
      ],
      results: [
        "Вовлечённость персонала выросла на 32%",
        "Сотрудники видят прямую связь усилий и дохода",
        "Стратегия компании синхронизировалась с интересами команды",
        "Продажи начали расти без увеличения штата"
      ],
      metrics: { engagement: 32, performance: 28 },
      quote: "Люди начали работать иначе, когда увидели личную выгоду"
    },
    {
      company: "Компания с высоким потоком заявок",
      niche: "Высокий поток лидов",
      nicheIcon: "TrendingUp",
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
      <section id="cases" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 px-2">
              Кейсы трансформации
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Реальные результаты клиентов с измеримыми показателями и инструментами FOXMetoD
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="p-6 bg-white hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-[#E8551B]/50 flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4 pb-4 border-b-2 border-slate-100">
                  <div className="w-12 h-12 bg-[#E8551B] text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 text-[#19374A] rounded-full text-xs font-semibold mb-2">
                      <Icon name={caseItem.nicheIcon} size={12} />
                      <span>{caseItem.niche}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1 leading-tight">{caseItem.company}</h3>
                    <div className="text-xs text-red-600 font-medium flex items-center gap-1">
                      <Icon name="TrendingDown" size={14} />
                      {caseItem.revenue}
                    </div>
                  </div>
                </div>

                {/* Challenge → Solution → Results in 3 columns */}
                <div className="grid grid-cols-3 gap-3 mb-4 flex-1">
                  {/* Challenge */}
                  <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="AlertTriangle" className="text-red-600 flex-shrink-0" size={16} />
                      <span className="font-bold text-xs text-red-900">Challenge</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-snug">{caseItem.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Wrench" className="text-blue-600 flex-shrink-0" size={16} />
                      <span className="font-bold text-xs text-blue-900">Solution</span>
                    </div>
                    <div className="space-y-1">
                      {caseItem.tools.slice(0, 2).map((tool, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <Icon name="Check" className="text-blue-600 flex-shrink-0 mt-0.5" size={10} />
                          <span className="text-xs text-slate-700 leading-snug">{tool}</span>
                        </div>
                      ))}
                      {caseItem.tools.length > 2 && (
                        <div className="text-xs text-blue-600 font-medium">+{caseItem.tools.length - 2} инструментов</div>
                      )}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="TrendingUp" className="text-green-600 flex-shrink-0" size={16} />
                      <span className="font-bold text-xs text-green-900">Results</span>
                    </div>
                    <div className="space-y-1">
                      {caseItem.results.slice(0, 2).map((result, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={10} />
                          <span className="text-xs text-slate-700 leading-snug font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Metrics - Инфографика */}
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="BarChart3" size={14} className="text-[#E8551B]" />
                    <span className="font-bold text-xs text-slate-800">Key Metrics</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(caseItem.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-[#E8551B] mb-1">+{value}%</div>
                        <div className="text-xs text-slate-600">
                          {key === 'revenue' && 'Выручка'}
                          {key === 'time' && 'Время'}
                          {key === 'leads' && 'Лиды'}
                          {key === 'engagement' && 'Вовлечённость'}
                          {key === 'performance' && 'Продажи'}
                          {key === 'simplification' && 'Упрощение'}
                          {key === 'scalability' && 'Рост'}
                          {key === 'meetings' && 'Совещания'}
                          {key === 'decisions' && 'Решения'}
                          {key === 'roi' && 'ROI'}
                        </div>
                        <Progress value={Math.min(value, 100)} className="h-1 mt-1" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                {caseItem.quote && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="flex gap-2">
                      <Icon name="Quote" className="text-[#E8551B] flex-shrink-0" size={14} />
                      <p className="text-xs text-slate-600 italic leading-relaxed">«{caseItem.quote}»</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-[#E8551B] rounded-full text-sm font-semibold mb-4">
              <Icon name="Wrench" size={16} />
              <span>Инструментарий</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 px-2">
              Инструменты трансформации
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Проверенные решения для построения системного бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {tools.map((tool, idx) => (
              <Card key={idx} className="p-4 md:p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200 hover:border-[#E8551B]/30">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#E8551B] rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-lg">
                  <Icon name={tool.icon} className="text-white" size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{tool.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{tool.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 md:mt-16 max-w-4xl mx-auto bg-[#E8551B] rounded-2xl p-6 md:p-8 text-white text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Готовы превратить хаос в систему?</h3>
            <p className="text-base md:text-lg lg:text-xl mb-5 md:mb-6 opacity-90">
              Начните с бесплатной оценки автономности вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#solution" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#E8551B] rounded-xl font-semibold hover:shadow-xl transition-all text-lg">
                <Icon name="Search" size={20} className="mr-2" />
                Оценить автономность бизнеса
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