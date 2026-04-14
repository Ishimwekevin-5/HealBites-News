import { HERO_STORY, GRID_STORIES, MOST_POPULAR } from '../constants';
import { Story } from '../types';

interface HeroSectionProps {
  onOpenStory: (story: Story) => void;
}

export default function HeroSection({ onOpenStory }: HeroSectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-8 py-8 border-b border-wired-black">
      {/* Left Column: Today's Picks */}
      <div className="flex flex-col gap-6 lg:border-r lg:border-hairline-tint lg:pr-8">
        <div className="wired-ribbon mb-2">TODAY'S PICKS</div>
        <div className="flex flex-col gap-8">
          {GRID_STORIES.slice(0, 3).map((story) => (
            <div key={story.id} className="flex gap-4">
              <div className="w-20 h-20 flex-shrink-0 bg-hairline-tint overflow-hidden">
                <img 
                  src={story.imageUrl || undefined} 
                  alt={story.headline} 
                  className="w-full h-full object-cover cursor-pointer"
                  referrerPolicy="no-referrer"
                  onClick={() => onOpenStory(story)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-page-ink">{story.kicker}</span>
                <h4 className="font-display font-bold text-[14px] leading-tight hover:text-link-blue transition-colors cursor-pointer">
                  <a onClick={(e) => { e.preventDefault(); onOpenStory(story); }}>{story.headline}</a>
                </h4>
                <span className="font-mono text-[9px] uppercase tracking-widest text-caption-gray">BY {story.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Column: Main Hero */}
      <div className="flex flex-col items-center text-center px-4">
        <span className="wired-kicker mb-4">{HERO_STORY.kicker}</span>
        <h1 className="wired-headline-hero mb-6 max-w-[600px] cursor-pointer">
          <a onClick={(e) => { e.preventDefault(); onOpenStory(HERO_STORY); }}>{HERO_STORY.headline}</a>
        </h1>
        <p className="font-body text-[18px] leading-[1.4] text-page-ink mb-6 max-w-[500px]">
          "{HERO_STORY.deck}"
        </p>
        <div className="font-mono text-[11px] uppercase tracking-widest text-page-ink mb-8">
          BY {HERO_STORY.author}
        </div>
        <div className="w-full aspect-[16/9] overflow-hidden bg-hairline-tint cursor-pointer" onClick={() => onOpenStory(HERO_STORY)}>
          <img
            src={HERO_STORY.imageUrl || undefined}
            alt={HERO_STORY.headline}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Right Column: Trending Stories */}
      <div className="flex flex-col gap-6 lg:border-l lg:border-hairline-tint lg:pl-8">
        <div className="wired-ribbon mb-2">TRENDING STORIES</div>
        <div className="flex flex-col">
          {MOST_POPULAR.map((story, index) => (
            <div 
              key={story.id} 
              className={`py-4 flex flex-col gap-2 ${index !== MOST_POPULAR.length - 1 ? 'border-b border-hairline-tint' : ''}`}
            >
              <h4 className="font-display font-bold text-[18px] leading-tight hover:text-link-blue transition-colors cursor-pointer">
                <a onClick={(e) => { e.preventDefault(); onOpenStory(story); }}>{story.headline}</a>
              </h4>
              <span className="font-mono text-[10px] uppercase tracking-widest text-caption-gray">BY {story.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
