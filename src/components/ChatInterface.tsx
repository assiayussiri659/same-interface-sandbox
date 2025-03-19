
import { useState } from 'react';
import { Paperclip, Mic, Send } from 'lucide-react';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 animate-fade-up">
      <form onSubmit={handleSubmit} className="relative">
        <div 
          className={`chat-input ${isFocused ? 'ring-2 ring-brand-purple/20' : ''}`}
          style={{
            transform: isFocused ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.3s ease-in-out'
          }}
        >
          <div className="flex-none">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-brand-purple transition-colors"
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
            placeholder="Tell me what you want to do"
            className="flex-1 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
          />
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-brand-purple transition-colors"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-brand-purple transition-colors"
            >
              <Mic className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className={`w-8 h-8 rounded-full flex items-center justify-center ${message.trim() ? 'bg-brand-purple text-white' : 'bg-slate-100 text-slate-400'} transition-all duration-300 hover:shadow-md`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-6">
        <button className="text-slate-500 hover:text-slate-700 transition-colors text-sm flex items-center space-x-1">
          <span>Show chat settings</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
