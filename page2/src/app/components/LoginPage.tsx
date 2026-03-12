import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { 
  User, 
  Lock, 
  ArrowRight,
  LogIn
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";

export function LoginPage() {
  const [formData, setFormData] = useState({ id: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("로그인되었습니다.");
    window.location.href = "/";
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-10">
          <h1 className="text-[32px] font-extrabold text-[#1a1a2e] mb-2 tracking-tight">로그인</h1>
          <p className="text-gray-500">타임스미디어 서비스에 오신 것을 환영합니다.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#1a1a2e] flex items-center gap-1.5 ml-1">
                <User className="w-3.5 h-3.5 text-[#8B1A2B]" /> 아이디
              </label>
              <Input 
                type="text" 
                placeholder="아이디를 입력해주세요" 
                className="h-12 bg-gray-50/50 border-gray-100 focus:bg-white"
                value={formData.id}
                onChange={(e) => setFormData({...formData, id: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#1a1a2e] flex items-center gap-1.5 ml-1">
                <Lock className="w-3.5 h-3.5 text-[#8B1A2B]" /> 비밀번호
              </label>
              <Input 
                type="password" 
                placeholder="비밀번호를 입력해주세요" 
                className="h-12 bg-gray-50/50 border-gray-100 focus:bg-white"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-[13px] text-gray-500 cursor-pointer">로그인 상태 유지</label>
              </div>
              <button type="button" className="text-[13px] text-gray-400 hover:text-[#8B1A2B]">비밀번호 찾기</button>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 bg-[#8B1A2B] hover:bg-[#6d1422] text-white text-[16px] font-bold rounded-xl shadow-lg shadow-red-900/10 transition-all flex items-center justify-center gap-2"
            >
              로그인 <LogIn className="w-4 h-4" />
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-gray-400 text-[14px] mb-4">아직 회원이 아니신가요?</p>
            <Link 
              to="/register" 
              className="inline-flex items-center gap-1.5 text-[#8B1A2B] font-bold text-[14px] hover:underline"
            >
              회원가입 바로가기 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
