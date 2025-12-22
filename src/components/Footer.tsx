import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="https://cdn.poehali.dev/files/FOXMetoD White(1).png" 
                alt="FOXMetoD" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Системная трансформация бизнеса.<br />
              От хаоса к системе за 8-12 недель.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Команда</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p>+7 922 290 4787</p>
              <p>sale@foxmetod.ru</p>
              <p>@official_xmetod</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; FOXMetoD, 2025. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;