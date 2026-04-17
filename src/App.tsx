/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ArticleView from './components/ArticleView';
import { GRID_STORIES } from './constants';
import { Story } from './types';

export default function App() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  useEffect(() => {
    if (selectedStory) {
      document.title = `${selectedStory.headline} | HealBites News`;
    } else {
      document.title = 'HealBites News';
    }
  }, [selectedStory]);

  const handleOpenStory = (story: Story) => {
    setSelectedStory(story);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-[1600px] mx-auto px-4">
        {/* Hero Section (3-column layout) */}
        <HeroSection onOpenStory={handleOpenStory} />

        {/* Newsletter Signup (Wired Style) */}
        <div className="my-12 p-8 border-2 border-wired-black flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <span className="wired-kicker text-page-ink">NEWSLETTER</span>
            <h3 className="font-display text-3xl">Get the best of HealBites in your inbox.</h3>
          </div>
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Email Address"
              className="border-2 border-wired-black border-r-0 px-4 py-3 font-sans text-[16px] flex-grow md:w-64 focus:outline-none"
            />
            <button className="wired-btn-primary bg-wired-black text-paper-white border-l-0">
              SIGN UP
            </button>
          </div>
        </div>
      </main>

      <Footer />

      {selectedStory && (
        <ArticleView 
          story={selectedStory} 
          onClose={() => setSelectedStory(null)} 
        />
      )}
    </div>
  );
}
