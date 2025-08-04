import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface ContactSectionProps {
  formData: {
    name: string;
    contact: string;
    company: string;
    description: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ formData, onInputChange, onSubmit }) => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600">
              Готовы обсудить задачи вашего бизнеса? Оставьте заявку для бесплатной консультации.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="User" className="text-primary mr-3" size={20} />
                  <div>
                    <p className="font-medium">Наталья Томашёва</p>
                    <p className="text-gray-600 text-sm">Генеральный директор</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="text-primary mr-3" size={20} />
                  <p>+7 (922) 022-72-25</p>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="text-primary mr-3" size={20} />
                  <p>tomasheva.natalia@yandex.ru</p>
                </div>
                <div className="flex items-center">
                  <Icon name="MessageCircle" className="text-primary mr-3" size={20} />
                  <p>@natalyatomasheva</p>
                </div>
              </div>
            </div>
            
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;