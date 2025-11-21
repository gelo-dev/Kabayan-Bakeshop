import { useEffect, useRef, useState } from "react";

export default function ScrollFadeSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // adjust for how much of the section must appear
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-1000 ease-in-out
        scroll-smooth
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
    >
      {children}
    </div>
  );
}
