import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ScrollTopButton } from './ScrollToTopButton';

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
  Brain,
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
      levels: 'Amaliy va ishonchli ingliz tili',
      special: 'IELTS, Akademik Ingliz Tili va real muloqot',
      focus: [
        'Gapirish',
        'Tinglash',
        'O‘qish',
        'Yozish',
        'Grammatika',
        'Imtihon Ko‘nikmalari',
      ],
      benefits: [
        'Chet ellik va mahalliy o‘qituvchilar',
        'Haftalik speaking club',
        'Oylik sinov testlari',
      ],
      bestFor:
        'Xalqaro imtihonlar va chet el ta’limiga tayyorlanayotganlar uchun',
      color: 'bg-primary',
    },
    {
      icon: GraduationCap,
      title: 'Yapon Tili Kurslari',
      levels: 'JLPTga tizimli tayyorgarlik',
      special: 'JLPT standartlari asosida chuqur tayyorlov',
      focus: ['Grammatika', 'Lugat', 'Kanji', 'Tinglab tushunish'],
      benefits: [
        'JLPT formatidagi testlar',
        'Gapirish amaliyoti',
        'Madaniy muhit',
      ],
      bestFor: 'Yaponiyada o‘qish yoki ishlashni xohlovchilar uchun',
      color: 'bg-primary',
    },
    {
      icon: Globe,
      title: 'Rus Tili Kurslari',
      levels: 'Erkin muloqot va grammatik aniqlik',
      special: 'Amaliy suhbat va to‘g‘ri grammatika',
      focus: ['Suhbat', 'Grammatika', 'O‘qish', 'Yozish'],
      benefits: [
        'Real hayot misollari',
        'Grammatikani chuqur o‘rganish',
        'So‘z boyligini oshirish',
      ],
      bestFor: 'Maktab va kundalik muloqot uchun',
      color: 'bg-primary',
    },
    {
      icon: Code,
      title: 'IT Kurslari',
      levels: 'Zamonaviy kasb va real loyihalar',
      special: 'Amaliy dasturlash va muammo yechish',
      focus: [
        'Kompyuter savodxonligi',
        'Asosiy dasturlash',
        'Mantiq',
        'Algoritmlar',
      ],
      benefits: [
        'Amaliy loyihalar',
        'Zamonaviy texnologiyalar',
        'Kasbga yo‘naltirish',
      ],
      bestFor: 'IT sohasiga kirishni xohlovchilar uchun',
      color: 'bg-primary',
    },
    {
      icon: Calculator,
      title: 'Matematika Kurslari',
      levels: 'Mantiqiy va aniq yondashuv',
      special: 'Murakkab masalalarni oson yechish',
      focus: [
        'Asosiy matematika',
        'Mantiq',
        'Tanlov tayyorgarligi',
        'Olimpiada',
      ],
      benefits: [
        'Individual yondashuv',
        'Olimpiadaga tayyorlov',
        'Natijaga yo‘naltirilgan darslar',
      ],
      bestFor: 'Tanlov va imtihonlarga tayyorlanayotganlar uchun',
      color: 'bg-primary',
    },

    // ✅ AI BILAN ISHLASH KURSI
    {
      icon: Brain,
      title: 'AI bilan samarali ishlash',
      levels: 'Sun’iy intellektdan to‘g‘ri foydalanish',
      special:
        'AI vositalaridan real ish va o‘qishda samarali foydalanish. Prompt yozish, avtomatlashtirish va real loyihalar.',
      focus: [
        'Prompt Engineering',
        'ChatGPT va AI tools',
        'Avtomatlashtirish',
        'AI bilan kontent',
        'AI bilan kod va analiz',
      ],
      benefits: [
        'Real amaliy loyihalar',
        'Ish jarayoniga mos mashqlar',
        'AI’dan maksimal foyda olish',
      ],
      bestFor:
        'Talabalar, IT, dizayn, marketing va AI’dan foyda olishni istaganlar uchun',
      color: 'bg-primary',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="mb-4">Bizning Kurslarimiz</h1>
          <p className="text-xl text-muted-foreground">
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
                      <p className="opacity-90">{course.levels}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="mb-3">Yo‘nalishlar</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {course.focus.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-secondary rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="bg-secondary/50 p-4 rounded-lg">
                        <strong>Maxsus:</strong> {course.special}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3">Afzalliklar</h4>
                      <ul className="space-y-2 mb-6">
                        {course.benefits.map((b, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="border border-primary/20 p-4 rounded-lg">
                        <strong>Kimlar uchun:</strong> {course.bestFor}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          <Card
            className="overflow-hidden hover:shadow-lg transition-shadow mt-8"
            data-aos="fade-up"
          >
            <CardHeader className="bg-gradient-to-br from-primary to-primary/90 text-white p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <Plane className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="mb-1">Chet Elda Ta’lim</h2>
                  <p className="opacity-95">
                    Xalqaro universitetlarga professional maslahat
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* CHAP TOMON */}
                <div>
                  <h4 className="mb-3">Biz Yordam Beradigan Yo‘nalishlar</h4>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      'Universitet tanlash',
                      'Hujjat topshirish',
                      'Viza jarayonlari',
                      'IELTS tayyorlov',
                      'Grant va stipendiyalar',
                    ].map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="bg-secondary/50 p-4 rounded-lg mb-6">
                    <p className="text-sm">
                      <strong>Maxsus:</strong> Har bir talaba uchun individual yo‘l xaritasi,
                      universitet talablariga mos hujjatlar va to‘liq kuzatuv.
                    </p>
                  </div>

                  {/* ✅ CTA CHAP TOMONDA */}
                  <Button onClick={() => onNavigate('contact')}>
                    Maslahat Olish
                  </Button>
                </div>

                {/* O‘NG TOMON */}
                <div>
                  <h4 className="mb-3">Afzalliklar</h4>

                  <ul className="space-y-2 mb-6">
                    {[
                      'Xalqaro universitetlar bilan tajriba',
                      'Hujjatlarda xatolarsiz topshirish',
                      'Viza jarayonida maslahat',
                      'Grant va til bo‘yicha yordam',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm">
                      <strong>Kimlar uchun mos:</strong> Xorijda bakalavr, magistratura
                      yoki til kurslarida o‘qishni rejalashtirayotgan talabalar uchun.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>




        </div>

        <ScrollTopButton />
      </div>
    </div>
  );
}
