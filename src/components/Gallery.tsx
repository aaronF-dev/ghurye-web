import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import { Camera } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: "Children painting colorful artwork together",
      title: "Art Time Fun! 🎨"
    },
    {
      src: gallery2,
      alt: "Kids playing musical instruments",
      title: "Music Class! 🎵"
    },
    {
      src: gallery3,
      alt: "Science experiments with colorful liquids",
      title: "Science Magic! ⚗️"
    },
    {
      src: gallery4,
      alt: "Reading time in cozy corner",
      title: "Story Time! 📚"
    },
    {
      src: gallery5,
      alt: "Building with blocks and LEGO",
      title: "Building Fun! 🏗️"
    },
    {
      src: gallery6,
      alt: "Yoga and stretching exercises",
      title: "Healthy Bodies! 🧘"
    },
    {
      src: gallery7,
      alt: "Playing on the outdoor playground",
      title: "Outdoor Play! 🎪"
    },
    {
      src: gallery8,
      alt: "Learning together in classroom",
      title: "Learning Together! ✏️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <Camera className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            <span className="text-xs md:text-sm font-semibold text-accent">Our Happy Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            See Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-success via-primary to-accent">Happy</span> Moments! 📸
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Every day is filled with smiles, laughter, and amazing memories!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto px-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold drop-shadow-lg">
                  {image.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/90 backdrop-blur-sm p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12 md:mt-16 px-4">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Want to see more? Follow us on social media or schedule a visit to experience the joy firsthand! 🌟
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
