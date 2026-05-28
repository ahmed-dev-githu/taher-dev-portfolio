import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // أول ما العنصر يظهر، بنديله انيميشن بالـ JS مباشرة
          // ده بيضمن إننا مش بنغير الـ Transform ولا الـ Position
          entry.target.animate([
            { opacity: 0, filter: 'blur(10px)' },
            { opacity: 1, filter: 'blur(0px)' }
          ], {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-out'
          });
          observer.unobserve(entry.target); // شغله مرة واحدة بس
        }
      });
    }, { threshold: 0.1 });

    // بنستهدف العناصر بأسامي الكلاسات بتاعتك مباشرة
    const selectors = '.MainPart, .PicturePart, .WorksNav, .header-title, .TimeLine, .Skill-Card, .project-card, #contact-section';
    document.querySelectorAll(selectors).forEach(el => {
      el.style.opacity = "0"; // بنخفيهم في البداية
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;