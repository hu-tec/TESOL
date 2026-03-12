import { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  CheckCircle, 
  Send, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  BookOpen, 
  MessageSquare,
  Building,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "./ui/select";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "./ui/form";

type ApplicationType = "level-test" | "tip" | "corporate" | "seminar" | "orientation" | "admission";

interface FormProps {
  type: ApplicationType;
  title: string;
  subtitle: string;
}

export function ApplicationForm({ type, title, subtitle }: FormProps) {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      course: "",
      message: "",
      company: "",
      participants: "1",
      preferred_date: "",
    },
  });

  const onSubmit = async (data: any) => {
    // console.log("Form data:", data);
    setSubmitted(true);
    toast.success("신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.");
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto py-20 text-center"
      >
        <div className="w-16 h-16 bg-[#8B1A2B] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-[24px] font-bold text-[#1a1a2e] mb-4">신청 완료!</h2>
        <p className="text-gray-600 mb-8">
          정상적으로 접수되었습니다. <br />
          입력하신 연락처로 빠른 시일 내에 안내드리겠습니다.
        </p>
        <Button 
          onClick={() => window.location.href = "/"}
          className="bg-[#1a1a2e] hover:bg-[#2a2a3e] text-white px-8 py-6 h-auto text-[16px] rounded-lg"
        >
          홈으로 돌아가기
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="mb-10 text-center">
        <h1 className="text-[28px] lg:text-[36px] font-extrabold text-[#1a1a2e] mb-3 tracking-tight">
          {title}
        </h1>
        <p className="text-gray-500 text-[15px]">{subtitle}</p>
      </div>

      <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-xl shadow-gray-100/50">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-bold text-[#1a1a2e] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#8B1A2B]" /> 성함
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="성함을 입력해주세요" {...field} required className="h-12 bg-gray-50/50 border-gray-100 focus:bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-bold text-[#1a1a2e] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#8B1A2B]" /> 연락처
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="010-0000-0000" {...field} required className="h-12 bg-gray-50/50 border-gray-100 focus:bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] font-bold text-[#1a1a2e] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#8B1A2B]" /> 이메일
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@email.com" {...field} required className="h-12 bg-gray-50/50 border-gray-100 focus:bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {type === "corporate" && (
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-bold text-[#1a1a2e] flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#8B1A2B]" /> 회사/기관명
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="회사명을 입력해주세요" {...field} required className="h-12 bg-gray-50/50 border-gray-100 focus:bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] font-bold text-[#1a1a2e] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#8B1A2B]" /> 
                    {type === "corporate" ? "관심 교육 분야" : "희망 교육 과정"}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 bg-gray-50/50 border-gray-100 focus:bg-white">
                        <SelectValue placeholder="과정을 선택해주세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="tesol">TESOL 교육 (영어강사양성)</SelectItem>
                      <SelectItem value="ai-translation">AI번역 교육 (교정 전문가)</SelectItem>
                      <SelectItem value="ai-prompt">AI프롬프트 교육 (생성형 AI)</SelectItem>
                      <SelectItem value="ai-ethics">AI윤리 교육 (AI 리터러시)</SelectItem>
                      <SelectItem value="itt">ITT 정통번역 교육 (통번역전문가)</SelectItem>
                      {type === "corporate" && <SelectItem value="all">전체/종합 교육</SelectItem>}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {(type === "seminar" || type === "orientation" || type === "level-test") && (
              <FormField
                control={form.control}
                name="preferred_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-bold text-[#1a1a2e] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#8B1A2B]" /> 희망 일시
                    </FormLabel>
                    <FormControl>
                      <Input type="datetime-local" {...field} required className="h-12 bg-gray-50/50 border-gray-100 focus:bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] font-bold text-[#1a1a2e] flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#8B1A2B]" /> 추가 문의 사항
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="궁금하신 점이 있다면 자유롭게 입력해주세요" 
                      className="min-h-[120px] bg-gray-50/50 border-gray-100 focus:bg-white resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full h-14 bg-[#8B1A2B] hover:bg-[#6d1422] text-white text-[16px] font-bold rounded-xl shadow-lg shadow-red-900/10 transition-all flex items-center justify-center gap-2 group"
            >
              신청하기 <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </Form>
      </div>

      <div className="mt-8 p-5 bg-[#faf8f6] border border-gray-100 rounded-xl">
        <h4 className="text-[13px] font-bold text-[#1a1a2e] mb-2">💡 안내사항</h4>
        <ul className="text-[12px] text-gray-500 space-y-1.5 list-disc pl-4">
          <li>신청 시 담당자가 1~2일 내(영업일 기준)로 전화를 드립니다.</li>
          <li>교육 일정 및 상세 커리큘럼은 상담 시 상세히 안내받으실 수 있습니다.</li>
          <li>제출하신 개인정보는 신청 목적 외에 다른 용도로 활용되지 않습니다.</li>
        </ul>
      </div>
    </div>
  );
}
