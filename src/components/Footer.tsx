import { Heart, MapPin, Mail, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/wovaide-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-purple-darkest text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="WOVAIDE Logo"
              className="h-20 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Women of Valour Initiative for Development and Empowerment - 
              dedicated to empowering vulnerable communities through capacity building, 
              advocacy, and sustainable development programs.
            </p>
            <p className="text-sm text-primary-foreground/50">
              CAC Registered | RC Number: 137419
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { href: "/#home", label: "Home" },
                { href: "/#about", label: "About Us" },
                { href: "/#programs", label: "Programs" },
                { href: "/gallery", label: "Gallery" },
                { href: "/#donate", label: "Donate" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-primary-foreground/70 hover:text-purple-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-light mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/70 text-sm">
                  Taraba State, Nigeria
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-light mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@wovaide.org.ng"
                  className="text-primary-foreground/70 text-sm hover:text-purple-light transition-colors"
                >
                  info@wovaide.org.ng
                </a>
              </div>
              <div className="flex items-start gap-3">
                <ExternalLink className="w-5 h-5 text-purple-light mt-0.5 flex-shrink-0" />
                <a
                  href="https://wovaide.org.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 text-sm hover:text-purple-light transition-colors"
                >
                  wovaide.org.ng
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {currentYear} WOVAIDE. All rights reserved.
            </p>
            <div className="text-right">
              <p className="flex items-center justify-end gap-1 text-primary-foreground/50 text-sm">
                Made with <Heart className="w-4 h-4 text-purple-light" /> for the vulnerable
              </p>
              <p className="text-primary-foreground/50 text-sm mt-1">
                Powered by{" "}
                <a
                  href="https://ethereal.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-light transition-colors"
                >
                  ETHEREAL MULTIMEDIA TECHNOLOGY LTD. (RC1134046)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
