
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  // State to force a re-render of the chat interface when cleared
  const [chatKey, setChatKey] = useState<number>(1);

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

  // Function to clear the chat
  const handleClearChat = () => {
    console.log('Clearing chat from Index component...');
    setChatKey(prevKey => prevKey + 1);
  };

  // Solar-related chat suggestions
  const solarSuggestions = [
    "Tell me about solar panel efficiency",
    "How to calculate solar energy needs for my home?",
    "What are the latest innovations in solar technology?",
    "Compare monocrystalline and polycrystalline solar panels",
    "Solar energy storage solutions explained"
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pb-20 bg-gradient-to-b from-yellow-50 to-white">
      <Navbar onClearChat={handleClearChat} />
      
      <div className="max-w-4xl mx-auto mt-12">
        <div className="text-center mt-12 sm:mt-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-800 opacity-0 animate-on-load">
            SolarBot Assistant
          </h1>
          
          <p className="mt-8 sm:mt-12 text-yellow-700 max-w-2xl mx-auto leading-relaxed text-lg opacity-0 animate-on-load">
            Your AI companion for all things solar - ask questions, get insights, and explore solar energy solutions tailored to your needs.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 max-w-xl mx-auto opacity-0 animate-on-load">
            {solarSuggestions.map((suggestion, index) => (
              <button 
                key={index}
                className="p-3 text-left text-sm bg-white border border-yellow-200 rounded-lg hover:bg-yellow-50 transition-colors text-yellow-800 shadow-sm"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
        
        <ChatInterface key={chatKey} />
      </div>
    </div>
  );
};

export default Index;
