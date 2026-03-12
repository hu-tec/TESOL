import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Zap,
  Globe,
  Award,
  Users,
  CheckCircle,
  Clock,
  Mic,
  BookOpen,
  Presentation,
  Handshake,
  GraduationCap,
  Briefcase,
  Target,
  Star,
  Cpu,
  ShieldCheck,
  Languages,
  FileText,
  Search
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuickNav, MobileQuickNav, CourseSubNav, CourseMenuBar } from "./QuickNav";
import { CoreDesign } from "./CourseCommon";

const heroImg = "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzdHVkeXxlbnwxfHx8fDE3NzE3OTA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const strengths = [
  {
    icon: Languages,
    title: "PROFESSIONAL ITT",
    subtitle: "정통 통번역 스킬 함양",
    desc: "ITT(Interpretation and Translation Test) 국제 비즈니스 통번역 자격증 취득을 위한 전문적인 커리큘럼을 제공합니다.",
  },
  {
    icon: FileText,
    title: "DOCUMENT MASTERY",
    subtitle: "실무 문서 번역 완벽 가이드",
    desc: "비즈니스 계약서, 보도자료, 매뉴얼 등 실제 현업에서 사용되는 다양한 텍스트를 정교하게 번역하는 능력을 기릅니다.",
  },
  {
    icon: Mic,
    title: "INTERPRETATION",
    subtitle: "순차 통역 실무 훈련",
    desc: "비즈니스 미팅, 세미나, 컨퍼런스 등에서 즉각적으로 대처할 수 있는 순차 통역 역량을 집중적으로 훈련합니다.",
  },
  {
    icon: Search,
    title: "DETAIL-ORIENTED",
    subtitle: "철저한 피드백과 교정",
    desc: "현직 전문 통번역사의 1:1 맞춤형 피드백을 통해 미세한 뉘앙스 차이까지 잡아내는 전문가로 성장합니다.",
  },
];

const curriculum = [
  { 
    module: "Module 1", 
    title: "ITT전문 통번역 과정 / ITT비즈니스 통번역 과정 / ITT비즈니스 패어화(3급)과정",
    content: "인문사회 (일반·사회·문화·무역 등) / Management (전산·혁신·투자·프로젝트·공품그·기술 문석) / Business Conversation (실무·교육일어)"
  },
  {
    module: "Module 2",
    title: "경제경영 / Document / Business English",
    content: "비즈니스·무역·근융·유통·제조·윤기·혁생·계약 등 / 프로군·콩색어사·아흔중·갈부상·무역사문·교수행사대·굽환등 / 실사·사석 용삭 자문·사대화리 등"
  },
  {
    module: "Module 3",
    title: "과학기술 / Marketing",
    content: "경제·IT·Bio·산학언·음원·측사·축산·희귀·특산 등 / 홍보·무고·사업부무·배상 차·부제·책빙사와 등 증빙사문 등"
  }
];

const highlights = [
  { icon: Award, label: "공신력 확보", desc: "국제 비즈니스 통번역 자격증 취득" },
  { icon: Languages, label: "언어 감각", desc: "한국어와 영어 사이의 완벽한 가교 역할" },
  { icon: Briefcase, label: "커리어 점프", desc: "통번역 에이전시 및 대기업 취업 경쟁력" },
  { icon: Target, label: "실무 중심", desc: "이론이 아닌 바로 쓰이는 현장 영어" },
];

export function IttCoursePage() {
  return (
    <div className="pb-24">
      <CourseSubNav />
      <QuickNav />
      <MobileQuickNav />

      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="ITT Translation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 lg:p-12 max-w-xl border-l-4 border-[#8B1A2B]">
              <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
                ITT Business Interpretation & Translation
              </span>
              <h1 className="text-[26px] lg:text-[36px] text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                비즈니스의 핵심을<br />
                언어로 잇다
              </h1>
              <div className="flex flex-wrap gap-3 text-white/70 text-[14px] mb-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  ITT 국제 자격증 8주 완성
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  전문가 1:1 맞춤 피드백
                </span>
              </div>
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B1A2B] text-white text-[14px] hover:bg-[#6d1422] transition-colors"
                style={{ fontWeight: 600 }}
              >
                수강 신청하기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          {/* Quick Nav Bar - Position 3 */}
          <div className="mt-12 hidden md:block">
            <CourseMenuBar />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-5 block" style={{ fontWeight: 600 }}>
                Professional Communication
              </span>
              <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-5" style={{ fontWeight: 800, lineHeight: 1.35 }}>
                ITT 정통 통번역 과정이란?
              </h2>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                글로벌 비즈니스 현장에서 정확한 의미 전달은 기업의 성패를 결정짓는 핵심 요소입니다. 
                ITT(Interpretation and Translation Test)는 실무 능력을 객관적으로 평가하는 공신력 있는 자격 시험입니다.
              </p>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                타임스 ITT 과정은 단순한 언어 지식을 넘어, 문맥에 대한 깊은 이해와 전문적인 표현력을 함양합니다. 
                현직 전문 통번역사들의 노하우를 직접 전수받아, 언어의 장벽을 허무는 진짜 전문가로 성장하세요.
              </p>
              <div className="bg-red-50 p-5 border-l-4 border-[#8B1A2B]">
                <p className="text-[#8B1A2B] text-[15px]" style={{ fontWeight: 700 }}>
                  정확하고 세련된 통번역, 비즈니스의 품격을 높입니다.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-5 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-11 h-11 bg-red-50 rounded-full flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#8B1A2B]" />
                    </div>
                    <h4 className="text-[14px] text-[#1a1a2e] mb-1" style={{ fontWeight: 700 }}>{h.label}</h4>
                    <p className="text-[12px] text-gray-500" style={{ lineHeight: 1.5 }}>{h.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CoreDesign courseName="ITT 정통번역" />

      {/* Strengths */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Strengths
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-white" style={{ fontWeight: 800 }}>
              ITT 교육의 특장점
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-7 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="w-12 h-12 bg-[#8B1A2B] rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-[18px] mb-1" style={{ fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <p className="text-[#e8a0a0] text-[14px] mb-3" style={{ fontWeight: 500 }}>
                    {s.subtitle}
                  </p>
                  <p className="text-white/50 text-[14px]" style={{ lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Curriculum
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>
              세부 커리큘럼
            </h2>
          </div>
          <div className="space-y-3">
            {curriculum.map((item, i) => (
              <motion.div
                key={item.module}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-5 bg-white p-5 border border-gray-100 hover:border-[#d4a0a0] hover:shadow-sm transition-all group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#8B1A2B] transition-colors">
                  <span className="text-[#8B1A2B] text-[14px] group-hover:text-white transition-colors" style={{ fontWeight: 800 }}>
                    M{i + 1}
                  </span>
                </div>
                <div>
                  <span className="text-[13px] text-[#8B1A2B]" style={{ fontWeight: 700 }}>{item.title}</span>
                  <p className="text-gray-700 text-[14px] mt-0.5">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#8B1A2B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-[26px] lg:text-[32px] mb-3" style={{ fontWeight: 800 }}>
            당신의 언어 실력을 자격으로 증명하세요
          </h2>
          <p className="text-white/70 text-[15px] mb-8">
            ITT 국제 통번역 자격증으로 글로벌 전문가로서의 입지를 다지세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8B1A2B] text-[16px] hover:bg-gray-100 transition"
              style={{ fontWeight: 700 }}
            >
              수강 신청하기 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}