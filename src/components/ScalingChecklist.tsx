import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from "@/components/ui/icon";

interface ScalingChecklistProps {
  onClose?: () => void;
}

interface ChecklistItem {
  id: number;
  title: string;
  question: string;
  noSign: string;
  yesSign: string;
  checkQuestion: string;
}

const checklistData: ChecklistItem[] = [
  {
    id: 1,
    title: 'Процесс «отчуждаем» от основателя',
    question: 'Бизнес работает как система, а не как театр одного актера. Вы не являетесь «узким горлышком», через которое проходят все решения.',
    noSign: '«Если я уеду в отпуск без связи на 2 недели, все рухнет или прибыль упадет вдвое».',
    yesSign: 'Команда справляется с операционкой самостоятельно. Я занимаюсь стратегией, а не тушением пожаров.',
    checkQuestion: 'Сможет ли система работать автономно в течение месяца?'
  },
  {
    id: 2,
    title: 'Есть «Живая» База Знаний (SOP)',
    question: 'Устные договоренности не масштабируются. У вас есть прописанные регламенты, чек-листы и видеоинструкции, которые актуальны прямо сейчас.',
    noSign: '«Мы просто знаем, как это делать», «Обучаем новичков устно, сажая рядом с опытным».',
    yesSign: 'Любой повторяющийся процесс описан. Сотрудники реально пользуются инструкциями, а не спрашивают вас.',
    checkQuestion: 'Может ли новый сотрудник выполнить задачу качественно, просто следуя инструкции, без 100 вопросов к вам?'
  },
  {
    id: 3,
    title: 'Сходится Unit-экономика',
    question: 'Вы точно знаете, сколько прибыли приносит одна сделка с учетом всех затрат на привлечение и исполнение.',
    noSign: '«Работаем в плюс по счету в банке, но детально по каждой сделке не считали».',
    yesSign: 'LTV (прибыль с клиента) > CAC (стоимости привлечения) минимум в 3 раза. При росте объема мы масштабируем прибыль, а не убытки.',
    checkQuestion: 'Если мы завтра продадим в 10 раз больше, мы заработаем в 10 раз больше или утонем в расходах?'
  },
  {
    id: 4,
    title: 'Минимум «кастома» (Стандартизация)',
    question: 'Масштабировать можно только стандарт. Если каждый заказ уникален — это ремесло, а не бизнес-система.',
    noSign: '«К каждому клиенту у нас индивидуальный подход, мы постоянно переделываем продукт под заказчика».',
    yesSign: '90% процессов идут по стандартным сценариям. Исключения минимизированы.',
    checkQuestion: 'Похож ли наш процесс на конвейер или на творческую мастерскую? (Для масштабирования нужен конвейер).'
  },
  {
    id: 5,
    title: 'Быстрый онбординг (Найм на потоке)',
    question: 'Для роста нужны новые руки. Ваша система обучения позволяет быстро вводить людей в строй.',
    noSign: '«Мы ищем "звезд", а чтобы понять наш продукт, нужно проработать тут полгода».',
    yesSign: 'Новичок выходит на плановые показатели эффективности за 1–2 недели.',
    checkQuestion: 'Если завтра нужно нанять 5 менеджеров, сможем ли мы их качественно обучить за неделю?'
  },
  {
    id: 6,
    title: 'Управление на основе цифр (Дашборды)',
    question: 'Вы принимаете решения, глядя на метрики, а не на интуицию.',
    noSign: '«Мне кажется, продажи идут нормально».',
    yesSign: 'У меня есть дашборд, где я вижу воронку, конверсии и узкие места в реальном времени.',
    checkQuestion: 'Как быстро я узнаю, что процесс сломался? (Ответ должен быть: «Мгновенно, по метрикам», а не «Когда позвонит злой клиент»).'
  },
  {
    id: 7,
    title: 'Технический запас прочности',
    question: 'Ваши инструменты (CRM, телефония, сайт, склад) готовы к нагрузке х5 или х10.',
    noSign: '«Мы ведем клиентов в Excel, который уже тормозит», «Сайт падает от рекламы».',
    yesSign: 'Процессы автоматизированы, данные передаются без участия человека.',
    checkQuestion: 'Что сломается первым технически, если трафик вырастет в 10 раз?'
  }
];

