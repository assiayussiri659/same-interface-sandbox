
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    href: string;
  }[];
  currentPage: string;
}

const Breadcrumbs = ({ items, currentPage }: BreadcrumbsProps) => {
  return (
    <div className="animate-fade-in opacity-90 py-4 text-sm">
      <div className="flex items-center space-x-1">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <Link to={item.href} className="breadcrumb-item">
              {item.label}
            </Link>
            <ChevronRight className="w-3 h-3 breadcrumb-separator" />
          </div>
        ))}
        <span className="text-slate-800 font-medium">{currentPage}</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
