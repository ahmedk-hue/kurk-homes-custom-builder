
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import ServiceSchema from '../../components/seo/ServiceSchema';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceFAQ from '../../components/services/ServiceFAQ';

const DesignCenterSelections = () => {
    const pageTitle = "Design Center & Selections | Kurk Homes";
    const pageDesc = "In-house design guidance to help clients select finishes, layouts, and details with confidence.";
    const canonical = "https://kurkhomes.com/services/design-center-selections";

    const faqs = [
        {
            question: "Do I have to visit the design center?",
            answer: "We highly recommend it! Seeing materials in person ensures you get exactly the look and feel you want for your new home."
        },
        {
            question: "Do you have designers to help me?",
            answer: "Yes, our professional interior designers will guide you through every step of the selection process, from flooring to fixtures."
        },
        {
            question: "Can I bring my own ideas?",
            answer: "Of course. We encourage you to bring Pinterest boards, magazine clippings, or photos to help us understand your style."
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
                serviceName="Design Center & Selections"
                description={pageDesc}
                areaServed={["Tomball", "Huntsville", "New Braunfels", "Texas Hill Country"]}
                image="/images/design-center-hero.jpg"
            />

            <ServiceHero
                title="Design Center & Selections"
                subtitle="Experience Your Future Home."
                backgroundImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
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
                                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" alt="Design Center" className="w-full h-auto" />
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
                                Curated for You.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    Making selections for a custom home can be overwhelming. At Kurk Homes, we simplify the process with our state-of-the-art Design Centers.
                                </p>
                                <p>
                                    Our in-house design team provides expert guidance to help you select specific finishes, layouts, and details with confidence. We ensure every element coordinates perfectly to create a cohesive and stunning aesthetic.
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

export default DesignCenterSelections;
