import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t, language } = useLanguage();

    return (
        <section id="contact" className="contact py-24 bg-white">
            <div className="section-header text-center mb-12">
                <h2 className="text-[#002147] text-4xl font-bold mb-4">{t("contact-title")}</h2>
                <p className="text-gray-600 text-lg">{t("contact-subtitle")}</p>
            </div>
            <div className="contact-container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                <div className="contact-info flex flex-col gap-8 order-2 md:order-1">
                    {[
                        { icon: FaPhone, title: t("phone"), content: "+20 114 917 1109", link: "tel:+201149171109" },
                        { icon: FaWhatsapp, title: t("whatsapp"), content: "+20 106 001 1509", link: "https://wa.me/201060011509" },
                        { icon: FaEnvelope, title: t("email"), content: "nasserhaggag65@gmail.com", link: "mailto:nasserhaggag65@gmail.com" },
                        { icon: FaClock, title: t("working-hours"), content: t("working-hours-value"), link: null }
                    ].map((item, index) => (
                        <div key={index} className="info-item flex items-center gap-6 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                            <div className="bg-[#e6ecf2] p-4 rounded-full text-[#002147]">
                                <item.icon size={24} />
                            </div>
                            <div>
                                <h3 className="text-[#002147] font-bold text-lg mb-1">{item.title}</h3>
                                {item.link ? (
                                    <a href={item.link} className="text-gray-600 hover:text-[#002147] transition-colors" dir="ltr">{item.content}</a>
                                ) : (
                                    <p className="text-gray-600">{item.content}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="contact-form order-1 md:order-2 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                    <form className="flex flex-col gap-6">
                        <div className="form-group">
                            <input type="text" placeholder={t("your-name")} required className="w-full p-4 border border-gray-300 rounded focus:border-[#002147] focus:outline-none transition-colors" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder={t("your-email")} required className="w-full p-4 border border-gray-300 rounded focus:border-[#002147] focus:outline-none transition-colors" />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder={t("your-phone")} className={`w-full p-4 border border-gray-300 rounded focus:border-[#002147] focus:outline-none transition-colors ${language === 'ar' ? 'text-right' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'} />
                        </div>
                        <div className="form-group">
                            <textarea placeholder={t("your-message")} required className="w-full p-4 border border-gray-300 rounded focus:border-[#002147] focus:outline-none transition-colors h-32 resize-none"></textarea>
                        </div>
                        <button type="submit" className="submit-btn bg-[#002147] text-white py-4 rounded font-bold hover:bg-[#003a7a] transition-all hover:-translate-y-1">{t("send-message")}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
