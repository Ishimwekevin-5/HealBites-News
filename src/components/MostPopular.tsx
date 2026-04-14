import { MOST_POPULAR } from '../constants';

export default function MostPopular() {
  return (
    <aside className="flex flex-col">
      <div className="wired-ribbon mb-5">MOST POPULAR</div>
      <div className="flex flex-col">
        {MOST_POPULAR.map((story, index) => (
          <div
            key={story.id}
            className={`grid grid-cols-[50px_1fr] gap-3 pb-4 mb-4 ${
              index !== MOST_POPULAR.length - 1 ? 'border-b border-hairline-tint' : ''
            }`}
          >
            <span className="font-display text-[40px] leading-none text-page-ink opacity-80 select-none">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-1">
              <h4 className="font-sans font-bold text-[15px] leading-[1.2] hover:text-link-blue transition-colors cursor-pointer">
                <a href="#">{story.headline}</a>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
