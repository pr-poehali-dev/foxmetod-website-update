import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  formData: {
    name: string;
    contact: string;
    company: string;
    revenue?: string;
    description: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const Header: React.FC<HeaderProps> = ({ formData, onInputChange, onSubmit }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

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
            <a href="#diagnosis" className="text-gray-600 hover:text-primary transition-colors">Диагностика</a>
            <a href="#solution" className="text-gray-600 hover:text-primary transition-colors">Решение</a>
            <a href="#cases" className="text-gray-600 hover:text-primary transition-colors">Кейсы</a>
            <a href="#tools" className="text-gray-600 hover:text-primary transition-colors">Инструменты</a>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">Получить консультацию</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Бесплатная диагностика бизнеса</DialogTitle>
                </DialogHeader>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={onInputChange}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact">Telegram или телефон *</Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={onInputChange}
                      placeholder="@username или +7 (999) 123-45-67"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Название компании и ниша *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={onInputChange}
                      placeholder="ООО Название, дистрибьютор"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="revenue">Текущий оборот компании (млн руб/год)</Label>
                    <Input
                      id="revenue"
                      name="revenue"
                      value={formData.revenue || ''}
                      onChange={onInputChange}
                      placeholder="200-800"
                      type="text"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Основная проблема в бизнесе *</Label>
                    <Textarea
                      id="description"
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
          </nav>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                <button
                  onClick={() => scrollToSection('diagnosis')}
                  className="text-left text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  Диагностика
                </button>
                <button
                  onClick={() => scrollToSection('solution')}
                  className="text-left text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  Решение
                </button>
                <button
                  onClick={() => scrollToSection('cases')}
                  className="text-left text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  Кейсы
                </button>
                <button
                  onClick={() => scrollToSection('tools')}
                  className="text-left text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  Инструменты
                </button>
                <div className="pt-4 border-t">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Icon name="Send" size={18} className="mr-2" />
                        Получить консультацию
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Заказать диагностику</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="mobile-name">Ваше имя *</Label>
                          <Input
                            id="mobile-name"
                            name="name"
                            value={formData.name}
                            onChange={onInputChange}
                            placeholder="Иван Иванов"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-contact">Telegram или телефон *</Label>
                          <Input
                            id="mobile-contact"
                            name="contact"
                            value={formData.contact}
                            onChange={onInputChange}
                            placeholder="@username или +7 (999) 123-45-67"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-company">Название компании и ниша *</Label>
                          <Input
                            id="mobile-company"
                            name="company"
                            value={formData.company}
                            onChange={onInputChange}
                            placeholder="ООО Название, дистрибьютор"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-revenue">Текущий оборот компании (млн руб/год)</Label>
                          <Input
                            id="mobile-revenue"
                            name="revenue"
                            value={formData.revenue || ''}
                            onChange={onInputChange}
                            placeholder="200-800"
                            type="text"
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-description">Основная проблема в бизнесе *</Label>
                          <Textarea
                            id="mobile-description"
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
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;