
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import ServiceSchema from '../../components/seo/ServiceSchema';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceFAQ from '../../components/services/ServiceFAQ';

const BuildOnYourLot = () => {
    const pageTitle = "Build On Your Lot | Kurk Homes";
    const pageDesc = "Custom homes built on client-owned land across Texas, from planning to final walkthrough.";
    const canonical = "https://kurkhomes.com/services/build-on-your-lot";

    const faqs = [
        {
            question: "Do you help with site evaluation?",
            answer: "Absolutely. We offer free site evaluations to assess soil conditions, topography, and utility access before you build."
        },
        {
            question: "Can I use my own plans?",
            answer: "Yes, we are happy to build from your existing plans or help you modify one of ours to fit your lot perfectly."
        },
        {
            question: "What areas do you serve?",
            answer: "We build on your lot in Tomball, Huntsville, New Braunfels, the Texas Hill Country, and surrounding areas."
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
                serviceName="Build On Your Lot"
                description={pageDesc}
                areaServed={["Tomball", "Huntsville", "New Braunfels", "Texas Hill Country"]}
                image="/images/build-on-your-lot-hero.jpg"
            />

            <ServiceHero
                title="Build On Your Lot"
                subtitle="Your Land, Your Legacy."
                backgroundImage="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop"
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
                                <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop" alt="Build On Your Lot" className="w-full h-auto" />
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
                                Building Where You Belong.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    You have the perfect piece of land; now you need the perfect home. Our "Build On Your Lot" program is designed to take the stress out of remote construction.
                                </p>
                                <p>
                                    We manage the logistics of building on your specific site, whether it's a sprawling ranch or a hill country retreat. We handle the complexities of utilities, site prep, and local regulations so you don't have to.
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

export default BuildOnYourLot;
