import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b-2 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-gradient-to-br from-primary to-accent p-2 md:p-3 rounded-xl md:rounded-2xl">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-sm md:text-xl font-bold leading-tight">Smt. Sitabai Shripad Ghurye<br />Pre Primary English Medium School</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Where Learning is Fun!</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-lg font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#activities" className="text-lg font-medium hover:text-primary transition-colors">
              Activities
            </a>
            <a href="#staff" className="text-lg font-medium hover:text-primary transition-colors">
              Teachers
            </a>
            <a href="#gallery" className="text-lg font-medium hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <Button className="rounded-full shadow-lg hover:scale-105 transition-all text-xs md:text-base px-3 md:px-4 py-2">
            Enroll Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
