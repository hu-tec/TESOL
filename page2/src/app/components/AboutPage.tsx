import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Award,
  Globe,
  Users,
  Shield,
  BookOpen,
  Building,
  Handshake,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const campusImg = "https://images.unsplash.com/photo-1770827730835-221bd728c012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzE3Njc5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const teamImg = "https://images.unsplash.com/photo-1758873269461-49cfd01504c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBpbnRlcm5hdGlvbmFsJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzcxODE3NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const timeline = [
  { year: "2026", event: "누적학생수 23,000명 달성" },
  { year: "2017", event: "타임스미디어 누적졸업생 12000명 돌파" },
  { year: "2016", event: "유비쿼티스 교육진행" },
  { year: "2015", event: "실무 비즈니스 ProMBA과정 개설 / 중국대 비즈니스 통역과정 개설" },
  { year: "2014", event: "ITT 미국 캘리포니아 시험센터 오픈 / 경남 ICS국제학교 개교 / 용산교육연수원 교사교육" },
  { year: "2013", event: "ITT 법무부 통역번역 자격증 공증 자격증 체택 / 미국 캘리포니아 대학 성인수 교육과정 개설" },
  { year: "2012", event: "IVY Junior 어학원, 공부방 프랜차이즈 오픈 / 미국 Concordia 코네티컷 협약 / CJ 나눔재단 드림스타트 진행 / 1,000여명의 대학생 태솔교육사 양성 / 3,000여명 지역아동센터 아동 교육" },
  { year: "2011", event: "세계최초 LGBT기반 ITT 시험시행 / 캐나다 ITT 시험센터 오픈 (KGIC)" },
  { year: "2010", event: "서울교육대 영어문모교사 양성과정 개설" },
  { year: "2009", event: "미국 AEF 한국센터 자정 / 아이비리그 유명 교수초청 특강 / 동남대 캘리포니아수필대 태솔과정 협약" },
  { year: "2008", event: "서울시교육청 교원직무연수기관 지정 / 생애나타노, 캘리포니아수필대 태솔과정 협약 / 노바피츠대 교육대학원 업무협약" },
  { year: "2007", event: "영어회화전문강사 고객 발간 및 교육과정 진행" },
  { year: "2006", event: "국제통역번역시험위원회 문화관광부 비영리단체 등록" },
  { year: "2005", event: "의료관광 및 의료 통역 교육진행 / Pro-MBA 비지니스 과정 진행" },
  { year: "2004", event: "태솔 과정 오픈 / (서울 및 부산 - 각 대학)" },
  { year: "1997~2004", event: "타임스 미디어 설립 / 기업체 유고교육 진행 / 통번역 시업진행 / 카나다, 호주, 국내 영어 캠프 진행 / 비영리 시업법인 국제통역번역시험 단체 발족" }
];

const partners = [
  "부산대학교", "동국대학교", "한림대학교", "영남대학교",
  "연세대학교", "한동대학교", "단국대학교", "국제통번역협회",
  "ITT시험위원회", "코리아헤럴드", "롱비치 대학교", "노바대학교",
];

const features = [
  {
    icon: Globe,
    title: "23년 글로벌 교육 전문",
    desc: "미국, 캐나다, 중국 등 해외대학과 연세대 등 국내 명문대학 공동 운영",
  },
  {
    icon: Shield,
    title: "국내최초 AI 윤리·보안 시험",
    desc: "AI 프롬프트, AI 통역·번역 교육과 전통 교육의 결합",
  },
  {
    icon: Award,
    title: "28년 시험운영",
    desc: "법무부 공증 자격 시험(ITT), 다언어 전문인력 평가",
  },
  {
    icon: Handshake,
    title: "2030년 실무 현장 중심 기업 연계",
    desc: "전문가 협업, 미래 인재양성, 국제 글로벌 네트워크",
  },
];

const aiFeatures = [
  "AI활용을 통해 차세대 미래 인재 양성",
  "20년 전문가 집단지성 활용 AI 감시, 평가, 검증, 승인 전문 인재 양성",
  "공통 AI윤리교육과 보안교육을 통한 기초 인력 양성",
  "로봇, 바이오, 방산, 마케팅 등 분야 활용 가능한 실무형 인재 양성",
  "전문가(20년 전문)의 노하우와 AI를 결합한 교육",
];