export default function ScalingChecklist({ onClose }: ScalingChecklistProps = {}) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    name: '',
    company: '',
    niche: '',
    employees: '',
    telegram: ''
  });

  const handleCheck = (id: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const handleExpand = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const score = checkedItems.size;

  const getResultMessage = () => {
    if (score === 7) {
      return {
        emoji: '🦊',
        title: 'Уровень FOXMetoD',
        text: 'Вы построили отличную систему. Жмите на газ!',
        color: 'from-[#E8551B] to-[#E8551B]/80'
      };
    } else if (score >= 5) {
      return {
        emoji: '⚠️',
        title: '5–6 галочек',
        text: 'Фундамент есть, но конструкцию может «зашатать». Укрепите слабые пункты перед стартом.',
        color: 'from-[#7CB1C4] to-[#4D7085]'
      };
    } else {
      return {
        emoji: '🛑',
        title: 'Меньше 5',
        text: 'Опасно. Масштабирование сейчас приведет к кассовому разрыву или потере качества. Вам нужно систематизировать хаос.',
        color: 'from-red-500 to-red-600'
      };
    }
  };

  const result = getResultMessage();

  const handleLeadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const emailBody = `
        Новая заявка на чек-лист масштабирования - FOXMetoD
        
        ФИО: ${leadFormData.name}
        Компания: ${leadFormData.company}
        Ниша: ${leadFormData.niche}
        Количество сотрудников: ${leadFormData.employees}
        Telegram: ${leadFormData.telegram}
        
        Результат теста: ${score} из 7
        Отмеченные пункты: ${Array.from(checkedItems).join(', ')}
      `;

      const response = await fetch('https://functions.poehali.dev/57abd3e3-9316-4b67-9a6c-d6e47170f64d', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'sale@foxmetod.ru',
          subject: 'Чек-лист масштабирования (Lead Magnet)',
          text: emailBody,
          formData: { ...leadFormData, score, checkedItems: Array.from(checkedItems) }
        })
      });

      if (response.ok) {
        alert('✅ Спасибо! Мы отправили вам детальный чек-лист и свяжемся в ближайшее время.');
        setShowLeadForm(false);
        setLeadFormData({ name: '', company: '', niche: '', employees: '', telegram: '' });
      } else {
        alert('❌ Ошибка отправки. Напишите нам напрямую: @official_xmetod');
      }
    } catch (error) {
      alert('❌ Ошибка отправки. Напишите нам напрямую: @official_xmetod');
    }
  };

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Close button */}
        {onClose && (
          <div className="flex justify-end mb-4">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={24} />
            </Button>
          </div>
        )}
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8551B]/10 text-[#E8551B] rounded-full text-sm font-semibold mb-4">
            <span className="text-2xl">🦊</span>
            <span>Метод лисы</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 px-2">
            Чек-лист: 7 признаков, что ваш процесс готов к масштабированию
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed px-4">
            Масштабировать хаос — значит умножать проблемы. Если вы начнете заливать трафик в неналаженную систему, 
            вы просто быстрее сожжете деньги. Проверьте свой бизнес по «методу лисы»: <span className="font-semibold text-[#E8551B]">умно, расчетливо и безопасно</span>. 
            Если у вас меньше 5 галочек — жать на газ рано.
          </p>
        </div>

        {/* Checklist Items */}
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 mb-12">
          {checklistData.map((item) => (
            <Card 
              key={item.id}
              className={`overflow-hidden transition-all duration-300 border-2 ${
                checkedItems.has(item.id) 
                  ? 'border-[#E8551B] bg-orange-50 shadow-lg' 
                  : 'border-slate-200 hover:border-[#19374A]/30 hover:shadow-md bg-white'
              }`}
            >
              {/* Header */}
              <div 
                className="p-4 md:p-6 cursor-pointer"
                onClick={() => handleCheck(item.id)}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Checkbox */}
                  <button
                    className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg border-2 transition-all flex items-center justify-center ${
                      checkedItems.has(item.id)
                        ? 'bg-[#E8551B] border-[#E8551B] scale-110'
                        : 'border-slate-300 hover:border-[#E8551B] bg-white'
                    }`}
                  >
                    {checkedItems.has(item.id) && (
                      <Icon name="Check" className="text-white" size={20} />
                    )}
                  </button>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs md:text-sm font-bold text-[#E8551B]">#{item.id}</span>
                          <span className="text-xl">🦊</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item.question}</p>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleExpand(item.id);
                        }}
                        className="flex-shrink-0 text-[#19374A] hover:text-[#E8551B] transition-colors"
                      >
                        <Icon name={expandedItem === item.id ? "ChevronUp" : "ChevronDown"} size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedItem === item.id && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-slate-200 pt-4 space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-3 md:p-4 rounded">
                    <div className="flex items-start gap-2 mb-2">
                      <Icon name="X" className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="font-bold text-sm md:text-base text-red-900">Нет (Хаос):</span>
                    </div>
                    <p className="text-sm md:text-base text-slate-700">{item.noSign}</p>
                  </div>

                  <div className="bg-[#E8551B]/10 border-l-4 border-[#E8551B] p-3 md:p-4 rounded">
                    <div className="flex items-start gap-2 mb-2">
                      <Icon name="Check" className="text-[#E8551B] flex-shrink-0 mt-0.5" size={18} />
                      <span className="font-bold text-sm md:text-base text-[#E8551B]">Да (Порядок):</span>
                    </div>
                    <p className="text-sm md:text-base text-slate-700">{item.yesSign}</p>
                  </div>

                  <div className="bg-[#19374A]/5 border-l-4 border-[#19374A] p-3 md:p-4 rounded">
                    <div className="flex items-start gap-2 mb-2">
                      <Icon name="HelpCircle" className="text-[#19374A] flex-shrink-0 mt-0.5" size={18} />
                      <span className="font-bold text-sm md:text-base text-[#19374A]">Вопрос проверки:</span>
                    </div>
                    <p className="text-sm md:text-base text-slate-700 italic">{item.checkQuestion}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto">
          <Card className={`p-6 md:p-8 ${
            score === 7 ? 'bg-[#E8551B] border-[#E8551B]' : 
            score >= 5 ? 'bg-[#7CB1C4] border-[#7CB1C4]' : 
            'bg-red-500 border-red-500'
          } text-white text-center shadow-2xl border-2`}>
            <div className="text-5xl md:text-6xl mb-4">{result.emoji}</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ваш результат: {score} из 7
            </h3>
            <div className="text-xl md:text-2xl font-bold mb-2">{result.title}</div>
            <p className="text-base md:text-lg opacity-95 max-w-2xl mx-auto mb-6">
              {result.text}
            </p>

            {score < 7 && (
              <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-white text-[#19374A] hover:bg-slate-50 font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 shadow-xl"
                  >
                    <Icon name="Search" size={20} className="mr-2" />
                    Получить детальный чек-лист
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Получите детальный чек-лист</DialogTitle>
                    <p className="text-sm text-slate-600 mt-2">
                      Мы отправим вам детальный план по укреплению слабых мест и запишем на бесплатный аудит процессов
                    </p>
                  </DialogHeader>
                  <form onSubmit={handleLeadFormSubmit} className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="lead-name">ФИО *</Label>
                      <Input
                        id="lead-name"
                        value={leadFormData.name}
                        onChange={(e) => setLeadFormData({ ...leadFormData, name: e.target.value })}
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lead-company">Название компании *</Label>
                      <Input
                        id="lead-company"
                        value={leadFormData.company}
                        onChange={(e) => setLeadFormData({ ...leadFormData, company: e.target.value })}
                        placeholder="ООО Название"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lead-niche">Ниша/сфера деятельности *</Label>
                      <Input
                        id="lead-niche"
                        value={leadFormData.niche}
                        onChange={(e) => setLeadFormData({ ...leadFormData, niche: e.target.value })}
                        placeholder="Например: дистрибуция, e-commerce, услуги"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lead-employees">Количество сотрудников *</Label>
                      <Input
                        id="lead-employees"
                        value={leadFormData.employees}
                        onChange={(e) => setLeadFormData({ ...leadFormData, employees: e.target.value })}
                        placeholder="10-50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lead-telegram">Telegram для связи *</Label>
                      <Input
                        id="lead-telegram"
                        value={leadFormData.telegram}
                        onChange={(e) => setLeadFormData({ ...leadFormData, telegram: e.target.value })}
                        placeholder="@username"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#E8551B] hover:bg-[#E8551B]/90 text-white">
                      Получить чек-лист и консультацию
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            )}
          </Card>

          {score < 7 && (
            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-4">
                Не набрали 7 из 7? Не страшно. Мы поможем найти, где ваша система теряет деньги.
              </p>
              <a href="#diagnosis">
                <Button size="lg" variant="outline" className="border-2 border-[#E8551B] text-[#E8551B] hover:bg-[#E8551B]/5">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Записаться на полный аудит процессов
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}