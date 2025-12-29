import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ArtworkDetailPage from './pages/ArtworkDetailPage';
import BioPage from './pages/BioPage';
import ContactPage from './pages/ContactPage';
import NotFound from './components/NotFound';
import { loadData } from './utils/dataLoader';
import { ArtworkData } from './types';

const App: React.FC = () => {
  const data: ArtworkData = useMemo(() => loadData(), []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/gallery" element={<GalleryPage data={data} />} />
          <Route path="/artwork/:id" element={<ArtworkDetailPage data={data} />} />
          <Route path="/bio" element={<BioPage data={data} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
