import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
const backgroundImages = ['https://images.unsplash.com/photo-1469474968028-56623f02e42e', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07'];
const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('features');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with crossfade effect */}
      {backgroundImages.map((img, index) => <div key={img} className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-2000 ease-in-out" style={{
      backgroundImage: `url(${img})`,
      opacity: index === currentBgIndex ? 1 : 0,
      zIndex: -10
    }} />)}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background z-[-5]" />
      
      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection delay={300}>
            <p className="inline-block mb-4 px-3 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white/90 border border-white/20">
              Reimagining Travel Planning with AI
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={500}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-shadow-md text-[#79939d]">
              Your <span className="text-primary">Perfect Trip</span>, Crafted with Intelligence
            </h1>
          </AnimatedSection>
          
          <AnimatedSection variant="fade-in" delay={700}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience seamless travel planning powered by AI. Create personalized itineraries, discover hidden gems, and make your dream journeys a reality.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={900}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all">
                Start Planning
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 hover:border-white/40 shadow-lg transition-all">
                View Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button onClick={scrollToNextSection} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white/100 transition-colors animate-float" aria-label="Scroll down">
        <span className="text-sm mb-2">Discover More</span>
        <ChevronDown className="h-6 w-6" />
      </button>
    </div>;
};
export default Hero;