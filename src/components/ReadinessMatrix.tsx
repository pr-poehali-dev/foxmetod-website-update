import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function ReadinessMatrix() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const levels = [
    {
      level: 1,
      title: "Ручное управление",
      subtitle: "Всё держится на людях",
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      icon: "AlertCircle",
      characteristics: [
        "Регламенты есть, но их никто не читает",
        "Ушёл ключевой сотрудник — встали продажи или производство",
        "Собственник тратит 9+ часов в день на операционные задачи",
        "Решения принимаются интуитивно, без опоры на данные",
        "CRM используется как «записная книжка», не как система"
      ],
      solution: "Стандартизация 1 критического процесса за 8-12 недель"
    },
    {
      level: 2,
      title: "Переходный этап",
      subtitle: "Попытки систематизации",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
      icon: "Construction",
      characteristics: [
        "CRM внедрена, но контроль требует участия собственника",
        "Регламенты написаны, но не все их соблюдают",
        "«Лоскутная» автоматизация — системы не связаны между собой",
        "Часть процессов работает, часть — по старинке",
        "Данные есть, но им не доверяют из-за разрозненности"
      ],
      solution: "Интеграция систем и перевод на автономное управление"
    },
    {
      level: 3,
      title: "Системный актив",
      subtitle: "Бизнес работает без вас",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
      icon: "CheckCircle",
      characteristics: [
        "Процессы работают автономно по регламентам",
        "Отклонения видны на панелях управления в реальном времени",
        "Новый сотрудник выходит на плановую мощность за 2 недели",
        "Собственник управляет через показатели, а не через вмешательство",
        "Система не позволяет совершить критическую ошибку"
      ],
      solution: "Масштабирование системы на другие процессы"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-[#19374A] rounded-full text-sm font-semibold mb-4">
            <Icon name="BarChart3" size={16} className="inline mr-2" />
            Матрица готовности
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            На каком уровне ваш бизнес?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Найдите себя в матрице. Это не диагноз, а точка отсчёта для роста
          </p>
        </div>

        {/* Interactive Matrix */}
        <div className="max-w-6xl mx-auto space-y-6">
          {levels.map((item) => (
            <div key={item.level} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Show only current card on mobile when detailed view is open */}
                {levels.map((levelItem) => (
                  <Card
                    key={levelItem.level}
                    className={`cursor-pointer transition-all duration-300 border-2 ${
                      selectedLevel === levelItem.level
                        ? `${levelItem.borderColor} shadow-2xl md:scale-105`
                        : 'border-transparent hover:shadow-xl'
                    } ${selectedLevel !== null && selectedLevel !== levelItem.level ? 'hidden md:block' : ''}`}
                    onClick={() => setSelectedLevel(selectedLevel === levelItem.level ? null : levelItem.level)}
                  >
                    <div className={`p-4 md:p-6 ${levelItem.bgColor} rounded-t-lg`}>
                      <div className="flex items-center justify-center mb-3">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                          levelItem.level === 1 ? 'bg-red-500' :
                          levelItem.level === 2 ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}>
                          <Icon name={levelItem.icon} className="text-white" size={28} />
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 text-center">{levelItem.title}</h3>
                      <p className="text-xs md:text-sm text-slate-600 text-center">{levelItem.subtitle}</p>
                    </div>

                    <div className="p-4 md:p-6 bg-white">
                      <div className="space-y-2 md:space-y-3 mb-4">
                        {levelItem.characteristics.slice(0, 3).map((char, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Icon 
                              name={levelItem.level === 3 ? "Check" : "Minus"} 
                              size={14} 
                              className={`mt-0.5 flex-shrink-0 ${
                                levelItem.level === 3 ? 'text-green-600' : 'text-slate-400'
                              }`} 
                            />
                            <span className="text-xs md:text-sm text-slate-700 leading-tight">{char}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant={selectedLevel === levelItem.level ? "default" : "outline"}
                        size="sm"
                        className="w-full whitespace-normal h-auto py-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedLevel(selectedLevel === levelItem.level ? null : levelItem.level);
                        }}
                      >
                        {selectedLevel === levelItem.level ? 'Свернуть' : 'Подробнее'}
                        <Icon name={selectedLevel === levelItem.level ? "ChevronUp" : "ChevronDown"} size={16} className="ml-2 flex-shrink-0" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Detailed View - shows right after the selected card */}
              {selectedLevel === item.level && (
                <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-8 bg-white shadow-2xl border-2 border-primary/20">
              <div className="flex items-start gap-4 md:gap-6 mb-6">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 ${
                  levels[selectedLevel - 1].level === 1 ? 'bg-red-500' :
                  levels[selectedLevel - 1].level === 2 ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}>
                  <Icon name={levels[selectedLevel - 1].icon} className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-2">{levels[selectedLevel - 1].title}</h3>
                  <p className="text-sm md:text-lg text-slate-600">{levels[selectedLevel - 1].subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm md:text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Icon name="List" size={20} className="text-primary" />
                  Характерные признаки:
                </h4>
                <div className="grid gap-3">
                  {levels[selectedLevel - 1].characteristics.map((char, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 md:p-3 bg-slate-50 rounded-lg">
                      <Icon 
                        name={selectedLevel === 3 ? "CheckCircle" : "AlertCircle"} 
                        size={18} 
                        className={`mt-0.5 flex-shrink-0 ${
                          selectedLevel === 3 ? 'text-green-600' : 'text-orange-600'
                        }`} 
                      />
                      <span className="text-sm text-slate-700">{char}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-4 md:p-5 rounded-xl border-l-4 ${
                selectedLevel === 3 
                  ? 'bg-green-50 border-green-500' 
                  : 'bg-blue-50 border-blue-500'
              }`}>
                <div className="flex items-start gap-3">
                  <Icon name="Lightbulb" size={20} className={selectedLevel === 3 ? 'text-green-600 flex-shrink-0' : 'text-blue-600 flex-shrink-0'} />
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-slate-900 mb-2">
                      {selectedLevel === 3 ? 'Как поддерживать уровень:' : 'Как перейти на следующий уровень:'}
                    </h4>
                    <p className="text-sm md:text-base text-slate-700">{levels[selectedLevel - 1].solution}</p>
                  </div>
                </div>
              </div>

              {item.level < 3 && (
                <div className="mt-6 text-center">
                  <a href="#solution">
                    <Button size="lg" className="bg-gradient-to-r from-[#E8551B] to-[#ff6b35] hover:from-[#E8551B]/90 hover:to-[#ff6b35]/90 text-white shadow-lg w-full md:w-auto whitespace-normal h-auto py-3">
                      <Icon name="Rocket" size={20} className="mr-2 flex-shrink-0" />
                      <span>Оценить автономность бизнеса</span>
                    </Button>
                  </a>
                </div>
              )}
            </Card>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        {selectedLevel === null && (
          <div className="text-center mt-12 px-4">
            <p className="text-base md:text-lg text-slate-600 mb-6">
              Не уверены, на каком уровне находитесь?
            </p>
            <a href="#solution">
              <Button size="lg" className="bg-[#E8551B] hover:bg-[#E8551B]/90 text-white w-full md:w-auto shadow-lg whitespace-normal h-auto py-3">
                <Icon name="Search" size={20} className="mr-2 flex-shrink-0" />
                <span>Оценить автономность</span>
              </Button>
            </a>
            <p className="text-xs md:text-sm text-slate-500 mt-3">
              Бесплатная оценка за 30 минут
            </p>
          </div>
        )}
      </div>
    </section>
  );
}