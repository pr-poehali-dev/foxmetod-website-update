import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет интеграция с Telegram
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <Header 
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        
        <HeroSection 
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        
        <ServicesSection />
        
        <TeamSection />
        
        <TestimonialsSection 
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        
        <ContactSection 
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;