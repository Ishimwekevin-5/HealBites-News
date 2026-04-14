import { Search, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-paper-white border-b border-wired-black">
      <div className="max-w-[1600px] mx-auto h-14 flex items-center px-4 justify-between">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          <button className="p-1">
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-[2px]">
            {['H', 'E', 'A', 'L', 'B', 'I', 'T', 'E', 'S'].map((char, i) => (
              <div 
                key={i} 
                className="bg-wired-black text-paper-white w-7 h-7 flex items-center justify-center font-sans font-black text-[18px] tracking-tight"
              >
                {char}
              </div>
            ))}
          </div>
        </div>

        {/* Center: Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {['MEDICINE', 'NUTRITION', 'MENTAL HEALTH', 'FITNESS', 'WELLNESS', 'BIOHACKING', 'PUBLIC HEALTH'].map((cat) => (
            <a
              key={cat}
              href="#"
              className="font-sans text-[11px] font-bold tracking-[0.5px] text-page-ink hover:text-link-blue transition-colors"
            >
              {cat}
            </a>
          ))}
        </nav>

        {/* Right: Icons + Links */}
        <div className="flex items-center gap-6">
          <button className="p-1">
            <User size={20} />
          </button>
          <a href="#" className="font-sans text-[11px] font-bold tracking-[0.5px] text-page-ink hover:text-link-blue transition-colors">
            NEWSLETTERS
          </a>
          <a href="#" className="font-sans text-[11px] font-bold tracking-[0.5px] text-link-blue hover:underline transition-colors">
            SUBSCRIBE
          </a>
        </div>
      </div>
    </header>
  );
}
