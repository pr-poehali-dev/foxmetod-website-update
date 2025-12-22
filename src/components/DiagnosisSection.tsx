import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ReadinessMatrix from "@/components/ReadinessMatrix";

export default function DiagnosisSection() {
  const problems = [
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
      title: "Пожаротушение",
      desc: "Нет времени на стратегию — день наполнен горящими задачами и операционной суетой."
    }
  ];

  return (
    <section id="diagnosis" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 px-2">
            Узнаете свой бизнес?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Классические симптомы операционного хаоса в растущих компаниях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, idx) => (
            <Card key={idx} className="p-4 md:p-6 lg:p-8 bg-white border-2 border-slate-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E8551B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={problem.icon} className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-[#19374A] p-4 md:p-6 rounded-lg">
            <p className="text-base md:text-lg text-slate-700 font-medium">
              <Icon name="Lightbulb" size={18} className="inline mr-2 text-[#19374A]" />
              Если узнали хотя бы 2 из 4 — у вас классический кейс роста без систематизации. 
              <span className="text-[#19374A] font-semibold"> Это исправляется за 8-12 недель.</span>
            </p>
          </div>
        </div>
      </div>

      <ReadinessMatrix />
    </section>
  );
}