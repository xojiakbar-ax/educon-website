import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from "./assets/logo.png"

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Bosh sahifa' },
    { id: 'about', label: 'Biz haqimizda' },
    { id: 'courses', label: 'Kurslar' },
    { id: 'crm', label: 'CRM tizimi' },
    { id: 'contact', label: 'Aloqa markazi' },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="Educon Academy"
              className="w-12 h-12 object-contain"
            />
            <span className="font-semibold text-2xl md:text-3xl">
              Educon Academy
            </span>

          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors ${currentPage === item.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => onNavigate('contact')}>
              Ro'yxatdan o'tish
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 transition-colors ${currentPage === item.id
                  ? 'text-primary bg-secondary'
                  : 'text-muted-foreground hover:text-primary hover:bg-secondary'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-3">
              <Button
                className="w-full"
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
              >
                Ro'yxatdan o'tish
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
