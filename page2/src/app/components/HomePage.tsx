import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  GraduationCap,
  Globe,
  Bot,
  Shield,
  Languages,
  Calendar,
  ClipboardCheck,
  MessageCircle,
  Star,
  ChevronRight,
  ChevronLeft,
  Zap,
  BookOpen,
  Award,
  Users,
  Clock,
  Building,
  Target,
  Play,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1745272749509-5d212d97cbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE4OTYwODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "WELCOME TO TIMES MEDIA",
    title: "AI 시대를 이끄는\n미래 인재를 양성합니다",
    cta: "자세히 보기",
  },
  {
    img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGwlMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTg5NjA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "GLOBAL TESOL PROGRAM",
    title: "8주 완성 국제 영어교사\n자격증 과정",
    cta: "수강 신청하기",
  },
  {
    img: "https://images.unsplash.com/photo-1769839271768-aee5469799ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlZHVjYXRpb24lMjBzZW1pbmFyJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3MTg5NjA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "AI & TRANSLATION",
    title: "AI 번역·프롬프트 전문가\n교육 과정",
    cta: "과정 소개",
  },
];

const featureIcons = [
  { icon: BookOpen, title: "5개 전문 과정", desc: "TESOL, AI번역, AI프롬프트, AI윤리, ITT 정통 통번역" },
  { icon: Award, title: "전문 강사진", desc: "20년 이상 경력의 최고 수준 강사진과 글로벌 네트워크" },
  { icon: Globe, title: "글로벌 교육", desc: "전세계 학생들과 100% 영어 수업, 해외 대학 공동 운영" },
];

const classroomImg = "https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTc5MDMyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const globalImg = "https://images.unsplash.com/photo-1709054172839-17880c040f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBnbG9iYWwlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzcxODE3NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const teacherImg = "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcHJlc2VudGluZyUyMGxlY3R1cmV8ZW58MXx8fHwxNzcxODE3NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const promptImg = "https://images.unsplash.com/photo-1624154670578-42532d763bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBpbmclMjBsYXB0b3AlMjBwcm9tcHQlMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NzE4MTc0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const ethicsImg = "https://images.unsplash.com/photo-1531538512164-e6c51ea63d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpY3MlMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzcxODE3NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const globeImg = "https://images.unsplash.com/photo-1723306743371-38f6666be1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iZSUyMHdvcmxkJTIwbWFwJTIwbGFuZ3VhZ2VzfGVufDF8fHx8MTc3MTgxNzQxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const campusWideImg = "https://images.unsplash.com/photo-1766459710529-c9fdb8023ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWVyaWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTg5NjA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const courses = [
  {
    icon: GraduationCap,
    title: "TESOL교육",
    subtitle: "교실을 넘어, 세계 무대로",
    desc: "8주 완성 국제영어교사 자격",
    path: "/courses/tesol",
    img: classroomImg,
  },
  {
    icon: Languages,
    title: "AI 번역 교정 전문가",
    subtitle: "AI를 다루는 번역가가 미래를 주도",
    desc: "기계번역 후편집 전문과정",
    path: "/courses/ai-translation",
    img: globalImg,
  },
  {
    icon: Bot,
    title: "AI 프롬프트 전문가",
    subtitle: "잘 쓰는 한 문장이 가치를 10배로",
    desc: "생성형 AI 프롬프트 전문교육",
    path: "/courses/ai-prompt",
    img: promptImg,
  },
  {
    icon: Shield,
    title: "AI 윤리 전문가",
    subtitle: "책임 있는 AI 활용이 경쟁력",
    desc: "모든 AI 과정 필수교육",
    path: "/courses/ai-ethics",
    img: ethicsImg,
  },
  {
    icon: Globe,
    title: "전문 통번역사",
    subtitle: "25년 전통의 공신력",
    desc: "정통 언어 전문가의 상징",
    path: "/courses/itt",
    img: globeImg,
  },
];

const stats = [
  { label: "교육경험", value: 23, suffix: "년+", icon: Clock },
  { label: "인재배출", value: 30000, suffix: "명+", icon: Users },
  { label: "설립년도", value: 2001, suffix: "년", icon: Building },
  { label: "단기속성완성", value: 8, suffix: "주", icon: Zap },
  { label: "시험 응시생", value: 30, suffix: "만명+", icon: Target },
  { label: "언어 확장 목표", value: 12, suffix: "개", icon: Globe },
];

