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
  Sparkles,
  Command
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuickNav, MobileQuickNav, CourseSubNav, CourseMenuBar } from "./QuickNav";
import { CoreDesign } from "./CourseCommon";

const heroImg = "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYSUyMGNvbXB1dGluZyUyMG1haW5mcmFtZXxlbnwxfHx8fDE3NzE3OTA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const strengths = [
  {
    icon: Sparkles,
    title: "PROMPT DESIGN",
    subtitle: "고도화된 프롬프트 설계",
    desc: "AI의 답변 품질을 결정하는 정교한 프롬프트 구성 능력을 배우고, 상황별 최적의 명령어를 설계합니다.",
  },
  {
    icon: Command,
    title: "TOOL MASTERY",
    subtitle: "다양한 생성형 AI 마스터",
    desc: "ChatGPT, Claude, Midjourney 등 텍스트부터 이미지까지 다양한 AI 툴을 실무에 즉시 적용하는 법을 익힙니다.",
  },
  {
    icon: Zap,
    title: "PRODUCTIVITY",
    subtitle: "업무 효율 10배 향상",
    desc: "기획서 작성, 데이터 분석, 마케팅 문구 생성 등 단순 반복 업무를 자동화하고 고부가가치 업무에 집중합니다.",
  },
  {
    icon: GraduationCap,
    title: "FUTURE SKILL",
    subtitle: "미래 직무 핵심 역량",
    desc: "모든 산업군에서 요구하는 AI 리터러시를 갖추고 프롬프트 엔지니어 및 AI 활용 전문가로 거듭납니다.",
  },
];

const curriculum = [
  { week: "1주차", content: "프롬프트 개요 - AI와 대화하는 기초 (교육급수: 초중고, 일반 어휘상)" },
  { week: "2주차", content: "분석 만들기 - 국적·프롬프트 인사료 (비즈니스급수: 업무 시뮬레이션·기법 보고서 작업 역량 강화)" },
  { week: "3주차", content: "분석 만들기 - 콘텐츠·국영 문화 분야 (비즈니스급수: 비즈니스 문서·작성·지표 자료)" },
  { week: "4주차", content: "창의적 안법 - 스토리·텔링 에세이 (비즈니스급수: 마케팅 카피·광고 콘텐츠)" },
  { week: "5주차", content: "문서·창의 융합 실습 (전문급수: 모고사·마케팅 프롬프트 실계)" },
  { week: "6주차", content: "AI 윤리·안전 기초 학습 (전문급수: 실무 윤리 시재 / 답부·화보 샘플)" },
  { week: "7주차", content: "프롬프트 - 나만의 AI 학습 노드 (전문급수: 실무별 윤리 적용 / 답부·화보·진문)" },
  { week: "8주차", content: "최종 시재·피드백 & 교육관수 사람 대비 (최종 프롬프트태이션 & 비즈니스급수 사람 대비)" },
];

const highlights = [
  { icon: Cpu, label: "최신 기술", desc: "매일 업데이트되는 AI 트렌드 반영" },
  { icon: Target, label: "실습 위주", desc: "이론보다 강력한 100% 실습 수업" },
  { icon: Zap, label: "즉시 활용", desc: "배운 즉시 내 업무에 바로 적용" },
  { icon: Award, label: "수료증 발급", desc: "AI 활용 능력을 증명하는 수료증" },
];

export function AiPromptPage() {
  return (
    <div className="pb-24">
      <CourseSubNav />
      <QuickNav />
      <MobileQuickNav />

      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="AI Prompt" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 lg:p-12 max-w-xl border-l-4 border-[#8B1A2B]">
              <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
                Generative AI Prompt Engineering
              </span>
              <h1 className="text-[26px] lg:text-[36px] text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                명령 한 줄로<br />
                세상을 바꾸는 기술
              </h1>
              <div className="flex flex-wrap gap-3 text-white/70 text-[14px] mb-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  생성형 AI 실무 마스터 8주
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  프롬프트 엔지니어 양성
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
                Mastering AI Interaction
              </span>
              <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-5" style={{ fontWeight: 800, lineHeight: 1.35 }}>
                프롬프트 교육이란?
              </h2>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                AI와 대화하는 능력은 이제 선택이 아닌 생존의 필수 역량이 되었습니다. 
                똑같은 AI를 사용하더라도 어떤 질문을 던지느냐에 따라 결과물의 수준은 천차만별입니다.
              </p>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                타임스 AI 프롬프트 과정은 단순히 AI 사용법을 넘어, AI의 논리 구조를 이해고 
                내가 원하는 최고의 답을 끌어내는 '설계 능력'을 가르칩니다. 당신의 비즈니스와 일상을 AI로 혁신하세요.
              </p>
              <div className="bg-red-50 p-5 border-l-4 border-[#8B1A2B]">
                <p className="text-[#8B1A2B] text-[15px]" style={{ fontWeight: 700 }}>
                  질문의 차이가 결과의 차이를 만듭니다.
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

      <CoreDesign courseName="AI 프롬프트" />

      {/* Strengths */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Strengths
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-white" style={{ fontWeight: 800 }}>
              AI 프롬프트 교육의 강점
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
            당신의 창의력을 AI로 완성하세요
          </h2>
          <p className="text-white/70 text-[15px] mb-8">
            프롬프트 엔지니어링으로 앞서가는 미래 전문가가 되세요
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