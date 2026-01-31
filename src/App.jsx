import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import { LanguageProvider } from './context/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
        </LanguageProvider>
    );
}

export default App;
