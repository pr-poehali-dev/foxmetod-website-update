import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

type MessageType = {
  text: string;
  isBot: boolean;
};

type FormStep = 'idle' | 'name' | 'position' | 'company' | 'telegram' | 'revenue' | 'employees' | 'description' | 'complete';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([
    {
      text: 'Здравствуйте! Я онлайн-ассистент FOXMetoD. Помогу оценить автономность вашего бизнеса и ответить на вопросы о системной трансформации.',
      isBot: true
    }
  ]);
  const [formStep, setFormStep] = useState<FormStep>('idle');
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    telegram: '',
    revenue: '',
    employees: '',
    description: ''
  });
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    'Сколько стоит трансформация?',
    'Как долго длится проект?',
    'Какие гарантии результата?',
    'Подходит ли мой бизнес?',
    'Заполнить чек-лист',
    'Оценить автономность'
  ];

  const addMessage = (text: string, isBot: boolean) => {
    setMessages(prev => [...prev, { text, isBot }]);
  };

  const startAssessment = () => {
    setFormStep('name');
    addMessage('Оценить автономность', false);
    setTimeout(() => {
      addMessage('Отлично! Давайте начнём оценку. На встрече разберём "узкие места" в процессах и составим индивидуальное предложение по оптимизации 1 процесса.\n\nПожалуйста, укажите ваше ФИО:', true);
    }, 500);
  };

  const handleFormInput = (value: string) => {
    if (!value.trim()) return;

    addMessage(value, false);
    setInputValue('');

    setTimeout(() => {
      switch (formStep) {
        case 'name':
          setFormData(prev => ({ ...prev, name: value }));
          setFormStep('position');
          addMessage('Спасибо! Теперь укажите вашу должность:', true);
          break;
        case 'position':
          setFormData(prev => ({ ...prev, position: value }));
          setFormStep('company');
          addMessage('Отлично! Название компании:', true);
          break;
        case 'company':
          setFormData(prev => ({ ...prev, company: value }));
          setFormStep('telegram');
          addMessage('Прекрасно! Ваш Telegram для связи (например, @username):', true);
          break;
        case 'telegram':
          setFormData(prev => ({ ...prev, telegram: value }));
          setFormStep('revenue');
          addMessage('Отлично! Укажите текущий оборот компании (млн руб/год):', true);
          break;
        case 'revenue':
          setFormData(prev => ({ ...prev, revenue: value }));
          setFormStep('employees');
          addMessage('Хорошо! Укажите количество сотрудников (в штате + на аутсорсе):', true);
          break;
        case 'employees':
          setFormData(prev => ({ ...prev, employees: value }));
          setFormStep('description');
          addMessage('Последний вопрос! Опишите главные "узкие места" в процессах компании (нехватка времени, зависимость от вас, хаос в процессах и т.д.):', true);
          break;
        case 'description':
          const finalData = { ...formData, description: value };
          setFormData(finalData);
          setFormStep('complete');
          addMessage('Спасибо за информацию! Отправляю заявку...', true);
          submitForm(finalData);
          break;
      }
    }, 500);
  };

  const submitForm = async (data: typeof formData) => {
    try {
      const emailBody = `
        Новая заявка на оценку автономности бизнеса - FOXMetoD (из чата)
        
        ФИО: ${data.name}
        Должность: ${data.position}
        Компания: ${data.company}
        Telegram: ${data.telegram}
        Текущий оборот: ${data.revenue} млн руб/год
        Количество сотрудников: ${data.employees}
        
        "Узкие места" в процессах:
        ${data.description}
      `;

      const response = await fetch('https://functions.poehali.dev/57abd3e3-9316-4b67-9a6c-d6e47170f64d', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'sale@foxmetod.ru',
          subject: 'Новая заявка на оценку автономности (чат)',
          text: emailBody,
          formData: data
        })
      });

      if (response.ok) {
        setTimeout(() => {
          addMessage('✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время через Telegram или по указанным контактам.\n\nЕсли нужна срочная консультация, пишите напрямую: @official_xmetod', true);
          setFormStep('idle');
          setFormData({ name: '', position: '', company: '', telegram: '', revenue: '', employees: '', description: '' });
        }, 1000);
      } else {
        setTimeout(() => {
          addMessage('❌ Произошла ошибка при отправке. Пожалуйста, напишите нам напрямую в Telegram: @official_xmetod', true);
          setFormStep('idle');
        }, 1000);
      }
    } catch (error) {
      setTimeout(() => {
        addMessage('❌ Произошла ошибка при отправке. Пожалуйста, напишите нам напрямую в Telegram: @official_xmetod', true);
        setFormStep('idle');
      }, 1000);
    }
  };

  const handleQuickQuestion = (question: string) => {
    if (question === 'Оценить автономность') {
      startAssessment();
      return;
    }

    if (question === 'Заполнить чек-лист') {
      addMessage('Заполнить чек-лист', false);
      setTimeout(() => {
        addMessage('Отличный выбор! Чек-лист поможет вам оценить готовность бизнеса к масштабированию за 7 ключевым признакам.\n\nПрокрутите страницу вниз до раздела "Готов ли ваш бизнес к масштабированию?" или нажмите на кнопку "Заполнить чек-лист" 🦊', true);
      }, 500);
      return;
    }

    addMessage(question, false);
    
    setTimeout(() => {
      let response = '';
      if (question.includes('стоит')) {
        response = '💰 Стоимость трансформации зависит от масштаба задач и текущего уровня готовности бизнеса:\n\n• Стандартизация 1 процесса: от 1 млн руб\n• Полная трансформация отдела: от 2-3 млн руб\n• Комплексная трансформация: индивидуальный расчёт\n\nТочную оценку дадим после бесплатной диагностики. Хотите оценить автономность?';
      } else if (question.includes('долго')) {
        response = '⏱️ Полная трансформация одного процесса занимает 8-12 недель:\n\n📋 Диагностика и выбор: 1-2 недели\n🎯 Проектирование "To Be": 2-3 недели\n⚙️ Внедрение в цифру: 3-5 недель\n🚀 Запуск и передача: 2-3 недели\n\nПервые результаты видны уже через 2-3 недели после диагностики!';
      } else if (question.includes('гарантии')) {
        response = '✅ Мы работаем по принципу продуктизированной услуги:\n\n🎯 Фиксированный результат за фиксированный срок\n📦 Вы получаете работающий процесс, а не папку с документами\n👥 Обученная команда и база знаний для масштабирования\n🔄 Процесс, который работает без постоянного контроля собственника\n\nГарантируем передачу автономного процесса, иначе продолжаем работу до результата.';
      } else if (question.includes('подходит')) {
        response = '🎯 Методология FOXMetoD подходит для:\n\n💼 Бизнес с оборотом 200-800 млн руб/год\n📊 Компании на Уровне 1-2 готовности (ручное управление или переходный этап)\n👤 Собственники, тратящие 9+ часов на операционку\n🔥 Бизнес с зависимостью от ключевых людей\n\nЕсли узнали себя хотя бы в 2 пунктах — это ваш случай! Хотите бесплатную оценку?';
      } else {
        response = 'Отличный вопрос! Для точного ответа лучше провести бесплатную оценку автономности (30-60 минут). Или напишите напрямую в Telegram: @official_xmetod';
      }
      
      addMessage(response, true);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && inputValue.trim()) {
      e.preventDefault();
      handleFormInput(inputValue);
    }
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full w-14 h-14 md:w-16 md:h-16 shadow-2xl bg-[#E8551B] hover:bg-[#E8551B]/90 hover:scale-110 transition-all"
          >
            <Icon name="MessageCircle" size={24} className="md:block hidden" />
            <Icon name="MessageCircle" size={20} className="md:hidden" />
          </Button>
        )}
      </div>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed inset-4 md:bottom-6 md:right-6 md:left-auto md:top-auto md:w-96 md:h-[600px] z-50 shadow-2xl flex flex-col border-2 border-primary/20">
          {/* Header */}
          <div className="bg-[#19374A] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Icon name="Bot" size={24} className="text-[#E8551B]" />
              </div>
              <div>
                <div className="font-bold">Ассистент FOXMetoD</div>
                <div className="text-xs opacity-90">Онлайн • Отвечает быстро</div>
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
                  className={`max-w-[85%] p-3 rounded-lg whitespace-pre-line ${
                    msg.isBot
                      ? 'bg-white text-slate-800 shadow-sm border border-slate-200'
                      : 'bg-[#E8551B] text-white shadow-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input / Quick questions */}
          <div className="p-4 border-t bg-white">
            {formStep !== 'idle' && formStep !== 'complete' ? (
              <div className="space-y-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Введите ответ..."
                  className="w-full"
                  autoFocus
                />
                <Button
                  onClick={() => handleFormInput(inputValue)}
                  className="w-full bg-[#E8551B] hover:bg-[#E8551B]/90"
                  size="sm"
                  disabled={!inputValue.trim()}
                >
                  Отправить
                </Button>
              </div>
            ) : (
              <>
                <div className="text-xs text-slate-500 mb-2">Быстрые вопросы:</div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {quickQuestions.slice(0, 4).map((q, idx) => (
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
                <div className="space-y-2">
                  <Button
                    onClick={() => handleQuickQuestion('Заполнить чек-лист')}
                    className="w-full bg-orange-100 text-[#E8551B] hover:bg-orange-200 text-sm border border-[#E8551B]/20"
                    size="sm"
                  >
                    <Icon name="ClipboardCheck" size={16} className="mr-2" />
                    Заполнить чек-лист
                  </Button>
                  <Button
                    onClick={startAssessment}
                    className="w-full bg-[#E8551B] hover:bg-[#E8551B]/90 text-sm"
                    size="sm"
                  >
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Оценить автономность
                  </Button>
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
              </>
            )}
          </div>
        </Card>
      )}
    </>
  );
}