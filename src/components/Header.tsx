import { Search, User as UserIcon, Menu } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  user: User | null;
  onShowAuth: () => void;
  onShowProfile: () => void;
}

export default function Header({ user, onShowAuth, onShowProfile }: HeaderProps) {
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
          <button 
            className="p-1 hover:text-link-blue transition-colors"
            onClick={user ? onShowProfile : onShowAuth}
          >
            <UserIcon size={20} className={user ? "text-link-blue" : ""} />
          </button>
          <a href="#" className="font-sans text-[11px] font-bold tracking-[0.5px] text-page-ink hover:text-link-blue transition-colors">
            NEWSLETTERS
          </a>
          {!user && (
            <button 
              onClick={onShowAuth}
              className="font-sans text-[11px] font-bold tracking-[0.5px] text-link-blue hover:underline transition-colors uppercase"
            >
              SUBSCRIBE
            </button>
          )}
          {user && (
            <span className="font-sans text-[11px] font-black tracking-[1px] text-wired-black">
              HI, {user.name.toUpperCase()}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
