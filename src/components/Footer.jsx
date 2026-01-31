import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#002147] text-white py-12">
            <div className="footer-container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="footer-col">
                    <h3 className="text-[#ffd700] text-xl font-bold mb-4">{t("company-name")}</h3>
                    <p className="text-gray-300 mb-4">{t("footer-tagline")}</p>
                </div>
                <div className="footer-col">
                    <h3 className="text-[#ffd700] text-xl font-bold mb-4">{t("quick-links")}</h3>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#home" className="text-gray-300 hover:text-[#ffd700] transition-colors">{t("home")}</a></li>
                        <li><a href="#about" className="text-gray-300 hover:text-[#ffd700] transition-colors">{t("about")}</a></li>
                        <li><a href="#projects" className="text-gray-300 hover:text-[#ffd700] transition-colors">{t("projects")}</a></li>
                        <li><a href="#contact" className="text-gray-300 hover:text-[#ffd700] transition-colors">{t("contact")}</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3 className="text-[#ffd700] text-xl font-bold mb-4">{t("follow-us")}</h3>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61570419265139" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#ffd700]"><FaFacebook size={20} /></a>
                        <a href="https://www.instagram.com/nasserhaggagcompany" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#ffd700]"><FaInstagram size={20} /></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h3 className="text-[#ffd700] text-xl font-bold mb-4">{t("contact")}</h3>
                    <p className="text-gray-300 mb-2">Sharqia, Egypt</p>
                    <p className="text-gray-300 mb-2">+20 114 917 1109</p>
                    <p className="text-gray-300">nasserhaggag65@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom text-center border-t border-gray-700 mt-8 pt-8 text-gray-400">
                <p>&copy; {new Date().getFullYear()} {t("company-rights")}</p>
                <div className="flex justify-center items-center gap-2 mt-2">
                    <p className='text-sm'>{t("developed-by")} <a href="https://www.linkedin.com/in/muhamedessamz" target="_blank" rel="noreferrer" className='text-[#ffd700] hover:underline'>{t("developer-name")}</a></p>
                    <div className="flex gap-2 ml-2">
                        <a href="https://www.linkedin.com/in/muhamedessamz" target="_blank" rel="noreferrer" className="hover:text-[#ffd700]"><FaLinkedin /></a>
                        <a href="https://wa.me/201112342572" target="_blank" rel="noreferrer" className="hover:text-[#ffd700]"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
