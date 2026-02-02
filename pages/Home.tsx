import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, Map, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { ServiceItem, PortfolioItem, FaqItem } from '../types';

// SOP-06: The Strategy "The Trust Ladder"

const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Section 2 Data: Service Segmentation
  const services: ServiceItem[] = [
    {
      title: "Custom Home Design & Build",
      description: "From blank canvas to dream home. We handle every detail of the architecture and construction.",
      link: "#custom",
    },
    {
      title: "Build On Your Lot",
      description: "You own the land; we bring the expertise. Serving Tomball, Huntsville, and the Hill Country.",
      link: "#boyl",
    },
    {
      title: "Model Homes & Design Center",
      description: "Walk through our craftsmanship and select your finishes with our in-house design team.",
      link: "#models",
    }
  ];

  // Section 4 Data: Visual Proof
  const portfolio: PortfolioItem[] = [
    { 
      id: 1, 
      title: "The Modern Farmhouse", 
      location: "Texas Hill Country", 
      imageUrl: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      title: "Tomball Estate", 
      location: "Tomball, TX", 
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      title: "Lakeside Retreat", 
      location: "Huntsville, TX", 
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
    },
  ];

  // Section 6 Data: Local SEO FAQ
  const faqs: FaqItem[] = [
    {
      question: "How much does it cost to build a custom home in Tomball?",
      answer: "Custom home costs vary by finish level and site conditions, typically ranging from $180 to $300+ per square foot. We offer a free feasibility study to provide a detailed estimate for your specific lot."
    },
    {
      question: "Do I need to own land before contacting you?",
      answer: "Not necessarily. While many clients come to us with land, our 'Build On Your Lot' experts can assist you in evaluating potential properties to ensure they meet construction requirements."
    },
    {
      question: "What is the typical timeline for a custom build?",
      answer: "On average, our process takes 8-12 months from foundation to move-in, depending on complexity and weather. Our structured 20-year structural warranty ensures quality isn't rushed."
    },
    {
      question: "Where do you build in Texas?",
      answer: "We actively serve Tomball, Huntsville, New Braunfels, Magnolia, and the broader Texas Hill Country region."
    }
  ];

  return (
    <div className="flex flex-col">
      
      {/* Section 1: The Authority Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            // White luxury ranch on the hill
            backgroundImage: 'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop")' 
          }}
        >
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block border-b-2 border-accent mb-4 pb-1">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Southern Living Custom Builder</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Premier Custom Home Builder in <br />
            <span className="text-accent italic">Texas Hill Country & Tomball</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
            Building 20-Year Structural Warranty homes on your lot since 1989. Experience the tradition of quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded shadow-lg transition-all transform hover:-translate-y-1 text-lg">
              Start Feasibility Study
            </a>
            <a href="#portfolio" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded transition-all text-lg">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Service Segmentation */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">How Do You Want to Build?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Whether you have a lot ready to go or need full design services, we have a pathway for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-accent group">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <ArrowRight className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href={service.link} className="text-accent font-bold flex items-center hover:text-primary transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The "Anxiety Reduction" Layer (Process) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">The Kurk Homes Standard</h2>
              <p className="text-lg text-gray-600 mb-8">
                Building a custom home shouldn't be a mystery. Our Guardian Inspection Program ensures every home meets rigorous standards before you ever get the keys.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-primary">20-Year Structural Warranty</h4>
                    <p className="text-gray-600">Double the industry standard because we believe in our foundations.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-primary">Guardian Inspection Program</h4>
                    <p className="text-gray-600">Third-party inspections at critical stages to ensure code compliance and quality.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <DollarSign className="w-6 h-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-primary">Transparent Pricing</h4>
                    <p className="text-gray-600">Detailed line-item budgeting so you know exactly where your investment goes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop" 
                alt="Kurk Homes Luxury Ranch at Night" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded shadow-lg hidden md:block">
                <p className="text-white font-serif text-3xl font-bold">100%</p>
                <p className="text-white text-sm uppercase tracking-wider">Energy Star Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Visual Proof (Portfolio) */}
      <section className="py-20 bg-gray-900 text-white" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-accent uppercase tracking-widest text-sm font-bold">Our Work</span>
              <h2 className="font-serif text-4xl font-bold mt-2">Designed for Life. Built for Generations.</h2>
            </div>
            <a href="#portfolio-full" className="hidden md:inline-flex items-center text-white border-b border-accent pb-1 hover:text-accent transition-colors">
              View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-sm font-bold uppercase mb-1">{item.location}</span>
                  <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <a href="#portfolio-full" className="inline-block bg-transparent border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-primary transition-colors">
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: The "Safe Bet" Signals */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12">Built on Tradition Since 1989</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-70">
            {/* Logos represented as text placeholders for this demo, usually images */}
            <div className="flex flex-col items-center">
              <div className="font-serif font-bold text-xl text-primary mb-2">Southern Living</div>
              <span className="text-xs uppercase tracking-wide text-gray-600">Custom Builder Member</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-serif font-bold text-xl text-primary mb-2">BBB</div>
              <span className="text-xs uppercase tracking-wide text-gray-600">Pinnacle Award Winner</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-serif font-bold text-xl text-primary mb-2">NAHB</div>
              <span className="text-xs uppercase tracking-wide text-gray-600">Certified Graduate Builder</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-serif font-bold text-xl text-primary mb-2">Houzz</div>
              <span className="text-xs uppercase tracking-wide text-gray-600">Best of Design 2024</span>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto relative">
            <div className="text-6xl text-accent absolute top-4 left-4 font-serif">"</div>
            <p className="text-lg md:text-xl text-gray-600 italic mb-6 relative z-10">
              "Building our retirement home with Kurk Homes was seamless. They helped us find the perfect lot in New Braunfels and the design process was incredibly detailed. The quality is evident in every corner."
            </p>
            <div className="flex items-center justify-center">
              <div className="text-left">
                <div className="font-bold text-primary">The Henderson Family</div>
                <div className="text-sm text-gray-500">New Braunfels, TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Local SEO Data Layer (FAQ) */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Common Questions About Building in Texas</h2>
            <p className="text-gray-600">Get answers about costs, timelines, and land requirements.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-primary text-lg pr-4">{faq.question}</span>
                  {openFaqIndex === index ? <ChevronUp className="w-5 h-5 text-accent" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {openFaqIndex === index && (
                  <div className="p-6 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Final Conversion Point */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Legacy?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Download our Custom Home Planning Checklist or schedule your free feasibility study today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded shadow-lg text-lg transition-transform transform hover:-translate-y-1">
              Start Feasibility Study
            </a>
            <a href="#download" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-10 rounded text-lg transition-colors">
              Download Checklist
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;