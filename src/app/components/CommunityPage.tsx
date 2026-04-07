import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  HelpCircle, 
  Star, 
  Search, 
  ChevronRight, 
  MessageSquare,
  User,
  Clock,
  Quote
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

const notices = [
  { id: 1, title: "2026년 3월 서울 TESOL 과정 개강 안내", date: "2026.02.15", category: "공지", mainType: "tesol", subType: "class" },
  { id: 2, title: "AI 번역 교정 전문가 과정 신규 오픈", date: "2026.02.10", category: "이벤트", mainType: "tesol", subType: "ai-trans" },
  { id: 3, title: "타임스미디어 교육센터 설 연휴 휴무 안내", date: "2026.01.25", category: "공지", mainType: "common" },
  { id: 4, title: "홈페이지 리뉴얼 기념 수강료 할인 이벤트", date: "2026.01.20", category: "이벤트", mainType: "orientation", subType: "tuition" },
  { id: 5, title: "AI 프롬프트 과정 주말반 모집중", date: "2026.01.15", category: "공지", mainType: "tesol", subType: "prompt" },
];

const faqs = [
  { id: 1, mainType: "tesol", category: "프로그램 정보", question: "TESOL (영어교사 양성과정)이 무엇인가요?", answer: "TESOL(Teaching English to Speakers of Other Languages)은 영어가 모국어가 아닌 사람들에게 영어를 가르치기 위한 국제 공인 영어교수법 과정입니다. 전 세계적으로 인정받는 영어 교사 양성 프로그램입니다." },
  { id: 2, mainType: "kids-tesol", category: "프로그램 정보", question: "TESOL for Children (어린이테솔)은 무엇인가요?", answer: "어린이테솔은 3세부터 12세 미만의 어린이들을 대상으로 영어를 효과적이고 흥미롭게 가르칠 수 있는 교수법을 배우는 특화된 과정입니다. 놀이, 노래, 챈트 등을 활용한 실무 위주의 교육이 진행됩니다." },
  { id: 3, mainType: "tesol", category: "자격증", question: "해외에서도 활용 가능한 Certificate인가요?", answer: "네, 맞습니다. 캘리포니아 주립대 롱비치(CSULB) 명의로 발급되는 Certificate는 미국을 비롯한 전 세계 어느 곳에서나 그 권위와 수준을 인정받고 있습니다." },
  { id: 4, mainType: "tesol", category: "기관 소개", question: "캘리포니아 주립대학교 롱비치는 어떤 대학인가요?", answer: "캘리포니아 주립대학교 롱비치(CSULB)는 캘리포니아 주립대 시스템 중 가장 크고 명성 높은 캠퍼스 중 하나로, 특히 교육학 분야에서 뛰어난 평가를 받고 있는 우수한 주립대학교입니다." },
  { id: 5, mainType: "tesol", category: "수강신청", question: "학사이상만 지원할 수 있나요? 지원자격이 궁금합니다.", answer: "아닙니다. 전문대졸, 재학생, 고졸 등 학력에 제한 없이 지원 가능합니다. 단, 과정을 무사히 이수할 수 있는 기본적인 영어 실력을 갖추었는지 확인하는 레벨테스트를 통과하셔야 입학이 가능합니다." },
  { id: 6, mainType: "tesol", category: "수업관련", question: "한국인 강사가 강의하나요?", answer: "TESOL 과정은 다년간의 강의 경력과 테솔/언어학 관련 석사 이상의 학위를 보유한 우수한 원어민 강사진이 100% 영어로 진행합니다." },
  { id: 7, mainType: "common", category: "수업료", question: "비용이 많이 비싸네요?", answer: "미국 현지로 유학 가서 관련 과정을 이수하는 것에 비해 훨씬 경제적입니다. 현지 수준의 퀄리티 높은 오프라인 강의를 합리적인 비용에 국내에서 제공하고 있으며, 다양한 혜택을 통해 수강생의 부담을 덜어드리고자 노력하고 있습니다." },
  { id: 8, mainType: "tesol", category: "프로그램 정보", question: "국내 대학에도 TESOL프로그램들이 있던데 다른 점이 무엇인가요?", answer: "국내 대학 테솔 과정의 경우 해당 대학 명의의 수료증이 발급되는 반면, 본 과정은 미국 주립대학교 (CSULB) 총장 명의의 Certificate가 직접 발급되어 공신력이 다릅니다." },
  { id: 9, mainType: "tesol", category: "자격증", question: "국내대학 TESOL 프로그램과 동일하게 인정받을 수 있나요?", answer: "네, 물론입니다. 국내뿐만 아니라 오히려 해외 학위로 인정되어 다양한 취업처에서 국내 테솔 수료보다 높은 경쟁력을 가질 수 있습니다." },
  { id: 10, mainType: "common", category: "수업관련", question: "수업을 들을 수 있는 영어 레벨이 따로 있나요? 공인인증시험이 필요한가요?", answer: "공인인증시험 점수(토익, 토플 등)가 필수사항은 아닙니다. 자체 레벨테스트 결과에 따라 입학 여부가 결정되며, 일정 수준의 기초 영어 회화 및 작문 실력이 요구됩니다." },
  { id: 11, mainType: "common", category: "수강신청", question: "레벨테스트 시험은 어떻게 보나요?", answer: "레벨테스트는 사전 예약 후 오프라인 센터에 방문하여 원어민 강사와의 1:1 인터뷰 형식으로 진행됩니다. 기본적인 회화 능력 및 발음, 문법 등을 종합적으로 평가합니다." },
  { id: 12, mainType: "common", category: "수강신청", question: "레벨테스트에 떨어지면 수강을 못하게 되나요?", answer: "정규 과정을 수강하기에 영어 실력이 부족하다고 판단될 경우, 테솔 대비반(Pre-TESOL) 수강 권유나 재시험 기회를 제공하고 있습니다. 누구나 준비를 통해 입학 가능합니다." },
  { id: 13, mainType: "tesol-prep", category: "프로그램 정보", question: "Pre-TESOL(테솔대비반)은 무엇인가요?", answer: "정규 TESOL 과정 입학을 위해 영어 기초 체력(회화, 문법, 독해 등)을 단기간에 끌어올리는 사전 준비 과정입니다. 원어민 100% 영어 수업에 대한 적응력을 키워줍니다." },
  { id: 14, mainType: "tesol", category: "프로그램 정보", question: "테솔과 어린이 테솔이 있는데 어떤걸 들어야 할까요?", answer: "가르치고자 하는 대상(Target Audience)에 따라 선택하시면 됩니다. 유치/초등부 강사를 희망하시면 어린이 테솔, 중고등부/성인 대상 또는 광범위한 교수법이 필요하시면 일반 테솔을 추천합니다." },
  { id: 15, mainType: "tesol", subType: "job", category: "취업", question: "영어강사가 자격증을 취득하면 무엇이 좋나요?", answer: "입증된 티칭 스킬을 자격증으로 증명하여 채용 시 우대를 받을 수 있습니다. 또한 체계적인 교수법 습득으로 수업 퀄리티가 향상되며, 강사로서의 전문성과 자신감을 한 단계 업그레이드할 수 있습니다." },
  { id: 16, mainType: "tesol", subType: "job", category: "취업", question: "TESOL Certificate을 취득하면 취업도 연결해 주나요?", answer: "자체 취업 지원 센터를 통해 우수 졸업생 대상으로 제휴 된 어학원 및 교육기관의 구인 정보 제공, 이력서 첨삭 등 다양한 취업 지원 서비스를 제공하고 있습니다." },
  { id: 17, mainType: "common", category: "수업관련", question: "서울 외 다른 지역에서도 들을 수 있나요?", answer: "현장감 넘치는 오프라인 수업은 현재 서울 센터에서 진행되고 있습니다만, 타 지역 거주자분들을 위해 오프라인 수업의 퀄리티를 그대로 구현한 온라인(Live) 클래스도 운영 중입니다." },
  { id: 18, mainType: "tesol", category: "수강신청", question: "그동안 어떤 분들이 듣고 Certificate을 취득했나요?", answer: "현직 영어 강사, 예비 강사, 해외 유학 및 워킹홀리데이 준비생, 그리고 영어 교육에 관심 있는 학부모님 등 다양한 배경을 가진 수많은 분들이 성공적으로 과정을 수료하셨습니다." },
  { id: 19, mainType: "tesol", category: "자격증", question: "수업을 들으면 Certificate 은 다 주나요?", answer: "단순히 출석만 한다고 주어지는 것은 아닙니다. 엄격한 학사 관리 기준(출석률, 과제 점수, 실습 평가 등)을 모두 통과한 분들께만 정식 Certificate이 발급됩니다." },
  { id: 20, mainType: "tesol", category: "수강신청", question: "원어민이나 다른 나라 국적의 사람들도 들을 수 있나요?", answer: "네, 국적에 상관없이 누구나 수강 가능합니다. 실제로 영어를 모국어로 사용하는 원어민 강사들도 교수법을 배우기 위해 본 과정을 다수 수강하고 있습니다." },
  { id: 21, mainType: "common", category: "수강신청", question: "수강신청을 하고 싶은데 어떻게 하면 되나요?", answer: "홈페이지를 통한 온라인 접수, 전화, 혹은 센터 방문 상담을 통해 수강 신청이 가능합니다. 우선 레벨테스트 일정을 예약해 주시기 바랍니다." },
  { id: 22, mainType: "tesol", subType: "job", category: "취업", question: "테솔 수료후 어떻게 활용할수있나요?", answer: "유치원, 어학원 강사 취업뿐만 아니라 영어 공부방 창업, 방과후 소속 교사, 기업 출강 강사, 프리랜서 등 영어 교육과 관련된 다양한 분야로 진출하여 활용할 수 있습니다." },
  { id: 23, mainType: "tesol", category: "자격증", question: "정말 주립대 미국 Certificate를 준다는데 한국에서 가능한 것인가요?", answer: "네, 본 교육센터는 캘리포니아 주립대 롱비치(CSULB)와의 공식 업무 협약을 통해 커리큘럼을 승인받아 국내에서 동일한 교육 과정을 제공하며 정규 Certificate를 발급하고 있습니다." },
  { id: 24, mainType: "tesol", subType: "itt", category: "프로그램 정보", question: "국내 대학과정하고 다른점이 무엇이며 국내나 해외에서 활용이 가능한 것인가요?", answer: "가장 큰 차이는 발급 기관(미국 주립대 vs 국내 대학)입니다. 국제적으로 통용되는 Certificate이므로 국내는 물론 아포스티유(Apostille) 인증 등을 통해 해외 취업 시에도 공신력을 갖습니다." },
  { id: 25, mainType: "tesol", subType: "job", category: "취업", question: "타임스테솔 졸업후 취업연계도 해주시나요?", answer: "네, 우수한 성적으로 수료한 졸업생분들께는 파트너 어학원 채용 추천, 영문 이력서 및 인터뷰 가이드 등 실질적인 취업 연계 혜택을 제공하고 있습니다." }
];

