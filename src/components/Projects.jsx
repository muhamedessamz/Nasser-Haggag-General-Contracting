import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../utils/projectsData';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const { t, language } = useLanguage();
    const navigate = useNavigate();

    return (
        <section id="projects" className="projects py-20 bg-gray-50">
            <div className="projects-container max-w-7xl mx-auto px-4">
                <div className="section-header text-center mb-16">
                    <h2 className="text-[#002147] text-4xl font-bold mb-4 border-b-4 border-[#ffd700] inline-block pb-2">{t("projects-title")}</h2>
                    <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">{t("projects-subtitle")}</p>
                </div>

                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div key={project.id} className={`project-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer flex flex-col h-full ${index === projectsData.length - 1 && projectsData.length % 3 === 1 ? 'lg:col-start-2' : ''}`} onClick={() => navigate(`/project/${project.id}`)}>
                            <div className="project-image relative h-64 overflow-hidden flex-shrink-0">
                                <img src={project.image} alt={project.title[language]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white border-2 border-[#ffd700] px-6 py-2 rounded-full font-bold tracking-wider hover:bg-[#ffd700] hover:text-[#002147] transition-colors">{language === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
                                </div>
                            </div>
                            <div className="project-info p-6 text-center flex flex-col flex-grow">
                                <h3 className="text-[#002147] text-xl font-bold mb-3 group-hover:text-[#b89b00] transition-colors">{project.title[language]}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">{project.description[language]}</p>
                                <button className="text-[#002147] font-semibold text-sm uppercase tracking-wide border-b-2 border-transparent group-hover:border-[#ffd700] transition-all mt-auto self-center">
                                    {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
