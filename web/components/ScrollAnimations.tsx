"use client";

import { useEffect, useRef, useState } from "react";

// Hook untuk detect element visibility
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView];
}

// Komponen wrapper untuk fade-in animation
export function FadeInSection({ children, className = "", delay = 0 }) {
  const [ref, isInView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Komponen wrapper untuk slide-up animation
export function SlideUpSection({ children, className = "", delay = 0 }) {
  const [ref, isInView] = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1200 ease-out ${
        isInView 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-16 scale-95"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Komponen wrapper untuk scale animation
export function ScaleSection({ children, className = "", delay = 0 }) {
  const [ref, isInView] = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isInView 
          ? "opacity-100 scale-100 rotate-0" 
          : "opacity-0 scale-90 -rotate-1"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Komponen wrapper untuk stagger animation (untuk children)
export function StaggerSection({ children, className = "" }) {
  const [ref, isInView] = useInView(0.1);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? children.map((child, idx) => (
        <div
          key={idx}
          className={`transition-all duration-800 ease-out ${
            isInView 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: `${idx * 150}ms` }}
        >
          {child}
        </div>
      )) : (
        <div
          className={`transition-all duration-800 ease-out ${
            isInView 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-12"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
