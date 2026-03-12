import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import cert1 from "figma:asset/0d7ed677fd179d2d644aa7d28b2cbe4c3a5c24f2.png";
import cert2 from "figma:asset/f0afac9ce648186d1aaceb74a91d73f9e88b423e.png";
import cert3 from "figma:asset/42f15d19c0f4e519b4a8ff92b07700de332b508f.png";

export function CertificateBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
            Official Certificates
          </span>
          <h2 className="text-[24px] lg:text-[30px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>
            수료 및 자격 인증
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[cert1, cert2, cert3].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
            >
              <div className="w-full aspect-[1/1.41] overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100">
                <ImageWithFallback
                  src={img}
                  alt={`Certificate ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CoreDesignProps {
  courseName: string;
}

export function CoreDesign({ courseName }: CoreDesignProps) {
  return (
    <section className="py-20 bg-[#faf8f6]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-5 block" style={{ fontWeight: 600 }}>
          Core Design
        </span>
        <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-6" style={{ fontWeight: 800 }}>
          타임스 {courseName} 핵심 설계
        </h2>
        <p className="text-gray-600 text-[15px] max-w-2xl mx-auto mb-4" style={{ lineHeight: 1.8 }}>
          읽기·쓰기·듣기·말하기 네 가지 영어 핵심 스킬을 프레젠테이션, 팀 회의, 영업, 마케팅, 협상 등
          모든 실무 상황에서 활용할 수 있도록 설계되었습니다.
        </p>
        <p className="text-[#8B1A2B] text-[15px] max-w-2xl mx-auto" style={{ fontWeight: 600, lineHeight: 1.8 }}>
          토익·토플처럼 시험 점수로만 끝나는 것이 아니라,
          즉시 현장에서 쓰이는 실무형 영어 커뮤니케이션 능력을 갖추게 됩니다.
        </p>
      </div>
    </section>
  );
}
