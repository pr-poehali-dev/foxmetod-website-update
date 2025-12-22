import { useState } from "react";
import Header from "@/components/Header";
import LandingHero from "@/components/LandingHero";
import DiagnosisSection from "@/components/DiagnosisSection";
import SolutionCasesTools from "@/components/SolutionCasesTools";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    revenue: '',
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
        Новая заявка с сайта FOXMetoD
        
        Имя: ${formData.name}
        Контакт: ${formData.contact}
        Компания: ${formData.company}
        Оборот: ${formData.revenue || 'не указан'}
        Проблема: ${formData.description}
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
        setFormData({ name: '', contact: '', company: '', revenue: '', description: '' });
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
      <SolutionCasesTools />
      <Footer />
      <ChatAssistant />
    </div>
  );
}