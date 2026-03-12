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
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuickNav, MobileQuickNav, CourseSubNav, CourseMenuBar } from "./QuickNav";
import { CoreDesign } from "./CourseCommon";

import book1 from "figma:asset/d7f50a4487fd4631fc9eb9187afdfd969c599330.png";
import book2 from "figma:asset/c8f9f248d34e3e489f1e6f368703df912a3a4326.png";
import book3 from "figma:asset/aeede0a4b727f0e5754ea6824dab2f05bdcb292f.png";

const heroImg = "https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTc5MDMyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const strengths = [
  {
    icon: Zap,
    title: "FAST TRACK",
    subtitle: "8주 완성 · 120시간 몰입",
    desc: "주중·주말반 선택, 핵심만 압축한 단기 집중 과정으로 빠르게 자격을 취득하고 실무에 바로 투입됩니다.",
  },
  {
    icon: Globe,
    title: "GLOBAL CLASS",
    subtitle: "전세계 학생과 함께하는 100% 영어 수업",
    desc: "미국·캐나다·유럽·아시아 수강생이 한 교실에서 배우는 다국적 몰입 환경으로 글로벌 감각이 자연스럽게 길러집니다.",
  },
  {
    icon: Award,
    title: "INTERNATIONAL POWER",
    subtitle: "세계 어디서나 통하는 자격증",
    desc: "TESOL + ITT 국제 공신력의 자격증과 20년간 3만 명이 넘는 졸업생 네트워크, 해외 진출이 가능합니다.",
  },
  {
    icon: Presentation,
    title: "PRACTICAL TRAINING",
    subtitle: "발표·수업 관리 실습",
    desc: "실제 교실 상황을 반영한 발표, 수업 기획 및 운영 실습을 통해 실무 능력을 강화하고 교수 자신감을 키웁니다.",
  },
];

const curriculum = [
  { week: "1주차", content: "TESOL 개론, 글로벌 커뮤니케이션 개념, 학습자 분석" },
  { week: "2주차", content: "Speaking & Listening 지도법, 발음·억양 실습" },
  { week: "3주차", content: "Reading & Writing 지도법, 문법·어휘 지도전략" },
  { week: "4주차", content: "Lesson Planning - 교육용 비즈니스용 발표 기획" },
  { week: "5주차", content: "Teaching & Presentation Techniques - 회의·강연·세일즈 활용" },
  { week: "6주차", content: "Classroom & Meeting Management - 학습자/팀원 관리, 진행 스킬" },
  { week: "7주차", content: "실무 영어 프로젝트 - 영업·마케팅·협상 롤플레이" },
  { week: "8주차", content: "최종 시연 피드백, 국제 TESOL 자격증 발급 준비" },
];

const outcomes = [
  { icon: Award, title: "국제 TESOL 자격증", desc: "국제적으로 통용되는 TESOL 영어교사 자격증 취득" },
  { icon: Mic, title: "영어 수업·발표 자신감", desc: "영어로 수업·발표·프레젠테이션을 이끄는 자신감 확보" },
  { icon: Briefcase, title: "국내 교사·강사 취업", desc: "영어학원, 국제학교, 대학 부설 어학원 등 교사·강사로 진출" },
  { icon: Globe, title: "글로벌 교사 커리어", desc: "해외 교육기관·어학원에서 글로벌 교사 커리어 확장" },
  { icon: Target, title: "비즈니스 활용 능력", desc: "기업 연수, 프레젠테이션·협상 등 비즈니스 현장 활용 능력 강화" },
];

const highlights = [
  { icon: Clock, label: "8주 ��입, 집중 훈련", desc: "120시간 집중 훈련으로 영어로 수업을 할 수 있는 능력개발" },
  { icon: Users, label: "다국적 클래스", desc: "100% 영어 클래스 글로벌 소통 능력 극대화" },
  { icon: Target, label: "능력 확장", desc: "단순 영어교육뿐만 아니라 발표, 협상, 마케팅까지 확장" },
  { icon: Handshake, label: "네트워킹", desc: "네트워킹을 통한 국제 파트너와의 관계 형성" },
];

const textbooks = [
  { title: "Techniques and Principles in Language Teaching", image: book1 },
  { title: "Learning Teaching", image: book2 },
  { title: "TESOL Student Book (Binder)", image: book3 },
];

