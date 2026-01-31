import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = React.useState(null);
    const priorityIndices = [21, 20, 17, 18, 19];
    const totalImages = 21;

    // Create the full list ensuring priority images are first
    const images = [
        ...priorityIndices.map(i => `/assets/g${i}.jpg`),
        ...Array.from({ length: totalImages }, (_, i) => i + 1)
            .filter(i => !priorityIndices.includes(i))
            .map(i => `/assets/g${i}.jpg`)
    ];

    const openLightbox = (img) => setSelectedImage(img);
    const closeLightbox = () => setSelectedImage(null);

    return (
        <section id="gallery" className="gallery py-24 bg-white">
            <div className="section-header text-center mb-12">
                <h2 className="text-[#002147] text-4xl font-bold mb-4">{t("gallery-title")}</h2>
                <p className="text-gray-600 text-lg">{t("gallery-subtitle")}</p>
            </div>
            <div className="gallery-container relative group">
                {/* Horizontal Scroll Container */}
                <div className="flex gap-4 overflow-x-auto pb-8 px-4 scrollbar-hide snap-x snap-mandatory">
                    {images.map((img, index) => (
                        <div key={index} onClick={() => openLightbox(img)} className="min-w-[300px] md:min-w-[400px] h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-lg flex-shrink-0 snap-center relative cursor-pointer hover:shadow-2xl transition-all duration-300">
                            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <span className="text-white bg-[#002147]/80 px-4 py-2 rounded-full backdrop-blur-sm border border-[#ffd700] text-sm font-bold tracking-wider">
                                    Nasser Haggag Construction
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Hints */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <svg className="w-6 h-6 text-[#002147]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <svg className="w-6 h-6 text-[#002147]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={closeLightbox}>
                    <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
                        <button onClick={closeLightbox} className="absolute -top-12 right-0 text-white hover:text-[#ffd700] transition-colors">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <img src={selectedImage} alt="Full view" className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl border-2 border-[#002147]" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
