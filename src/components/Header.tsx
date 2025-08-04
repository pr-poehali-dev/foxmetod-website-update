import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface HeaderProps {
  formData: {
    name: string;
    contact: string;
    company: string;
    description: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const Header: React.FC<HeaderProps> = ({ formData, onInputChange, onSubmit }) => {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">FOXMetoD</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
            <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Команда</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">Получить консультацию</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Заказать консультацию</DialogTitle>
                </DialogHeader>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={onInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact">Телефон/Telegram для связи</Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={onInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Название компании</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={onInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Кратко опишите вашу задачу</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={onInputChange}
                      rows={3}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Отправить заявку</Button>
                </form>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;