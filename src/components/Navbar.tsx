
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10 py-4',
        isScrolled
          ? 'glass border-b border-white/10 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl md:text-2xl font-medium tracking-tight transition-all duration-300 hover:opacity-80"
        >
          roamastic
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
            Features
          </a>
          <a href="#itineraries" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
            Itineraries
          </a>
          <a href="#planner" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
            AI Planner
          </a>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 transition-all shadow-lg hover:shadow-xl" 
            variant="default"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed left-0 right-0 top-[72px] glass-card border-t border-white/10 shadow-lg p-6 transition-all duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-6">
          <a 
            href="#features" 
            className="text-base font-medium opacity-80 hover:opacity-100 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#itineraries" 
            className="text-base font-medium opacity-80 hover:opacity-100 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Itineraries
          </a>
          <a 
            href="#planner" 
            className="text-base font-medium opacity-80 hover:opacity-100 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AI Planner
          </a>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 w-full transition-all shadow-lg hover:shadow-xl" 
            variant="default"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
