import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  GraduationCap,
  Globe,
  Bot,
  Shield,
  Languages,
  Calendar,
  ClipboardCheck,
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
  Handshake,
  CheckCircle,
  Search,
  Check,
  Cpu,
  Fingerprint,
  Activity,
  Layers,
  Network
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1659366647666-6a25b39d3a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBlZHVjYXRpb24lMjBBSSUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzczODExNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "SINCE 2001 TIMES MEDIA",
    title: "AI 시대를 이끄는\n미래 인재를 양성합니다",
    desc: "23년 교육 노하우와 글로벌 네트워크로 대체 불가능한 역량을 완성합니다.",
  },
  {
    img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGwlMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTg5NjA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "GLOBAL TESOL PROGRAM",
    title: "8주 완성 국제 영어교사\n자격증 과정",
    desc: "100% 영어 수업, 연세대 등 명문대 공동 운영 실무 중심 테솔 과정.",
  },
];

const mainCourses = [
  {
    id: "tesol",
    icon: GraduationCap,
    title: "TESOL 과정",
    tag: "8주 완성",
    path: "/courses/tesol",
    color: "bg-[#e11d48]", // Red
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
    desc1: "글로벌 영어 교사 양성",
    desc2: "8주 완성 집중 프로그램 제공"
  },
  {
    id: "ai-trans",
    icon: Languages,
    title: "AI번역 코칭 전문가",
    tag: "미래 직업",
    path: "/courses/ai-translation",
    color: "bg-[#2563eb]", // Blue
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
    desc1: "AI를 활용한 번역 실무스킬",
    desc2: "최신 AI 번역 트렌드 반영"
  },
  {
    id: "ai-prompt",
    icon: Bot,
    title: "AI프롬프트 전문가",
    tag: "업무 생산성",
    path: "/courses/ai-prompt",
    color: "bg-[#059669]", // Green
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
    desc1: "AI 도구 활용 전문가 양성",
    desc2: "실전 AI 과업수행 전략 교육"
  },
  {
    id: "ai-ethics",
    icon: Shield,
    title: "AI윤리/보안",
    tag: "필수 교육",
    path: "/courses/ai-ethics",
    color: "bg-[#334155]", // Slate/Navy
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    desc1: "기업/개인 AI 윤리 가이드",
    desc2: "안전한 활용을 위한 필수교육"
  },
  {
    id: "itt",
    icon: Globe,
    title: "ITT 통번역",
    tag: "25년 전통",
    path: "/courses/itt",
    color: "bg-[#ea580c]", // Orange
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
    desc1: "25년 전통의 공신력",
    desc2: "실무번역 전문자격 취득과정"
  },
];

const quickServices = [
  { title: "레벨테스트", subtitle: "실력 진단", path: "/apply/level-test", icon: ClipboardCheck },
  { title: "학습 TIP", subtitle: "노하우 전수", path: "/apply/tip", icon: BookOpen },
  { title: "기업 견적", subtitle: "B2B 문의", path: "/apply/corporate", icon: Building },
  { title: "세미나", subtitle: "참가 신청", path: "/apply/seminar", icon: Users },
  { title: "입학설명회", subtitle: "방문 상담", path: "/apply/orientation", icon: GraduationCap },
];

const stats = [
  { label: "교육경험", value: 23, suffix: "년+", icon: Clock },
  { label: "인재배출", value: 30000, suffix: "명+", icon: Users },
  { label: "설립년도", value: 2001, suffix: "년", icon: Building },
  { label: "단기속성", value: 8, suffix: "주", icon: Zap },
  { label: "응시생", value: 30, suffix: "만명+", icon: Target },
  { label: "네트워크", value: 12, suffix: "개국", icon: Globe },
];

