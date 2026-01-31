import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Location = () => {
    const { t } = useLanguage();

    return (
        <section id="location" className="location py-16 bg-[#f5f5f5]">
            <div className="section-header text-center mb-12">
                <h2 className="text-[#002147] text-4xl font-bold mb-4">{t("location-title")}</h2>
                <p className="text-gray-600 text-lg">{t("location-subtitle")}</p>
            </div>
            <div className="map-container max-w-6xl mx-auto px-4 h-[450px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1795712228654!2d31.497696376889752!3d30.598338981669324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f1024488e49b%3A0x6e7584ef9eb0bcd8!2z2YXZg9iq2Kgg2YbYp9i12LEg2K3Yrdin2Kwg2YTZhNmF2YLYp9mI2YTYp9iq!5e0!3m2!1sen!2seg!4v1709764010974!5m2!1sen!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                >
                </iframe>
            </div>
        </section>
    );
};

export default Location;
