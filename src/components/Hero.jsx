import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="hero-bg h-screen flex flex-col justify-center items-center text-center text-white relative bg-cover bg-center bg-fixed bg-no-repeat px-4">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 drop-shadow-xl leading-tight opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                    {t("hero-title")}
                </h1>
                <p className="text-xl md:text-2xl mb-14 text-gray-200 font-light tracking-wide max-w-2xl mx-auto opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    {t("hero-subtitle")}
                </p>
                <button className="bg-[#ffd700] text-[#002147] px-12 py-4 text-lg md:text-xl font-bold rounded-full hover:bg-transparent hover:text-[#ffd700] border-2 border-[#ffd700] transition-all duration-300 uppercase tracking-wider transform hover:-translate-y-1 shadow-lg opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    {t("cta-button")}
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
                <a href="#about" aria-label="Scroll Down">
                    <svg className="w-8 h-8 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;
