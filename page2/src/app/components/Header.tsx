import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Phone, Mail, Instagram, Youtube, MessageCircle, Share2 } from "lucide-react";

const snsLinks = [
  { icon: MessageCircle, label: "KakaoTalk", color: "#FEE500", textColor: "#3C1E1E", href: "#" },
  { icon: Instagram, label: "Instagram", color: "#E4405F", textColor: "#fff", href: "#" },
  { icon: Youtube, label: "YouTube", color: "#FF0000", textColor: "#fff", href: "#" },
  { label: "N", isNaver: true, color: "#03C75A", textColor: "#fff", href: "#" },
];

const navItems = [
  { label: "홈", path: "/" },
  { label: "교육원 소개", path: "/about" },
  { label: "입학안내", path: "/admission" },
  {
    label: "과목 소개",
    path: "/courses/tesol",
    children: [
      { label: "TESOL 영어교육", path: "/courses/tesol" },
      { label: "AI 번역·통역", path: "/courses/ai-translation" },
      { label: "AI 프롬프트", path: "/courses/ai-prompt" },
      { label: "AI 윤리", path: "/courses/ai-ethics" },
      { label: "ITT 정통 통번역", path: "/courses/itt" },
    ],
  },
  { label: "커뮤니티", path: "/community" },
  { label: "문의", path: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1a1a2e] text-white/70 text-[12px] hidden lg:block">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" /> 02-6207-9090
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3" /> hutechc01@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="hover:text-white transition-colors">로그인</Link>
            <Link to="/register" className="hover:text-white transition-colors">회원가입</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-100"}`}>
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-[#8B1A2B] rounded-full flex items-center justify-center">
              <span className="text-white text-[13px] tracking-tight" style={{ fontWeight: 700 }}>TM</span>
            </div>
            <div className="leading-tight">
              <div className="text-[16px] tracking-tight" style={{ fontWeight: 800, color: '#1a1a2e' }}>
                TIMES MEDIA
              </div>
              <div className="text-[10px] text-gray-400 tracking-[0.15em] uppercase">
                Since 2001
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                item.children?.some((c) => location.pathname === c.path);
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-5 py-2 text-[15px] transition-colors relative ${
                      isActive
                        ? "text-[#8B1A2B]"
                        : "text-[#333] hover:text-[#8B1A2B]"
                    }`}
                    style={{ fontWeight: isActive ? 600 : 500 }}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5 mt-0.5" />}
                    {isActive && (
                      <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#8B1A2B]" />
                    )}
                  </Link>
                  {item.children && dropdownOpen === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-52 z-50">
                      <div className="bg-white rounded-md shadow-lg border border-gray-100 py-1.5 overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-5 py-2.5 text-[14px] transition-colors ${
                              location.pathname === child.path
                                ? "text-[#8B1A2B] bg-red-50/60"
                                : "text-gray-600 hover:text-[#8B1A2B] hover:bg-red-50/40"
                            }`}
                            style={{ fontWeight: location.pathname === child.path ? 600 : 400 }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop SNS Icons */}
            <div className="hidden lg:flex items-center gap-2">
              {snsLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-8 h-8 flex items-center justify-center rounded-full transition-all hover:scale-110 shadow-sm"
                  style={{ backgroundColor: s.color, color: s.textColor }}
                  title={s.label}
                >
                  {s.isNaver ? (
                    <span className="text-[14px] font-black leading-none" style={{ marginTop: '-1px' }}>N</span>
                  ) : (
                    <s.icon className="w-4 h-4" />
                  )}
                </a>
              ))}
              <div className="w-[1px] h-4 bg-gray-200 mx-2" />
            </div>

            <Link
              to="/apply/orientation"
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-[#8B1A2B] text-white rounded text-[14px] hover:bg-[#6d1422] transition-colors"
              style={{ fontWeight: 600 }}
            >
              수강 신청
            </Link>
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-[15px] text-gray-700 hover:bg-red-50/50 hover:text-[#8B1A2B] rounded-lg"
                    style={{ fontWeight: 500 }}
                    onClick={() => !item.children && setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-[14px] text-gray-500 hover:text-[#8B1A2B] hover:bg-red-50/40 rounded-lg"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 px-4 flex gap-3">
                <Link
                  to="/login"
                  className="flex-1 text-center py-2.5 border border-gray-200 text-gray-700 rounded text-[14px]"
                  style={{ fontWeight: 500 }}
                  onClick={() => setMobileOpen(false)}
                >
                  로그인
                </Link>
                <Link
                  to="/apply/orientation"
                  className="flex-1 text-center py-2.5 bg-[#8B1A2B] text-white rounded text-[14px]"
                  style={{ fontWeight: 600 }}
                  onClick={() => setMobileOpen(false)}
                >
                  수강 신청
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
