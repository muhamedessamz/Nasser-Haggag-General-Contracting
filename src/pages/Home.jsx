import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import HayahKarima from '../components/HayahKarima';
import Partners from '../components/Partners';
import Location from '../components/Location';
import Contact from '../components/Contact';



const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                // Add a small delay to ensure DOM is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            // Clear state to prevent scrolling on subsequent renders (optional but good practice)
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Gallery />
            <HayahKarima />
            <Partners />
            <Location />
            <Contact />
        </>
    );
};

export default Home;
