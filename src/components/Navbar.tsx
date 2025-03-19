
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Zap } from 'lucide-react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState({
    products: false,
    work: false,
    education: false,
    resources: false,
  });

  return (
    <nav className="glass-morphism w-full py-4 px-6 rounded-full animate-fade-in mx-auto max-w-7xl mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2 logo-shine">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="white"/>
              </svg>
            </div>
            <span className="font-bold text-lg">text.cortex</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered({...isHovered, products: true})}
              onMouseLeave={() => setIsHovered({...isHovered, products: false})}
            >
              <button className="nav-link flex items-center">
                Products
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isHovered.products ? 'rotate-180' : ''}`} />
              </button>
              {isHovered.products && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-10 animate-fade-in">
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Product 1</Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Product 2</Link>
                </div>
              )}
            </div>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered({...isHovered, work: true})}
              onMouseLeave={() => setIsHovered({...isHovered, work: false})}
            >
              <button className="nav-link flex items-center">
                Work
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isHovered.work ? 'rotate-180' : ''}`} />
              </button>
              {isHovered.work && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-10 animate-fade-in">
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Work 1</Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Work 2</Link>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered({...isHovered, education: true})}
              onMouseLeave={() => setIsHovered({...isHovered, education: false})}
            >
              <button className="nav-link flex items-center">
                Education
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isHovered.education ? 'rotate-180' : ''}`} />
              </button>
              {isHovered.education && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-10 animate-fade-in">
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Education 1</Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Education 2</Link>
                </div>
              )}
            </div>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered({...isHovered, resources: true})}
              onMouseLeave={() => setIsHovered({...isHovered, resources: false})}
            >
              <button className="nav-link flex items-center">
                Resources
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isHovered.resources ? 'rotate-180' : ''}`} />
              </button>
              {isHovered.resources && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-10 animate-fade-in">
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resource 1</Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resource 2</Link>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/login" className="font-medium text-slate-700 hover:text-brand-purple transition-colors">
            Log In
          </Link>
          <Link to="/signup" className="btn-secondary animate-fade-in">
            Sign Up
          </Link>
          <Link to="/browser" className="btn-primary flex items-center space-x-2 group animate-fade-in">
            <Zap className="w-4 h-4 group-hover:animate-glow-pulse" />
            <span>Add To Browser</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
