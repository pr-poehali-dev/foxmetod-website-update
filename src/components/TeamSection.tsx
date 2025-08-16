import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Наталья Томашёва",
      role: "Генеральный директор, Интерим-менеджер, Бизнес-трекер",
      image: "/img/e04cb7ab-1c7d-4909-bbf0-5451ffda00ac.jpg",
      experience: "20+ лет опыта в управлении и автоматизации"
    },
    {
      name: "Юлия Михеенко",
      role: "Бизнес-трекер, Консультант по организационному развитию",
      image: "/img/5418a717-8518-4c40-9c23-534fa775541a.jpg",
      experience: "21+ лет опыта, эксперт по оптимизации"
    },
    {
      name: "Елена Харитоненко",
      role: "Эксперт по HR и организационному развитию",
      image: "/img/880045b8-be80-47b7-b6d5-aeccea185479.jpg",
      experience: "Специалист по системному HR управлению"
    }
  ];

  return (
    <section id="team" className="section-spacing">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Наша команда — Ваша уверенность в результате</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            За каждым успешным проектом FOXMetoD стоит команда высококвалифицированных экспертов
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="border-none shadow-lg text-center">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;