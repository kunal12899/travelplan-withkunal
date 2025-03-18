
import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ItineraryCardProps {
  image: string;
  title: string;
  location: string;
  duration: string;
  rating: number;
  className?: string;
  index?: number;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({
  image,
  title,
  location,
  duration,
  rating,
  className,
  index = 0,
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl group",
        className
      )}
    >
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="text-white text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 tracking-tight">{title}</h3>
        
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            <span>{duration}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            View Details
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