const qnas = [
  { id: 1, title: "어린이 테솔 주말반 개설 계획이 있나요?", name: "김*철", date: "2026.03.05", status: "답변완료", mainType: "kids-tesol" },
  { id: 2, title: "테솔 대비반 수강 후 정규 과정 할인 혜택이 있나요?", name: "박*연", date: "2026.03.04", status: "답변대기", mainType: "tesol-prep" },
  { id: 3, title: "AI 프롬프트 과정 수강료 할인이 가능한가요?", name: "최*호", date: "2026.03.02", status: "답변완료", mainType: "tesol", subType: "prompt" },
  { id: 4, title: "오프라인 수업 출석 기준이 궁금합니다.", name: "이*진", date: "2026.03.01", status: "답변완료", mainType: "common", subType: "class" },
  { id: 5, title: "레벨테스트 결과는 언제 나오나요?", name: "정*우", date: "2026.02.28", status: "답변대기", mainType: "common", subType: "level" },
  { id: 6, title: "ITT 통번역 자격증 갱신 기간이 어떻게 되나요?", name: "강*희", date: "2026.02.26", status: "답변완료", mainType: "itt" },
  { id: 7, title: "온라인 라이브러리 접속이 안 됩니다.", name: "윤*영", date: "2026.02.25", status: "답변완료", mainType: "common" },
  { id: 8, title: "미국 주립대 테솔 수료증 재발급 가능한가요?", name: "조*민", date: "2026.02.24", status: "답변대기", mainType: "tesol" },
  { id: 9, title: "무료 레벨테스트 예약은 어디서 하나요?", name: "임*준", date: "2026.02.22", status: "답변완료", mainType: "common", subType: "level" },
  { id: 10, title: "주말반 결석 시 보강이 가능한가요?", name: "한*지", date: "2026.02.20", status: "답변완료", mainType: "common", subType: "class" },
  { id: 11, title: "AI번역 교육 과정은 어떤 툴을 사용하나요?", name: "백*현", date: "2026.02.18", status: "답변완료", mainType: "ai-trans" },
  { id: 12, title: "설명회 참석 후 당일 등록 혜택이 있나요?", name: "홍*성", date: "2026.02.15", status: "답변대기", mainType: "common", subType: "orientation" },
  { id: 13, title: "취업 지원 서비스 내용이 궁금합니다.", name: "오*수", date: "2026.02.10", status: "답변완료", mainType: "common", subType: "job" }
];

