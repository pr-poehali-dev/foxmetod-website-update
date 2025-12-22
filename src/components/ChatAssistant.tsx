import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: 'Здравствуйте! Я онлайн-ассистент FOXMetoD. Помогу оценить автономность вашего бизнеса и ответить на вопросы о системной трансформации.',
      isBot: true
    }
  ]);

  const quickQuestions = [
    'Сколько стоит трансформация?',
    'Как долго длится проект?',
    'Какие гарантии результата?',
    'Подходит ли мой бизнес?'
  ];

  const handleQuickQuestion = (question: string) => {
    setMessages([...messages, { text: question, isBot: false }]);
    
    // Simulate bot response
    setTimeout(() => {
      let response = '';
      if (question.includes('стоит')) {
        response = 'Стоимость зависит от масштаба задач и текущего уровня готовности, от 1 млн руб. Точную оценку дадим после бесплатной оценки автономности.';
      } else if (question.includes('долго')) {
        response = 'Полная трансформация одного процесса занимает 8-12 недель. Первые результаты видны уже через 2-3 недели после диагностики.';
      } else if (question.includes('гарантии')) {
        response = 'Мы работаем по принципу продуктизированной услуги — фиксированный результат за фиксированный срок. Вы получаете работающий процесс, а не папку с документами.';
      } else {
        response = 'Методология подходит для бизнеса с оборотом 200-800 млн руб на Уровне 1 или 2 готовности. Напишите @official_xmetod для уточнения или закажите бесплатную оценку.';
      }
      
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full w-16 h-16 shadow-2xl bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-all"
          >
            <Icon name="MessageCircle" size={28} />
          </Button>
        )}
      </div>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] z-50 shadow-2xl flex flex-col border-2 border-primary/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Icon name="Bot" size={24} className="text-primary" />
              </div>
              <div>
                <div className="font-bold">Ассистент FOXMetoD</div>
                <div className="text-xs opacity-90">Онлайн</div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isBot
                      ? 'bg-white text-slate-800 shadow-sm'
                      : 'bg-gradient-to-r from-primary to-secondary text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick questions */}
          <div className="p-4 border-t bg-white space-y-2">
            <div className="text-xs text-slate-500 mb-2">Быстрые вопросы:</div>
            <div className="grid grid-cols-2 gap-2">
              {quickQuestions.map((q, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion(q)}
                  className="text-xs h-auto py-2 px-2 hover:bg-primary/10"
                >
                  {q}
                </Button>
              ))}
            </div>
            <div className="pt-3 space-y-2">
              <a href="#solution">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-sm" size="sm">
                  <Icon name="Search" size={16} className="mr-2" />
                  Оценить автономность
                </Button>
              </a>
              <a
                href="https://t.me/official_xmetod"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="outline" size="sm" className="w-full text-sm">
                  <Icon name="Send" size={16} className="mr-2" />
                  Telegram
                </Button>
              </a>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}