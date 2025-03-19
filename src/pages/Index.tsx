
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import VideoPreview from '../components/VideoPreview';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  // Animate elements on page load with staggered timing
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-up');
          el.classList.remove('opacity-0');
        }, 100 * index);
      });
    };

    animateElements();
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Templates', href: '/templates' },
    { label: 'General', href: '/templates/general' },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pb-20">
      <Navbar />
      
      <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
        <Breadcrumbs 
          items={breadcrumbItems} 
          currentPage="ZenoChat - Your Personal Companion" 
        />
        
        <div className="text-center mt-12 sm:mt-16">
          <h1 className="text-4xl sm:text-5xl font-bold heading-gradient opacity-0 animate-on-load">
            Fully Customizable AI Companion
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold heading-gradient mt-2 opacity-0 animate-on-load">
            - Anytime You need.
          </h2>
          
          <div className="mt-8 sm:mt-12 flex justify-center opacity-0 animate-on-load">
            <VideoPreview 
              title="How To Use ZenoChat Effectively?" 
              duration="(2:51)" 
            />
          </div>
          
          <p className="mt-8 sm:mt-12 text-slate-700 max-w-2xl mx-auto leading-relaxed text-lg opacity-0 animate-on-load">
            Tailor ZenoChat to your unique style and needs — meticulously crafted from your unique
            inputs and style to revolutionize the way you create, communicate and collaborate.
          </p>
        </div>
        
        <ChatInterface />
      </div>
    </div>
  );
};

export default Index;
