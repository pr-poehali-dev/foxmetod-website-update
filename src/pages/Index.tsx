import { useState } from "react";
import Header from "@/components/Header";
import LandingHero from "@/components/LandingHero";
import DiagnosisSection from "@/components/DiagnosisSection";
import ScalingChecklist from "@/components/ScalingChecklist";
import TransformationRoadmap from "@/components/TransformationRoadmap";
import SolutionCasesTools from "@/components/SolutionCasesTools";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

export default function Index() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-primary/5 to-slate-100">
      <Header 
        formData={formData} 
        onInputChange={handleInputChange} 
        onSubmit={handleSubmit} 
      />
      <LandingHero scrollToSection={scrollToSection} />
      <DiagnosisSection />
      <ScalingChecklist />
      <TransformationRoadmap />
      <SolutionCasesTools />
      <Footer />
      <ChatAssistant />
    </div>
  );
}