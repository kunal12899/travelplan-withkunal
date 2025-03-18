
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TripPlanner from '@/components/TripPlanner';
import ItineraryCard from '@/components/ItineraryCard';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, MessageCircle, Globe, Zap, Shield, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const itineraries = [
  {
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    title: 'Cultural Exploration in Kyoto',
    location: 'Kyoto, Japan',
    duration: '5 days',
    rating: 4.9,
  },
  {
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    title: 'Romantic Paris Getaway',
    location: 'Paris, France',
    duration: '4 days',
    rating: 4.8,
  },
  {
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Southern Italy Adventure',
    location: 'Amalfi Coast, Italy',
    duration: '7 days',
    rating: 4.7,
  },
];

const features = [
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: 'Destinations Worldwide',
    description: 'Access comprehensive data on thousands of destinations globally.',
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Intelligent Planning',
    description: 'Our AI analyzes your preferences to create the perfect itinerary.',
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Secure & Private',
    description: 'Your travel data is always protected and never shared.',
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    title: 'Live Recommendations',
    description: 'Get real-time suggestions based on your current location.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="container mx-auto px-6 py-24" id="features">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            AI-Powered Travel Simplicity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your trips with intelligence, precision, and personalization that feels magical.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              delay={300 + (index * 100)}
              className="glass-card rounded-2xl p-6 h-full hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>
      
      {/* Itineraries Section */}
      <section className="bg-secondary/50 backdrop-blur-sm py-24" id="itineraries">
        <div className="container mx-auto px-6">
          <AnimatedSection className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Popular Itineraries
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore handcrafted and AI-generated itineraries for inspiration.
              </p>
            </div>
            <Button 
              className="mt-4 md:mt-0 rounded-full group"
              variant="ghost"
            >
              View all itineraries 
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary, index) => (
              <AnimatedSection key={index} delay={300 + (index * 100)}>
                <ItineraryCard {...itinerary} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trip Planner Section */}
      <TripPlanner />
      
      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <AnimatedSection>
          <div className="relative glass-card rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-overlay" />
            
            <div className="relative px-8 py-16 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Transform Your Travel Business with AI
                </h2>
                <p className="text-lg mb-8">
                  Leverage our AI-powered platform to create personalized travel experiences for your customers. Perfect for travel agencies, hotels, and destination marketers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    Partner with Us
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-base bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 hover:border-white/40 shadow-lg transition-all"
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass-card rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                    alt="Travel Planning Dashboard" 
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm font-medium">20+ million places</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
