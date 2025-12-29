import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Send,
  Linkedin,
  Facebook,
} from 'lucide-react';
import logo from "./assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Educon Academy"
                className="w-12 h-12 object-contain"
              />
              <span className="font-semibold text-2xl">
                Educon Academy
              </span>
            </div>

            <p className="text-sm opacity-90 mb-2">
              Ingliz • Yapon • Rus • IT • Matematika • Xorijda ta’lim bo‘yicha konsultatsiya
            </p>

            <p className="text-sm opacity-75 italic mb-4">
              Yorqin kelajak uchun moslashtirilgan ta’lim
            </p>

            {/* 🌐 SOCIAL ICONS */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/educon.academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://t.me/educon_official"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Send className="w-5 h-5" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Ingliz tili kurslari</li>
              <li>Yapon tili kurslari</li>
              <li>Rus tili kurslari</li>
              <li>IT kurslari</li>
              <li>Xorijda ta’lim bo‘yicha konsultatsiya</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Bog‘lanish</h3>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Al-Xorazmiy maktabi yonida, Lola, Namangan</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+998 91 340 20 97</span>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Dushanba–Shanba: 08:00–20:00</div>
                  <div>Yakshanba: Dam olish kuni</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          © 2025 Educon Academy. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
