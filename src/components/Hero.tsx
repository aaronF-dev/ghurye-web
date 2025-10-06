import { Button } from "@/components/ui/button";
import { ArrowRight, Languages } from "lucide-react";
import heroImage from "@/assets/school-building.png";
import schoolLogo from "@/assets/school-logo.png";
import { useState } from "react";

const Hero = () => {
  const [isMarathi, setIsMarathi] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Language Toggle */}
      <div className="absolute top-6 right-4 md:right-6 z-20">
        <button 
          onClick={() => setIsMarathi(!isMarathi)}
          className="bg-card/80 backdrop-blur-lg px-3 md:px-4 py-2 md:py-3 rounded-full shadow-lg hover:scale-110 transition-transform border-2 flex items-center gap-2"
        >
          <Languages className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          <span className="font-medium text-sm md:text-base">{isMarathi ? "English" : "मराठी"}</span>
        </button>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* School Logo */}
          <div className="inline-flex items-center justify-center animate-fade-in">
            <img src={schoolLogo} alt="School Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl" />
          </div>
          
          {/* School Name */}
          <div className="space-y-2 md:space-y-3 animate-fade-in px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block text-white drop-shadow-lg">Smt. Sitabai Shripad Ghurye</span>
              <span className="block text-white drop-shadow-lg">Pre Primary English Medium School</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 drop-shadow-md">
              Where Learning is Fun! 🌈
            </p>
          </div>
          
          {/* Tagline & CTA */}
          <div className="space-y-4 md:space-y-6 animate-fade-in px-4">
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              A magical place where curious minds grow, friendships bloom, and every day is an adventure! 
              Nurturing young learners with care, creativity, and compassion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <Button size="lg" className="text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
                Enroll Your Child
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg rounded-full border-2 hover:scale-105 transition-all bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
