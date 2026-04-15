import { Story } from '../types';
import { X, MessageSquare, Bookmark } from 'lucide-react';

interface ArticleViewProps {
  story: Story;
  onClose: () => void;
}

export default function ArticleView({ story, onClose }: ArticleViewProps) {
  return (
    <div className="fixed inset-0 bg-paper-white z-50 overflow-y-auto no-scrollbar">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 p-2 hover:bg-hairline-tint transition-colors z-[60]"
      >
        <X size={32} />
      </button>

      {/* Floating Action Sidebar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40">
        <button className="w-12 h-12 border border-hairline-tint flex items-center justify-center hover:bg-hairline-tint transition-colors">
          <MessageSquare size={20} />
        </button>
        <button className="w-12 h-12 border border-hairline-tint flex items-center justify-center hover:bg-hairline-tint transition-colors">
          <Bookmark size={20} />
        </button>
      </div>

      <article className="relative">
        {/* Top Split Section */}
        <div className="flex flex-col lg:flex-row min-h-screen relative">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center bg-paper-white relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-wired-black text-paper-white px-3 py-1 font-mono text-[11px] font-bold tracking-widest uppercase">
                {story.author}
              </span>
              <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-page-ink">
                {story.category}
              </span>
              <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-caption-gray">
                {story.timestamp}
              </span>
            </div>

            <h1 className="font-display font-black text-[64px] lg:text-[84px] leading-[0.85] tracking-[-0.03em] uppercase mb-12">
              {story.headline}
            </h1>

            <p className="font-body text-[22px] lg:text-[26px] leading-[1.3] text-page-ink italic border-l-4 border-wired-black pl-8 mb-12">
              "{story.deck}"
            </p>
          </div>

          {/* Right Side: Sticky Image */}
          <div className="lg:w-1/2 h-[50vh] lg:h-screen lg:sticky lg:top-0 order-first lg:order-last">
            <img 
              src={story.imageUrl || undefined} 
              alt={story.headline}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Article Body Section */}
        <div className="max-w-3xl mx-auto px-8 py-16 lg:py-24">
          <div className="font-mono text-[10px] text-caption-gray uppercase tracking-widest mb-12">
            PHOTO-ILLUSTRATION: HEALBITES NEWS / GETTY IMAGES
          </div>

          <div className="font-body text-[18px] lg:text-[20px] leading-[1.6] text-page-ink flex flex-col gap-8">
            <p className="font-body text-[20px] lg:text-[22px] leading-[1.6] text-page-ink mb-12">
              <span className="font-black uppercase tracking-wider mr-2">On Easter Sunday</span>, 
              US Department of Agriculture secretary Brooke Rollins sent out an email titled "He has risen!" to the entire agency. In the email, Rollins calls the story of Jesus Christ the "greatest story ever told, the foundation of our faith, and the abiding hope of all mankind."
            </p>
            <p className="font-body text-[20px] lg:text-[22px] leading-[1.6] text-page-ink">
              This move has sparked significant debate regarding the intersection of personal faith and public office, raising questions about the boundaries of religious expression within government communications.
            </p>
            
            {/* Footage Section */}
            {story.footage && story.footage.length > 0 && (
              <div className="mt-16 pt-16 border-t border-hairline-tint flex flex-col gap-12">
                <h2 className="font-display font-black text-[32px] lg:text-[42px] uppercase tracking-tight">
                  Related Footage
                </h2>
                <div className="grid grid-cols-1 gap-8">
                  {story.footage.map((url, index) => (
                    <div key={index} className="w-full aspect-video bg-hairline-tint overflow-hidden">
                      {url.endsWith('.mp4') || url.includes('video') ? (
                        <video 
                          src={url} 
                          controls 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img 
                          src={url} 
                          alt={`Footage ${index + 1}`} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
