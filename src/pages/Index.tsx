import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Staff from "@/components/Staff";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="activities">
          <Activities />
        </section>
        <section id="staff">
          <Staff />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
