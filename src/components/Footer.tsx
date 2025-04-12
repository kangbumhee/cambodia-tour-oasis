
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-cambodia-dark text-white pt-16 pb-8">
      <div className="cambodia-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">캄보디아 투어</h3>
            <p className="mb-4 text-gray-300">
              쉽고 빠르게 예약하는 캄보디아 여행 서비스
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="m4 4 7.07 17 2.51-7.39L21 11.07z"></path>
                </svg>
              </a>
              <a 
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneCall className="mr-3 text-cambodia-light-blue w-5 h-5" />
                <p>+855 12 345 6789</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-cambodia-light-blue w-5 h-5" />
                <p>info@cambodiatour.kr</p>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 text-cambodia-light-blue w-5 h-5 mt-1" />
                <p>시엠립 올드마켓 근처, 캄보디아</p>
              </div>
              
              <div className="mt-6">
                <a href="#" className="flex items-center bg-[#FEE500] text-black rounded-lg px-4 py-2 hover:opacity-90 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M72 128c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#341B1C"/>
                  </svg>
                  카카오톡 채널
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cambodia-light-blue transition-colors">
                  골프 투어
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cambodia-light-blue transition-colors">
                  호텔 예약
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cambodia-light-blue transition-colors">
                  공항 픽업 서비스
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cambodia-light-blue transition-colors">
                  개인정보 처리방침
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cambodia-light-blue transition-colors">
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} 캄보디아 투어. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
