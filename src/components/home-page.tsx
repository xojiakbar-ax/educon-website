import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollTopButton } from "./ScrollToTopButton"

import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import {
  GraduationCap,
  Users,
  TrendingUp,
  Globe,
  BookOpen,
  Code,
  Plane,
  Calculator,
} from 'lucide-react';


interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);


  const features = [
    { icon: Users, text: 'Xalqaro tajribaga ega malakali o‘qituvchilar' },
    { icon: Calculator, text: 'CEFR va JLPT standartlari asosidagi dastur' },
    { icon: TrendingUp, text: 'Ota-onalar uchun o‘quvchi rivojini to‘liq kuzatish tizimi' },
    { icon: Users, text: 'Kichik guruhlar va individual yondashuv' },
    { icon: Globe, text: 'Yetakchi xorijiy universitetlarga kirish bo‘yicha maslahatlar' },
    { icon: Code, text: 'Zamonaviy texnologiyalar va IT bo‘yicha amaliy mashg‘ulotlar' },
  ];

  const programs = [
    {
      icon: BookOpen,
      title: 'Ingliz tili kurslari',
      subtitle: 'A1–C1, IELTS, Akademik ingliz tili',
      description: 'Maktab, universitet va xalqaro imkoniyatlar uchun haqiqiy bilim va ishonch hosil qiling.',
    },
    {
      icon: GraduationCap,
      title: 'Yapon tili kurslari',
      subtitle: 'JLPT N5–N1',
      description: 'Tuzilgan JLPT tayyorgarligi va gapirish amaliyoti orqali tilni mukammal o‘rganing.',
    },
    {
      icon: Globe,
      title: 'Rus tili kurslari',
      subtitle: 'Boshlang‘ich – ilg‘or daraja',
      description: 'Grammatika asosida amaliy muloqot ko‘nikmalarini rivojlantiring.',
    },
    {
      icon: Code,
      title: 'IT kurslari',
      subtitle: 'Dasturlash va kompyuter savodxonligi',
      description: 'Zamonaviy dasturlash asoslari va real amaliy loyihalar orqali bilim oling.',
    },
    {
      icon: Calculator,
      title: 'Matematika kurslari',
      subtitle: 'Maktab dasturi va olimpiada tayyorgarligi',
      description: 'Mantiqiy fikrlashni rivojlantirib, akademik natijalaringizni oshiring.',
    },
    {
      icon: Plane,
      title: 'Xorijda ta’lim bo‘yicha konsultatsiya',
      subtitle: 'Universitet tanlash va viza yordami',
      description: 'To‘g‘ri universitetni toping va to‘liq viza qo‘llab-quvvatlashiga ega bo‘ling.',
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32" data-aos="fade-up">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl mb-6" data-aos="fade-down">Educon Academy</h1>
            <p className="text-xl lg:text-3xl mb-4 opacity-95" data-aos="fade-up" data-aos-delay="100">
              Yorqin kelajak uchun moslashtirilgan ta’lim
            </p>
            <p className="text-lg lg:text-xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="200">
              Til bilimi, akademik muvaffaqiyat va xalqaro imkoniyatlar shu yerdan boshlanadi.
            </p>
            <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => onNavigate('contact')}>
                Ro‘yxatdan o‘tish
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => onNavigate('contact')}>
                Markazimizga tashrif buyuring
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => onNavigate('contact')}>
                Bepul konsultatsiya olish
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Educon Academy */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center mb-12 text-primary text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            data-aos="fade-up"
          >
            Nega aynan Educon Academy?
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-none shadow-sm" data-aos="fade-up" data-aos-delay={index * 100}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <p className="flex-1 pt-2">{feature.text}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section >

      {/* Programs */}
      <section className="py-16" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center mb-12 text-primary text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            data-aos="fade-up"
          >
            Asosiy dasturlarimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={index * 150}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-lg mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{program.subtitle}</p>
                    <p className="text-sm">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
            <Button size="lg" onClick={() => onNavigate('courses')}>
              Barcha kurslarni ko‘rish
            </Button>
          </div>
        </div>
      </section >


      <ScrollTopButton />
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground"> <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up"> <h2 className="mb-4">Yo‘lingizni boshlashga tayyormisiz?</h2> <p className="text-xl mb-8 opacity-95">Sizning kelajagingiz shu yerdan boshlanadi</p> <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => onNavigate('contact')}> Hoziroq qo‘shiling </Button> </div> </section>
    </div >
  );
}
