
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center glass-morphism p-12 rounded-2xl max-w-md animate-fade-in">
        <h1 className="text-6xl font-bold heading-gradient mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-6">Oops! This page doesn't exist</p>
        <Link to="/" className="btn-primary inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
