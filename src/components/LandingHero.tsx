import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface LandingHeroProps {
  scrollToSection: (id: string) => void;
}

export default function LandingHero({ scrollToSection }: LandingHeroProps) {
  return (
    <section className="container mx-auto px-4 pt-20 pb-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
        <Icon name="Zap" size={16} />
        <span>Системная трансформация бизнеса</span>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
        От хаоса к системе.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          За 8-12 недель.
        </span>
      </h1>
      
      <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
        Превратите свой бизнес из зависимого от вас в масштабируемый актив. 
        Проверенная методология для бизнеса с оборотом 200-800 млн рублей.
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
          <div className="text-4xl font-bold text-primary mb-2">8-12</div>
          <div className="text-slate-600">недель до результата</div>
        </Card>
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
          <div className="text-4xl font-bold text-primary mb-2">3x</div>
          <div className="text-slate-600">рост управляемости</div>
        </Card>
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
          <div className="text-4xl font-bold text-primary mb-2">200+</div>
          <div className="text-slate-600">млн оборот клиентов</div>
        </Card>
      </div>
    </section>
  );
}