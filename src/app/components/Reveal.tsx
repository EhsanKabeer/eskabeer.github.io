import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article';
};

/**
 * Fades content up the first time it scrolls into view.
 *
 * IntersectionObserver always delivers an initial callback on observe(), so if
 * nothing has arrived shortly after mount the observer isn't running (throttled
 * background tab, headless renderer, unsupported browser). In that case reveal
 * everything rather than leaving the page blank.
 */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    let observerFired = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        observerFired = true;
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    observer.observe(node);

    const failsafe = window.setTimeout(() => {
      if (!observerFired) setVisible(true);
    }, 1200);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
