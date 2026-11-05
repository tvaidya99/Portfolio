const styles = {
  innerWidth: '2xl:max-w-[1440px] w-full',
  interWidth: 'lg:w-[80%] w-[100%]',

  paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  yPaddings: 'sm:py-16 xs:py-8 py-12',
  xPaddings: 'sm:px-16 px-6',
  topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end',
  navPadding: 'pt-[96px]',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-16 py-10',

  heroHeadText:
    'font-beckman font-black text-white-100 text-[40px] leading-[1.08] sm:text-[52px] lg:text-[64px] mt-2',
  heroSubText:
    'text-timberWolf font-medium text-base leading-7 sm:text-lg sm:leading-8 lg:text-xl',

  sectionHeadText:
    'text-white-100 font-black text-[30px] leading-tight sm:text-[40px] md:text-[48px] font-beckman',
  sectionHeadTextLight:
    'text-white-100 font-black text-[30px] leading-tight sm:text-[40px] md:text-[48px] font-beckman',
  sectionSubText:
    'text-sm uppercase tracking-wider text-taupe font-semibold font-beckman',
  sectionSubTextLight:
    'text-sm uppercase tracking-wider text-primary font-semibold font-beckman',

  /* Reduced motion for accessibility */
  reducedMotion: 'transition-none',

  /* Card styles */
  cardShadow: 'rgba(0, 0, 0, 0.3) 0 4px 12px',

  /* Accessibility utilities */
  touchTarget: 'min-h-[44px] min-w-[44px]', // WCAG 2.5.5 Target Size
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black',
  skipLink: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md',
};

export { styles };
