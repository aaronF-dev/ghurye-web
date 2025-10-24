import { Heart, Star, Users, BookOpen, Trophy, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Caring Environment",
      description: "Every child is special and loved here! We create a warm, nurturing space where kids feel safe to explore and learn.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Star,
      title: "Fun Learning",
      description: "Learning should never be boring! We use games, stories, and hands-on activities to make every lesson exciting.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Users,
      title: "Happy Community",
      description: "We're one big family! Children make lifelong friends while learning to share, care, and grow together.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const stats = [
    { icon: BookOpen, number: "500+", label: "Happy Students", color: "text-primary" },
    { icon: Trophy, number: "18+", label: "Years Experience", color: "text-accent" },
    { icon: Sun, number: "100%", label: "Fun Guaranteed", color: "text-secondary" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <Star className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />
            <span className="text-xs md:text-sm font-semibold text-primary">Since 2004</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Sunshine Primary</span> School 🏫
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
            A magical place where children discover the joy of learning!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-4xl mx-auto mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-3 sm:p-4 md:p-6 lg:p-8 text-center bg-gradient-to-br from-card to-muted/30 border-2 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${stat.color} mx-auto mb-2 md:mb-4`} />
              <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto mb-12 md:mb-16">
          {/* Left side - Text Content */}
          <div className="space-y-6 px-4">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary rounded-full" />
              <div className="space-y-6 pl-6 md:pl-8">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-primary">
                    Our Story 📖
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Welcome to <span className="font-bold text-foreground">Smt. Sitabai Shripad Ghurye Pre Primary English Medium School</span>, where learning is an adventure 
                    and every child is a star! For nearly two decades, we've been creating a warm, nurturing environment 
                    where curious young minds can explore, discover, and grow.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-accent">
                    Our Philosophy 🌈
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    We believe that <span className="font-bold text-foreground">happy children learn better!</span> That's why we blend 
                    traditional education with playful, hands-on activities that make every lesson exciting. Every corner 
                    of our school is designed with children's joy and growth in mind.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-secondary">
                    Our Promise ⭐
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    With small class sizes, dedicated teachers, and a curriculum that celebrates each child's unique talents, 
                    we ensure every student gets the attention and support they need to shine bright!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Feature Cards */}
          <div className="space-y-4 md:space-y-6 px-4">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-4 md:p-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl bg-gradient-to-br from-card to-muted/20 border-2 rounded-2xl md:rounded-3xl group"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className={`${feature.bgColor} p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 md:w-8 md:h-8 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4">
          <Card className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 shadow-2xl text-center">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Star className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary bounce-gentle" />
              <Star className="w-5 h-5 md:w-6 md:h-6 text-accent fill-accent bounce-gentle" style={{ animationDelay: '0.2s' }} />
              <Star className="w-6 h-6 md:w-8 md:h-8 text-secondary fill-secondary bounce-gentle" style={{ animationDelay: '0.4s' }} />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Ready to Join Our Family? 🎉
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto">
              Come visit us and see why Smt. Sitabai Shripad Ghurye Pre Primary English Medium School is the perfect place for your child to learn, play, and grow!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
