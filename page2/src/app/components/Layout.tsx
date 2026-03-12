import { Outlet, useLocation, Link } from "react-router";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatBot } from "./ChatBot";
import { ArrowUp, GraduationCap } from "lucide-react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
        <ChatBot />
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 bg-white text-gray-600 rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
        <Link
          to="/admission"
          className="w-14 h-14 bg-[#8B1A2B] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#6d1422] transition-all hover:scale-105"
          title="수강 신청"
        >
          <GraduationCap className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
