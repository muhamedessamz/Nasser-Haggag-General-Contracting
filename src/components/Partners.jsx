import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Partners = () => {
    const { t } = useLanguage();

    return (
        <section id="partners" className="partners py-16 bg-white">
            <div className="section-header text-center mb-12">
                <h2 className="text-[#002147] text-4xl font-bold mb-4">{t("partners-title")}</h2>
                <p className="text-gray-600 text-lg">{t("partners-subtitle")}</p>
            </div>
            <div className="partners-container flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
                {['logo1.jpg', 'logo2.jpg', 'logo3.jpg'].map((logo, index) => (
                    <div key={index} className="partner-logo w-48 h-32 flex items-center justify-center transition-all duration-300 hover:scale-110">
                        <img src={`/assets/${logo}`} alt={`Partner ${index + 1}`} className="max-w-full max-h-full object-contain" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
