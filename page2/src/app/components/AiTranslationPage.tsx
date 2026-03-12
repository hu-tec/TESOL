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
  Languages
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuickNav, MobileQuickNav, CourseSubNav, CourseMenuBar } from "./QuickNav";
import { CoreDesign } from "./CourseCommon";

const heroImg = "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYSUyMHRyYW5zbGF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE3OTA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const strengths = [
  {
    icon: Cpu,
    title: "AI-DRIVEN",
    subtitle: "최첨단 AI 번역 툴 활용",
    desc: "단순 번역을 넘어 DeepL, ChatGPT 등 최신 AI 도구를 활용한 효율적인 번역 및 교정 기법을 전수합니다.",
  },
  {
    icon: Globe,
    title: "PROFESSIONAL",
    subtitle: "실무 중심 교정 전문가 양성",
    desc: "비즈니스, IT, 의학 등 전문 분야별 용어 정리 및 문맥에 맞는 자연스러운 교정 실무를 훈련합니다.",
  },
  {
    icon: Award,
    title: "CERTIFIED",
    subtitle: "국제 공인 자격증 연계",
    desc: "ITT 국제 통번역 자격증 및 AI 번역 교정 전문가 자격증 취득을 지원하며 공신력을 확보합니다.",
  },
  {
    icon: Target,
    title: "JOB READY",
    subtitle: "즉각적인 실무 투입 가능",
    desc: "번역 에이전시, 기업 홍보팀, 외교 기관 등 실제 현장에서 요구하는 결과물을 만들어내는 능력을 키웁니다.",
  },
];

const curriculum = [
  { week: "1주차", content: "번역 개요, 가까대 구조 이해 (ITT전 보다는 AI 슬로 예약 채계 기약)" },
  { week: "2주차", content: "문맥/맥락 작업: 언어 패턴 이해 (만맥트수스파서대 및 설명 언어 예약 속 예시)" },
  { week: "3주차", content: "월사사내 언어, 근무 단에 교근 (마맨사은수퍼체마 배안 LLM 다ㅏ해 Localization)" },
  { week: "4주차", content: "전공 지식 근츠: 전복 번사 산집 (번역·분석·윤리 및 용어 (번역·기즘·소포 바법))" },
  { week: "5주차", content: "번역적용 기술: 별면 업 깐춘 속속 (번파 사오·AI 오년옹 대응 시물레이션)" },
  { week: "6주차", content: "실무 자문 가능: 간간 언어 예약 (로우 사오·AI 윤리·개이드·버전 성계)" },
  { week: "7주차", content: "스포프슨 직암 & 걸학 보고서 직성 (실분 윤리 시겅 윤업 / 답부·화보·샘플)" },
  { week: "8주차", content: "최종 프로젝트 완성 및 전문가 피드백 (최종 프롬프트태이션 & 산등급수 시험 대비)" },
];

const highlights = [
  { icon: Clock, label: "집중 교육", desc: "8주 만에 완성하는 실무 압축 과정" },
  { icon: Cpu, label: "AI 최적화", desc: "AI와 인간의 협업 능력을 극대화" },
  { icon: Target, label: "실무 매칭", desc: "현업 번역가들이 전하는 생생한 팁" },
  { icon: Handshake, label: "네트워크", desc: "번역 업계 전문가들과의 네트워킹" },
];

export function AiTranslationPage() {
  return (
    <div className="pb-24">
      <CourseSubNav />
      <QuickNav />
      <MobileQuickNav />
      
      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="AI Translation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 lg:p-12 max-w-xl border-l-4 border-[#8B1A2B]">
              <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
                AI Translation & Proofreading
              </span>
              <h1 className="text-[26px] lg:text-[36px] text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                AI가 번역하고,<br />
                당신이 완성합니다
              </h1>
              <div className="flex flex-wrap gap-3 text-white/70 text-[14px] mb-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  AI 교정 전문가 8주 완성
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  실전 프로젝트 포트폴리오
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
                Future of Translation
              </span>
              <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-5" style={{ fontWeight: 800, lineHeight: 1.35 }}>
                AI 번역 교정 전문가란?
              </h2>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                AI 기술의 발전으로 단순 번역의 시대는 끝났습니다. 이제는 AI가 생성한 초안을 바탕으로, 
                문맥과 문화를 고려하여 최종적인 완성도를 높이는 '포스트 에디팅(Post-Editing)' 능력이 필수입니다.
              </p>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                타임스 AI 번역 과정은 다양한 산업군에서 요구되는 정확하고 자연스러운 교정 능력을 배양하며, 
                AI 도구를 비서처럼 활용해 작업 속도와 퀄리티를 동시에 잡는 진정한 전문가를 양성합니다.
              </p>
              <div className="bg-red-50 p-5 border-l-4 border-[#8B1A2B]">
                <p className="text-[#8B1A2B] text-[15px]" style={{ fontWeight: 700 }}>
                  AI를 도구로 부리는 번역가, 타임스에서 시작됩니다.
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

      <CoreDesign courseName="AI 번역" />

      {/* Strengths */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Strengths
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-white" style={{ fontWeight: 800 }}>
              AI 번역 교육의 차별점
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
                key={item.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-5 bg-white p-5 border border-gray-100 hover:border-[#d4a0a0] hover:shadow-sm transition-all group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#8B1A2B] transition-colors">
                  <span className="text-[#8B1A2B] text-[14px] group-hover:text-white transition-colors" style={{ fontWeight: 800 }}>
                    W{i + 1}
                  </span>
                </div>
                <div>
                  <span className="text-[13px] text-[#8B1A2B]" style={{ fontWeight: 700 }}>{item.week}</span>
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
            AI 시대의 새로운 언어 전문가가 되세요
          </h2>
          <p className="text-white/70 text-[15px] mb-8">
            기술에 압도당하지 않고 기술을 이끄는 전문성을 갖추세요
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