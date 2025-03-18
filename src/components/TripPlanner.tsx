
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TripPlanner = () => {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState<string[]>([]);
  
  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate AI generation with a delay
    setTimeout(() => {
      setGeneratedItinerary([
        "Day 1: Arrive in Kyoto, check into your hotel in the historic Gion district. Enjoy an evening stroll along the Philosopher's Path.",
        "Day 2: Visit Fushimi Inari Shrine in the morning, followed by Kiyomizu-dera Temple. Explore Nishiki Market for lunch.",
        "Day 3: Day trip to Arashiyama to see the Bamboo Grove and Monkey Park. Visit Tenryu-ji Temple and enjoy the scenic river.",
        "Day 4: Experience a traditional tea ceremony in the morning. Visit the Golden Pavilion (Kinkaku-ji) and Ryoan-ji Zen garden.",
        "Day 5: Explore Nara Park with its friendly deer and the impressive Todai-ji Temple. Return to Kyoto for farewell dinner in Pontocho Alley."
      ]);
      setIsGenerating(false);
    }, 3000);
  };
  
  return (
    <div className="container mx-auto px-6 py-24" id="planner">
      <AnimatedSection className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">AI Trip Planner</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us your preferences, and our AI will craft the perfect itinerary tailored just for you.
          </p>
        </div>
        
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="p-8 md:p-10">
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="destination" className="block text-sm font-medium">
                    Where would you like to go?
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="destination"
                      className="glass-input pl-10 h-12 rounded-full text-foreground"
                      placeholder="Enter a destination..."
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="dates" className="block text-sm font-medium">
                    When are you planning to travel?
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="dates"
                      className="glass-input pl-10 h-12 rounded-full text-foreground"
                      placeholder="Select dates..."
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="duration" className="block text-sm font-medium">
                    How long will you stay?
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="duration"
                      className="glass-input pl-10 h-12 rounded-full text-foreground"
                      placeholder="Number of days..."
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button 
                    className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
                    onClick={handleGenerate}
                    disabled={!destination || isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <div className="mr-2 h-4 w-4 border-t-2 border-r-2 border-white rounded-full animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Itinerary
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
            
            {generatedItinerary.length > 0 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">Your 5-Day Kyoto Itinerary</h3>
                    <p className="text-muted-foreground">Tailored for cultural exploration and scenic views</p>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => {
                      setGeneratedItinerary([]);
                      setDestination('');
                    }}
                  >
                    Create New Plan
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {generatedItinerary.map((day, index) => (
                    <div 
                      key={index}
                      className="glass-card p-4 rounded-xl border-l-4 border-primary animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <p className="text-sm md:text-base">{day}</p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 flex justify-between">
                  <Button variant="outline" className="rounded-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Export to Calendar
                  </Button>
                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-white">
                    Customize Further
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default TripPlanner;
