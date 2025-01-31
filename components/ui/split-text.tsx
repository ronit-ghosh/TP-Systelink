import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  // @ts-ignore
  onLetterAnimationComplete,
}) => {
  const letters = text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // @ts-ignore
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
// @ts-ignore
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    // @ts-ignore
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
      // @ts-ignore
        ? async (next) => {
          await next(animationTo);
          animatedCount.current += 1;
          if (animatedCount.current === letters.length && onLetterAnimationComplete) {
            onLetterAnimationComplete();
          }
        }
        : animationFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <p
    // @ts-ignore
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      // @ts-ignore
      style={{ textAlign }}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          // @ts-ignore
          style={props}
          className="inline-block transform transition-opacity will-change-transform"
        >
          {letters[index] === ' ' ? ' ' : letters[index]}
        </animated.span>
      ))}
    </p>
  );
};

export default SplitText;