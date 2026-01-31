import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HayahKarima = () => {
    const { t } = useLanguage();

    return (
        <section id="hayah-karima" className="hayah-karima py-16 bg-[#f8f9fa]">
            <div className="section-header text-center mb-12">
                <h2 className="text-[#002147] text-4xl font-bold mb-4">{t("hayah-karima-title")}</h2>
                <p className="text-gray-600 text-lg">{t("hayah-karima-subtitle")}</p>
            </div>
            <div className="hayah-karima-container flex flex-col items-center max-w-6xl mx-auto px-4">
                <div className="hayah-karima-content flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-lg">
                    <div className="hayah-karima-image flex-1">
                        <img src="/assets/HayahKarima.jpg" alt="Hayah Karima Project" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="hayah-karima-text flex-1">
                        <p className="text-gray-600 text-lg leading-relaxed">{t("hayah-karima-description")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HayahKarima;
