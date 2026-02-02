import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Hammer, MapPin } from 'lucide-react';

// SOP-17: The Strategy "The Compass"
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  // Handle scroll for sticky header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: "Custom Home Design & Build", link: "#custom-design" },
    { title: "Build On Your Lot", link: "#build-on-your-lot" },
    { title: "Design Center & Selections", link: "#design-center" },
    { title: "Model Homes & Inspiration", link: "#model-homes" },
  ];

  const locations = [
    { title: "Tomball, TX", link: "#tomball" },
    { title: "Huntsville, TX", link: "#huntsville" },
    { title: "New Braunfels, TX", link: "#new-braunfels" },
    { title: "Texas Hill Country", link: "#hill-country" },
  ];

  const toggleMobileSubmenu = (menu: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="/" className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-primary tracking-wide">KURK HOMES</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent mt-[-2px]">Built on Tradition Since 1989</span>
            </a>
          </div>

          {/* Desktop Navigation - SOP Section 1 */}
          <nav className="hidden md:flex items-center space-x-8">
            
            {/* Services Mega Menu */}
            <div className="relative group">
              <button className="flex items-center text-primary font-bold hover:text-accent transition-colors py-2">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl rounded-b-lg border-t-4 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <ul className="py-2">
                  {services.map((service, idx) => (
                    <li key={idx}>
                      <a href={service.link} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary border-b border-gray-100 last:border-0">
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Locations Mega Menu */}
            <div className="relative group">
              <button className="flex items-center text-primary font-bold hover:text-accent transition-colors py-2">
                Locations <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <ul className="py-2">
                  {locations.map((loc, idx) => (
                    <li key={idx}>
                      <a href={loc.link} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary border-b border-gray-100 last:border-0">
                        {loc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a href="#portfolio" className="text-primary font-bold hover:text-accent transition-colors">Portfolio</a>
            <a href="#about" className="text-primary font-bold hover:text-accent transition-colors">About Us</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a href="#contact" className="bg-primary hover:bg-blue-900 text-white font-bold py-3 px-6 rounded transition-colors shadow-sm">
              Start Feasibility Study
            </a>
          </div>

          {/* Mobile Toggle - SOP Section 2 */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay Menu - SOP Section 2 */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden flex flex-col pt-24 pb-8 px-6 animate-in slide-in-from-right duration-300 overflow-y-auto">
          <nav className="flex-grow flex flex-col space-y-6 text-lg">
            
            {/* Mobile Services Accordion */}
            <div>
              <button 
                onClick={() => toggleMobileSubmenu('services')}
                className="flex items-center justify-between w-full font-serif text-2xl text-primary font-bold border-b border-gray-100 pb-2"
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileSubmenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileSubmenu === 'services' && (
                <ul className="pl-4 mt-2 space-y-3 bg-gray-50 p-4 rounded-md">
                  {services.map((service, idx) => (
                    <li key={idx}>
                      <a href={service.link} onClick={() => setIsMenuOpen(false)} className="block text-gray-600">
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Mobile Locations Accordion */}
            <div>
              <button 
                onClick={() => toggleMobileSubmenu('locations')}
                className="flex items-center justify-between w-full font-serif text-2xl text-primary font-bold border-b border-gray-100 pb-2"
              >
                <span>Locations</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileSubmenu === 'locations' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileSubmenu === 'locations' && (
                <ul className="pl-4 mt-2 space-y-3 bg-gray-50 p-4 rounded-md">
                  {locations.map((loc, idx) => (
                    <li key={idx}>
                      <a href={loc.link} onClick={() => setIsMenuOpen(false)} className="block text-gray-600">
                        {loc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="font-serif text-2xl text-primary font-bold border-b border-gray-100 pb-2">Portfolio</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="font-serif text-2xl text-primary font-bold border-b border-gray-100 pb-2">About Us</a>
          </nav>

          {/* Mobile CTA Stack */}
          <div className="mt-auto space-y-3">
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-full bg-primary text-white font-bold py-4 rounded shadow-lg text-lg"
            >
              <Hammer className="w-5 h-5 mr-2" /> Book Consultation
            </a>
            <a 
              href="tel:281-809-6533" 
              className="flex items-center justify-center w-full bg-accent text-white font-bold py-4 rounded shadow-lg text-lg hover:bg-accent-hover transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;