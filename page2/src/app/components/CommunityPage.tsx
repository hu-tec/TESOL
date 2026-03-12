import { useState } from "react";
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
  { id: 1, title: "2026년 3월 서울 TESOL 과정 개강 안내", date: "2026.02.15", category: "공지", type: "course", courseName: "TESOL" },
  { id: 2, title: "AI 번역 교정 전문가 과정 신규 오픈", date: "2026.02.10", category: "이벤트", type: "course", courseName: "AI번역" },
  { id: 3, title: "타임스미디어 교육센터 설 연휴 휴무 안내", date: "2026.01.25", category: "공지", type: "common" },
  { id: 4, title: "홈페이지 리뉴얼 기념 수강료 할인 이벤트", date: "2026.01.20", category: "이벤트", type: "common" },
  { id: 5, title: "AI 프롬프트 과정 주말반 모집중", date: "2026.01.15", category: "공지", type: "course", courseName: "AI프롬프트" },
];

const faqs = [
  { 
    id: 1,
    type: "common",
    category: "수강신청",
    question: "비전공자도 TESOL 과정을 수강할 수 있나요?", 
    answer: "네, 전공에 상관없이 영어 교육에 열정이 있는 분이라면 누구나 수강 가능합니다. 레벨테스트를 통해 적합한 반을 추천해 드립니다." 
  },
  { 
    id: 2,
    type: "common",
    category: "자격증",
    question: "수료 후 발급되는 자격증은 공신력이 있나요?", 
    answer: "타임스미디어에서 발급하는 TESOL 및 ITT 자격증은 국내외 교육기관 및 기업에서 널리 인정받는 공신력 있는 민간 자격증입니다." 
  },
  { 
    id: 3,
    type: "kids-tesol",
    courseName: "어린이테솔",
    category: "어린이테솔",
    question: "어린이 테솔 과정의 특징은 무엇인가요?", 
    answer: "어린이들의 발달 단계에 맞춘 놀이 중심의 영어 교육법과 교실 관리 전략을 배웁니다. 실제 유치원 및 초등 방과후 교실에서 바로 활용 가능한 실습 중심 과정입니다." 
  },
  { 
    id: 4,
    type: "tesol-prep",
    courseName: "테솔대비반",
    category: "테솔대비반",
    question: "테솔 정규 과정 전 대비반을 들어야 하나요?", 
    answer: "영어로 진행되는 정규 TESOL 수업이 부담스러운 분들을 위한 예비 과정입니다. 기초 교육 이론과 필수 영어 표현을 미리 학습하여 정규 과정의 성취도를 높일 수 있습니다." 
  },
  { 
    id: 5,
    type: "TESOL",
    courseName: "TESOL",
    category: "교재",
    question: "TESOL 교재는 별도로 구매해야 하나요?",
    answer: "주교재는 수강료에 포함되어 있으며, 부교재 및 핸드아웃 자료는 개강일 강의실에서 배부해 드립니다."
  },
  { 
    id: 6,
    type: "AI번역",
    courseName: "AI번역",
    category: "교육내용",
    question: "AI 번역 교육에서 어떤 툴을 배우나요?",
    answer: "DeepL, Google Translate, ChatGPT 등 주요 AI 번역 툴의 활용법과 함께, 번역 품질을 높이는 포스트 에디팅 기법을 전문적으로 배웁니다."
  },
  { 
    id: 7,
    type: "ITT",
    courseName: "ITT",
    category: "자격시험",
    question: "ITT 시험 응시는 필수인가요?",
    answer: "과정 수료만으로도 수료증이 발급되지만, 국제 공인 자격 취득을 위해 정��� 시험 응시를 적극 권장하고 있습니다. 수강생에게는 시험 대비 특강이 제공됩니다."
  }
];

const qnas = [
  { id: 1, title: "어린이 테솔 주말반 개설 계획이 있나요?", name: "김*철", date: "2026.03.05", status: "답변완료", type: "kids-tesol", courseName: "어린이테솔" },
  { id: 2, title: "테솔 대비반 수강 후 정규 과정 할인 혜택이 있나요?", name: "박*연", date: "2026.03.04", status: "답변대기", type: "tesol-prep", courseName: "테솔대비반" },
  { id: 3, title: "AI 프롬프트 과정 수강료 할인이 가능한가요?", name: "최*호", date: "2026.03.02", status: "답변완료", type: "AI프롬프트", courseName: "AI프롬프트" },
  { id: 4, title: "수료증 재발급 신청 방법 안내 부탁드립니다.", name: "송*아", date: "2026.02.28", status: "답변완료", type: "common" },
  { id: 5, title: "AI 윤리 교육 기업 출강 문의드립니다.", name: "리*미", date: "2026.02.25", status: "답변대기", type: "AI윤리", courseName: "AI윤리" },
];