const timeline = [
  { year: "2026", event: "누적학생수 23,000명 달성" },
  { year: "2017", event: "타임스미디어 누적졸업생 12000명 돌파" },
  { year: "2013", event: "ITT 법무부 통역번역 자격증 공증 자격증 채택" },
  { year: "2008", event: "서울시교육청 교원직무연수기관 지정" },
  { year: "2004", event: "TESOL 과정 런칭 (서울 및 부산 주요 대학)" },
  { year: "2001", event: "타임스미디어 설립 및 교육 사업 시작" },
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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Simple particle system for background
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
  }, []);

  return (
    <div className="bg-white">
      {/* FUTURE-TECH HERO SECTION */}
      <section className="relative min-h-[750px] lg:h-[95vh] bg-[#0a0a14] overflow-hidden">
        {/* Advanced Tech Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={heroSlides[currentSlide].img}
                alt="Main"
                className="w-full h-full object-cover grayscale-[5%] brightness-[60%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B1A2B]/10 via-transparent to-[#0a0a14]" />
            </motion.div>
          </AnimatePresence>
          
          <div 
            className="absolute inset-0 opacity-[0.05]" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, #8B1A2B 1px, transparent 0)', 
              backgroundSize: '40px 40px' 
            }} 
          />
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, top: `${p.y}%`, left: `${p.x}%` }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  top: [`${p.y}%`, `${(p.y - 20 + 100) % 100}%`],
                }}
                transition={{ 
                  duration: p.duration, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: p.delay 
                }}
                className="absolute w-1 h-1 bg-[#8B1A2B] rounded-full blur-[1px]"
                style={{ width: p.size, height: p.size }}
              />
            ))}
          </div>
          
          <motion.div 
            animate={{ y: ['-100%', '300%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-transparent via-[#8B1A2B]/5 to-transparent pointer-events-none"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-16 items-center h-full pt-16">
            
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="px-4 py-1.5 bg-[#8B1A2B] text-white text-[11px] tracking-[0.3em] font-black uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(139,26,43,0.4)]">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    SYSTEM ACTIVE
                  </div>
                  <div className="text-white/30 text-[10px] tracking-widest font-mono hidden sm:block">
                    LOC: 37.56° N, 126.97° E | REF: {heroSlides[currentSlide].badge}
                  </div>
                </div>

                <div className="relative inline-block pr-12">
                  <div className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-[#8B1A2B]/40" />
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-[#8B1A2B]/40" />
                  
                  <h1 className="text-white text-[44px] lg:text-[76px] mb-8 whitespace-pre-line tracking-tighter leading-[0.95] lg:min-w-[850px]" style={{ fontWeight: 900 }}>
                    {heroSlides[currentSlide].title}
                  </h1>
                </div>

                <p className="text-white/50 text-[18px] lg:text-[22px] max-w-xl mb-12 leading-relaxed font-medium tracking-tight">
                  {heroSlides[currentSlide].desc}
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <Link
                    to="/admission"
                    className="relative group overflow-hidden px-10 py-5 bg-[#8B1A2B] text-white text-[16px] transition-all flex items-center gap-3 rounded-xs"
                    style={{ fontWeight: 800 }}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-3">
                      FUTURE ADMISSION <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <button className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#8B1A2B] transition-colors relative">
                      <Play className="w-5 h-5 fill-white group-hover:fill-[#8B1A2B] transition-colors ml-1" />
                      <div className="absolute inset-0 rounded-full border border-[#8B1A2B] opacity-0 group-hover:animate-ping transition-opacity" />
                    </div>
                    <span className="text-white/60 text-[14px] font-black group-hover:text-white transition-colors tracking-widest uppercase">Launch Video</span>
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-5 relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8B1A2B]/10 rounded-full blur-[80px]" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]" />

                <div className="col-span-2 mb-4 flex items-center justify-between">
                  <h3 className="text-[#8B1A2B] text-[12px] uppercase tracking-[0.4em] font-black flex items-center gap-3">
                    <Layers className="w-4 h-4" /> CORE MODULES
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#8B1A2B]/40 to-transparent ml-4" />
                </div>

                {mainCourses.map((course, idx) => {
                  const Icon = course.icon;
                  return (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
                      className={idx === 0 ? 'col-span-2' : ''}
                    >
                      <Link
                        to={course.path}
                        className={`group relative p-6 bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] hover:border-[#8B1A2B]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl ${
                          idx === 0 ? 'sm:flex-row items-center gap-8 h-32 rounded-sm' : 'h-48 rounded-sm'
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        <div className={`${idx === 0 ? 'w-16 h-16' : 'w-14 h-14'} ${course.color} flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-all duration-500 relative z-10 rounded-sm`}>
                          <Icon className={`${idx === 0 ? 'w-8 h-8' : 'w-7 h-7'} text-white`} />
                          <div className="absolute -inset-1 border border-white/20 scale-110 group-hover:scale-125 transition-transform" />
                        </div>

                        <div className={`flex-1 relative z-10 ${idx === 0 ? 'text-left' : 'mt-4'}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B1A2B] animate-pulse" />
                            <div className="text-[#8B1A2B] text-[10px] font-black tracking-[0.2em] uppercase">{course.tag}</div>
                          </div>
                          <h4 className="text-white text-[20px] lg:text-[24px] font-black leading-none group-hover:text-[#8B1A2B] transition-colors tracking-tight">
                            {course.title}
                          </h4>
                          <div className="mt-2 text-[9px] text-white/20 font-mono tracking-widest uppercase">ID: 00{idx + 1}-TSM-CORE</div>
                        </div>

                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                          <ChevronRight className="w-6 h-6 text-[#8B1A2B]" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center hidden xl:flex z-20">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-white/10" />
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${currentSlide === i ? 'bg-[#8B1A2B] scale-150 shadow-[0_0_10px_#8B1A2B]' : 'bg-white/20'}`}
            />
          ))}
          <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-white/10" />
        </div>
      </section>

      {/* MOBILE SERVICE GRID */}
      <section className="lg:hidden bg-gray-50 py-8 px-6 grid grid-cols-2 gap-3">
        {quickServices.map((s) => (
          <Link key={s.title} to={s.path} className="bg-white p-4 flex items-center gap-3 border border-gray-100 rounded-xl">
             <s.icon className="w-5 h-5 text-[#8B1A2B]" />
             <span className="text-[13px] font-bold">{s.title}</span>
          </Link>
        ))}
      </section>

      {/* BOTTOM SERVICE STRIP (Floating Service Bar) */}
      <div className="bg-white py-4 lg:py-8 border-b border-gray-100 hidden lg:block">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 pr-8 border-r border-gray-100">
              <div className="w-12 h-12 bg-[#0a0a14] rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] text-gray-400 font-black uppercase tracking-widest">Fast Access</div>
                <div className="text-[16px] text-[#0a0a14] font-black">맞춤형 서비스</div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-around">
              {quickServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    to={service.path}
                    className="group flex flex-col items-center gap-2 transition-all"
                  >
                    <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center group-hover:bg-[#8B1A2B] group-hover:text-white transition-all shadow-sm border border-transparent group-hover:border-[#8B1A2B]/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[14px] text-gray-600 font-bold group-hover:text-[#8B1A2B] transition-colors tracking-tight">{service.title}</span>
                  </Link>
                );
              })}
            </div>

            <Link 
              to="/community"
              className="flex items-center gap-2 pl-8 border-l border-gray-100 text-[14px] text-gray-400 hover:text-[#8B1A2B] font-black transition-colors"
            >
              전체보기 <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 1. ABOUT US */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-[#8B1A2B] text-[14px] font-bold tracking-widest uppercase mb-4">About Us</h3>
              <h2 className="text-[36px] lg:text-[42px] font-extrabold text-[#1a1a2e] leading-tight mb-8" style={{ wordBreak: "keep-all" }}>
                대한민국 최대 규모의<br />글로벌 교육 전문기관
              </h2>
            </div>
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed text-[16px]">
                2001년 설립된 (주)타임스미디어는 23년여 동안 3만 명 이상의 수강생 인재를 배출해온 대한민국의 대표 교육 전문기관입니다. 국내 유일하게 TESOL, ITT 통번역, AI 번역, AI 프롬프트, AI 윤리보안 통합 교육을 제공하며, 연세대학교, 동국대, 한양대 등 명문대학교와 함께 진행하고 있습니다.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-[16px]">
                미래 사회의 리더를 양성하기 위해 전통 교육에 AI 기술을 융합하여 실무 현장에서 즉시 활용 가능한 전문 인재를 키워내고 있습니다.
              </p>
              <button className="bg-[#8B1A2B] text-white px-8 py-3 rounded-sm font-bold flex items-center gap-2 hover:bg-[#6a1220] transition-colors">
                더 알아보기 <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-[#8B1A2B] text-[14px] font-bold tracking-widest uppercase mb-4">Programs</h3>
            <h2 className="text-[32px] lg:text-[38px] font-extrabold text-[#1a1a2e] leading-tight mb-4">
              미래를 준비하는 5가지 전문 과정
            </h2>
            <p className="text-gray-500 font-medium">
              AI 시대를 맞은 체계적인 교육으로 글로벌 전문가를 꿈꾸세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {mainCourses.map((course) => (
              <Link key={course.id} to={course.path} className="group border border-gray-200 rounded-sm overflow-hidden bg-white hover:shadow-xl transition-all flex flex-col">
                <div className="relative h-40 xl:h-48 overflow-hidden shrink-0">
                  {course.img ? (
                    <ImageWithFallback src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className={`w-full h-full ${course.color} opacity-80`} />
                  )}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                    <course.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[18px] font-black text-[#1a1a2e] mb-4 2xl:text-[20px] leading-tight break-keep">{course.title}</h3>
                    <ul className="text-[13px] text-gray-500 space-y-2 mb-6 break-keep">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1A2B] font-black mt-0.5">·</span> 
                        <span className="leading-snug">{course.desc1}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1A2B] font-black mt-0.5">·</span> 
                        <span className="leading-snug">{course.desc2}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-[#8B1A2B] text-[14px] font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    바로가기 <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2-1. SERVICES */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] lg:text-[36px] font-extrabold text-[#1a1a2e] leading-tight mb-4">
              맞춤형 교육 서비스
            </h2>
            <p className="text-gray-500 font-medium border-b border-transparent inline-block pb-1">
              필요하신 서비스를 선택하여 간편하게 진행하세요.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {quickServices.map((service) => (
              <Link key={service.title} to={service.path} className="group bg-white border border-gray-100 rounded-xl p-6 lg:p-8 flex flex-col items-center hover:border-[#8B1A2B]/40 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-[#fffafa] rounded-2xl flex items-center justify-center mb-5 border border-[#ffe0e0] group-hover:bg-[#8B1A2B] transition-colors relative overflow-hidden">
                  <service.icon className="w-7 h-7 text-[#8B1A2B] group-hover:text-white transition-colors relative z-10" />
                </div>
                <h4 className="text-[16px] font-black text-[#1a1a2e] mb-2">{service.title}</h4>
                <p className="text-[13px] text-gray-400 break-keep">{service.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section: Impact Bar */}
      <section className="py-24 bg-[#0a0a14] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8B1A2B]/5 to-transparent pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto bg-white/5 rounded-3xl flex items-center justify-center mb-5 group-hover:bg-[#8B1A2B]/40 transition-all duration-300 group-hover:-translate-y-1 shadow-inner border border-white/5 group-hover:border-white/20">
                    <Icon className="w-7 h-7 text-[#e8a0a0]" />
                  </div>
                  <div className="text-[32px] lg:text-[40px] text-white mb-2 tracking-tighter" style={{ fontWeight: 900 }}>
                    <CountUp end={stat.value} />
                    <span className="text-[#8B1A2B] text-[18px] ml-1 font-black">{stat.suffix.replace(/[\d,]/g, "")}</span>
                  </div>
                  <div className="text-white/40 text-[14px] font-bold uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network & Partners Grid */}
      <section className="py-24 bg-[#fcfcfc] border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-[28px] lg:text-[36px] text-[#1a1a2e] mb-3" style={{ fontWeight: 800 }}>
              글로벌 교육 네트워크
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto font-medium">전국 주요 대학 및 해외 명문 교육기관과 함께합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b-2 border-[#8B1A2B]">
                <Building className="w-5 h-5 text-[#8B1A2B]" />
                <h3 className="text-[16px] font-extrabold text-[#1a1a2e]">전 대학 교육장 소개</h3>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {[
                  "연세대학교", "한동대학교", "단국대학교", "동국대학교", 
                  "부산대학교", "영남대학교", "한림대학교", "동아대학교", 
                  "서울교육대학교", "충남대학교"
                ].map((name) => (
                  <div key={name} className="text-[13px] text-gray-500 bg-white px-4 py-2 border border-gray-100 font-bold hover:border-[#8B1A2B] hover:text-[#8B1A2B] transition-all cursor-default">
                    {name}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b-2 border-gray-200">
                <Handshake className="w-5 h-5 text-gray-400" />
                <h3 className="text-[16px] font-extrabold text-[#1a1a2e]">전 언론/ 학회 협약처</h3>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {[
                  "코리아 헤럴드 교육센터", "코리아 타임스 교육센터", "CBS교육 센터", 
                  "부산 KNN 교육센터", "중앙일보 IT 데일리", "국제통역번역협회", 
                  "한국 번역학회"
                ].map((name) => (
                  <div key={name} className="text-[13px] text-gray-500 bg-white px-4 py-2 border border-gray-100 font-bold hover:border-[#8B1A2B] hover:text-[#8B1A2B] transition-all cursor-default">
                    {name}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b-2 border-[#8B1A2B]">
                <Globe className="w-5 h-5 text-[#8B1A2B]" />
                <h3 className="text-[16px] font-extrabold text-[#1a1a2e]">해외 대학 / 업무 협약</h3>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {[
                  "캐나다 교육 센터", "중국 교육센터", "미국 교육센터", 
                  "캘리포니아 주립대학교-롱비치", "캘리포니아 주립대학교-샌버나디노", 
                  "플로리다 대학교"
                ].map((name) => (
                  <div key={name} className="text-[13px] text-gray-500 bg-white px-4 py-2 border border-gray-100 font-bold hover:border-[#8B1A2B] hover:text-[#8B1A2B] transition-all cursor-default">
                    {name}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b-2 border-gray-200">
                <Users className="w-5 h-5 text-gray-400" />
                <h3 className="text-[16px] font-extrabold text-[#1a1a2e]">해외 제휴 및 협업 기관</h3>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {[
                  "UBC", "STIBC", "Purdue University", "CSULB", 
                  "USM", "IVY Tech", "호주 NATTI"
                ].map((name) => (
                  <div key={name} className="text-[13px] text-gray-500 bg-white px-4 py-2 border border-gray-100 font-bold hover:border-[#8B1A2B] hover:text-[#8B1A2B] transition-all cursor-default">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-[#8B1A2B]">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <Globe className="w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 absolute top-0 left-0" />
           <GraduationCap className="w-[400px] h-[400px] translate-x-1/2 translate-y-1/2 absolute bottom-0 right-0" />
         </div>
         <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <h2 className="text-white text-[32px] lg:text-[48px] mb-6" style={{ fontWeight: 800, lineHeight: 1.2 }}>
              지금, 당신의 미래에<br />타임스미디어를 더하세요.
            </h2>
            <p className="text-white/60 text-[18px] mb-12 max-w-xl mx-auto font-medium">
              23년 교육 노하우가 집약된 커리큘럼으로<br />AI 시대에도 흔들리지 않는 전문가가 되십시오.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admission"
                className="px-12 py-5 bg-white text-[#8B1A2B] text-[17px] font-extrabold hover:bg-gray-100 transition shadow-2xl rounded-sm"
              >
                무료 수강상담 신청
              </Link>
              <Link
                to="/apply/orientation"
                className="px-12 py-5 border-2 border-white text-white text-[17px] font-extrabold hover:bg-white/10 transition rounded-sm"
              >
                입학설명회 신청
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
