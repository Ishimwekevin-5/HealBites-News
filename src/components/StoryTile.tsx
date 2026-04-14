import { Story } from '../types';

interface StoryTileProps {
  story: Story;
  showDeck?: boolean;
  className?: string;
  key?: string | number;
}

export default function StoryTile({ story, showDeck = true, className = '' }: StoryTileProps) {
  return (
    <article className={`flex flex-col gap-3 ${className}`}>
      <div className="aspect-[4/3] overflow-hidden bg-hairline-tint">
        <img
          src={story.imageUrl}
          alt={story.headline}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="wired-kicker text-page-ink">{story.kicker}</span>
        <h3 className="wired-headline-grid">
          <a href="#">{story.headline}</a>
        </h3>
        {showDeck && story.deck && (
          <p className="font-body text-[16px] leading-[1.5] text-page-ink mt-2 line-clamp-3">
            {story.deck}
          </p>
        )}
        <div className="mt-2 flex items-center gap-2 font-mono text-[12px] text-caption-gray uppercase tracking-[1.1px]">
          <span>{story.author}</span>
          <span className="w-1 h-1 bg-caption-gray rounded-circle"></span>
          <span>{story.timestamp}</span>
        </div>
      </div>
    </article>
  );
}
