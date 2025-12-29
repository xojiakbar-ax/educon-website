import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Send,
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // ✅ AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Telegramga yuborish funksiyasi
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
Ism: ${formData.name}
Telefon: ${formData.phone}
Email: ${formData.email || '-'}
Xabar: ${formData.message}
    `;

    try {
      await fetch(
        `https://api.telegram.org/bot8306939130:AAGwsUnyQLuJZ0P6CPTGIaxaWhv9Z5kE0L8/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: '6142508242', // o'zingizning chat ID
            text: message,
          }),
        }
      );

      alert('Xabaringiz yuborildi! Tez orada javob beramiz.');

      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Manzil',
      content: 'Al-Xorazmiy maktabi yonida, Lola, Namangan',
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+998 91 340 20 97',
    },
    {
      icon: Clock,
      title: 'Ish vaqti',
      content: 'Dushanba–Shanba: 08:00–20:00\nYakshanba: Dam olish',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
        >
          <h1 className="text-4xl font-bold mb-4">Biz bilan bog‘laning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Savollaringiz bormi? Bizga yozing yoki qo‘ng‘iroq qiling — yordam beramiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT – CONTACT INFO */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="border-l-4 border-l-primary"
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                  >
                    <CardContent className="p-6 flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* QUICK ACTIONS */}
            <Card
              className="bg-secondary border-none"
              data-aos="zoom-in"
            >
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold mb-2">Tezkor harakatlar</h3>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  <MapPin className="w-5 h-5" />
                  Xaritada ko‘rish
                </Button>

                <Button
                  className="w-full justify-start gap-2 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/998913402097', '_blank')}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp orqali yozish
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={() => (window.location.href = 'tel:+998913402097')}
                >
                  <Phone className="w-5 h-5" />
                  Qo‘ng‘iroq qilish
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT – FORM */}
          <Card
            className="shadow-lg"
            data-aos="fade-left"
          >
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Xabar yuborish</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div data-aos="fade-up">
                  <label className="block mb-2">To‘liq ism *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Ismingiz"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="100">
                  <label className="block mb-2">Telefon raqam *</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                  <label className="block mb-2">Email (ixtiyoriy)</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="example@mail.com"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                  <label className="block mb-2">Xabar *</label>
                  <Textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Qaysi kurs sizni qiziqtiryapti?"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  data-aos="zoom-in"
                >
                  <Send className="w-5 h-5" />
                  Yuborish
                </Button>
              </form>

              <p className="text-sm text-muted-foreground text-center mt-6">
                Odatda 24 soat ichida javob beramiz
              </p>
            </CardContent>
          </Card>
        </div>

        {/* MAP */}
        <div className="mt-16" data-aos="fade-up">
          <Card className="overflow-hidden">
            <div className="h-96 bg-secondary flex flex-col items-center justify-center text-center">
              <MapPin className="w-16 h-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Al-Xorazmiy maktabi yonida, Lola, Namangan
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() =>
                  window.open(
                    'https://maps.app.goo.gl/XfrckDHvnb7Sb5q97',
                    '_blank'
                  )
                }
              >
                Google Xaritalarda ochish
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
