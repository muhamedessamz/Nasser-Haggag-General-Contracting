import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    const { t } = useLanguage();

    return (
        <section className="about py-16 bg-[#f5f5f5]" id="about">
            <div className="about-container flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto px-4">
                <div className="about-image w-full md:w-1/2">
                    <img src="/assets/building-construction-with-crane-foreground-building-construction-with-sunset-background-scaled.webp" alt="Construction Site" className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="about-content text-start w-full md:w-1/2">
                    <h2 className="text-[#002147] text-4xl font-bold mb-8 relative inline-block after:content-[''] after:block after:w-1/2 after:h-1 after:bg-[#ffd700] after:mt-2">{t("about-title")}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{t("about-p1")}</p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{t("about-p2")}</p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{t("about-p3")}</p>

                    <div className="achievements grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {[
                            { text: t("experience") },
                            { text: t("projects-completed") },
                            { text: t("team") },
                            { text: t("quality") },
                            { text: t("established") }
                        ].map((item, index) => (
                            <div key={index} className="achievement-item flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                <FaCheckCircle className="text-[#ffd700] text-xl min-w-[20px]" />
                                <span className="text-[#002147] font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
