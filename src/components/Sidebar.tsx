import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

interface SidebarItem {
  id: string;
  title: string;
  href: string;
  icon: string;
  children?: SidebarItem[];
}

const navigationItems: SidebarItem[] = [
  {
    id: 'home',
    title: 'Главная',
    href: '/',
    icon: 'Home'
  },
  {
    id: 'services',
    title: 'Услуги',
    href: '/services',
    icon: 'Briefcase',
    children: [
      {
        id: 'strategy',
        title: 'Стратегия и управление',
        href: '/services/strategiya-i-upravlenie',
        icon: 'Target'
      },
      {
        id: 'operations',
        title: 'Операционная деятельность',
        href: '/services/operacionnaya-deyatelnost',
        icon: 'Settings'
      },
      {
        id: 'efficiency',
        title: 'Организационная эффективность',
        href: '/services/organizacionnaya-effektivnost',
        icon: 'TrendingUp'
      },
      {
        id: 'sales',
        title: 'Продажи и маркетинг',
        href: '/services/prodazhi-i-marketing',
        icon: 'Users'
      },
      {
        id: 'digital',
        title: 'Цифровая трансформация',
        href: '/services/cifrovaya-transformaciya',
        icon: 'Smartphone'
      },
      {
        id: 'express',
        title: 'Экспресс-решения',
        href: '/services/ekspress-resheniya',
        icon: 'Zap'
      },
      {
        id: 'industry',
        title: 'Отраслевые решения',
        href: '/services/otraslevye-resheniya',
        icon: 'Building'
      },
      {
        id: 'training',
        title: 'Корпоративные тренинги',
        href: '/services/korporativnye-treningi',
        icon: 'GraduationCap'
      }
    ]
  }
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const renderMenuItem = (item: SidebarItem, level = 0) => {
    const isActive = isActiveLink(item.href);
    const hasChildren = item.children && item.children.length > 0;
    const isServicesExpanded = location.pathname.startsWith('/services') && item.id === 'services';

    return (
      <div key={item.id}>
        <Link
          to={item.href}
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
            level === 0 ? "mb-1" : "mb-0.5 ml-4",
            isActive 
              ? "bg-blue-100 text-blue-900 border border-blue-200" 
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          )}
        >
          <Icon name={item.icon as any} size={18} className={level > 0 ? "ml-2" : ""} />
          <span className="truncate">{item.title}</span>
        </Link>
        
        {hasChildren && (isServicesExpanded || isActive) && (
          <div className="mt-1 space-y-0.5">
            {item.children!.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 shadow-sm z-40">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">BC</span>
          </div>
          <div>
            <div className="font-bold text-slate-900">Bizness Consult</div>
            <div className="text-xs text-slate-500">Консалтинговая компания</div>
          </div>
        </div>

        <nav className="space-y-1">
          {navigationItems.map(item => renderMenuItem(item))}
        </nav>

        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="text-sm font-medium text-slate-900 mb-2">Нужна консультация?</div>
            <div className="text-xs text-slate-600 mb-3">Обсудим ваши задачи и подберем решение</div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-md transition-colors">
              Связаться с нами
            </button>
          </div>
        </div>

        <div className="mt-6 text-xs text-slate-500 text-center">
          © 2024 Bizness Consult
        </div>
      </div>
    </div>
  );
};

export default Sidebar;