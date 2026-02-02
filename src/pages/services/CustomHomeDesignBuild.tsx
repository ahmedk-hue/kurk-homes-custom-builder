
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import ServiceSchema from '../../components/seo/ServiceSchema';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceFAQ from '../../components/services/ServiceFAQ';

const CustomHomeDesignBuild = () => {
    const pageTitle = "Custom Home Design & Build | Kurk Homes";
    const pageDesc = "Fully custom homes designed and built from the ground up with a personalized, hands-on process.";
    const canonical = "https://kurkhomes.com/services/custom-home-design-build";

    const faqs = [
        {
            question: "How long does the custom home building process take?",
            answer: "Typically, the process takes 10-14 months from design to move-in, depending on the complexity of the home and site conditions."
        },
        {
            question: "Do you have in-house architects?",
            answer: "Yes, we have a dedicated team of designers and architects to help bring your vision to life, or we can work with your existing plans."
        },
        {
            question: "What is your warranty?",
            answer: "We offer a comprehensive 2-10 Home Buyers Warranty, covering 2 years on systems and 10 years on structural elements."
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
                serviceName="Custom Home Design & Build"
                description={pageDesc}
                areaServed={["Tomball", "Huntsville", "New Braunfels", "Texas Hill Country"]}
                image="/images/custom-home-hero.jpg"
            />

            <ServiceHero
                title="Custom Home Design & Build"
                subtitle="Your Vision, Our Craftsmanship."
                backgroundImage="https://images.unsplash.com/photo-1600596542815-e32c21216f95?q=80&w=2072&auto=format&fit=crop"
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
                                <img src="https://images.unsplash.com/photo-1600596542815-e32c21216f95?q=80&w=2072&auto=format&fit=crop" alt="Custom Home Design" className="w-full h-auto" />
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
                                Designed Around You.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    At Kurk Homes, we believe your home should be a reflection of your unique lifestyle. Our "Custom Home Design & Build" service offers a complete, end-to-end solution where we handle everything from the initial sketch to the final nail.
                                </p>
                                <p>
                                    Whether you have a specific architectural style in mind or need guidance finding it, our team works closely with you to ensure every detail meets our high standards of quality and Southern Living certification.
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

export default CustomHomeDesignBuild;
