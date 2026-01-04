import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollTopButton } from "./ScrollToTopButton"



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

/* =======================
   COUNTRY CODES
======================= */
const countryCodes = [
  {
    code: '+998',
    country: 'O‘zbekiston',
    flag: '🇺🇿',
    placeholder: '90 123 45 67',
  },
  {
    code: '+7',
    country: 'Rossiya',
    flag: '🇷🇺',
    placeholder: '999 123 45 67',
  },
  {
    code: '+1',
    country: 'USA',
    flag: '🇺🇸',
    placeholder: '202 555 0198',
  },
  {
    code: '+81',
    country: 'Yaponiya',
    flag: '🇯🇵',
    placeholder: '90 1234 5678',
  },
  {
    code: '+49',
    country: 'Germaniya',
    flag: '🇩🇪',
    placeholder: '151 23456789',
  },
];

export function ContactPage() {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullPhone = `${selectedCountry.code} ${formData.phone}`;

    const message = `
<b>📩 Yangi murojaat</b>
────────────────────

<b>👤 Ism familya:</b>
${formData.name}

<b>📞 Telefon:</b>
${fullPhone}

<b>📧 Email:</b>
${formData.email || '—'}

<b>💬 Xabar:</b>
${formData.message}

────────────────────
🕒 <i>${new Date().toLocaleString()}</i>
`;

    try {
      await fetch(
        `https://api.telegram.org/bot8306939130:AAGwsUnyQLuJZ0P6CPTGIaxaWhv9Z5kE0L8/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: '-1003485570560',
            text: message,
            parse_mode: 'HTML',
            disable_web_page_preview: true,
          }),
        }
      );

      alert('Xabaringiz yuborildi!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      alert('Xatolik yuz berdi');
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
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl font-bold mb-4">Biz bilan bog‘laning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Savollaringiz bormi? Bizga yozing yoki qo‘ng‘iroq qiling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="space-y-8">
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
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="bg-secondary border-none" data-aos="zoom-in">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold">Tezkor harakatlar</h3>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={() =>
                    window.open(
                      'https://maps.app.goo.gl/yVhaJxws9xngamfs6',
                      '_blank'
                    )
                  }
                >
                  <MapPin className="w-5 h-5" />
                  Google Map
                </Button>

                <Button
                  variant="default"
                  className="w-full flex items-center justify-start gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                  onClick={() => window.open('https://t.me/+998958701181', '_blank')}
                >
                  <Send className="w-5 h-5 stroke-white" />
                  Telegram
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={() => (window.location.href = 'tel:+998913402097')}
                >
                  <Phone className="w-5 h-5" />
                  Qo‘ng‘iroq
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FORM */}
          <Card className="shadow-lg" data-aos="fade-left">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Xabar yuborish</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  required
                  placeholder="Ism familya"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                {/* PHONE INPUT WITH COUNTRY */}
                <div className="flex gap-2">
                  <select
                    className="h-10 w-[140px] rounded-md border border-input bg-background px-3 text-sm"
                    value={selectedCountry.code}
                    onChange={(e) => {
                      const country = countryCodes.find(
                        (c) => c.code === e.target.value
                      );
                      if (country) setSelectedCountry(country);
                    }}
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>

                  <Input
                    required
                    type="tel"
                    placeholder={selectedCountry.placeholder}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <Input
                  placeholder="Email (ixtiyoriy)"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <Textarea
                  required
                  rows={6}
                  placeholder="Xabaringiz"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="w-5 h-5" />
                  Yuborish
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        {/* MAP VIEW */}
        <div className="mt-20 space-y-8" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-center">

          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GOOGLE MAP */}
            <div
              className="mt-20 w-full rounded-xl overflow-hidden shadow-lg border"
              data-aos="fade-up"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.857272752434!2d71.7081022!3d40.972338799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4f82a8bc6fab%3A0xf628b3f3c8810e00!2sEducon%20Academy!5e1!3m2!1sru!2s!4v1767423982886!5m2!1sru!2s"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>


            {/* YANDEX MAP */}
            <Card className="overflow-hidden" data-aos="fade-up">
              <CardContent className="p-0">
                <iframe
                  src="https://yandex.uz/map-widget/v1/?ll=71.708309%2C40.972586&z=17&pt=71.708309,40.972586,pm2rdm"
                  width="100%"
                  height="480"
                  frameBorder="0"
                  loading="lazy"
                  className="border-0"
                  allowFullScreen
                />
              </CardContent>
            </Card>


          </div>
        </div>


        <ScrollTopButton />
      </div>
    </div>
  );
}
