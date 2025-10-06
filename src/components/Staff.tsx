import { Card } from "@/components/ui/card";
import { Mail, Star } from "lucide-react";
import shwetaPednekar from "@/assets/shweta-pednekar.png";
import siddhiDhuri from "@/assets/siddhi-dhuri.png";
import saujanyaPatankar from "@/assets/saujanya-patankar.jpg";
import mrunalHadkar from "@/assets/mrunal-hadkar.png";
import umaDighe from "@/assets/uma-dighe.png";
import siddhiMalvankar from "@/assets/siddhi-malvankar.png";
import priyaKeluskar from "@/assets/priya-keluskar.jpg";

const Staff = () => {
  const staffMembers = [
    {
      id: 1,
      name: "SHWETA PEDNEKAR",
      role: "Head Master",
      education: "B.A., B. Ed.",
      email: "shwetapednekar9595@gmail.com",
      image: shwetaPednekar
    },
    {
      id: 2,
      name: "SIDDHI DHURI",
      role: "Assistant Teacher",
      education: "B.A., M.T.S.",
      email: "siddhidhuri13@gmail.com",
      image: siddhiDhuri
    },
    {
      id: 3,
      name: "SAUJANYA PATANKAR",
      role: "Assistant Teacher",
      education: "HSC., M.T.S.",
      email: "saujanyapatankar45@gmail.com",
      image: saujanyaPatankar
    },
    {
      id: 4,
      name: "MRUNAL HADKAR",
      role: "Assistant Teacher",
      education: "B.A., E.C.E.",
      email: "mrunalhadkar123@gmail.com",
      image: mrunalHadkar
    },
    {
      id: 5,
      name: "UMA DIGHE",
      role: "Assistant Teacher",
      education: "M.A., E.C.E.",
      email: "umadighe14@gmail.com",
      image: umaDighe
    },
    {
      id: 6,
      name: "SIDDHI MALVANKAR",
      role: "Assistant Teacher",
      education: "B.A., M.T.S.",
      email: "malvankarsiddhi9@gmail.com",
      image: siddhiMalvankar
    },
    {
      id: 7,
      name: "PRIYA KELUSKAR",
      role: "Assistant Teacher",
      education: "B.A., M.T.S",
      email: "priyakeluskar1994@gmail.com",
      image: priyaKeluskar
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Meet Our Amazing <span className="text-primary">Teachers!</span> 👨‍🏫👩‍🏫
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our wonderful team is here to help your child learn, grow, and shine!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {staffMembers.map((member) => (
            <Card
              key={member.id}
              className="group p-5 md:p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl bg-card border-2 rounded-2xl md:rounded-3xl overflow-hidden"
            >
              <div className="relative mb-4 md:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto object-cover border-4 border-background shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground p-2 rounded-full">
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-1 md:mb-2 text-sm md:text-base">{member.role}</p>
              <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">{member.education}</p>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors flex-wrap">
                <Mail className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span className="text-xs break-all">{member.email}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto px-4">
          <Card className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Our Teachers Are Specially Trained! ⭐
            </h3>
            <p className="text-muted-foreground text-base md:text-lg">
              Every member of our team has years of experience and special training in early childhood education. 
              They know exactly how to make learning fun, exciting, and meaningful for young minds!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Staff;
