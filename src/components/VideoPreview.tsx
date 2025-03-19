
import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface VideoPreviewProps {
  title: string;
  duration: string;
}

const VideoPreview = ({ title, duration }: VideoPreviewProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset playing state when component unmounts or title changes
  useEffect(() => {
    return () => setIsPlaying(false);
  }, [title]);

  return (
    <div 
      className="inline-flex items-center space-x-3 cursor-pointer group animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <div className="relative">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isPlaying ? 'bg-brand-purple' : 'bg-slate-100'} transition-all duration-300 ease-in-out`}>
          <Play 
            className={`w-4 h-4 ${isPlaying ? 'text-white' : 'text-slate-700'} transition-colors duration-300`} 
            fill={isPlaying ? 'white' : 'transparent'}
          />
        </div>
        <div className={`absolute -inset-1 rounded-full bg-brand-purple/10 scale-0 group-hover:scale-100 transition-transform duration-300 ${isPlaying ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
      </div>
      <div>
        <div className={`text-base font-medium ${isHovered || isPlaying ? 'text-brand-purple' : 'text-slate-800'} transition-colors duration-300`}>
          {title}
        </div>
        <div className="text-xs text-slate-500">{duration}</div>
      </div>
    </div>
  );
};

export default VideoPreview;
