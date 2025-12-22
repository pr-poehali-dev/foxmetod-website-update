import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <div className="mb-3 md:mb-4">
              <img 
                src="https://cdn.poehali.dev/files/FOXMetoD White(1).png" 
                alt="FOXMetoD" 
                className="h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-sm md:text-base text-gray-400">
              Системная трансформация бизнеса.<br />
              От хаоса к системе за 8-12 недель.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Разделы</h4>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li><a href="#diagnosis" className="hover:text-white transition-colors">Уровень автономности</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Решение</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Кейсы</a></li>
              <li><a href="#tools" className="hover:text-white transition-colors">Инструменты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Контакты</h4>
            <div className="space-y-2 text-sm md:text-base text-gray-400">
              <p><a href="tel:+79222904787" className="hover:text-white transition-colors">+7 922 290 4787</a></p>
              <p><a href="mailto:sale@foxmetod.ru" className="hover:text-white transition-colors">sale@foxmetod.ru</a></p>
              <p><a href="https://t.me/official_xmetod" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@official_xmetod</a></p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-400">
          <p>&copy; FOXMetoD, 2025. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;