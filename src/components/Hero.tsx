
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508511267-5a04ee04ca95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="z-10 cambodia-container text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          캄보디아 투어
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
          쉽고 빠르게 예약하는 캄보디아 여행
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <Button
            className="bg-cambodia-blue hover:bg-cambodia-blue/90 text-white px-6 py-6 text-lg"
            onClick={() => document.getElementById("search")?.scrollIntoView({ behavior: "smooth" })}
          >
            투어 검색하기
          </Button>
          <Button
            variant="outline"
            className="bg-white/20 backdrop-blur-sm border-white hover:bg-white/30 text-white px-6 py-6 text-lg"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            서비스 살펴보기
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
