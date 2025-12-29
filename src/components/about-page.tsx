import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Card, CardContent } from './ui/card';
import { Target, Lightbulb, BookOpen, Code, CheckCircle } from 'lucide-react';

export function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const differentiators = [
    'Ota-onalar bilan ochiq va shaffof muloqot',
    'Innovatsion o‘qitish metodikasi',
    'Intizom + motivatsiya tizimi',
    'Haftalik rivojlanish hisobotlari',
    'Xalqaro standartdagi baholash tizimi',
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="mb-4">EDUCON Academy haqida</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            EDUCON Academy — Namangandagi innovatsion ta’lim markazi. Xorijiy tillar, IT va chet el universitetlariga tayyorlash orqali sizni global imkoniyatlar sari yetaklaymiz.”          </p>
        </div>

        {/* Who We Are */}
        <section className="mb-16" data-aos="fade-right">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-8">
              <h2 className="mb-4">Biz kimmiz?</h2>
              <p className="text-lg">
                EDUCON Academy — Namangandagi zamonaviy ta’lim va professional konsultatsiyani uyg‘unlashtirgan o‘quv markazi bo‘lib, o‘quvchilarga xalqaro darajadagi bilim, til ko‘nikmalari va kelajak uchun aniq yo‘l xaritasini taqdim etadi.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Mission and Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-primary text-primary-foreground" data-aos="zoom-in">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8" />
                <h2>Bizning missiyamiz</h2>
              </div>
              <p className="text-lg opacity-95">
                Yangi avlodni xalqaro darajadagi ta’lim bilan ta’minlash va ularni global imkoniyatlar sari yo‘naltirish.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary" data-aos="zoom-in" data-aos-delay="150">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
                <h2>Bizning o‘qitish falsafamiz</h2>
              </div>
              <p className="text-lg">
                Har bir o‘quvchi uchun individual ta’lim tajribasini yaratish maqsadida ikki asosiy akademik yo‘nalishga
                e’tibor qaratamiz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Academic Pathways */}
        <section className="mb-16">
          <h2 className="text-center mb-10" data-aos="fade-up">
            Akademik yo‘nalishlar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow" data-aos="fade-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3>Bunkei (Gumanitar yo‘nalish)</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Quyidagi sohalarga qiziqqan o‘quvchilar uchun mos:
                </p>
                <ul className="space-y-2">
                  {[
                    'Xorijiy Tillar',
                    'Universitetga tayyorlash',
                    'Consulting xizmati',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h3>Rikei (Texnik / STEM yo‘nalish)</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Quyidagi maqsadlarni ko‘zlagan o‘quvchilar uchun:
                </p>
                <ul className="space-y-2">
                  {[
                    'Dasturlash va IT',
                    'Matematika va Mental arifmetika',
                    'Shaxsiy rivojlanish',

                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What Makes Us Different */}
        {/* What Makes Us Different */}
        <section>
          <h2 className="text-center mb-10" data-aos="fade-up">
            Bizni boshqalardan nima ajratib turadi?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ...differentiators,
              'Global imkoniyatlar', // yangi qo‘shilgan card
            ].map((item, index) => (
              <Card
                key={index}
                className="border-none bg-secondary"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}
