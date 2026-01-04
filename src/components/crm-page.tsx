import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollTopButton } from "./ScrollToTopButton"


import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import {
  BarChart3,
  Calendar,
  FileText,
  TrendingUp,
  MessageSquare,
  CheckCircle,
  Eye,
  Bell,
} from 'lucide-react';

interface CrmPageProps {
  onNavigate: (page: string) => void;
}

export function CrmPage({ onNavigate }: CrmPageProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: 'Talabalar Natijalari Paneli',
      description:
        'Baholar, test natijalari va o‘quv jarayoni bo‘yicha real vaqtdagi ma’lumotlar',
    },
    {
      icon: Calendar,
      title: 'Davomatni Kuzatish',
      description: 'To‘liq davomat yozuvlari va avtomatik bildirishnomalar',
    },
    {
      icon: FileText,
      title: 'Uy Vazifalari Yozuvlari',
      description: 'Uy vazifalari topshirish tarixi va o‘qituvchilar fikrlari',
    },
    {
      icon: TrendingUp,
      title: 'Oylik Rivojlanish Hisobotlari',
      description: 'Oylik akademik yutuqlar bo‘yicha batafsil ma’lumotlar',
    },
    {
      icon: MessageSquare,
      title: 'O‘qituvchilarning Fikrlari',
      description:
        'O‘qituvchilardan to‘g‘ridan-to‘g‘ri izohlar va yo‘riqnomalar',
    },
    {
      icon: Bell,
      title: 'Ota-ona bilan Bevosita Aloqa',
      description: 'O‘qituvchilardan tezkor xabarlar va yangilanishlar',
    },
  ];

  const benefits = [
    'Talabalar ma’lumotlariga 24/7 kirish',
    'Muhim yangilanishlar bo‘yicha tezkor bildirishnomalar',
    'Ma’lumotlarning xavfsizligi va maxfiyligi',
    'Mobil mos interfeys',
    'Haftalik natija hisobotlari',
    'O‘qituvchilar bilan oson aloqa',
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="mb-4">Smart CRM tizimi</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Educon Academy ota-onalar uchun 100% shaffoflikni ta’minlaydi
          </p>
        </div>

        {/* Hero */}
        <Card
          className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground mb-16"
          data-aos="zoom-in"
        >
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Eye className="w-12 h-12" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="mb-4">
                  Farzandingizning rivojlanishini to‘liq kuzatish
                </h2>
                <p className="text-lg opacity-95 mb-6">
                  Ota-onalar istalgan vaqtda tizimga kirib, farzandlarining
                  rivojlanishi, davomati, uy vazifalari va o‘qituvchilardan real
                  vaqtdagi yangilanishlarni kuzatishlari mumkin.
                </p>

                {/* DEMOGA KIRISH — tashqi sayt */}
                <a
                  href="https://crm.educonacademy.uz/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Demoga kirish
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-center mb-12" data-aos="fade-up">
            Platformaning Xususiyatlari
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4 mx-auto">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16" data-aos="fade-up">
          <Card className="bg-secondary border-none">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-center mb-8">
                Nima Uchun Ota-onalar Bizning CRMni Yoqtirishadi
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How it works */}
        <section>
          <h2 className="text-center mb-12" data-aos="fade-up">
            Qanday Ishlaydi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step, index) => (
              <Card
                key={step}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {step}
                  </div>
                  <h3 className="mb-3">
                    {step === 1 && 'Farzandingizni Ro‘yxatdan O‘tkazing'}
                    {step === 2 && 'Panelga Kirish'}
                    {step === 3 && 'Bog‘lanishda Bo‘ling'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step === 1 &&
                      'Istalgan kursga yoziling va ota-ona portali uchun kirish ma’lumotlarini oling'}
                    {step === 2 &&
                      'Davomat, uy vazifalari va natijalar bo‘yicha real vaqtdagi yangilanishlarni kuzatish uchun tizimga kiring'}
                    {step === 3 &&
                      'Bildirishnomalarni oling va o‘qituvchilar bilan bevosita aloqa qiling'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <h2 className="mb-4">To‘liq Shaffoflikni Tajriba Qiling</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Educon Academyga qo‘shiling va farzandingizning ta’lim safaridan
            xabardor bo‘ling
          </p>
          <Button size="lg" onClick={() => onNavigate('contact')}>
            Bugun Boshlang
          </Button>
        </div>
        <ScrollTopButton />
      </div>
    </div>
  );
}
