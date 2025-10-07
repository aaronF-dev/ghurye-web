import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-t-2">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 leading-tight">Smt. Sitabai Shripad Ghurye<br />Pre Primary English Medium School</h3>
            <a 
              href="https://topiwala-mes.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-sm md:text-base text-primary hover:text-primary/80 transition-colors font-semibold mb-3 md:mb-4"
            >
              By Malvan Education Society
            </a>
            <p className="text-muted-foreground text-sm md:text-base">
              Creating happy memories and bright futures, one child at a time! 🌈
            </p>
            <div className="flex gap-3 md:gap-4 pt-3 md:pt-4">
              <a
                href="#"
                className="bg-primary text-primary-foreground p-2.5 md:p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="bg-accent text-accent-foreground p-2.5 md:p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="bg-secondary text-secondary-foreground p-2.5 md:p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#activities" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
                  Activities
                </a>
              </li>
              <li>
                <a href="#staff" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
                  Our Teachers
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Get in Touch</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground text-sm md:text-base">
                  Dhuriwada Malvan
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm md:text-base">02365 251485</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm md:text-base break-all">smesm@rediffmail.com</span>
              </li>
            </ul>
          </div>

          {/* Google Maps */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Find Us</h4>
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg border-2 border-border h-40 md:h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.2123456789!2d73.4567890123456!3d15.9876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU5JzE1LjYiTiA3M8KwMjcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin&q=Dhuriwada+Malvan"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smt. Sitabai Shripad Ghurye Pre Primary English Medium School Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-border pt-6 md:pt-8 mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-3 h-3 md:w-4 md:h-4 text-accent fill-accent" />
              <span>for our amazing students</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              © 2024 Smt. Sitabai Shripad Ghurye Pre Primary English Medium School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
