
import { CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "상품 선택",
      description:
        "다양한 캄보디아 여행 상품 중에서 원하는 상품을 선택하세요.",
    },
    {
      number: "02",
      title: "예약 및 결제",
      description:
        "간편한 예약 시스템과 안전한 결제 방법으로 빠르게 예약하세요.",
    },
    {
      number: "03",
      title: "바우처 수령",
      description:
        "예약 완료 후 바로 이메일로 바우처를 받아 편리하게 이용하세요.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cambodia-light-blue/20 to-white">
      <div className="cambodia-container">
        <h2 className="section-title text-center">간편한 예약 프로세스</h2>
        <p className="section-subtitle text-center">
          단 3단계로 쉽고 빠르게 예약을 완료하세요.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 flex flex-col items-center text-center relative shadow-md"
            >
              <div className="bg-cambodia-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-1 bg-cambodia-light-blue"></div>
                </div>
              )}
              
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 md:hidden">
                {index < steps.length - 1 && (
                  <div className="w-1 h-8 bg-cambodia-light-blue"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-cambodia-dark flex items-center justify-center">
            <CheckCircle className="text-cambodia-green mr-2" />
            예약 후 고객 지원팀이 24시간 내에 확인 연락을 드립니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
