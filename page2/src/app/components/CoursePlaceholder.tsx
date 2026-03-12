import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const courseData: Record<string, { title: string; subtitle: string; hero: string; desc: string; features: string[]; tags: string[]; }> = {
  "ai-translation": {
    title: "AI 번역 교정 전문가",
    subtitle: "AI 시대의 번역 전문가, 후편집 역량 강화",
    hero: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcHJlc2VudGluZyUyMGxlY3R1cmV8ZW58MXx8fHwxNzcxODE3NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "국내 유일 역사가 있는 전문교육(TESOL, ITT)과 AI와 결합한 전문 자격증 교육을 실시합니다. AI 번역 후편집 전문 과정으로 다언어 콘텐츠 번역 및 실무 프로젝트 기반 교육과 AI 윤리 교육을 포함합니다.",
    features: [
      "AI 번역 후편집(Post-Editing) 전문 역량 강화",
      "다언어 콘텐츠 번역 실무 프로젝트",
      "기계번역 품질 평가 및 교정 기법",
      "AI 윤리 교육 포함",
      "실무 프로젝트 기반 교육",
    ],
    tags: ["AI후편집전문", "다언어콘텐츠", "실무프로젝트", "AI윤리교육"],
  },
  "ai-prompt": {
    title: "AI 프롬프트 전문가",
    subtitle: "효과적인 AI 소통법, 프롬프트 엔지니어링 마스터",
    hero: "https://images.unsplash.com/photo-1624154670578-42532d763bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBpbmclMjBsYXB0b3AlMjBwcm9tcHQlMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NzE4MTc0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "ChatGPT, Claude 등 생성형 AI와 효과적으로 소통하는 프롬프트 엔지니어링 전문 과정으로 실무에서 활용 가능한 고급 프롬프트 설계 기법을 체계적으로 학습합니다.",
    features: [
      "생성형 AI 원리와 활용법 습득",
      "고급 프롬프트 설계 기법 학습",
      "실무 적용 프로젝트 수행",
      "다양한 분야별 프롬프트 전략",
      "AI 윤리와 책임 있는 활용",
    ],
    tags: ["프롬프트엔지니어링", "생성형AI활용", "실무적용", "고급설계기법"],
  },
  "ai-ethics": {
    title: "AI 윤리 전문가",
    subtitle: "책임감 있는 AI 활용, 디지털 시민성 함양",
    hero: "https://images.unsplash.com/photo-1531538512164-e6c51ea63d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpY3MlMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzcxODE3NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "AI 시대에 필수적인 디지털 윤리와 책임감 있는 AI 활용법을 체계적으로 학습하여 건전한 AI 생태계 조성에 기여하고 미래 사회의 디지털 리더십을 함양합니다.",
    features: [
      "AI 윤리 원칙과 가이드라인 학습",
      "디지털 시민성 함양",
      "AI 편향성 인식 및 대응",
      "책임 있는 AI 활용 실습",
      "미래 리더십 역량 강화",
    ],
    tags: ["디지털윤리", "책임감있는AI", "디지털시민성", "미래리더십"],
  },
  itt: {
    title: "전문 통번역사 (ITT)",
    subtitle: "25년 전통의 공신력, 정통 언어 전문가 양성",
    hero: "https://images.unsplash.com/photo-1723306743371-38f6666be1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iZSUyMHdvcmxkJTIwbWFwJTIwbGFuZ3VhZ2VzfGVufDF8fHx8MTc3MTgxNzQxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "25년 전통의 공신력 있는 정통 언어 전문가 양성 과정으로 12개 언어를 지원하며 법무부 공증 번역 인정을 받은 전문 통번역사 양성 프로그램입니다.",
    features: [
      "1999년부터 정통 통역·번역 수업 및 시험 운영",
      "법무부 공증 시험으로 자격증 승인",
      "영어·중국어·일본어·베트남어 등 다언어 지원",
      "삼성, 현대, LG 등 대기업 가산점 부여",
      "한국 전국 및 해외 시험 센터 운영",
    ],
    tags: ["25년전통", "12개언어지원", "법무부공증인정", "전문통번역사"],
  },
};

export function CoursePlaceholder() {
  const { courseId } = useParams();
  const course = courseData[courseId || ""] || courseData["ai-translation"];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[380px] lg:min-h-[440px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback src={course.hero} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 lg:p-12 max-w-xl">
              <h1 className="text-[28px] lg:text-[38px] text-white mb-3" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                {course.title}
              </h1>
              <p className="text-white/70 text-[16px] mb-6">{course.subtitle}</p>
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B1A2B] text-white text-[14px] hover:bg-[#6d1422] transition-colors"
                style={{ fontWeight: 600 }}
              >
                수강 신청하기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 text-[16px] mb-10" style={{ lineHeight: 1.9 }}>
            {course.desc}
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {course.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-red-50 text-[#8B1A2B] text-[13px]" style={{ fontWeight: 600 }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="space-y-4">
            {course.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#8B1A2B] mt-0.5 shrink-0" />
                <span className="text-gray-700 text-[15px]" style={{ lineHeight: 1.6 }}>{f}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B1A2B] text-white text-[16px] hover:bg-[#6d1422] transition-colors"
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
