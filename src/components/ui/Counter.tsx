'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useMotionValue } from 'framer-motion';

import { CounterProps } from '@/types/ui/counter.type';
import '../../styles/components/ui/Counter.scss';

const Counter = ({
  value,
  duration = 1.5,
  decimals = 0,
  prefix,
  suffix,
}: CounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
    margin: '-50px',
  });

  const motionValue = useMotionValue(0);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latestValue) => {
      setDisplayValue(latestValue);
    });

    return unsubscribe;
  }, [motionValue]);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: 'easeInOut',
    });

    return () => controls.cancel();
  }, [duration, isInView, motionValue, value]);

  return (
    <span ref={ref} className='counter' aria-label={value.toLocaleString()}>
      {prefix}
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

export default Counter;
