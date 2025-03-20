
import { useState, useRef, useEffect } from 'react';
import { Paperclip, Mic, Send } from 'lucide-react';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

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
    <div className="mt-8 animate-fade-up">
      {/* Chat messages container */}
      {chatHistory.length > 0 && (
        <div 
          ref={chatContainerRef}
          className="mb-4 max-h-96 overflow-y-auto p-4 rounded-lg bg-white border border-yellow-200 shadow-sm"
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
          className={`chat-input ${isFocused ? 'ring-2 ring-yellow-400/20' : ''}`}
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
            className="flex-1 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
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
