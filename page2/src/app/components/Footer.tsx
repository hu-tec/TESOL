import { Link } from "react-router";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white/60">
      {/* CTA Banner */}
      <div className="bg-[#8B1A2B]">
        <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-[22px] mb-1" style={{ fontWeight: 700 }}>
              AI 시대, 당신의 경쟁력을 지금 시작하세요
            </h3>
            <p className="text-white/70 text-[15px]">
              8주 완성 TESOL부터 AI 번역, 프롬프트 교육까지
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#8B1A2B] rounded text-[15px] hover:bg-gray-100 transition-colors"
              style={{ fontWeight: 700 }}
            >
              수강 신청하기 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex px-7 py-3.5 border-2 border-white/30 text-white rounded text-[15px] hover:bg-white/10 transition-colors"
              style={{ fontWeight: 600 }}
            >
              1:1 문의
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#8B1A2B] rounded-full flex items-center justify-center">
                <span className="text-white text-[11px]" style={{ fontWeight: 700 }}>TM</span>
              </div>
              <span className="text-white text-[16px]" style={{ fontWeight: 700 }}>
                TIMES MEDIA
              </span>
            </div>
            <div className="space-y-2.5 text-[13px]">
              <p>상호명 : 주식회사 타임스미디어</p>
              <p>대표이사 : 김국진</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                서울 서초구 양재천로 19길 26, 6층(양재동)
              </p>
              <p>사업자번호 : 101-86-07479</p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                02-6207-9090
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                hutechc01@gmail.com
              </p>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white text-[15px] mb-5" style={{ fontWeight: 700 }}>학사소개</h4>
            <div className="space-y-3 text-[13px]">
              <Link to="/about" className="block hover:text-white transition-colors">타임스미디어 소개</Link>
              <Link to="/admission" className="block hover:text-white transition-colors">학사소개</Link>
              <Link to="/admission" className="block hover:text-white transition-colors">입학 안내</Link>
            </div>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white text-[15px] mb-5" style={{ fontWeight: 700 }}>교육프로그램</h4>
            <div className="space-y-3 text-[13px]">
              <Link to="/courses/tesol" className="block hover:text-white transition-colors">TESOL 영어교육</Link>
              <Link to="/courses/ai-translation" className="block hover:text-white transition-colors">AI 번역·통역</Link>
              <Link to="/courses/itt" className="block hover:text-white transition-colors">ITT 정통 통번역</Link>
              <Link to="/courses/ai-prompt" className="block hover:text-white transition-colors">AI 프롬프트</Link>
              <Link to="/courses/ai-ethics" className="block hover:text-white transition-colors">AI 윤리</Link>
            </div>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-white text-[15px] mb-5" style={{ fontWeight: 700 }}>지원 서비스</h4>
            <div className="space-y-3 text-[13px]">
              <a href="#" className="block hover:text-white transition-colors">레벨테스트 신청</a>
              <a href="#" className="block hover:text-white transition-colors">설명회 신청</a>
              <a href="#" className="block hover:text-white transition-colors">자격증 발급 신청</a>
              <Link to="/contact" className="block hover:text-white transition-colors">1:1 문의</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/30">
          <p>&copy; 2025 Times Media Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/50 transition-colors">이용약관</a>
            <a href="#" className="hover:text-white/50 transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