const programs = [
  {
    id: "tesol",
    title: "TESOL 교육",
    subtitle: "8주 완성, 실무에 강한 글로벌 커뮤니케이션 자격",
    desc: "120시간 몰입 과정으로 100% 영어 수업을 통해 국제 공인 자격증을 취득하고 비즈니스 실무에 활용할 수 있는 글로벌 커뮤니케이션 전문가를 양성합니다.",
    tags: ["120시간 몰입", "100% 영어수업", "국제공인자격증", "비즈니스실무"],
    img: classroomImg,
    path: "/courses/tesol",
  },
  {
    id: "ai-translation",
    title: "AI 번역·통역 교육",
    subtitle: "AI 시대의 번역 전문가, 후편집 역량 강화",
    desc: "국내 유일 역사가 있는 전문교육(TESOL, ITT)과 AI와 결합한 전문 자격증 교육 실시 통합교육입니다. AI 번역 후편집 전문 과정으로 다언어 콘텐츠 번역 및 실무 프로젝트 기반 교육과 AI 윤리 교육을 포함합니다.",
    tags: ["AI후편집전문", "다언어콘텐츠", "실무프로젝트", "AI윤리교육"],
    img: teacherImg,
    path: "/courses/ai-translation",
  },
  {
    id: "itt",
    title: "ITT 정통 번역·통역",
    subtitle: "25년 전통의 공신력, 정통 언어 전문가 양성",
    desc: "25년 전통의 공신력 있는 정통 언어 전문가 양성 과정으로 12개 언어를 지원하며 법무부 공증 번역 인정을 받은 전문 통번역사 양성 프로그램입니다.",
    tags: ["25년전통", "12개언어지원", "법무부공증인정", "전문통번역사"],
    img: globeImg,
    path: "/courses/itt",
  },
  {
    id: "ai-prompt",
    title: "AI 프롬프트 교육",
    subtitle: "효과적인 AI 소통법, 프롬프트 엔지니어링 마스터",
    desc: "ChatGPT, Claude 등 생성형 AI와 효과적으로 소통하는 프롬프트 엔지니어링 전문 과정으로 실무에서 활용 가능한 고급 프롬프트 설계 기법을 체계적으로 학습합니다.",
    tags: ["프롬프트엔지니어링", "생성형AI활용", "실무적용", "고급설계기법"],
    img: promptImg,
    path: "/courses/ai-prompt",
  },
  {
    id: "ai-ethics",
    title: "AI 윤리 교육",
    subtitle: "책임감 있는 AI 활용, 디지털 시민성 함양",
    desc: "AI 시대에 필수적인 디지털 윤리와 책임감 있는 AI 활용법을 체계적으로 학습하여 건전한 AI 생태계 조성에 기여하고 미래 사회의 디지털 리더십을 함양합니다.",
    tags: ["디지털윤리", "책임감있는AI", "디지털시민성", "미래리더십"],
    img: ethicsImg,
    path: "/courses/ai-ethics",
  },
];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function HomePage() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Slider - Unicamp Style */}
      <section className="relative h-[520px] lg:h-[620px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithFallback
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}

        {/* Text Overlay Box - Unicamp Style */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1200px] mx-auto px-6 w-full">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#1a1a2e]/85 backdrop-blur-sm p-8 lg:p-12 max-w-lg"
            >
              <div className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4" style={{ fontWeight: 600 }}>
                {heroSlides[currentSlide].badge}
              </div>
              <h1 className="text-white text-[26px] lg:text-[36px] mb-6 whitespace-pre-line" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                {heroSlides[currentSlide].title}
              </h1>
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B1A2B] text-white text-[14px] hover:bg-[#6d1422] transition-colors"
                style={{ fontWeight: 600 }}
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slide Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors rounded-full"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors rounded-full"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </section>

      {/* Feature Icons Row - Unicamp Style */}
      <section className="border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {featureIcons.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-center gap-5 py-8 px-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#8B1A2B]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] text-[#1a1a2e] mb-0.5" style={{ fontWeight: 700 }}>{f.title}</h3>
                    <p className="text-[13px] text-gray-500" style={{ lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section - Unicamp Style */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
                About us
              </span>
              <h2 className="text-[28px] lg:text-[38px] text-[#1a1a2e]" style={{ fontWeight: 800, lineHeight: 1.3 }}>
                대한민국 최대 규모의<br />
                글로벌 교육 전문기관
              </h2>
            </div>
            <div>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 2 }}>
                2001년 설립된 (주)타임스미디어는 23년간 3만 명 이상의 글로벌 인재를 배출해온
                대한민국 대표 교육 전문기관입니다. 국내 유일하게 TESOL, ITT 정통 통번역, AI 번역, 
                AI 프롬프트, AI 윤리까지 통합 교육을 제공하며, 연세대, 부산대, 한림대 등 
                명문대학과 함께 운영하고 있습니다.
              </p>
              <p className="text-gray-600 text-[15px] mb-8" style={{ lineHeight: 2 }}>
                미래 사회의 리더를 양성하기 위해 전통 교육에 AI 기술을 결합하여
                실무 현장에서 즉시 활용 가능한 전문 인재를 키워내고 있습니다.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B1A2B] text-white text-[14px] hover:bg-[#6d1422] transition-colors"
                style={{ fontWeight: 600 }}
              >
                더 알아보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image with Play Button - Unicamp Style */}
      <section className="relative h-[350px] lg:h-[480px] overflow-hidden">
        <ImageWithFallback
          src={campusWideImg}
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 lg:w-20 lg:h-20 bg-[#8B1A2B] rounded-full flex items-center justify-center hover:bg-[#6d1422] transition-all hover:scale-110 shadow-xl">
            <Play className="w-7 h-7 lg:w-8 lg:h-8 text-white ml-1" />
          </button>
        </div>
      </section>

      {/* Course Cards Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Programs
            </span>
            <h2 className="text-[28px] lg:text-[38px] text-[#1a1a2e] mb-4" style={{ fontWeight: 800 }}>
              미래를 준비하는 5가지 전문 과정
            </h2>
            <p className="text-gray-500 text-[15px] max-w-xl mx-auto">
              AI 시대에 맞춘 체계적 교육으로 글로벌 경쟁력을 갖추세요
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {courses.map((course, i) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={course.path}
                    className="group block bg-white overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <ImageWithFallback
                        src={course.img}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-[15px] text-[#1a1a2e] mb-1" style={{ fontWeight: 700 }}>
                        {course.title}
                      </h3>
                      <p className="text-[13px] text-gray-500 mb-1">{course.subtitle}</p>
                      <p className="text-[12px] text-[#8B1A2B]" style={{ fontWeight: 500 }}>
                        {course.desc}
                      </p>
                      <div className="flex items-center gap-1 mt-3 text-[13px] text-[#8B1A2B] group-hover:gap-2 transition-all" style={{ fontWeight: 600 }}>
                        바로가기 <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[24px] lg:text-[30px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>맞춤형 교육 서비스</h2>
            <p className="text-gray-500 mt-2">필요하신 서비스를 선택하여 간편하게 신청하세요.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: "레벨테스트", path: "/apply/level-test", desc: "실력 진단" },
              { title: "학습 TIP", path: "/apply/tip", desc: "노하우 신청" },
              { title: "기업 견적", path: "/apply/corporate", desc: "B2B 문의" },
              { title: "세미나", path: "/apply/seminar", desc: "참가 신청" },
              { title: "입학설명회", path: "/apply/orientation", desc: "일정 신청" },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="group p-6 border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#8B1A2B] hover:shadow-md transition-all text-center rounded-xl"
              >
                <div className="text-[#8B1A2B] group-hover:scale-110 transition-transform mb-3 inline-block">
                  <ClipboardCheck className="w-8 h-8" />
                </div>
                <h4 className="text-[15px] text-[#1a1a2e] mb-1" style={{ fontWeight: 700 }}>{item.title}</h4>
                <p className="text-[12px] text-gray-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-[#e8a0a0]" />
                  </div>
                  <div className="text-[28px] lg:text-[34px] text-white mb-1" style={{ fontWeight: 800 }}>
                    <CountUp end={stat.value} />
                    <span className="text-[#e8a0a0] text-[16px] ml-0.5">{stat.suffix.replace(/[\d,]/g, "")}</span>
                  </div>
                  <div className="text-white/40 text-[13px]">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apply / Admission CTA Section - Unicamp Style */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[400px]">
          {/* Image Half */}
          <div className="relative h-[300px] lg:h-auto overflow-hidden">
            <ImageWithFallback
              src={teacherImg}
              alt="Education"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          {/* Content Half */}
          <div className="bg-[#faf8f6] flex items-center">
            <div className="p-10 lg:p-16 max-w-lg">
              <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-4" style={{ fontWeight: 800, lineHeight: 1.3 }}>
                지금 수강 신청하세요
              </h2>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                AI 시대에도 살아남을 수 있는 진짜 경쟁력을 갖추세요.
                타임스미디어의 23년 교육 노하우와 3만 명 졸업생 네트워크가
                여러분의 미래를 함께 합니다.
              </p>
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#8B1A2B] text-[#8B1A2B] text-[14px] hover:bg-[#8B1A2B] hover:text-white transition-colors"
                style={{ fontWeight: 600 }}
              >
                입학 안내 바로가기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Detail Tabs */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Education
            </span>
            <h2 className="text-[28px] lg:text-[38px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>
              교육 과정 상세
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {programs.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveProgram(i)}
                className={`px-5 py-2.5 text-[14px] transition-all border ${
                  activeProgram === i
                    ? "bg-[#8B1A2B] text-white border-[#8B1A2B]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#8B1A2B] hover:text-[#8B1A2B]"
                }`}
                style={{ fontWeight: activeProgram === i ? 700 : 500 }}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeProgram}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative overflow-hidden h-[320px] lg:h-[400px]">
              <ImageWithFallback
                src={programs[activeProgram].img}
                alt={programs[activeProgram].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-[24px] mb-1" style={{ fontWeight: 700 }}>
                  {programs[activeProgram].title}
                </h3>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[#8B1A2B] text-[14px] mb-4" style={{ fontWeight: 600 }}>
                <Link to={programs[activeProgram].path} className="hover:underline flex items-center gap-1">
                  {programs[activeProgram].title} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <h3 className="text-[22px] lg:text-[26px] text-[#1a1a2e] mb-4" style={{ fontWeight: 700, lineHeight: 1.35 }}>
                {programs[activeProgram].subtitle}
              </h3>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.8 }}>
                {programs[activeProgram].desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {programs[activeProgram].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-red-50 text-[#8B1A2B] text-[13px]"
                    style={{ fontWeight: 600 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={programs[activeProgram].path}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8B1A2B] text-white text-[15px] hover:bg-[#6d1422] transition-colors"
                style={{ fontWeight: 700 }}
              >
                자세히 보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notices + Quick Links */}
      <section className="py-16 bg-[#faf8f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Notices */}
            <div className="lg:col-span-2 bg-white p-7 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[18px] text-[#1a1a2e]" style={{ fontWeight: 700 }}>
                  공지사항
                </h3>
                <Link
                  to="/community"
                  className="text-[13px] text-gray-400 hover:text-[#8B1A2B] flex items-center gap-1"
                >
                  더보기 <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { title: "2026년 3월 서울 TESOL 과정 개강 안내", date: "2026.02.15" },
                  { title: "AI 번역 교정 전문가 과정 신규 오픈", date: "2026.02.10" },
                  { title: "타임즈 테솔 공지사항 테스트 게시글", date: "2026.02.05" },
                  { title: "테스트 2번", date: "2026.02.01" },
                ].map((notice, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center justify-between group py-2 border-b border-gray-50 last:border-0"
                  >
                    <span className="text-[14px] text-gray-700 group-hover:text-[#8B1A2B] transition-colors truncate mr-4">
                      {notice.title}
                    </span>
                    <span className="text-[12px] text-gray-400 shrink-0">
                      {notice.date}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, title: "학사일정", sub: "Academic Schedule", color: "bg-[#8B1A2B]", path: "/admission" },
                { icon: ClipboardCheck, title: "레벨테스트 신청", sub: "Level Test", color: "bg-[#2c5f7c]", path: "/apply/level-test" },
                { icon: MessageCircle, title: "1:1 문의", sub: "1:1 Inquiry", color: "bg-[#4a4a6a]", path: "/contact" },
                { icon: Star, title: "졸업생 후기", sub: "Reviews", color: "bg-[#6b4c3b]", path: "/community" },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.title}
                    to={link.path}
                    className={`${link.color} p-6 text-white transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between min-h-[140px] hover:opacity-90`}
                  >
                    <Icon className="w-8 h-8 text-white/70" />
                    <div>
                      <h4 className="text-[16px] text-white mt-3" style={{ fontWeight: 700 }}>
                        {link.title}
                      </h4>
                      <p className="text-white/60 text-[13px]">{link.sub}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
