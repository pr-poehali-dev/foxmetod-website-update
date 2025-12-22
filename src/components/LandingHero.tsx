import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface LandingHeroProps {
  scrollToSection: (id: string) => void;
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

export default function LandingHero({ scrollToSection, formData, onInputChange, onSubmit }: LandingHeroProps) {
  return (
    <section className="container mx-auto px-4 pt-12 md:pt-20 pb-16 md:pb-32 text-center">
      
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
        <Icon name="Zap" size={16} />
        <span>Системная трансформация бизнеса</span>
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
        От хаоса к системе<br />
        <span className="text-[#E8551B]">
          За 8-12 недель
        </span>
      </h1>
      
      <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
        Превратите свой бизнес из зависимого от вас в масштабируемый актив. 
        Проверенная методология для бизнеса с оборотом 200-800 млн рублей.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 px-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
              <Icon name="Rocket" size={20} className="mr-2" />
              Оценить автономность бизнеса
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
                  <Label htmlFor="hero-name">ФИО *</Label>
                  <Input
                    id="hero-name"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="hero-position">Должность *</Label>
                  <Input
                    id="hero-position"
                    name="position"
                    value={formData.position || ''}
                    onChange={onInputChange}
                    placeholder="Генеральный директор"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="hero-company">Название компании *</Label>
                <Input
                  id="hero-company"
                  name="company"
                  value={formData.company}
                  onChange={onInputChange}
                  placeholder="ООО Название"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hero-phone">Телефон</Label>
                  <Input
                    id="hero-phone"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={onInputChange}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-telegram">Telegram *</Label>
                  <Input
                    id="hero-telegram"
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
                  <Label htmlFor="hero-revenue">Текущий оборот (млн/год) *</Label>
                  <Input
                    id="hero-revenue"
                    name="revenue"
                    value={formData.revenue || ''}
                    onChange={onInputChange}
                    placeholder="200-800"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="hero-employees">Кол-во сотрудников *</Label>
                  <Input
                    id="hero-employees"
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
                <Label htmlFor="hero-description">"Узкие места" в процессах компании *</Label>
                <Textarea
                  id="hero-description"
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
        <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto" onClick={() => scrollToSection('cases')}>
          Посмотреть кейсы
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
        <Card className="p-4 md:p-6 bg-white border-2 border-slate-200 hover:border-[#E8551B]/30 hover:shadow-lg transition-all">
          <div className="text-3xl md:text-4xl font-bold text-[#E8551B] mb-2">8-12</div>
          <div className="text-sm md:text-base text-slate-600">недель до результата</div>
        </Card>
        <Card className="p-4 md:p-6 bg-white border-2 border-slate-200 hover:border-[#E8551B]/30 hover:shadow-lg transition-all">
          <div className="text-3xl md:text-4xl font-bold text-[#E8551B] mb-2">3x</div>
          <div className="text-sm md:text-base text-slate-600">рост управляемости</div>
        </Card>
        <Card className="p-4 md:p-6 bg-white border-2 border-slate-200 hover:border-[#E8551B]/30 hover:shadow-lg transition-all">
          <div className="text-3xl md:text-4xl font-bold text-[#E8551B] mb-2">200+</div>
          <div className="text-sm md:text-base text-slate-600">млн оборот клиентов</div>
        </Card>
      </div>
    </section>
  );
}