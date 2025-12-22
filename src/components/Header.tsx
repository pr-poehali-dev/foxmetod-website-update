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
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/FOXMetoD Black.png" 
              alt="FOXMetoD" 
              className="h-6 md:h-7 w-auto animate-fade-in"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#diagnosis" className="text-gray-600 hover:text-primary transition-colors">Диагностика</a>
            <a href="#solution" className="text-gray-600 hover:text-primary transition-colors">Решение</a>
            <a href="#cases" className="text-gray-600 hover:text-primary transition-colors">Кейсы</a>
            <a href="#tools" className="text-gray-600 hover:text-primary transition-colors">Инструменты</a>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">Оценить автономность бизнеса</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Оценить автономность бизнеса</DialogTitle>
                  <p className="text-sm text-slate-600 mt-2">
                    На встрече разберём "узкие места" в процессах и составим индивидуальное предложение по оптимизации 1 процесса
                  </p>
                </DialogHeader>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">ФИО *</Label>
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
                      <Label htmlFor="position">Должность *</Label>
                      <Input
                        id="position"
                        name="position"
                        value={formData.position || ''}
                        onChange={onInputChange}
                        placeholder="Генеральный директор"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company">Название компании *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={onInputChange}
                      placeholder="ООО Название"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={onInputChange}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telegram">Telegram *</Label>
                      <Input
                        id="telegram"
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
                      <Label htmlFor="revenue">Текущий оборот (млн/год) *</Label>
                      <Input
                        id="revenue"
                        name="revenue"
                        value={formData.revenue || ''}
                        onChange={onInputChange}
                        placeholder="200-800"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="employees">Кол-во сотрудников *</Label>
                      <Input
                        id="employees"
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
                    <Label htmlFor="description">"Узкие места" в процессах компании *</Label>
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <nav className="flex flex-col gap-4 mt-8 pb-6">
                <button
                  onClick={() => scrollToSection('diagnosis')}
                  className="text-left text-lg font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all p-3 rounded-lg"
                >
                  Уровень автономности
                </button>
                <div className="border-t border-gray-200"></div>
                <button
                  onClick={() => scrollToSection('solution')}
                  className="text-left text-lg font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all p-3 rounded-lg"
                >
                  Решение
                </button>
                <div className="border-t border-gray-200"></div>
                <button
                  onClick={() => scrollToSection('cases')}
                  className="text-left text-lg font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all p-3 rounded-lg"
                >
                  Кейсы
                </button>
                <div className="border-t border-gray-200"></div>
                <button
                  onClick={() => scrollToSection('tools')}
                  className="text-left text-lg font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all p-3 rounded-lg"
                >
                  Инструменты
                </button>
                
                <div className="pt-6 border-t-2 border-gray-300 space-y-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        <Icon name="Search" size={18} className="mr-2" />
                        Оценить автономность
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
                        <div>
                          <Label htmlFor="mobile-name">ФИО *</Label>
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
                          <Label htmlFor="mobile-position">Должность *</Label>
                          <Input
                            id="mobile-position"
                            name="position"
                            value={formData.position || ''}
                            onChange={onInputChange}
                            placeholder="Генеральный директор"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-company">Название компании *</Label>
                          <Input
                            id="mobile-company"
                            name="company"
                            value={formData.company}
                            onChange={onInputChange}
                            placeholder="ООО Название"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-phone">Телефон</Label>
                          <Input
                            id="mobile-phone"
                            name="phone"
                            value={formData.phone || ''}
                            onChange={onInputChange}
                            placeholder="+7 (999) 123-45-67"
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-telegram">Telegram *</Label>
                          <Input
                            id="mobile-telegram"
                            name="telegram"
                            value={formData.telegram || ''}
                            onChange={onInputChange}
                            placeholder="@username"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-revenue">Текущий оборот (млн/год) *</Label>
                          <Input
                            id="mobile-revenue"
                            name="revenue"
                            value={formData.revenue || ''}
                            onChange={onInputChange}
                            placeholder="200-800"
                            type="text"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-employees">Кол-во сотрудников (в штате + аутсорс) *</Label>
                          <Input
                            id="mobile-employees"
                            name="employees"
                            value={formData.employees || ''}
                            onChange={onInputChange}
                            placeholder="10-50"
                            type="text"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-description">"Узкие места" в процессах компании *</Label>
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
                  
                  <div className="space-y-3 pt-4 border-t">
                    <h4 className="text-sm font-semibold text-gray-600">Контакты</h4>
                    <a href="tel:+79222904787" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                      <Icon name="Phone" size={16} />
                      <span>+7 922 290 4787</span>
                    </a>
                    <a href="mailto:sale@foxmetod.ru" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                      <Icon name="Mail" size={16} />
                      <span>sale@foxmetod.ru</span>
                    </a>
                    <a href="https://t.me/official_xmetod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                      <Icon name="Send" size={16} />
                      <span>@official_xmetod</span>
                    </a>
                  </div>
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