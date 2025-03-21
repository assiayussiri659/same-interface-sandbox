
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface NavbarProps {
  onClearChat?: () => void;
}

const Navbar = ({ onClearChat }: NavbarProps = {}) => {
  const { toast } = useToast();

  const handleClearChat = () => {
    if (onClearChat) {
      onClearChat();
      toast({
        title: "Chat cleared",
        description: "All messages have been removed",
        duration: 2000,
      });
    }
    console.log('Clearing chat...');
  };

  return (
    <nav className="glass-morphism w-full py-3 px-6 rounded-full animate-fade-in mx-auto max-w-7xl mt-4 mb-2 bg-amber-400 border-amber-300">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 logo-shine">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="white"/>
            </svg>
          </div>
          <span className="font-bold text-lg text-amber-900">SolarBot</span>
        </Link>
        
        <button 
          onClick={handleClearChat}
          className="p-2 rounded-full hover:bg-amber-300 transition-colors duration-200"
          aria-label="Clear chat"
        >
          <Trash2 className="w-5 h-5 text-amber-900" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
