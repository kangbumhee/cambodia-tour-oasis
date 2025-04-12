
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Search from "@/components/Search";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      <Hero />
      <Services />
      <Search />
      <Process />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
