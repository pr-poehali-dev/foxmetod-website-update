import { useState } from "react";
import Header from "@/components/Header";
import LandingHero from "@/components/LandingHero";
import DiagnosisSection from "@/components/DiagnosisSection";
import ScalingChecklist from "@/components/ScalingChecklist";
import TransformationRoadmap from "@/components/TransformationRoadmap";
import SolutionCasesTools from "@/components/SolutionCasesTools";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from "@/components/ui/icon";

export default function Index() {
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    phone: '',
    telegram: '',
    revenue: '',
    employees: '',
    description: ''
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const emailBody = `
        Новая заявка на оценку автономности бизнеса - FOXMetoD
        
        ФИО: ${formData.name}
        Должность: ${formData.position}
        Компания: ${formData.company}
        Телефон: ${formData.phone}
        Telegram: ${formData.telegram || 'не указан'}
        Текущий оборот: ${formData.revenue || 'не указан'} млн руб/год
        Количество сотрудников: ${formData.employees || 'не указано'}
        
        "Узкие места" в процессах:
        ${formData.description}
      `;

      const response = await fetch('https://functions.poehali.dev/57abd3e3-9316-4b67-9a6c-d6e47170f64d', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'sale@foxmetod.ru',
          subject: 'Новая заявка на диагностику',
          text: emailBody,
          formData
        })
      });

      if (response.ok) {
        alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', position: '', company: '', phone: '', telegram: '', revenue: '', employees: '', description: '' });
      } else {
        alert('Ошибка отправки. Напишите нам напрямую в Telegram: @official_xmetod');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Ошибка отправки. Напишите нам напрямую в Telegram: @official_xmetod');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header 
        formData={formData} 
        onInputChange={handleInputChange} 
        onSubmit={handleSubmit} 
      />
      <LandingHero 
        scrollToSection={scrollToSection}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <DiagnosisSection />
      <TransformationRoadmap 
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      
      {/* Checklist CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-[#E8551B] rounded-full text-sm font-semibold mb-4">
              <span className="text-2xl">🦊</span>
              <span>Метод лисы</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Готов ли ваш бизнес к масштабированию?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Проверьте 7 ключевых признаков готовности процесса к росту. Узнайте, где ваша система теряет деньги.
            </p>
            <Dialog open={isChecklistOpen} onOpenChange={setIsChecklistOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-[#E8551B] hover:bg-[#E8551B]/90 text-white px-8 py-6 text-lg shadow-lg">
                  <Icon name="ClipboardCheck" size={20} className="mr-2" />
                  Заполнить чек-лист и получить результат
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-full max-h-[95vh] overflow-y-auto p-0">
                <ScalingChecklist 
                  onClose={() => setIsChecklistOpen(false)}
                  formData={formData}
                  onInputChange={handleInputChange}
                  onSubmit={handleSubmit}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      
      <SolutionCasesTools />
      <Footer />
      <ChatAssistant />
    </div>
  );
}