import React, { useState, useEffect } from 'react';
import { FaHardHat, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (e, item) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname === '/') {
            const element = document.getElementById(item);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { scrollTo: item } });
        }
    };

    return (
        <header>
            <nav className={`flex items-center justify-between px-8 text-white fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#002147]/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
                <div className="flex items-center gap-2 text-2xl font-bold cursor-pointer" onClick={() => {
                    if (location.pathname === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        navigate('/');
                    }
                }}>
                    <FaHardHat className={`text-[#ffd700] text-3xl transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`} />
                    <span className="tracking-wide">{t("logo-text")}</span>
                </div>

                <ul className={`md:flex gap-8 items-center ${isOpen ? 'flex flex-col absolute top-full left-0 w-full bg-[#002147] p-6 text-center shadow-xl border-t border-[#ffffff10]' : 'hidden'}`}>
                    {['home', 'about', 'projects', 'gallery', 'location', 'contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                className="relative text-lg font-medium hover:text-[#ffd700] transition-colors group cursor-pointer"
                                onClick={(e) => handleNavClick(e, item)}
                            >
                                {t(item)}
                                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#ffd700] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}

                    <li className="relative group cursor-pointer" onClick={() => toggleLanguage(language === 'en' ? 'ar' : 'en')}>
                        <button className="flex items-center gap-2 border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 hover:border-[#ffd700] hover:text-[#ffd700] transition-all duration-300">
                            <FaGlobe />
                            <span className="uppercase text-sm font-bold tracking-wider">{language === 'en' ? 'Arabic' : 'English'}</span>
                        </button>
                    </li>
                </ul>

                <div className="md:hidden flex flex-col gap-1 cursor-pointer text-[#ffd700]" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
