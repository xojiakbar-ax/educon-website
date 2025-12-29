import { useState } from 'react';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { HomePage } from './components/home-page';
import { AboutPage } from './components/about-page';
import { CoursesPage } from './components/courses-page';
import { CrmPage } from './components/crm-page';
import { ContactPage } from './components/contact-page';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage onNavigate={setCurrentPage} />;
      case 'crm':
        return <CrmPage onNavigate={setCurrentPage} />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
