import { ApplicationForm } from "./ApplicationForm";

export function LevelTestPage() {
  return (
    <ApplicationForm 
      type="level-test" 
      title="레벨테스트 신청" 
      subtitle="자신의 현재 실력을 정확히 진단하고 최적의 교육 과정을 추천받으세요." 
    />
  );
}

export function TipApplicationPage() {
  return (
    <ApplicationForm 
      type="tip" 
      title="학습 꿀팁(TIP) 신청" 
      subtitle="타임스미디어만의 특별한 교육 노하우와 학습 팁을 무료로 받아보세요." 
    />
  );
}

export function CorporateEstimatePage() {
  return (
    <ApplicationForm 
      type="corporate" 
      title="기업 단체 교육/견적 문의" 
      subtitle="기업의 니즈에 맞춘 맞춤형 AI 및 언어 교육 솔루션을 제안해 드립니다." 
    />
  );
}

export function SeminarApplicationPage() {
  return (
    <ApplicationForm 
      type="seminar" 
      title="세미나 참가 신청" 
      subtitle="최신 AI 트렌드와 글로벌 커리어 전략을 다루는 특별 세미나에 초대합니다." 
    />
  );
}

export function OrientationApplicationPage() {
  return (
    <ApplicationForm 
      type="orientation" 
      title="신청서" 
      subtitle="교육 과정에 대한 궁금증을 해결하고 현직 강사진과 직접 소통해보세요." 
    />
  );
}
