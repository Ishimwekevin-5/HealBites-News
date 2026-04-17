import { X, LogOut, User, Mail, Shield, Bell } from 'lucide-react';
import { auth, signOut } from '../lib/firebase';

interface ProfileViewProps {
  user: { name: string; email: string };
  onClose: () => void;
}

export default function ProfileView({ user, onClose }: ProfileViewProps) {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      onClose();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-paper-white z-[100] overflow-y-auto">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 hover:bg-hairline-tint transition-colors z-[110]"
      >
        <X size={32} />
      </button>

      <div className="max-w-4xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-3 bg-wired-black text-white font-mono text-sm tracking-widest uppercase">
              <User size={18} />
              Account
            </button>
            <button className="flex items-center gap-3 px-4 py-3 hover:bg-hairline-tint font-mono text-sm tracking-widest uppercase transition-colors">
              <Shield size={18} />
              Security
            </button>
            <button className="flex items-center gap-3 px-4 py-3 hover:bg-hairline-tint font-mono text-sm tracking-widest uppercase transition-colors">
              <Bell size={18} />
              Newsletters
            </button>
            <button 
              onClick={handleSignOut}
              className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 font-mono text-sm tracking-widest uppercase transition-colors mt-8"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            <div className="mb-12 border-b-4 border-wired-black pb-4">
              <h1 className="font-display font-black text-5xl uppercase tracking-tight">Your Profile</h1>
            </div>

            <div className="grid gap-12">
              <div className="flex flex-col gap-4">
                <label className="font-mono text-[11px] font-bold uppercase tracking-widest text-caption-gray">Display Name</label>
                <div className="flex items-center gap-4 text-2xl font-display font-bold border-b border-hairline-tint pb-2">
                  <User className="text-caption-gray" />
                  {user.name}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-mono text-[11px] font-bold uppercase tracking-widest text-caption-gray">Email Address</label>
                <div className="flex items-center gap-4 text-2xl font-display font-bold border-b border-hairline-tint pb-2">
                  <Mail className="text-caption-gray" />
                  {user.email}
                </div>
              </div>

              <div className="mt-8 p-8 border-2 border-wired-black bg-hairline-tint/20">
                <h3 className="font-display font-bold text-xl mb-4">Subscription Status</h3>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm tracking-widest uppercase bg-green-100 text-green-800 px-3 py-1">Active Subscriber</span>
                  <button className="underline font-mono text-sm tracking-widest uppercase hover:text-link-blue transition-colors">Manage Billing</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
