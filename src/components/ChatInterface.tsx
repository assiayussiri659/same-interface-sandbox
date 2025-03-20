
import { useState, useRef, useEffect } from 'react';
import { Paperclip, Mic, Send } from 'lucide-react';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

interface ChatInterfaceProps {
  selectedSuggestion?: string | null;
  onChatActivityChange?: (isActive: boolean) => void;
}

const ChatInterface = ({ selectedSuggestion, onChatActivityChange }: ChatInterfaceProps) => {
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Handle selected suggestion
  useEffect(() => {
    if (selectedSuggestion) {
      setMessage(selectedSuggestion);
    }
  }, [selectedSuggestion]);

  // Notify parent component about chat activity
  useEffect(() => {
    if (onChatActivityChange) {
      onChatActivityChange(chatHistory.length > 0);
    }
  }, [chatHistory, onChatActivityChange]);

  // Scroll to bottom of chat when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      // Create a new user message
      const userMessage: Message = {
        id: Date.now().toString(),
        content: message,
        sender: 'user',
        timestamp: new Date()
      };
      
      // Add user message to chat history
      setChatHistory(prev => [...prev, userMessage]);
      
      // Clear input field
      setMessage('');
      
      // Simulate bot response after a short delay
      setTimeout(() => {
        // Generate mock response for demo
        let botResponse = "";
        
        // Simple response logic based on user query
        if (message.toLowerCase().includes('solar panel') && message.toLowerCase().includes('cloudy')) {
          botResponse = "Solar panels still generate power in cloudy weather, but efficiency drops to ~10-25%. They use diffuse sunlight, and modern panels are designed to capture a wider light spectrum for better performance in less-than-ideal conditions.";
        } else if (message.toLowerCase().includes('efficiency')) {
          botResponse = "Solar panel efficiency typically ranges from 15-22% for residential panels. Monocrystalline panels offer the highest efficiency (18-22%), followed by polycrystalline (15-17%) and thin-film (10-13%). Factors affecting efficiency include panel orientation, shading, temperature, and dust accumulation.";
        } else if (message.toLowerCase().includes('calculate') && message.toLowerCase().includes('home')) {
          botResponse = "To calculate solar energy needs for your home: 1) Check your annual electricity usage in kWh from utility bills, 2) Divide by your area's solar irradiance (sunshine hours/year), 3) Divide by 0.75 to account for system losses, 4) The result is the kW system size needed. For a quick estimate, each kW of solar typically requires 70-100 sq ft of roof space.";
        } else if (message.toLowerCase().includes('innovation')) {
          botResponse = "Recent solar technology innovations include: 1) Bifacial panels that capture light from both sides, 2) Perovskite solar cells that promise higher efficiency at lower costs, 3) Building-integrated photovoltaics (BIPV) that blend seamlessly with architecture, 4) Floating solar farms that use water bodies to save land space, and 5) Solar skin designs that can match roof aesthetics while maintaining efficiency.";
        } else if (message.toLowerCase().includes('monocrystalline') && message.toLowerCase().includes('polycrystalline')) {
          botResponse = "Comparing monocrystalline vs. polycrystalline panels: Monocrystalline panels are more efficient (18-22% vs. 15-17%), have a longer lifespan, perform better in high temperatures, and have a sleek black appearance but cost more. Polycrystalline panels are more affordable, have a blue speckled appearance, require less energy to manufacture, but are slightly less efficient and have a larger footprint for the same output.";
        } else if (message.toLowerCase().includes('storage')) {
          botResponse = "Solar energy storage solutions include: 1) Lithium-ion batteries (most common, high efficiency, compact), 2) Lead-acid batteries (affordable but shorter lifespan), 3) Flow batteries (long duration, good for large systems), 4) Saltwater batteries (environmentally friendly, non-toxic), and 5) Thermal storage systems that store energy as heat. Home battery systems typically range from 5-15kWh capacity and can power essential loads during outages.";
        } else if (message.toLowerCase().includes('solar')) {
          botResponse = "Solar energy is a renewable energy source that converts sunlight into electricity using photovoltaic cells. It's environmentally friendly and becoming increasingly cost-effective with technological advances.";
        } else {
          botResponse = "I'm your solar energy assistant. Feel free to ask me anything about solar panels, renewable energy, or sustainable power solutions!";
        }
        
        // Create bot response
        const botMessage: Message = {
          id: Date.now().toString(),
          content: botResponse,
          sender: 'bot',
          timestamp: new Date()
        };
        
        // Add bot response to chat history
        setChatHistory(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className="mt-4 animate-fade-up">
      {/* Chat messages container */}
      {chatHistory.length > 0 && (
        <div 
          ref={chatContainerRef}
          className="mb-4 max-h-[400px] overflow-y-auto p-4 rounded-lg bg-white border border-yellow-200 shadow-sm"
        >
          {chatHistory.map((msg) => (
            <div 
              key={msg.id} 
              className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
            >
              <div 
                className={`inline-block max-w-[80%] px-4 py-2 rounded-lg ${
                  msg.sender === 'user' 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-gray-100 text-yellow-800 border border-yellow-100'
                }`}
              >
                <p className="text-sm sm:text-base">{msg.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Chat input form */}
      <form onSubmit={handleSubmit} className="relative">
        <div 
          className={`flex items-center w-full rounded-full border border-yellow-200 bg-white px-4 py-2 shadow-sm ${isFocused ? 'ring-2 ring-yellow-400/20' : ''}`}
          style={{
            transform: isFocused ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.3s ease-in-out'
          }}
        >
          <div className="flex-none">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-yellow-600 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Ask about solar energy..."
            className="flex-1 outline-none bg-transparent text-slate-700 placeholder:text-slate-400 mx-2"
          />
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-yellow-600 transition-colors"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-yellow-600 transition-colors"
            >
              <Mic className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className={`w-8 h-8 rounded-full flex items-center justify-center ${message.trim() ? 'bg-yellow-500 text-white' : 'bg-slate-100 text-slate-400'} transition-all duration-300 hover:shadow-md`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
