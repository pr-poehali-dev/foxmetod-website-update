import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
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
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Контакты</h4>
            <div className="space-y-2 text-sm md:text-base text-gray-400">
              <p><a href="tel:+79222904787" className="hover:text-white transition-colors">+7 922 290 4787</a></p>
              <p><a href="mailto:sale@foxmetod.ru" className="hover:text-white transition-colors">sale@foxmetod.ru</a></p>
              <p><a href="https://t.me/official_xmetod" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">t.me/official_xmetod</a></p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-400">
            <div className="space-y-1">
              <p>Все права защищены</p>
              <p>
                <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                {' • '}
                <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
              </p>
            </div>
            <div className="space-y-1 md:text-right">
              <p>ИП Томашева Наталья Борисовна</p>
              <p>ИНН: 665800847625</p>
              <p>ОГРН: 322665800165280</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;