const reviews = [
  {
    id: 1,
    name: "김*아",
    course: "TESOL 8주 완성반",
    mainType: "tesol",
    rating: 5,
    content: "8주라는 짧은 시간 동안 영어로 수업을 구성하고 진행하는 능력이 몰라보게 향상되었습니다. 강사님의 열정적인 피드백이 큰 도움이 되었습니다.",
    date: "2026.01.20"
  },
  {
    id: 2,
    name: "이*준",
    course: "AI 프롬프트 실무 전문가",
    mainType: "tesol",
    subType: "prompt",
    rating: 5,
    content: "막연했던 AI 활용법이 업무에 즉각 적용 가능한 무기가 되었습니다. 특히 업무 자동화 워크플로우를 직접 짜보는 실습이 백미였습니다.",
    date: "2026.01.15"
  }
];

export function CommunityPage() {
  const [search, setSearch] = useState("");
  const [mainFilter, setMainFilter] = useState("all");
  const [subFilter, setSubFilter] = useState("all");

  const handleMainFilterChange = (id: string) => {
    setMainFilter(id);
    setSubFilter("all");
  };

  const showSubMenu = useMemo(() => {
    return mainFilter !== "all";
  }, [mainFilter]);

  const subMenuItems = useMemo(() => {
    return [
      { id: "all", label: "전체보기" },
      { id: "orientation", label: "설명회" },
      { id: "job", label: "취업" },
      { id: "level", label: "레벨테스트" },
      { id: "teacher", label: "강사관련" },
      { id: "class", label: "수업관련" },
      { id: "tuition", label: "수업료" },
    ];
  }, []);

  const filterItems = (items: any[]) => {
    return items.filter(item => {
      const matchSearch = item.title ? item.title.toLowerCase().includes(search.toLowerCase()) : true;
      const matchMain = mainFilter === "all" || item.mainType === mainFilter;
      const matchSub = subFilter === "all" || item.subType === subFilter;
      return matchSearch && matchMain && matchSub;
    });
  };

  const FilterBar = () => (
    <div className="mb-10 space-y-4">
      {/* 1단계 (Major Category Area) */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-gray-100 overflow-x-auto scrollbar-hide">
        {[
          { id: "all", label: "전체보기" },
          { id: "tesol", label: "TESOL" },
          { id: "itt", label: "정통통역번역교육" },
          { id: "prompt", label: "프롬프트 교육" },
          { id: "ethics", label: "윤리 교육" },
          { id: "ai-trans", label: "AI번역 교육" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => handleMainFilterChange(btn.id)}
            className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all whitespace-nowrap ${
              mainFilter === btn.id
                ? "bg-[#8B1A2B] text-white shadow-md" 
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
      
      {/* 2단계 (Minor Category Area) - Dynamic */}
      {showSubMenu && (
        <motion.div 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2 pt-1 overflow-x-auto scrollbar-hide"
        >
          <div className="text-[12px] font-bold text-gray-300 mr-2 uppercase tracking-wider shrink-0">Sub Category</div>
          {subMenuItems.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSubFilter(btn.id)}
              className={`px-4 py-2 rounded-lg text-[13px] font-bold transition-all whitespace-nowrap ${
                subFilter === btn.id 
                  ? "bg-[#1a1a2e] text-white shadow-md" 
                  : "bg-white border border-gray-200 text-gray-400 hover:border-[#8B1A2B] hover:text-[#8B1A2B]"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-[32px] lg:text-[40px] font-extrabold text-[#1a1a2e] mb-4">커뮤니티</h1>
        <p className="text-gray-500">타임스미디어의 최신 소식과 다양한 수강생 이야기를 만나보세요.</p>
      </div>

      <Tabs defaultValue="notice" className="w-full" onValueChange={() => setSearch("")}>
        <TabsList className="w-full justify-start border-b border-gray-100 bg-transparent rounded-none p-0 mb-8 h-auto gap-8 overflow-x-auto scrollbar-hide">
          <TabsTrigger 
            value="notice" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400 shrink-0"
          >
            공지사항
          </TabsTrigger>
          <TabsTrigger 
            value="faq" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400 shrink-0"
          >
            자주 묻는 질문 (FAQ)
          </TabsTrigger>
          <TabsTrigger 
            value="qna" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400 shrink-0"
          >
            Q&A
          </TabsTrigger>
          <TabsTrigger 
            value="review" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400 shrink-0"
          >
            졸업생 후기
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notice" className="mt-0">
          <FilterBar />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h3 className="text-[18px] font-bold text-[#1a1a2e]">최신 공지사항</h3>
            <div className="relative w-full md:w-64">
              <Input 
                placeholder="공지사항 검색" 
                className="pl-9 bg-gray-50 border-gray-100 rounded-full h-10 text-[13px]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <div className="bg-white border-y border-gray-100">
            {filterItems(notices).map((n) => (
              <div key={n.id} className="group flex items-center justify-between py-5 px-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-md font-bold text-[10px] px-2 py-0.5 border-none bg-blue-50 text-blue-600">
                      {n.mainType === 'common' ? '공통' : '과목별'}
                    </Badge>
                  </div>
                  <span className="text-[15px] text-gray-800 group-hover:text-[#8B1A2B] transition-colors">{n.title}</span>
                </div>
                <span className="text-[13px] text-gray-400">{n.date}</span>
              </div>
            ))}
            {filterItems(notices).length === 0 && (
              <div className="py-20 text-center text-gray-400">검색 결과가 없습니다.</div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="faq" className="mt-0">
          <FilterBar />
          <div className="bg-white border-y border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              {filterItems(faqs).map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-50 last:border-b-0">
                  <AccordionTrigger className="hover:no-underline py-5 px-4 text-left hover:bg-gray-50/50 transition-colors group [&[data-state=open]]:bg-gray-50/50">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="shrink-0 rounded-md font-bold text-[10px] px-2 py-0.5 border-none bg-blue-50 text-blue-600">
                          {faq.mainType === 'common' ? '공통' : '과목별'}
                        </Badge>
                        <Badge variant="outline" className="shrink-0 rounded-md font-medium text-[11px] bg-gray-100 text-gray-500 border-gray-100">
                          {faq.category}
                        </Badge>
                      </div>
                      <span className="text-[15px] font-normal text-gray-800 group-hover:text-[#8B1A2B] transition-colors text-left">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] text-gray-600 leading-relaxed px-4 pb-6 pt-4 bg-gray-50/30 border-t border-gray-50">
                    <div className="pl-[20px] md:pl-[140px]">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
              {filterItems(faqs).length === 0 && (
                <div className="py-20 text-center text-gray-400">등록된 질문이 없습니다.</div>
              )}
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="qna" className="mt-0">
          <FilterBar />
          <div className="bg-white border-y border-gray-100 mb-10">
            {filterItems(qnas).map((q) => (
              <div key={q.id} className="group flex items-center justify-between py-5 px-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-md font-bold text-[10px] px-2 py-0.5 border-none bg-blue-50 text-blue-600">
                      {q.mainType === 'common' ? '공통' : '과목별'}
                    </Badge>
                    <Badge variant="outline" className={`rounded-md font-medium text-[11px] ${q.status === '답변완료' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-gray-100 text-gray-500 border-gray-100'}`}>
                      {q.status}
                    </Badge>
                  </div>
                  <span className="text-[15px] text-gray-800 group-hover:text-[#8B1A2B] transition-colors">{q.title}</span>
                </div>
                <div className="flex items-center gap-4 text-[13px] text-gray-400">
                  <span>{q.name}</span>
                  <span>{q.date}</span>
                </div>
              </div>
            ))}
            {filterItems(qnas).length === 0 && (
              <div className="py-20 text-center text-gray-400">문의 내역이 없습니다.</div>
            )}
          </div>
          <div className="max-w-2xl mx-auto py-8 text-center bg-[#faf8f6] rounded-2xl border border-dashed border-gray-200">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-[#8B1A2B]" />
            </div>
            <h3 className="text-[20px] font-bold text-[#1a1a2e] mb-2">무엇이든 물어보세요</h3>
            <p className="text-gray-500 mb-8">궁금하신 점을 남겨주시면 담당자가 답변을 드립니다.</p>
            <Button 
              onClick={() => window.location.href = "/contact"}
              className="bg-[#8B1A2B] hover:bg-[#6d1422] text-white px-8 h-12 rounded-lg"
            >
              1:1 문의 작성하기
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="review" className="mt-0">
          <FilterBar />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterItems(reviews).map((r) => (
              <motion.div 
                key={r.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit rounded-md font-bold text-[9px] px-1.5 py-0.5 border-none bg-orange-50 text-orange-600">
                      수강후기
                    </Badge>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < r.rating ? "text-orange-400 fill-orange-400" : "text-gray-200"}`} />
                      ))}
                    </div>
                  </div>
                  <span className="text-[12px] text-gray-400">{r.date}</span>
                </div>
                <div className="relative mb-4">
                  <Quote className="w-8 h-8 text-gray-50 absolute -top-4 -left-2 -z-0" />
                  <p className="text-[14px] text-gray-700 leading-relaxed relative z-10">
                    {r.content}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#1a1a2e]">{r.name}</p>
                    <p className="text-[11px] text-[#8B1A2B] font-medium">{r.course}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            {filterItems(reviews).length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-400">등록된 후기가 없습니다.</div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