export function TesolCoursePage() {
  return (
    <div className="pb-24">
      <CourseSubNav />
      <QuickNav />
      <MobileQuickNav />
      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="TESOL" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 lg:p-12 max-w-xl">
              <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
                TESOL Program
              </span>
              <h1 className="text-[26px] lg:text-[36px] text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                당신의 영어, 이제는
                교실을 넘어 세계 무대로
              </h1>
              <div className="flex flex-wrap gap-3 text-white/70 text-[14px] mb-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  8주 만에 국제 TESOL 자격 취득
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  20년 전통, 3만명 졸업생
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

      {/* What is TESOL */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-5 block" style={{ fontWeight: 600 }}>
                About TESOL
              </span>
              <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-5" style={{ fontWeight: 800, lineHeight: 1.35 }}>
                TESOL 교육이란?
              </h2>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                TESOL(Teaching English to Speakers of Other Languages)은 국제적으로 공인된 영어교사 자격증으로,
                단순히 영어 교육에 머무르지 않습니다.
              </p>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                타임스 TESOL은 읽기·쓰기·듣기·말하기 네 가지 핵심 영어 스킬을 기반으로, 교실 수업을 넘어
                회의·프레젠테이션·영업·마케팅·협상 등 실제 글로벌 현장에서 바로 활용할 수 있는 실무형 커뮤니케이션 능력을 길러줍니다.
              </p>
              <div className="bg-red-50 p-5 border-l-4 border-[#8B1A2B]">
                <p className="text-[#8B1A2B] text-[15px]" style={{ fontWeight: 700 }}>
                  TESOL 없는 영어교사, 이제 경쟁력이 없습니다.
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

      {/* Core Design */}
      <CoreDesign courseName="TESOL" />

      {/* History & Achievements */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[22px] text-[#1a1a2e] mb-6" style={{ fontWeight: 800 }}>
                타임스 TESOL의 역사와 성과
              </h3>
              <div className="space-y-4">
                {[
                  "2001년부터 전국 명문대와 함께 TESOL 과정 운영",
                  "국내·해외 통틀어 최다 3만 명 이상의 TESOL 졸업생 배출",
                  "민간자격증 등록완료, 국제적으로 활용가능한 공신력 있는 자격",
                  "해외 교육 기관 및 글로벌 기업 취업·진출자 다수 배출",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8B1A2B] mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-[14px]" style={{ lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[22px] text-[#1a1a2e] mb-6" style={{ fontWeight: 800 }}>
                교실을 넘어 세계 무대로
              </h3>
              <div className="space-y-4">
                {[
                  "TESOL 교육에 비즈니스·프레젠테이션·협상 스킬을 결합해 실무 확장",
                  "영어 교육뿐 아니라 다언어 교육 과정으로 확대 운영",
                  "해외 대학·국제기구와 TESOL 상호 인증 네트워크 강화",
                  "온라인·오프라인 융합 교육으로 세계 어디서나 수강 가능한 시스템 구축",
                  "졸업생 네트워크를 통한 평생 경력·취업 지원 플랫폼 완성",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#c19a3e] mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-[14px]" style={{ lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Strengths
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-white" style={{ fontWeight: 800 }}>
              타임스 TESOL의 강점
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
              세부 커리큘럼 (8주 과정)
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

      {/* Textbooks */}
      <section className="py-20 bg-[#faf8f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Materials
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>
              교재 안내
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {textbooks.map((book) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <div className="w-full aspect-[3/4] mb-6 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <ImageWithFallback
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <h4 className="text-[16px] text-[#1a1a2e] leading-tight" style={{ fontWeight: 700 }}>
                  {book.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[26px] lg:text-[32px] text-white mb-3" style={{ fontWeight: 800 }}>
              영어 실력 그 이상, 세계를 이끄는 리더로
            </h2>
            <p className="text-white/50 text-[15px]">
              단순한 영어 실력이 아닌, "영어로 가르치고 이끄는 진짜 리더십"을 갖춘 전문가가 됩니다.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            {outcomes.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/5 backdrop-blur-sm p-5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 mx-auto bg-[#8B1A2B]/30 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#e8a0a0]" />
                  </div>
                  <h4 className="text-white text-[14px] mb-2" style={{ fontWeight: 700 }}>{o.title}</h4>
                  <p className="text-white/40 text-[12px]" style={{ lineHeight: 1.5 }}>{o.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#8B1A2B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-[26px] lg:text-[32px] mb-3" style={{ fontWeight: 800 }}>
            8주 후, 당신은 글로벌 리더입니다
          </h2>
          <p className="text-white/70 text-[15px] mb-8">
            국제 TESOL 자격증과 함께 세계 무대로 나가세요
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
              상담 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