export function AboutPage() {
  return (
    <div>
      {/* Hero - Unicamp Style */}
      <section className="relative min-h-[400px] lg:min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback src={campusImg} alt="Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 lg:p-12 max-w-xl">
              <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
                About Times Media
              </span>
              <h1 className="text-[28px] lg:text-[38px] text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                AI 시대에도, 사람을 키우는 건<br />
                결국 사람입니다.
              </h1>
              <p className="text-white/70 text-[15px]" style={{ lineHeight: 1.7 }}>
                2004년 설립된 (주)타임스미디어는 23년 동안 글로벌 인재를 배출해온 교육 전문기관입니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "3만명+", label: "TESOL 전문교사 양성" },
              { num: "30만명+", label: "ITT 인재평가시험" },
              { num: "10개+", label: "국내 대학 센터" },
              { num: "12개", label: "지원 언어" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[30px] lg:text-[36px] text-[#8B1A2B]" style={{ fontWeight: 800 }}>{s.num}</div>
                <div className="text-gray-500 text-[14px] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#faf8f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Core Value
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>
              타임스미디어의 핵심 가치
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-7 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-[#8B1A2B]" />
                  </div>
                  <h3 className="text-[16px] text-[#1a1a2e] mb-2" style={{ fontWeight: 700 }}>
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-[14px]" style={{ lineHeight: 1.7 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Education Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-5 block" style={{ fontWeight: 600 }}>
                AI + Education
              </span>
              <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-6" style={{ fontWeight: 800, lineHeight: 1.35 }}>
                전통 교육에 AI를 결합한<br />
                차세대 교육 혁신
              </h2>
              <p className="text-gray-600 text-[15px] mb-8" style={{ lineHeight: 1.8 }}>
                전통 교육 방식에 AI 툴 활용법과 AI 프롬프트, AI 통역·번역 기술을 결합하여
                미래 인재를 양성합니다.
              </p>
              <div className="space-y-3">
                {aiFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8B1A2B] mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-[14px]" style={{ lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden h-[380px]">
              <ImageWithFallback src={teamImg} alt="Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-5 border border-white/20">
                <p className="text-white text-[15px]" style={{ fontWeight: 500 }}>
                  "언어는 기술이지만, 소통은 예술입니다."
                </p>
                <p className="text-white/60 text-[13px] mt-1">타임스미디어</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-6 block" style={{ fontWeight: 600 }}>
            Why TESOL & Translation, Why Now?
          </span>
          <h2 className="text-[24px] lg:text-[30px] text-white mb-6" style={{ fontWeight: 700, lineHeight: 1.4 }}>
            AI가 언어의 경계를 무너뜨리고 있지만,<br className="hidden lg:block" />
            단어를 '이해'하고, 맥락을 '전달'하는 일은{" "}
            <span className="text-[#e8a0a0]">여전히 사람의 영역</span>입니다.
          </h2>
          <div className="space-y-4 text-white/60 text-[15px] max-w-3xl mx-auto mb-10" style={{ lineHeight: 1.8 }}>
            <p>AI 번역은 의미를 전달하지만, 사람은 관계와 감정을 함께 전달합니다.</p>
            <p>프롬프트 시대일수록, AI를 활용하는 사람의 판단력과 기획력이 경쟁력입니다.</p>
            <p>TESOL 교사교육, ITT 정통 언어(통역·번역)교육, 그리고 AI 자격교육은 미래 비즈니스, 글로벌 교류를 위한 핵심 무기입니다.</p>
          </div>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#8B1A2B] rounded">
            <BookOpen className="w-6 h-6 text-white" />
            <div className="text-left">
              <div className="text-white text-[14px]" style={{ fontWeight: 700 }}>FUTURE PROOF</div>
              <div className="text-white/60 text-[12px]">미래에도 흔들리지 않는 커리어를 만듭니다</div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#faf8f6] p-8 lg:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto bg-[#8B1A2B] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-[24px]" style={{ fontWeight: 700 }}>TM</span>
              </div>
              <h3 className="text-[20px] text-[#1a1a2e] mb-1" style={{ fontWeight: 700 }}>
                타임스미디어 일동
              </h3>
            </div>
            <div className="text-gray-600 text-[15px] space-y-4" style={{ lineHeight: 1.9 }}>
              <p>
                타임스 미디어는 2001년 사업을 시작하며 ITT 정통 통역·번역 수업과 TESOL 과정을 운영하며,
                수많은 전문가를 배출해왔습니다.
              </p>
              <p>
                앞으로는 그 전통 위에 AI 통역·번역 교육을 더해, 미래 세대가 세계 어디서든 경쟁력 있는
                커뮤니케이터가 될 수 있도록 하겠습니다.
              </p>
              <p className="text-[#8B1A2B]" style={{ fontWeight: 600 }}>
                "23년간 3만 명" - 저희가 배출한 졸업생들은 학교, 기업, 정부, 해외 현장에서 세계와 연결되는 다리가 되었습니다.
              </p>
              <p>
                여러분이 해외 교육이나 취업을 꿈꾸든, 글로벌 시장에서 프로젝트를 이끌든, AI 시대에도
                대체 불가능한 언어 전문가가 되고 싶든, 그 길에 타임스 TESOL & ITT 언어(통역번역) & AITe
                인공지능 프롬프트 교육팀이 든든한 동반자가 되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#faf8f6] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              History
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>
              타임스미디어 연혁
            </h2>
          </div>

          <div className="relative pb-10 overflow-x-auto scrollbar-hide">
            <div className="min-w-[1000px] px-4">
              {/* Row 1: Recent (2026 - 2012) */}
              <div className="relative mb-24">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
                <div className="flex justify-between relative z-10">
                  {timeline.slice(0, 8).map((item, i) => (
                    <motion.div
                      key={`${item.year}-${i}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex flex-col items-center text-center w-[120px]"
                    >
                      <div className="mb-4 bg-white px-3 py-1.5 rounded-full border border-[#8B1A2B] shadow-sm">
                        <span className="text-[#8B1A2B] text-[15px] font-bold">{item.year}</span>
                      </div>
                      <div className="w-4 h-4 bg-[#8B1A2B] rounded-full border-4 border-white shadow-sm mb-4" />
                      <p className="text-gray-600 text-[12px] leading-snug line-clamp-3">
                        {item.event}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Row 2: Past (2011 - 1997) */}
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
                <div className="flex justify-between relative z-10">
                  {timeline.slice(8, 16).map((item, i) => (
                    <motion.div
                      key={`${item.year}-${i}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i + 8) * 0.05 }}
                      className="flex flex-col items-center text-center w-[120px]"
                    >
                      <div className="mb-4 bg-white px-3 py-1.5 rounded-full border border-gray-300 shadow-sm">
                        <span className="text-gray-500 text-[15px] font-bold">{item.year}</span>
                      </div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-sm mb-4" />
                      <p className="text-gray-400 text-[12px] leading-snug line-clamp-3">
                        {item.event}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Centers & Global Network */}
      <section className="py-20 bg-[#faf8f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Organization & Global Network
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-[#1a1a2e] mb-3" style={{ fontWeight: 800 }}>
              교육 네트워크 현황
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Column 1: 교육장 소개 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b-2 border-[#8B1A2B]">
                <Building className="w-5 h-5 text-[#8B1A2B]" />
                <h3 className="text-[17px] font-bold text-[#1a1a2e]">교육장 소개</h3>
              </div>
              <div className="space-y-3">
                {[
                  { title: "서울강남교육센터", desc: "강남구 논현동 소재" },
                  { title: "서울역센터", desc: "중구 남대문로 소재" },
                  { title: "연세대센터", desc: "서대문구 연세로 소재" },
                  { title: "단국대센터", desc: "죽전캠퍼스 소재" },
                  { title: "동국대센터", desc: "중구 필동 소재" },
                  { title: "한림대센터", desc: "춘천캠퍼스 소재" },
                  { title: "부산대센터", desc: "금정구 장전동 소재" },
                  { title: "제주센터", desc: "제주시 소재" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 border border-gray-100 hover:shadow-sm transition-shadow flex items-center gap-4">
                    <div className="w-12 h-12 bg-white flex-shrink-0 flex items-center justify-center border border-gray-100">
                      <ImageWithFallback src={`/img/logo/center_${i+1}.png`} alt={item.title} className="max-w-[90%] max-h-[90%] object-contain" />
                    </div>
                    <div>
                      <h4 className="text-[14px] text-[#1a1a2e] font-bold">{item.title}</h4>
                      <p className="text-gray-500 text-[11px] mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: 국내 협약 대학 및 기관 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b-2 border-[#8B1A2B]">
                <GraduationCap className="w-5 h-5 text-[#8B1A2B]" />
                <h3 className="text-[17px] font-bold text-[#1a1a2e]">국내 협약 기관</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: "연세대학교", desc: "언어교육원 협약 및 공동운영" },
                  { name: "동국대학교", desc: "행정대학원 MOU 및 테솔과정" },
                  { name: "부산대학교", desc: "언어교육원 테솔 교육센터" },
                  { name: "한림대학교", desc: "글로벌 교육 협력 및 산학협력" },
                  { name: "단국대학교", desc: "테솔 및 통번역 전문가 과정" },
                  { name: "코리아헤럴드", desc: "ITT 시험 공식 협력 매체" },
                  { name: "KNN TV / CBS", desc: "교육문화사업 공식 파트너" },
                  { name: "국제통번역시험위원회", desc: "ITT 시험 주관 및 관리" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 border border-gray-100 hover:shadow-sm transition-shadow flex items-center gap-4">
                    <div className="w-12 h-12 bg-white flex-shrink-0 flex items-center justify-center border border-gray-100">
                      <ImageWithFallback src={`/img/logo/partner_${i+1}.${i === 7 ? 'jpg' : 'png'}`} alt={item.name} className="max-w-[90%] max-h-[90%] object-contain" />
                    </div>
                    <div>
                      <h4 className="text-[14px] text-[#1a1a2e] font-bold">{item.name}</h4>
                      <p className="text-gray-500 text-[11px] mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: 해외 대학 / 업무 협약 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b-2 border-[#8B1A2B]">
                <Globe className="w-5 h-5 text-[#8B1A2B]" />
                <h3 className="text-[17px] font-bold text-[#1a1a2e]">해외 대학/업무 협약</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: "UBC", loc: "캐나다" },
                  { name: "STIBC", loc: "캐나다" },
                  { name: "Purdue University", loc: "미국" },
                  { name: "CSULB", loc: "미국" },
                  { name: "USM", loc: "미국" },
                  { name: "IVY Tech", loc: "미국" },
                  { name: "LA 한미교육원", loc: "미국" },
                  { name: "미국 테솔 협회", loc: "미국" },
                  { name: "콩코디아 대학", loc: "미국" },
                  { name: "NATTI", loc: "호주" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-3 border border-gray-100 flex items-center justify-between hover:shadow-sm transition-shadow group">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white flex-shrink-0 flex items-center justify-center border border-gray-100">
                        <ImageWithFallback src={`/img/logo/global_${i+1}.png`} alt={item.name} className="max-w-[90%] max-h-[90%] object-contain" />
                      </div>
                      <span className="text-[13px] text-[#1a1a2e] font-bold">{item.name}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full group-hover:bg-[#8B1A2B] group-hover:text-white transition-colors">
                      {item.loc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4: 해외교육센터 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b-2 border-[#8B1A2B]">
                <Shield className="w-5 h-5 text-[#8B1A2B]" />
                <h3 className="text-[17px] font-bold text-[#1a1a2e]">해외교육센터</h3>
              </div>
              <div className="space-y-3">
                {[
                  { title: "ASACP PRO 중심센터", desc: "글로벌 전문가 양성 핵심 거점" },
                  { title: "국제교육센터", desc: "Global Education Hub" },
                  { title: "캐나다 ITT 시험센터", desc: "KGIC 협력 및 현지 운영" },
                  { title: "미국 캘리포니아 센터", desc: "ITT 시험 및 교육 지원" },
                  { title: "중국 비즈니스 센터", desc: "통번역 및 실무 교육 진행" },
                  { title: "AITe 글로벌 센터", desc: "AI 인공지능 프롬프트 국제본부" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 border border-gray-100 hover:shadow-sm transition-shadow flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 flex-shrink-0 flex items-center justify-center border border-gray-100">
                      <ImageWithFallback src={`/img/logo/overseas_${i+1}.png`} alt={item.title} className="max-w-[80%] max-h-[80%] object-contain grayscale opacity-60" />
                    </div>
                    <div>
                      <h4 className="text-[14px] text-[#1a1a2e] font-bold">{item.title}</h4>
                      <p className="text-gray-500 text-[11px] mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-8 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-2">
                    {["TIMES TESOL", "ITT 시험본부", "TIMES HR", "ICS국제학교"].map((name, i) => (
                      <div key={i} className="bg-[#1a1a2e] text-white text-center py-2 px-1 text-[11px] font-bold">
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#8B1A2B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-[26px] lg:text-[32px] mb-4" style={{ fontWeight: 800 }}>
            곧 전국 교실을 넘어 전세계에서 만나겠습니다
          </h2>
          <p className="text-white/60 text-[15px] mb-8">
            AI 시대, 당신의 경쟁력을 타임스미디어와 함께 시작하세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8B1A2B] text-[16px] hover:bg-gray-100 transition"
              style={{ fontWeight: 700 }}
            >
              수강 신청하기 <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white text-[16px] hover:bg-white/10 transition"
              style={{ fontWeight: 600 }}
            >
              1:1 문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}