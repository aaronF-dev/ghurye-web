import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Come Visit <span className="text-primary">Us!</span> 🏫
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to meet you and show you around our amazing school!
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <Card className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl shadow-2xl border-2 bg-gradient-to-br from-card to-muted/20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-5 md:space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Get in Touch!</h3>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-primary text-primary-foreground p-2.5 md:p-3 rounded-xl md:rounded-2xl flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1">Visit Us</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Dhuriwada Malvan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-accent text-accent-foreground p-2.5 md:p-3 rounded-xl md:rounded-2xl flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1">Call Us</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      +91 7942679618<br />
                      Mon-Fri, 8AM-4PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-secondary text-secondary-foreground p-2.5 md:p-3 rounded-xl md:rounded-2xl flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1">Email Us</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      smesm@rediffmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 md:p-8 rounded-2xl md:rounded-3xl text-center">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    Ready to Join? 🌟
                  </h4>
                  <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                    Schedule a tour and see why kids love learning with us!
                  </p>
                  <Button size="lg" className="w-full rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base">
                    Book a Visit
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
