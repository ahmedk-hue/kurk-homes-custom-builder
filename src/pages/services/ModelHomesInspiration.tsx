
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import ServiceSchema from '../../components/seo/ServiceSchema';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceFAQ from '../../components/services/ServiceFAQ';

const ModelHomesInspiration = () => {
    const pageTitle = "Model Homes & Inspiration | Kurk Homes";
    const pageDesc = "Tour completed and model homes to experience Kurk Homes craftsmanship firsthand.";
    const canonical = "https://kurkhomes.com/services/model-homes-inspiration";

    const faqs = [
        {
            question: "Where are your model homes located?",
            answer: "We have model homes in Tomball and New Braunfels. Check our Locations page for specific addresses and hours."
        },
        {
            question: "Do I need an appointment?",
            answer: "Walk-ins are welcome during business hours, but we recommend scheduling an appointment to ensure a dedicated team member is available to answer your questions."
        },
        {
            question: "Can I buy a model home?",
            answer: "Occasionally our model homes are for sale, but primarily they serve as inspiration for your own custom build."
        }
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description={pageDesc}
                canonical={canonical}
            />

            <ServiceSchema
                serviceName="Model Homes & Inspiration"
                description={pageDesc}
                areaServed={["Tomball", "Huntsville", "New Braunfels", "Texas Hill Country"]}
                image="/images/model-home-hero.jpg"
            />

            <ServiceHero
                title="Model Homes & Inspiration"
                subtitle="Walk Through Quality."
                backgroundImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
                primaryCtaText="Start Information Request"
                secondaryCtaText="Download Cost Guide"
                secondaryCtaLink="/resources/cost-guide-optin"
            />

            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop" alt="Model Home" className="w-full h-auto" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full z-0 blur-2xl"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2"
                        >
                            <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-4">Overview</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                                See the Difference.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    Pictures can only say so much. To truly understand the Kurk Homes difference, you need to walk through our doors.
                                </p>
                                <p>
                                    Our model homes are designed to inspire. Explore open floor plans, exceptional craftsmanship, and the latest design trends. It's the best way to visualize the possibilities for your own dream home.
                                </p>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <RouterLink to="/contact" className="px-8 py-4 bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary-light transition-colors duration-300">
                                    Get Started
                                </RouterLink>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} />

            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-6">Ready to discuss your project?</h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-10">
                        Our team is ready to answer your questions and help you navigate the process.
                    </p>
                    <RouterLink to="/contact" className="inline-block bg-accent hover:bg-accent-light text-white px-10 py-5 rounded-sm uppercase tracking-widest text-sm font-bold transition-all duration-300">
                        Contact Us
                    </RouterLink>
                </div>
            </section>
        </>
    );
};

export default ModelHomesInspiration;
