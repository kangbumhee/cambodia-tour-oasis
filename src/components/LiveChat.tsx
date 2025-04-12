
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-xl w-80 md:w-96 overflow-hidden">
          <div className="bg-cambodia-blue text-white p-4 flex justify-between items-center">
            <h3 className="font-bold flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              1:1 상담
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-cambodia-sand transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 bg-gray-50 h-80 overflow-y-auto"></div>
          <div className="p-4 border-t flex">
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cambodia-blue"
            />
            <Button className="rounded-l-none bg-cambodia-blue hover:bg-cambodia-blue/90">
              보내기
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-cambodia-blue hover:bg-cambodia-blue/90 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default LiveChat;
