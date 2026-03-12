import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { toast, Toaster } from "sonner";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div>
      <Toaster position="top-center" />
      {/* Hero */}
      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Contact Us
            </span>
            <h1 className="text-[30px] lg:text-[40px] text-white mb-3" style={{ fontWeight: 800 }}>1:1 문의</h1>
            <p className="text-white/50 text-[16px]">궁금한 점이 있으시면 편하게 문의해주세요</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-[22px] text-[#1a1a2e] mb-6" style={{ fontWeight: 800 }}>연락처 정보</h2>
              {[
                { icon: Phone, label: "대표전화", value: "02-6207-9090" },
                { icon: Mail, label: "이메일", value: "hutechc01@gmail.com" },
                { icon: MapPin, label: "주소", value: "서울 서초구 양재천로 19길 26, 6층(양재동)" },
                { icon: Clock, label: "운영시간", value: "평일 09:00 - 18:00" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4 p-5 bg-[#faf8f6] border border-gray-100">
                    <div className="w-11 h-11 bg-[#8B1A2B] rounded-full flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-500 mb-0.5">{item.label}</p>
                      <p className="text-[14px] text-[#1a1a2e]" style={{ fontWeight: 600 }}>{item.value}</p>
                    </div>
                  </div>
                );
              })}
              <div className="bg-[#1a1a2e] p-6 text-center">
                <MessageCircle className="w-10 h-10 text-white/60 mx-auto mb-3" />
                <h3 className="text-white text-[16px] mb-1" style={{ fontWeight: 700 }}>빠른 상담</h3>
                <p className="text-white/50 text-[13px] mb-4">카카오톡으로 빠르게 상담받으세요</p>
                <a href="#" className="inline-flex px-6 py-2.5 bg-[#FEE500] text-[#3C1E1E] text-[14px] hover:bg-[#FDD835] transition" style={{ fontWeight: 700 }}>
                  카카오톡 상담
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-[22px] text-[#1a1a2e] mb-6" style={{ fontWeight: 800 }}>문의하기</h2>
              <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-100 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] text-gray-600 mb-1.5" style={{ fontWeight: 600 }}>이름 *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#8B1A2B] focus:ring-2 focus:ring-red-100 outline-none transition text-[14px]"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-gray-600 mb-1.5" style={{ fontWeight: 600 }}>이메일 *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#8B1A2B] focus:ring-2 focus:ring-red-100 outline-none transition text-[14px]"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] text-gray-600 mb-1.5" style={{ fontWeight: 600 }}>연락처</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#8B1A2B] focus:ring-2 focus:ring-red-100 outline-none transition text-[14px]"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-gray-600 mb-1.5" style={{ fontWeight: 600 }}>문의 유형 *</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#8B1A2B] focus:ring-2 focus:ring-red-100 outline-none transition text-[14px]"
                    >
                      <option value="">선택해주세요</option>
                      <option>TESOL 과정 문의</option>
                      <option>AI 번역 과정 문의</option>
                      <option>AI 프롬프트 과정 문의</option>
                      <option>AI 윤리 과정 문의</option>
                      <option>ITT 정통 번역 문의</option>
                      <option>수강료 및 할인 문의</option>
                      <option>기타 문의</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] text-gray-600 mb-1.5" style={{ fontWeight: 600 }}>문의 내용 *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#8B1A2B] focus:ring-2 focus:ring-red-100 outline-none transition text-[14px] resize-none"
                    placeholder="문의 내용을 입력하세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#8B1A2B] text-white hover:bg-[#6d1422] transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  <Send className="w-4 h-4" />
                  문의 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
