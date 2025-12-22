import { useState } from "react";
import Header from "@/components/Header";
import LandingHero from "@/components/LandingHero";
import DiagnosisSection from "@/components/DiagnosisSection";
import SolutionCasesTools from "@/components/SolutionCasesTools";
import Footer from "@/components/Footer";

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
    </div>
  );
}