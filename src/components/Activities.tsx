import { Palette, BookOpen, Music, Rocket } from "lucide-react";
import activitiesImage from "@/assets/activities-fun.jpg";

const Activities = () => {
  const activities = [
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Paint, draw, and create amazing masterpieces!",
      color: "bg-accent"
    },
    {
      icon: BookOpen,
      title: "Story Time",
      description: "Explore magical worlds through wonderful books!",
      color: "bg-primary"
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Sing, dance, and make beautiful music together!",
      color: "bg-secondary"
    },
    {
      icon: Rocket,
      title: "Science Fun",
      description: "Discover cool experiments and amazing facts!",
      color: "bg-success"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Super Fun <span className="text-accent">Activities!</span> 🎨
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every day is filled with exciting things to do and learn!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto px-4">
          <div className="space-y-4 md:space-y-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-card hover:bg-muted/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl border-2"
              >
                <div className={`${activity.color} text-white p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0 bounce-gentle`}>
                  <activity.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base lg:text-lg">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-[2rem] md:rounded-[3rem] transform -rotate-3 blur-2xl" />
            <img
              src={activitiesImage}
              alt="Children enjoying various fun activities"
              className="relative rounded-[2rem] md:rounded-[3rem] shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
