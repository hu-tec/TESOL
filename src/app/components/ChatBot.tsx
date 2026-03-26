import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, ChevronRight } from "lucide-react";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-end relative">
      {/* Tooltip-like Welcome Message */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-gray-100 relative max-w-[200px]"
          >
            <p className="text-[13px] text-[#1a1a2e] font-medium leading-tight">
              무엇을 도와드릴까요? 실시간 문의하기
            </p>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white w-[340px] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 mb-4"
            style={{ maxHeight: "calc(100vh - 120px)" }}
          >
            {/* Header */}
            <div className="bg-[#1a1a2e] p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-[15px] font-bold">실시간 문의하기</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col overflow-hidden bg-[#f8f9fa]">
              {/* Top Banner - Custom Styled Layout */}
              <div className="w-full bg-[#FFD700] p-6 flex items-center gap-4 border-b border-black/5">
                <div className="w-16 h-24 bg-white rounded-lg shadow-md border-2 border-gray-100 flex flex-col items-center p-2 relative shrink-0">
                  <div className="w-full h-1 bg-gray-200 rounded-full mb-2" />
                  <div className="grid grid-cols-2 gap-1 w-full mb-1">
                    <div className="aspect-square bg-blue-400 rounded-sm" />
                    <div className="aspect-square bg-green-400 rounded-sm" />
                    <div className="aspect-square bg-red-400 rounded-sm" />
                    <div className="aspect-square bg-yellow-400 rounded-sm" />
                  </div>
                  <div className="mt-auto w-4 h-4 rounded-full border border-gray-200" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[#1a1a2e] text-[20px] font-black leading-tight tracking-tight">
                    실시간 문의
                  </h3>
                  <p className="text-[#1a1a2e] text-[13px] font-bold opacity-80">
                    언제든지 문의하세요
                  </p>
                </div>
              </div>

              {/* Chat Area (Simulated) */}
              <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4">
                <div className="flex flex-col gap-1 max-w-[85%]">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                    <p className="text-[14px] text-gray-700 leading-relaxed">
                      이곳에 문의하실 내용을 입력해 주시기 바랍니다.
                    </p>
                  </div>
                </div>

                {/* Simulated Form Fields as per image */}
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4 mt-4">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="agree" className="w-4 h-4 accent-[#1a1a2e]" />
                    <label htmlFor="agree" className="text-[12px] text-gray-500">
                      개인정보활용동의 [보기]
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="010"
                      className="w-16 h-10 px-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:border-[#1a1a2e] text-center"
                    />
                    <span className="text-gray-300">-</span>
                    <input
                      type="text"
                      className="flex-1 h-10 px-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:border-[#1a1a2e]"
                    />
                    <span className="text-gray-300">-</span>
                    <input
                      type="text"
                      className="flex-1 h-10 px-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:border-[#1a1a2e]"
                    />
                  </div>
                  <button className="w-full py-3 bg-[#1a1a2e] text-white rounded-lg flex items-center justify-center gap-2 font-bold text-[14px] hover:bg-black transition-colors group">
                    문의내용 접수하기
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Input (Optional, for looks) */}
              <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 h-10 px-4 bg-gray-50 border border-gray-200 rounded-full text-[13px] focus:outline-none focus:border-[#1a1a2e] focus:bg-white transition-all"
                />
                <button className="w-10 h-10 bg-[#1a1a2e] text-white rounded-full flex items-center justify-center hover:bg-black transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen ? "bg-white text-[#1a1a2e] rotate-90" : "bg-[#1a1a2e] text-white"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
