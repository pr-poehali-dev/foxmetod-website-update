import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface TestimonialsSectionProps {
  formData: {
    name: string;
    contact: string;
    company: string;
    description: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ formData, onInputChange, onSubmit }) => {
  const testimonials = [
    {
      text: "Благодаря FOXMetoD мы не только выстроили четкую систему продаж, но и увеличили конверсию на 25% за полгода. Теперь я вижу реальные цифры и могу планировать рост, а не гадать.",
      author: "Генеральный директор крупной производственной компании"
    },
    {
      text: "Внедрение ОКМ с FOXMetoD стало прорывом для нашей команды. Мы перестали работать вслепую, каждый сотрудник понимает свой вклад в общий результат.",
      author: "Владелец IT-стартапа с оборотом 400 млн. руб. в год"
    },
    {
      text: "Интерим-менеджмент от FOXMetoD позволил мне делегировать операционные задачи и сосредоточиться на стратегии. Это инвестиция в реальный рост и мою личную свободу.",
      author: "Собственник ритейл-сети"
    }
  ];

  return (
    <>
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Icon name="Quote" className="text-primary" size={32} />
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <p className="text-sm text-gray-500 font-medium">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы систематизировать ваш бизнес и обрести свободу?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте, как FOXMetoD может трансформировать ваш бизнес
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Заказать консультацию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
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
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;