import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/p/MTM-Sr-Sec-School-Harsola-100063906708054/', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/mtmharsola/', label: 'Instagram' }
];

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/student-life', label: 'Student Life' },
  { to: '/contact', label: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-blue-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span>MTM, to, Pai Rd, Vpo, Harsola, Haryana 136027</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-300" />
                <a href="tel:+919671390162" className="hover:text-blue-300 transition-colors duration-200">
                  +91 96713-90162
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-300" />
                <a href="mailto:mtmharsola@gmail.com" className="hover:text-blue-300 transition-colors duration-200">
                  mtmharsola@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-sm text-blue-300">
            © {new Date().getFullYear()} MTM Sr. Sec. School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}