import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Award } from 'lucide-react';

// SOP-16: The Strategy "The Safety Net"
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Col 1: Brand Identity */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold text-white tracking-wide block">KURK HOMES</span>
              <span className="text-xs uppercase tracking-[0.1em] text-accent block mt-1">Serving Texas Since 1989</span>
            </div>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-xs text-gray-400">
                <Award className="w-4 h-4 mr-2 text-accent" /> Southern Living Custom Builder
              </div>
              <div className="flex items-center text-xs text-gray-400">
                <Award className="w-4 h-4 mr-2 text-accent" /> Best of Houzz Winner
              </div>
              <div className="flex items-center text-xs text-gray-400">
                <Award className="w-4 h-4 mr-2 text-accent" /> BBB Pinnacle Award
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services Silo (SEO) */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-bold mb-4 text-accent">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#custom-design" className="hover:text-white transition-colors">Custom Design & Build</a></li>
              <li><a href="#build-on-your-lot" className="hover:text-white transition-colors">Build On Your Lot</a></li>
              <li><a href="#design-center" className="hover:text-white transition-colors">Design Center</a></li>
              <li><a href="#model-homes" className="hover:text-white transition-colors">Model Homes</a></li>
              <li><a href="#plans" className="hover:text-white transition-colors">Floor Plans</a></li>
            </ul>
          </div>

          {/* Col 4: Locations Silo (SEO) */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-bold mb-4 text-accent">Service Areas</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#tomball" className="hover:text-white transition-colors">Tomball, TX</a></li>
              <li><a href="#huntsville" className="hover:text-white transition-colors">Huntsville, TX</a></li>
              <li><a href="#new-braunfels" className="hover:text-white transition-colors">New Braunfels, TX</a></li>
              <li><a href="#hill-country" className="hover:text-white transition-colors">Texas Hill Country</a></li>
              <li><a href="#magnolia" className="hover:text-white transition-colors">Magnolia, TX</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-bold mb-4 text-accent">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start hover:text-white group">
                <MapPin className="w-5 h-5 mr-3 text-accent flex-shrink-0 group-hover:animate-bounce" />
                <span>12022 Zion Road,<br />Tomball, TX 77375</span>
              </a>
              <a href="tel:281-809-6533" className="flex items-center hover:text-white">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                (281) 809-6533
              </a>
              <a href="mailto:info@kurkhomes.com" className="flex items-center hover:text-white">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                info@kurkhomes.com
              </a>
            </div>
          </div>

        </div>

        {/* Section 5: Legal Basement */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} Kurk Homes. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300">Terms of Service</a>
            <a href="#sitemap" className="hover:text-gray-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;