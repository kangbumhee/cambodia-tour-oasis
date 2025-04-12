
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Search as SearchIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { cn } from "@/lib/utils";

const Search = () => {
  const [date, setDate] = useState<Date>();
  
  return (
    <section id="search" className="py-20">
      <div className="cambodia-container">
        <h2 className="section-title text-center">빠른 예약 검색</h2>
        <p className="section-subtitle text-center">
          투어 및 숙박 시설의 이용 가능 여부를 빠르게 확인하세요.
        </p>

        <Card className="mx-auto max-w-4xl shadow-lg border-cambodia-light-blue">
          <CardContent className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="destination" className="text-sm font-medium">
                  목적지/서비스
                </label>
                <Input
                  id="destination"
                  placeholder="목적지 또는 서비스 입력"
                  className="border-cambodia-light-blue"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">날짜 선택</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal border-cambodia-light-blue"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: ko }) : "날짜 선택"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={ko}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-cambodia-blue hover:bg-cambodia-blue/90">
                  <SearchIcon className="mr-2 h-4 w-4" />
                  검색
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Search;
