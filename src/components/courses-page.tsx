import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import {
  BookOpen,
  GraduationCap,
  Globe,
  Code,
  Calculator,
  Plane,
  CheckCircle,
} from 'lucide-react';

interface CoursesPageProps {
  onNavigate: (page: string) => void;
}

export function CoursesPage({ onNavigate }: CoursesPageProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const courses = [
    {
      icon: BookOpen,
      title: 'Ingliz Tili Kurslari',
      levels: 'Darajalar: A1–C1',
      special: 'Maxsus Dasturlar: IELTS, Akademik Ingliz Tili',
      focus: ['Gapirish', 'Tinglash', 'O‘qish', 'Yozish', 'Grammatika', 'Imtihon Ko‘nikmalari'],
      benefits: [
        'Chet ellik va mahalliy o‘qituvchilar',
        'Haftalik gapirish klublari',
        'Oylik sinov testlari',
      ],
      bestFor: 'Imtihonlarga tayyorlanayotgan yoki xalqaro ta’limga intilayotgan talabalar',
      color: 'bg-primary',
    },
    {
      icon: GraduationCap,
      title: 'Yapon Tili Kurslari',
      levels: 'Darajalar: JLPT N5–N1',
      special: 'To‘liq JLPT Tayyorlash',
      focus: ['Grammatika', 'Lugat', 'Kanji', 'Tinglab tushunish'],
      benefits: [
        'JLPT uslubidagi testlar',
        'Rol o‘yinlari bilan gapirish amaliyoti',
        'Madaniy muhit bilan tanishtirish',
      ],
      bestFor: 'Yapon universitetlari yoki ish imkoniyatlarini ko‘zlagan talabalar',
      color: 'bg-primary',
    },
    {
      icon: Globe,
      title: 'Rus Tili Kurslari',
      levels: 'Boshlang‘ichdan ilg‘arigacha',
      special: 'Amaliy muloqotga e’tibor',
      focus: ['Suhbat ko‘nikmalari', 'Grammatika', 'O‘qish', 'Yozish'],
      benefits: [
        'Tuzilgan grammatika darslari',
        'Haqiqiy hayot vaziyatlari',
        'Madaniy kontekst',
      ],
      bestFor: 'Maktabdagi muvaffaqiyatni oshirmoqchi yoki sayohatga tayyorlanayotgan talabalar',
      color: 'bg-primary',
    },
    {
      icon: Code,
      title: 'IT Kurslari',
      levels: 'Boshlang‘ichdan o‘rta darajagacha',
      special: 'Dasturlash va kompyuter savodxonligi',
      focus: ['Asosiy dasturlash', 'Kompyuter savodxonligi', 'Muammo yechish', 'Mantiq'],
      benefits: [
        'Amaliy loyihalar',
        'Zamonaviy dasturlash tillari',
        'Sanoatga mos ko‘nikmalar',
      ],
      bestFor: 'Texnologiyaga qiziqqan talabalar',
      color: 'bg-primary',
    },
    {
      icon: Calculator,
      title: 'Matematika Kurslari',
      levels: 'Maktab dasturi & ilg‘or',
      special: 'Olimpiadaga tayyorlash',
      focus: ['Asosiy matematika', 'Muammo yechish', 'Tanlov tayyorgarligi', 'Mantiq'],
      benefits: [
        'Maktab dasturini qo‘llab-quvvatlash',
        'Olimpiadaga tayyorgarlik',
        'Individual yondashuv',
      ],
      bestFor: 'Olimpiadaga va tanlovlarga tayyorlanayotgan talabalar',
      color: 'bg-primary',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="mb-4">Bizning Kurslarimiz</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Talabalar uchun xalqaro standartdagi ta’lim
          </p>
        </div>

        {/* Courses */}
        <div className="space-y-12 mb-16">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader className={`${course.color} text-white p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="mb-1">{course.title}</h2>
                      <p className="opacity-95">{course.levels}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="mb-3">E’tibor Qaratilgan Yo‘nalishlar</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {course.focus.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="bg-secondary/50 p-4 rounded-lg">
                        <p className="text-sm">
                          <strong>Maxsus:</strong> {course.special}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3">Afzalliklar</h4>
                      <ul className="space-y-2 mb-6">
                        {course.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <p className="text-sm">
                          <strong>Kimlar uchun mos:</strong> {course.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ✅ STUDY ABROAD — TO‘LIQ CARD */}
        <Card
          className="overflow-hidden hover:shadow-lg transition-shadow"
          data-aos="fade-up"
        >
          <CardHeader className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <Plane className="w-8 h-8" />
              </div>
              <div>
                <h2 className="mb-1">Chet Elda Ta’lim Maslahati</h2>
                <p className="opacity-95">
                  Xalqaro universitetlarga yo‘l ochamiz
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 bg-background text-foreground">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="mb-3">Biz Nimalarda Yordam Beramiz</h4>
                <ul className="space-y-2">
                  {[
                    'Universitet tanlash',
                    'Hujjat topshirish',
                    'Viza jarayonlari',
                    'IELTS va til tayyorlash',
                    'Grant va stipendiyalar',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3">Kimlar Uchun Mos</h4>
                <div className="bg-secondary/50 p-4 rounded-lg mb-6">
                  <p className="text-sm">
                    Xorijda bakalavr, magistratura yoki til kurslarida
                    o‘qishni rejalashtirayotgan talabalar uchun.
                  </p>
                </div>
                <Button onClick={() => onNavigate('contact')}>
                  Maslahat Olish
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <h2 className="mb-4">O‘rganish Safaringizni Boshlashga Tayormisiz?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Maqsadlaringizga mos keladigan kursni tanlang va kelajagingizni bugun qurishni boshlang.
          </p>
          <Button size="lg" onClick={() => onNavigate('contact')}>
            Ro'yxatdan o'tish
          </Button>
        </div>

      </div>
    </div>
  );
}
