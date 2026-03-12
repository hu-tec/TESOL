import { useRef } from 'react';
import { ArrowRight, GraduationCap, Globe, Languages, Sparkles, Shield, ChevronDown, Check } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

// 5가지 전문 과정 데이터 (최종 버전 4 구성)
const COURSES = [
  {
    id: 1,
    category: '전통 언어 교육',
    title: 'TESOL교육',
    icon: GraduationCap,
    number: '01',
    tagline: '교실을 넘어, 세계 무대로',
    description: '8주 완성 국제영어교사 자격으로 글로벌 교육 현장에서 인정받는 전문가의 길을 열어보세요.',
    features: ['국제 공인 TESOL 자격증', '실전 교수법 마스터', '온라인 수업 설계', '글로벌 네트워크'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accentColor: 'text-blue-400',
    dotColor: 'bg-blue-500',
  },
  {
    id: 2,
    category: '전통 언어 교육',
    title: '전문통번역사',
    icon: Languages,
    number: '02',
    tagline: '언어를 연결하는 전문가',
    description: '25년 전통의 공신력 있는 통번역 교육으로 국제 회의, 비즈니스 현장의 필수 인재가 되세요.',
    features: ['동시통역 기법', '전문분야 번역', '실무 프로젝트', 'CAT Tool 활용'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'text-purple-400',
    dotColor: 'bg-purple-500',
  },
  {
    id: 3,
    category: 'AI 전문가 과정',
    title: 'AI번역교정전문가',
    icon: Globe,
    number: '03',
    tagline: 'AI 기술로 가치를 더하는 언어 전문가',
    description: 'AI 번역 기술과 인간의 언어 감각을 결합한 차세대 번역 전문가로 성장하세요.',
    features: ['AI 번역 도구 마스터', '품질 관리 시스템', '포스트에디팅', 'AI 워크플로우'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accentColor: 'text-emerald-400',
    dotColor: 'bg-emerald-500',
  },
  {
    id: 4,
    category: 'AI 전문가 과정',
    title: 'AI프롬프트 전문가',
    icon: Sparkles,
    number: '04',
    tagline: '모든 AI 활용의 핵심 역량',
    description: 'ChatGPT, Claude 등 AI 도구를 자유자재로 활용하는 프롬프트 엔지니어링 전문가가 되세요.',
    features: ['프롬프트 엔지니어링', 'ChatGPT 고급 활용', '업무 자동화', 'AI 전략'],
    gradient: 'from-orange-500/20 to-red-500/20',
    accentColor: 'text-orange-400',
    dotColor: 'bg-orange-500',
  },
  {
    id: 5,
    category: 'AI 전문가 과정',
    title: 'AI윤리전문가',
    icon: Shield,
    number: '05',
    tagline: '책임 있는 AI 활용 리더십',
    description: 'AI 시대에 필수적인 윤리적 AI 활용과 정책 수립 전문가로 거듭나세요.',
    features: ['AI 윤리 원칙', '리스크 관리', '정책 수립', '규제 동향'],
    gradient: 'from-indigo-500/20 to-purple-500/20',
    accentColor: 'text-indigo-400',
    dotColor: 'bg-indigo-500',
  },
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 애니메이션 수치 정의
  const heroOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.12], [1, 0.95]);
  const categoryOpacity = useTransform(smoothProgress, [0.3, 0.45], [0, 1]);
  const categoryY = useTransform(smoothProgress, [0.3, 0.45], [40, 0]);

  const cardPositions = [
    {
      x: useTransform(smoothProgress, [0.1, 0.4], ["-32vw", "-16vw"]),
      y: useTransform(smoothProgress, [0.1, 0.4], ["-28vh", "-18vh"]),
      scale: useTransform(smoothProgress, [0.1, 0.4], [1, 0.85]),
      opacity: useTransform(smoothProgress, [0, 0.05, 0.85, 0.95], [1, 1, 1, 0]),
    },
    {
      x: useTransform(smoothProgress, [0.1, 0.4], ["32vw", "-16vw"]),
      y: useTransform(smoothProgress, [0.1, 0.4], ["-28vh", "22vh"]),
      scale: useTransform(smoothProgress, [0.1, 0.4], [1, 0.85]),
      opacity: useTransform(smoothProgress, [0, 0.05, 0.85, 0.95], [1, 1, 1, 0]),
    },
    {
      x: useTransform(smoothProgress, [0.1, 0.4], ["-35vw", "16vw"]),
      y: useTransform(smoothProgress, [0.1, 0.4], ["12vh", "-25vh"]),
      scale: useTransform(smoothProgress, [0.1, 0.4], [1, 0.8]),
      opacity: useTransform(smoothProgress, [0, 0.05, 0.85, 0.95], [1, 1, 1, 0]),
    },
    {
      x: useTransform(smoothProgress, [0.1, 0.4], ["0vw", "16vw"]),
      y: useTransform(smoothProgress, [0.1, 0.4], ["32vh", "5vh"]),
      scale: useTransform(smoothProgress, [0.1, 0.4], [1, 0.8]),
      opacity: useTransform(smoothProgress, [0, 0.05, 0.85, 0.95], [1, 1, 1, 0]),
    },
    {
      x: useTransform(smoothProgress, [0.1, 0.4], ["35vw", "16vw"]),
      y: useTransform(smoothProgress, [0.1, 0.4], ["12vh", "35vh"]),
      scale: useTransform(smoothProgress, [0.1, 0.4], [1, 0.8]),
      opacity: useTransform(smoothProgress, [0, 0.05, 0.85, 0.95], [1, 1, 1, 0]),
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-[#0a0c10] font-sans selection:bg-blue-500/30 selection:text-white">
      {/* 고정 캔버스 섹션 */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* 배경 레이어 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1f2e_0%,#0a0c10_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[100px]" 
          />
        </div>

        {/* 히어로 콘텐츠 */}
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-semibold tracking-widest text-slate-300 uppercase mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Empowering the Future of Education
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6">
            전통과 혁신의 <span className="font-light text-slate-500">조화</span>
          </h1>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-12">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              5가지 전문 과정
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            25년 언어 교육의 정통성과 AI 시대의 혁신적 역량을 결합하여<br className="hidden md:block" /> 
            독보적인 전문가로 성장할 수 있는 완벽한 커리큘럼을 제공합니다.
          </p>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="mt-20 flex flex-col items-center gap-3 text-slate-500">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-50">Scroll Down</span>
            <ChevronDown className="w-6 h-6" strokeWidth={1} />
          </motion.div>
        </motion.div>

        {/* 카테고리 레이블 */}
        <motion.div 
          style={{ opacity: categoryOpacity, y: categoryY }}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        >
          <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-2 gap-12 lg:gap-32">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-[80vh] rounded-[48px] border border-white/5 bg-white/2 backdrop-blur-[2px] flex flex-col items-center pt-10 text-center">
                <div className="px-5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold mb-4 uppercase tracking-[0.3em] border border-blue-500/20">
                  Core Business
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">전통 언어 교육</h3>
                <p className="text-[11px] md:text-xs text-slate-500 font-light px-10 leading-relaxed opacity-60">
                  25년 축적된 노하우로 완성된 글로벌 수준의 정통 언어 전문가 과정
                </p>
                <div className="mt-auto mb-8 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-[80vh] rounded-[48px] border border-white/5 bg-white/2 backdrop-blur-[2px] flex flex-col items-center pt-10 text-center">
                <div className="px-5 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold mb-4 uppercase tracking-[0.3em] border border-purple-500/20">
                  Future-Driven
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">AI 전문가 과정</h3>
                <p className="text-[11px] md:text-xs text-slate-500 font-light px-10 leading-relaxed opacity-60">
                  인공지능 시대를 선도하는 차세대 AI 활용 및 윤리 전문가 과정
                </p>
                <div className="mt-auto mb-8 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 움직이는 카드들 */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {COURSES.map((course, index) => (
              <motion.div
                key={course.id}
                style={{
                  x: cardPositions[index].x,
                  y: cardPositions[index].y,
                  scale: cardPositions[index].scale,
                  opacity: cardPositions[index].opacity,
                }}
                className="absolute pointer-events-auto"
              >
                <CombinedCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[450vh]" />

      {/* CTA 섹션 */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-[#0a0c10]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
            지금이 바로 <br/>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">변화의 순간</span>입니다
          </h2>
          <p className="text-xl text-slate-500 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            전통적인 전문성에 AI라는 날개를 다는 일, 우리의 5가지 과정이 당신의 무한한 성장을 지원합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-12 py-5 bg-white text-slate-900 rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              무료 교육 상담 신청
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-12 py-5 border border-white/10 text-white rounded-full font-medium transition-all hover:bg-white/5 hover:border-white/20">
              커리큘럼 상세 보기
            </button>
          </div>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-700 text-[10px] tracking-[0.5em] uppercase font-bold opacity-30">
          Educational Excellence since 2001
        </div>
      </section>
    </div>
  );
}

function CombinedCard({ course }: { course: any }) {
  const Icon = course.icon;
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="w-[280px] md:w-[320px] h-[400px] md:h-[420px] rounded-[40px] p-8 relative overflow-hidden group cursor-pointer"
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all group-hover:bg-white/[0.08] group-hover:border-white/20 rounded-[40px]" />
      <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[40px]`} />
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${course.accentColor} group-hover:bg-white group-hover:text-slate-900 transition-all duration-500`}>
            <Icon size={28} strokeWidth={1.5} />
          </div>
          <span className="text-4xl font-bold text-white/10 tracking-tighter group-hover:text-white/20 transition-colors">
            {course.number}
          </span>
        </div>
        <div className="mb-6">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2 group-hover:text-white/60 transition-colors">{course.category}</h4>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight group-hover:translate-x-1 transition-transform">{course.title}</h3>
        </div>
        <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 opacity-80 group-hover:text-white group-hover:opacity-100 transition-all">{course.tagline}</p>
        <div className="space-y-2.5 mb-auto">
          {course.features.slice(0, 3).map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-3 text-[11px] text-slate-500 group-hover:text-white/80 transition-colors">
              <Check className={`w-3.5 h-3.5 ${course.accentColor} group-hover:text-white`} />
              {feature}
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-xs font-bold text-white tracking-widest uppercase">View Course</span>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