const reviews = [
  {
    id: 1,
    name: "김*아",
    course: "TESOL 8주 완성반",
    type: "course",
    courseName: "TESOL",
    rating: 5,
    content: "8주라는 짧은 시간 동안 영어로 수업을 구성하고 진행하는 능력이 몰라보게 향상되었습니다. 강사님의 열정적인 피드백이 큰 도움이 되었습니다.",
    date: "2026.01.20"
  },
  {
    id: 2,
    name: "이*준",
    course: "AI 프롬프트 실무 전문가",
    type: "course",
    courseName: "AI프롬프트",
    rating: 5,
    content: "막연했던 AI 활용법이 업무에 즉각 적용 가능한 무기가 되었습니다. 특히 업무 자동화 워크플로우를 직접 짜보는 실습이 백미였습니다.",
    date: "2026.01.15"
  },
  {
    id: 3,
    name: "박*혜",
    course: "ITT 비즈니스 번역",
    type: "course",
    courseName: "ITT",
    rating: 4,
    content: "평소 번역에 관심이 많았는데, 전문 용어 정리부터 문맥 파악까지 꼼꼼하게 배울 수 있어 만족스러웠습니다. 자격증 취득까지 성공했습니다!",
    date: "2026.01.05"
  },
  {
    id: 4,
    name: "정*우",
    course: "교육원 전반적인 만족도",
    type: "common",
    rating: 5,
    content: "시설도 깔끔하고 행정 직원분들이 너무 친절하셔서 교육 기간 내내 기분 좋게 공부할 수 있었습니다. 다른 과정도 들어보고 싶네요.",
    date: "2026.01.02"
  }
];

