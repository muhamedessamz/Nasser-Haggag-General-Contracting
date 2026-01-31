import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../utils/projectsData';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import * as FaIcons from 'react-icons/fa';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { language, t } = useLanguage();
    const project = projectsData.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <div className="h-screen flex items-center justify-center">Project not found</div>;
    }

    const getIcon = (iconName) => {
        const IconComponent = FaIcons[iconName];
        return IconComponent ? <IconComponent /> : <FaIcons.FaCircle />;
    };

    const isRTL = language === 'ar';

    const [selectedImage, setSelectedImage] = React.useState(null);

    return (
        <div className={`project-details bg-gray-50 min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            <NavBar />

            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden mb-8">
                <img src={project.image} alt={project.title[language]} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%] max-w-4xl px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{project.title[language]}</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Intro */}
                <div className="bg-white rounded-xl shadow-md p-8 mb-12">
                    <h2 className="text-[#002147] text-3xl font-bold mb-6 border-b pb-4">{t("project-overview") || (language === 'ar' ? "نبذة عن المشروع" : "Project Overview")}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">{project.intro[language]}</p>
                </div>

                {/* Steps */}
                {project.steps && (
                    <div className="mb-12">
                        <h3 className="text-[#002147] text-2xl font-bold mb-8 text-center">{t("project-steps") || (language === 'ar' ? "مراحل تنفيذ المشروع" : "Project Execution Phases")}</h3>
                        <div className="space-y-8">
                            {project.steps.map((step, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-[#002147] text-xl font-bold mb-6 flex items-center gap-3">
                                        <span className="text-[#ffd700] text-2xl">{getIcon(step.icon)}</span>
                                        {step.title[language]}
                                    </h4>
                                    <ul className="space-y-4">
                                        {step.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                                                <FaIcons.FaAngleLeft className={`text-[#002147] ${isRTL ? '' : 'rotate-180'}`} />
                                                {typeof item === 'object' ? item[language] : item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Specs */}
                {project.specs && (
                    <div className="bg-[#f8f9fa] rounded-xl p-8 mb-12">
                        <h3 className="text-[#002147] text-2xl font-bold mb-8 flex items-center gap-3">
                            <FaIcons.FaCogs className="text-[#ffd700]" />
                            {language === 'ar' ? "المواصفات الفنية للمشروع" : "Technical Specifications"}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {project.specs.map((spec, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:-translate-y-1 transition-transform">
                                    <h4 className="text-[#002147] text-lg font-bold mb-3">{spec.title[language]}</h4>
                                    <p className="text-gray-600">{spec.desc[language]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Details Grid */}
                {project.details && (
                    <div className="mb-12">
                        <h3 className="text-[#002147] text-2xl font-bold mb-8 flex items-center gap-3">
                            <FaIcons.FaInfoCircle className="text-[#ffd700]" />
                            {language === 'ar' ? "تفاصيل إضافية عن المشروع" : "Additional Project Details"}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.details.map((detail, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#002147]">
                                    <h4 className="text-[#002147] text-xl font-bold mb-4 flex items-center gap-3">
                                        <span className="text-[#ffd700]">{getIcon(detail.icon)}</span>
                                        {detail.title[language]}
                                    </h4>
                                    <ul className="space-y-3">
                                        {detail.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#002147]"></div>
                                                {typeof item === 'object' ? item[language] : item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gallery */}
                <div className="bg-gray-100 rounded-xl p-8 relative group">
                    <h3 className="text-[#002147] text-2xl font-bold mb-8 text-center">{language === 'ar' ? "صور المشروع" : "Project Gallery"}</h3>

                    <div className="relative">
                        <button
                            onClick={() => {
                                const container = document.getElementById('project-gallery-scroll');
                                container.scrollBy({ left: language === 'ar' ? 300 : -300, behavior: 'smooth' });
                            }}
                            className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-[#ffd700] hover:text-[#002147] transition-all duration-300 opacity-0 group-hover:opacity-100 text-[#002147]"
                        >
                            <FaIcons.FaChevronLeft size={20} />
                        </button>

                        <div id="project-gallery-scroll" className="flex gap-4 overflow-x-auto pb-6 px-2 scrollbar-hide snap-x snap-mandatory">
                            {project.gallery.map((img, index) => (
                                <div key={index} onClick={() => setSelectedImage(img)} className="min-w-[300px] h-64 flex-shrink-0 snap-center rounded-lg overflow-hidden shadow-lg cursor-pointer group/img relative">
                                    <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-500 group-hover/img:scale-110" />
                                    <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors duration-300"></div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                const container = document.getElementById('project-gallery-scroll');
                                container.scrollBy({ left: language === 'ar' ? -300 : 300, behavior: 'smooth' });
                            }}
                            className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-[#ffd700] hover:text-[#002147] transition-all duration-300 opacity-0 group-hover:opacity-100 text-[#002147]"
                        >
                            <FaIcons.FaChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white hover:text-[#ffd700] transition-colors">
                            <FaIcons.FaTimes size={30} />
                        </button>
                        <img src={selectedImage} alt="Full view" className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl border-2 border-[#002147]" />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default ProjectDetails;
