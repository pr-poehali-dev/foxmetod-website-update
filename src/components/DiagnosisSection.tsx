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
          {problems.map((problem, idx) => (
            <Card key={idx} className="p-8 bg-gradient-to-br from-red-50 to-primary/10 border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={problem.icon} className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-lg">
            <p className="text-lg text-slate-700 font-medium">
              <Icon name="Lightbulb" size={20} className="inline mr-2 text-secondary" />
              Если узнали хотя бы 2 из 4 — у вас классический кейс роста без систематизации. 
              <span className="text-secondary font-semibold"> Это исправляется за 8-12 недель.</span>
            </p>
          </div>
        </div>
      </div>

      <ReadinessMatrix />
    </section>
  );
}