export function CommunityPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'common', 'kids-tesol', 'tesol-prep', 'tesol', 'ai-translation', 'ai-prompt', 'ai-ethics', 'itt'

  const filteredNotices = notices.filter(n => {
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || n.type === filter || n.courseName === filter;
    return matchSearch && matchFilter;
  });

  const filteredFaqs = faqs.filter(f => filter === "all" || f.type === filter || f.courseName === filter);
  const filteredQnas = qnas.filter(q => filter === "all" || q.type === filter || q.courseName === filter);
  const filteredReviews = reviews.filter(r => filter === "all" || r.type === filter || r.courseName === filter);

  const FilterBar = () => (
    <div className="space-y-4 mb-10">
      {/* 1차 대분류 */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "all", label: "전체보기" },
          { id: "common", label: "공통" },
          { id: "kids-tesol", label: "어린이테솔" },
          { id: "tesol-prep", label: "테솔대비반" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all ${
              ["all", "common", "kids-tesol", "tesol-prep"].includes(filter) && filter === btn.id
                ? "bg-[#8B1A2B] text-white shadow-md" 
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
      
      {/* 2차 중분류 */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
        {[
          { id: "TESOL", label: "TESOL" },
          { id: "AI번역", label: "AI번역" },
          { id: "AI프롬프트", label: "AI프롬프트" },
          { id: "AI윤리", label: "AI윤리" },
          { id: "ITT", label: "ITT 정통번역" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-5 py-2 rounded-lg text-[13px] font-bold transition-all ${
              filter === btn.id 
                ? "bg-[#1a1a2e] text-white shadow-md" 
                : "bg-white border border-gray-200 text-gray-400 hover:border-[#8B1A2B] hover:text-[#8B1A2B]"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-[32px] lg:text-[40px] font-extrabold text-[#1a1a2e] mb-4">커뮤니티</h1>
        <p className="text-gray-500">타임스미디어의 최신 소식과 다양한 수강생 이야기를 만나보세요.</p>
      </div>

      <Tabs defaultValue="notice" className="w-full" onValueChange={() => setSearch("")}>
        <TabsList className="w-full justify-start border-b border-gray-100 bg-transparent rounded-none p-0 mb-8 h-auto gap-8">
          <TabsTrigger 
            value="notice" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400"
          >
            공지사항
          </TabsTrigger>
          <TabsTrigger 
            value="faq" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400"
          >
            자주 묻는 질문 (FAQ)
          </TabsTrigger>
          <TabsTrigger 
            value="qna" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400"
          >
            1:1 문의 (Q&A)
          </TabsTrigger>
          <TabsTrigger 
            value="review" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400"
          >
            졸업생 후기
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notice" className="mt-0">
          <FilterBar />
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[18px] font-bold text-[#1a1a2e]">최신 공지사항</h3>
            <div className="relative w-64">
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
            {filteredNotices.map((n) => (
              <div key={n.id} className="group flex items-center justify-between py-5 px-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={`rounded-md font-bold text-[10px] px-2 py-0.5 border-none ${n.type === 'common' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                      {n.type === 'common' ? '공통' : `과목별${n.courseName ? `·${n.courseName}` : ''}`}
                    </Badge>
                    <Badge variant="outline" className="rounded-md font-medium text-[11px] bg-white border-gray-200 text-gray-400">
                      {n.category}
                    </Badge>
                  </div>
                  <span className="text-[15px] text-gray-800 group-hover:text-[#8B1A2B] transition-colors">{n.title}</span>
                </div>
                <span className="text-[13px] text-gray-400">{n.date}</span>
              </div>
            ))}
            {filteredNotices.length === 0 && (
              <div className="py-20 text-center text-gray-400">검색 결과가 없습니다.</div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="faq" className="mt-0">
          <FilterBar />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {filteredFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-4 bg-white overflow-hidden border-gray-100 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-5 text-left gap-4">
                    <div className="flex flex-col gap-3 w-full">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`rounded-md font-bold text-[10px] px-2 py-0.5 border-none ${faq.type === 'common' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                          {faq.type === 'common' ? '공통' : `과목별${faq.courseName ? `·${faq.courseName}` : ''}`}
                        </Badge>
                        <span className="text-[12px] text-gray-400 font-medium">[{faq.category}]</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[#8B1A2B] font-bold text-[18px]">Q.</span>
                        <span className="text-[15px] font-bold text-[#1a1a2e]">{faq.question}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pb-6 pt-2 pl-10">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
              {filteredFaqs.length === 0 && (
                <div className="py-20 text-center text-gray-400">등록된 질문이 없습니다.</div>
              )}
            </Accordion>
            <div className="mt-12 text-center p-8 bg-[#faf8f6] rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-600 mb-4">원하시는 답변을 찾지 못하셨나요?</p>
              <Button className="bg-[#1a1a2e] hover:bg-[#2a2a3e] text-white px-8">1:1 문의하기</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="qna" className="mt-0">
          <FilterBar />
          <div className="bg-white border-y border-gray-100 mb-10">
            {filteredQnas.map((q) => (
              <div key={q.id} className="group flex items-center justify-between py-5 px-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={`rounded-md font-bold text-[10px] px-2 py-0.5 border-none ${q.type === 'common' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                      {q.type === 'common' ? '공통' : `과목별${q.courseName ? `·${q.courseName}` : ''}`}
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
            {filteredQnas.length === 0 && (
              <div className="py-20 text-center text-gray-400">문의 내역이 없습니다.</div>
            )}
          </div>
          <div className="max-w-2xl mx-auto py-8 text-center bg-[#faf8f6] rounded-2xl border border-dashed border-gray-200">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-[#8B1A2B]" />
            </div>
            <h3 className="text-[20px] font-bold text-[#1a1a2e] mb-2">무엇이든 물어보세요</h3>
            <p className="text-gray-500 mb-8">수강신청, 교육과정, 자격증 등 궁금하신 점을 남겨주시면 <br />담당자가 영업일 기준 24시간 이내에 답변을 드립니다.</p>
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
            {filteredReviews.map((r) => (
              <motion.div 
                key={r.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className={`w-fit rounded-md font-bold text-[9px] px-1.5 py-0.5 border-none ${r.type === 'common' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                      {r.type === 'common' ? '공통' : `과목별${r.courseName ? `·${r.courseName}` : ''}`}
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
            {filteredReviews.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-400">등록된 후기가 없습니다.</div>
            )}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" className="rounded-full px-8 border-gray-200 text-gray-500 hover:bg-gray-50 shadow-sm">더 많은 후기 보기</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
