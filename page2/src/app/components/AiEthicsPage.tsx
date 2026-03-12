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
  Scale,
  Lock
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuickNav, MobileQuickNav, CourseSubNav, CourseMenuBar } from "./QuickNav";
import { CoreDesign } from "./CourseCommon";

const heroImg = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwYWklMjBldGhpY3N8ZW58MXx8fHwxNzcxNzkwNDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const strengths = [
  {
    icon: Scale,
    title: "ETHICAL LITERACY",
    subtitle: "AI 윤리적 사고 배양",
    desc: "AI 기술의 파급효과와 함께 발생할 수 있는 편향성, 책임 소재, 권리 보호 등 윤리적 쟁점을 심도 있게 다룹니다.",
  },
  {
    icon: Lock,
    title: "COMPLIANCE",
    subtitle: "글로벌 AI 규제 및 법규",
    desc: "EU AI법 등 전 세계적으로 강화되는 AI 관련 법규와 가이드라인을 학습하여 기업의 리스크를 관리하는 능력을 키웁니다.",
  },
  {
    icon: ShieldCheck,
    title: "TRUSTWORTHY AI",
    subtitle: "신뢰 가능한 AI 구현",
    desc: "사용자가 안심하고 사용할 수 있는 AI 서비스 기획 및 운영을 위한 필수 체크리스트와 프레임워크를 전수합니다.",
  },
  {
    icon: Users,
    title: "SOCIETAL IMPACT",
    subtitle: "사회적 책임과 거버넌스",
    desc: "AI가 사회에 미치는 긍정적·부정적 영향을 분석하고, 지속 가능한 AI 생태계 구축을 위한 리더의 역할을 고민합니다.",
  },
];

const curriculum = [
  { week: "1주차", content: "AI 윤리 개론: 윤리는 AI 사용 습관 (교육급수: 초중고, 일반 어휘상 / 비즈니스급수: 대학생, 직장인 / 전문급수: AI 전문가, 개발자, 연구자)" },
  { week: "2주차", content: "개인정보 보호 기초 (계인정보 보호: 시각권 아해 / 경영실 인편 법상 / 개인정보·데이터권리(국내 국제) 실해)" },
  { week: "3주차", content: "시각권 아해 (텍스트·이미지 응답) (공정상·편향 법상 아해: 데이터 보안 실무 / 국제 규범·산업별 사학윤 / 영·교육윤 편향·데이터 윤리)" },
  { week: "4주차", content: "공정성·편향 법상 아해 (가입 윤리 개념 (개인정보, 시각권 기초) / 실무 시제 개발 윤리 교육 (가입·소지 증식) / 산업별 윤리 목위 (반부·의료·금융·교육 등))" },
  { week: "5주차", content: "안전·오남용 법상 기초 (나만의 AI 윤리 수석 만들기 / 가입 AI 윤리 개이드·버전 설계 / 산업별 윤리 매뉴얼 / 접적 보고서 작성)" },
  { week: "6주차", content: "사상상 감옥: 허격정보 식별 (AI 기즘 윤리 활용 인증 (감독급수 시험 대비) / 실무 작업 증식 윤리 인증 (비즈니스급수 시험 대비) / 국제표준 준수 전문가 인증 (전문급수 시험 대비))" },
  { week: "7주차", content: "규정 준수(보고·영상 증식) (가입·가업 규정 준수 및 리포트 작성 / 국제 규범 + 산업별 상황 적용)" },
  { week: "8주차", content: "종합 실습: 나만의 AI 윤리 가이드 작성 (최종 프롬프트테이션 & 산등급수 시험 대비)" },
];

const highlights = [
  { icon: ShieldCheck, label: "안전 최우선", desc: "기술 발전보다 중요한 안전한 사용" },
  { icon: Scale, label: "균형 잡힌 시각", desc: "기술과 인간 사이의 균형점 찾기" },
  { icon: Globe, label: "글로벌 표준", desc: "세계가 요구하는 AI 윤리 기준 학습" },
  { icon: Award, label: "전문가 인증", desc: "AI 윤리 리터러시 전문가 과정 수료" },
];

export function AiEthicsPage() {
  return (
    <div className="pb-24">
      <CourseSubNav />
      <QuickNav />
      <MobileQuickNav />

      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="AI Ethics" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 lg:p-12 max-w-xl border-l-4 border-[#8B1A2B]">
              <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
                AI Ethics & Literacy Specialist
              </span>
              <h1 className="text-[26px] lg:text-[36px] text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                기술을 다루는<br />
                가장 올바른 기준
              </h1>
              <div className="flex flex-wrap gap-3 text-white/70 text-[14px] mb-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  AI 윤리 리터러시 8주 완성
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  글로벌 AI 규제 트렌드 마스터
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
                Responsible Technology
              </span>
              <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-5" style={{ fontWeight: 800, lineHeight: 1.35 }}>
                AI 윤리 교육이란?
              </h2>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                AI 기술이 우리 삶의 모든 영역에 깊숙이 들어오면서, 기술의 '성능'만큼이나 '올바른 사용'이 중요해졌습니다. 
                윤리적 기반이 없는 AI 기술은 사회적 갈등을 유발하고 기업에 막대한 리스크를 초래할 수 있습니다.
              </p>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                타임스 AI 윤리 과정은 단순히 '하지 말아야 할 것'을 배우는 것을 넘어, AI 시대에 인간이 지켜야 할 가치와 
                책임을 정의하고, 이를 실천하기 위한 법적·제도적·사회적 역량을 함양하는 과정입니다.
              </p>
              <div className="bg-red-50 p-5 border-l-4 border-[#8B1A2B]">
                <p className="text-[#8B1A2B] text-[15px]" style={{ fontWeight: 700 }}>
                  가장 앞선 기술은 인간을 향한 예우에서 시작됩니다.
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

      <CoreDesign courseName="AI 윤리" />

      {/* Strengths */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Strengths
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-white" style={{ fontWeight: 800 }}>
              AI 윤리 교육의 필요성
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
            신뢰할 수 있는 기술 리더가 되세요
          </h2>
          <p className="text-white/70 text-[15px] mb-8">
            AI 윤리와 법적 소양을 갖춘 미래의 전문가를 기다립니다
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