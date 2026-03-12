import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { 
  User, 
  Lock, 
  ArrowRight,
  ShieldCheck,
  FileText
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function RegisterPage() {
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreements.terms || !agreements.privacy) {
      toast.error("모든 약관에 동의하셔야 회원가입이 가능합니다.");
      return;
    }
    toast.success("회원가입이 완료되었습니다.");
    window.location.href = "/login";
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-10 text-center">
          <h1 className="text-[32px] font-extrabold text-[#1a1a2e] mb-4 tracking-tight underline decoration-[#8B1A2B] decoration-4 underline-offset-8">
            회원가입
          </h1>
          <div className="mt-12 bg-red-50 p-6 rounded-xl border border-red-100 shadow-sm text-center">
            <h3 className="text-[18px] lg:text-[22px] font-extrabold text-[#8B1A2B] mb-3">
              타임스미디어 회원가입시 국제통역사절단에 자동으로 회원가입됩니다.
            </h3>
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-2xl mx-auto">
              타임스미디어 서비스 이용약관과 개인정보 보호정책에 동의를 하셔야 회원이 되실 수 있습니다.<br />
              <span className="text-[#8B1A2B]/70">(국가통역사절단 사이트 : www.wea.or.kr)</span>
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {/* Terms Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-[#8B1A2B]" />
              <h3 className="text-[16px] font-bold text-[#1a1a2e]">타임스미디어 서비스 이용약관</h3>
            </div>
            <div className="bg-gray-50 p-4 border border-gray-100 rounded-lg overflow-y-auto h-[200px] text-[13px] text-gray-500 leading-relaxed scrollbar-thin scrollbar-thumb-gray-200">
              <p className="font-bold mb-2">| TIMESMEDIA 회원 이용자약관 |</p>
              <p className="font-bold mb-1">제 1 장 총 칙</p>
              <p className="font-bold mb-2">제1조 목 적</p>
              <p>본 약관은 (주)타임스미디어(이하 '회사')가 제공하는 timestesol.com 서비스(이하 '서비스')의 이용조건 및 절차에 관한 규정함을 목적으로 합니다.</p>
              <p className="mt-4">제2조 약관의 효력 및 변경</p>
              <p>1. 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</p>
              <p>2. 회사는 사정상 중요한 사유가 발생될 경우 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 ���지함으로써 효력이 발생합니다.</p>
              {/* More text can be added here */}
              <p className="mt-4">... 중략 ...</p>
            </div>
            <div className="flex items-center gap-3 py-2">
              <Checkbox 
                id="terms" 
                checked={agreements.terms} 
                onCheckedChange={(checked) => setAgreements({...agreements, terms: checked === true})} 
              />
              <label htmlFor="terms" className="text-[14px] font-bold text-[#1a1a2e] cursor-pointer">이용약관에 동의합니다.</label>
            </div>
          </section>

          {/* Privacy Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-[#8B1A2B]" />
              <h3 className="text-[16px] font-bold text-[#1a1a2e]">타임스미디어 개인정보 보호정책</h3>
            </div>
            <div className="bg-gray-50 p-4 border border-gray-100 rounded-lg overflow-y-auto h-[200px] text-[13px] text-gray-500 leading-relaxed scrollbar-thin scrollbar-thumb-gray-200">
              <p className="font-bold mb-2">| TimesMedia 회원의 개인정보취급방침 |</p>
              <p>'(주)타임스미디어'는 (이하 '회사'는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.</p>
              <p>회사는 개인정보 취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려 드립니다.</p>
              <p className="mt-4">1. 수집하는 개인정보 항목</p>
              <p>회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
              <p>• 수집항목 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 비밀번호 질문과 답변 , 자택 전화번호 , 자택 주소 , 휴대전화번호 , 이메일 , 직업 , 학력 , 접속 로그 , 쿠키 , 접속 IP 정보 등</p>
              {/* More text can be added here */}
              <p className="mt-4">... 중략 ...</p>
            </div>
            <div className="flex items-center gap-3 py-2">
              <Checkbox 
                id="privacy" 
                checked={agreements.privacy} 
                onCheckedChange={(checked) => setAgreements({...agreements, privacy: checked === true})} 
              />
              <label htmlFor="privacy" className="text-[14px] font-bold text-[#1a1a2e] cursor-pointer">개인정보보호정책에 동의합니다.</label>
            </div>
          </section>

          <div className="pt-10 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-[14px] mb-8">타임스미디어의 회원약관과 개인정보 보호정책에 동의 하십니까?</p>
            <Button 
              onClick={handleSubmit}
              className="px-16 h-16 bg-[#1a1a2e] hover:bg-[#2a2a3e] text-white text-[18px] font-bold rounded-xl shadow-xl transition-all"
            >
              회원가입 완료
            </Button>
            <div className="mt-8">
              <Link 
                to="/login" 
                className="text-gray-400 hover:text-[#8B1A2B] text-[14px] underline"
              >
                이미 계정이 있으신가요? 로그인하기
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
