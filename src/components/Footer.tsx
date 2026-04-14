export default function Footer() {
  return (
    <footer className="bg-page-ink text-paper-white py-16 px-4 md:px-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="logo font-sans text-[28px] font-black tracking-[-1px] uppercase mb-8 flex items-center gap-2">
            <span className="bg-paper-white text-wired-black px-2 py-1">HEAL</span>
            <span className="text-paper-white">BITES</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[14px] text-caption-gray">
              HealBites News is your essential source for the latest in human health, medical breakthroughs, and wellness science. We make sense of a world in constant biological transformation.
            </p>
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-mono text-[12px] font-bold tracking-[1.2px] mb-6">SECTIONS</h5>
            <ul className="flex flex-col gap-3 font-sans text-[14px]">
              {['Medicine', 'Nutrition', 'Mental Health', 'Fitness', 'Wellness', 'Public Health'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-link-blue transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[12px] font-bold tracking-[1.2px] mb-6">ABOUT</h5>
            <ul className="flex flex-col gap-3 font-sans text-[14px]">
              {['About WIRED', 'Contact Us', 'Customer Care', 'Careers', 'Press Center'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-link-blue transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[12px] font-bold tracking-[1.2px] mb-6">CONNECT</h5>
            <ul className="flex flex-col gap-3 font-sans text-[14px]">
              {['Newsletters', 'Facebook', 'Twitter', 'Instagram', 'YouTube', 'TikTok'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-link-blue transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[12px] font-bold tracking-[1.2px] mb-6">LEGAL</h5>
            <ul className="flex flex-col gap-3 font-sans text-[14px]">
              {['Privacy Policy', 'Ad Choices', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-link-blue transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-caption-gray/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-[11px] text-caption-gray uppercase tracking-wider">
          © 2026 HEALBITES MEDIA. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <a href="#" className="font-sans text-[11px] text-caption-gray uppercase tracking-wider hover:text-paper-white">
            ACCESSIBILITY HELP
          </a>
        </div>
      </div>
    </footer>
  );
}
