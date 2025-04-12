
import { Hotel, Golf, Users, User, Car, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "골프 투어",
      description: "최고의 골프장에서 특별한 경험을 제공합니다.",
      icon: <Golf className="service-icon" />,
    },
    {
      title: "프라이빗 투어",
      description: "개인 맞춤형 프라이빗 투어로 특별한 추억을 만들어보세요.",
      icon: <User className="service-icon" />,
    },
    {
      title: "그룹 투어",
      description: "다른 여행객들과 함께하는 경제적이고 즐거운 그룹 투어입니다.",
      icon: <Users className="service-icon" />,
    },
    {
      title: "호텔 예약",
      description: "다양한 호텔과 리조트를 합리적인 가격으로 예약하세요.",
      icon: <Hotel className="service-icon" />,
    },
    {
      title: "공항 픽업/드랍",
      description: "편리한 공항 픽업 및 드랍 서비스를 제공합니다.",
      icon: <Car className="service-icon" />,
    },
    {
      title: "바우처 판매",
      description: "레스토랑, 마사지, 명소 입장권 등 다양한 바우처를 구매하세요.",
      icon: <Ticket className="service-icon" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-cambodia-sand">
      <div className="cambodia-container">
        <h2 className="section-title text-center">서비스</h2>
        <p className="section-subtitle text-center">
          캄보디아 여행을 위한 다양한 서비스를 제공합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <Card key={index} className="service-card hover:-translate-y-1 transition-all duration-300">
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5">{service.description}</p>
              <Button className="mt-auto bg-cambodia-blue hover:bg-cambodia-blue/90">
                바로 예약하기
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
