import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="mb-4">
            <img 
              src="https://cdn.poehali.dev/files/FOXMetoD White(1).png" 
              alt="FOXMetoD" 
              className="h-10 md:h-12 w-auto mx-auto"
            />
          </div>
          
          <div className="space-y-2 text-sm md:text-base text-gray-400">
            <p><a href="tel:+79222904787" className="hover:text-white transition-colors">+7 922 290 4787</a></p>
            <p><a href="mailto:sale@foxmetod.ru" className="hover:text-white transition-colors">sale@foxmetod.ru</a></p>
            <p><a href="https://t.me/official_xmetod" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">t.me/official_xmetod</a></p>
          </div>

          <div className="pt-4 border-t border-gray-800 space-y-2 text-xs md:text-sm text-gray-400">
            <p>Все права защищены</p>
            <p>
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              {' • '}
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
            </p>
            <p className="mt-3">ИП Томашева Наталья Борисовна</p>
            <p>ИНН: 665800847625 • ОГРН: 322665800165280</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;