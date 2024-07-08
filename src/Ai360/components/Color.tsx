import { forwardRef } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  const [a, b, c, d, e] = useFillIds(TITLE, 5);
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g>
        <path
          clipRule="evenodd"
          d="M12 0h.018c1.473-.002 2.88.261 4.179.754C20.755 2.456 24 6.85 24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm8.604 18.967A11.024 11.024 0 0023.07 12c0-1.717-.39-3.344-1.089-4.794a2.59 2.59 0 01-3.214.62 6.278 6.278 0 01-1.333-.992C16.283 5.73 15.109 4.66 13.696 3.9c-3.211-1.729-6.825-1.501-9.695.447A11.033 11.033 0 00.93 12c0 1.663.367 3.241 1.024 4.657.75-.973 2.131-1.346 3.232-.71.667.384 1.257.92 1.837 1.447l.176.16c1.365 1.234 2.794 2.355 4.558 2.965 3.053 1.053 6.356.437 8.847-1.552z"
          fill={a.fill}
          fillRule="evenodd"
        ></path>
        <path
          d="M5.643 10.312c-.83.11-1.401.766-1.408 1.618a1.715 1.715 0 001.45 1.72c.805.128 1.64-.426 1.87-1.26.046-.167.076-.338.106-.51.025-.14.05-.282.084-.42.318-1.317 1.237-1.95 2.788-1.93 1.086.013 1.318.271 1.68 1.855.017.076.043.151.07.226.26.714.976 1.17 1.67 1.065a1.647 1.647 0 001.38-1.438c.083-.729-.348-1.264-1.122-1.575-.34-.136-.664-.158-.995-.141-.726.037-1.121-.36-1.339-.977a3.359 3.359 0 01-.134-.65c-.014-.093-.027-.186-.043-.278-.156-.887-.835-1.51-1.669-1.532-.791-.02-1.464.551-1.665 1.418l-.06.27-.025.117c-.355 1.636-.974 2.205-2.638 2.422z"
          fill={b.fill}
        ></path>
        <path
          d="M18.059 13.644c.989-.206 1.577-.838 1.592-1.697.015-.83-.624-1.582-1.46-1.724-.77-.13-1.599.383-1.844 1.18-.069.22-.117.448-.165.676-.06.29-.122.58-.225.854-.367.986-1.593 1.546-2.926 1.394-.824-.095-1.106-.446-1.342-1.674-.18-.938-.864-1.535-1.681-1.467-.85.07-1.515.829-1.468 1.673.05.892.678 1.44 1.705 1.489 1.375.064 1.75.396 1.926 1.787.067.531.267.967.685 1.288 1.02.783 2.407.208 2.66-1.108l.022-.114c.152-.796.3-1.577 1.04-2.101.36-.255.761-.326 1.166-.397.105-.019.21-.037.315-.06z"
          fill={c.fill}
        ></path>
        <path d="M13.83 7.961a.755.755 0 11-1.51 0 .755.755 0 011.51 0z" fill={d.fill}></path>
        <path d="M10.809 16.678a.755.755 0 100-1.511.755.755 0 000 1.51z" fill={e.fill}></path>
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={a.id} x1="12" x2="12" y1="0" y2="24">
          <stop stopColor="#12B7FA"></stop>
          <stop offset="1" stopColor="#006ffb"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="11.943"
          x2="11.943"
          y1="6.085"
          y2="17.778"
        >
          <stop stopColor="#006ffb"></stop>
          <stop offset="1" stopColor="#12B7FA"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="11.943"
          x2="11.943"
          y1="6.085"
          y2="17.778"
        >
          <stop stopColor="#006ffb"></stop>
          <stop offset="1" stopColor="#12B7FA"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={d.id}
          x1="11.943"
          x2="11.943"
          y1="6.085"
          y2="17.778"
        >
          <stop stopColor="#006ffb"></stop>
          <stop offset="1" stopColor="#12B7FA"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="11.943"
          x2="11.943"
          y1="6.085"
          y2="17.778"
        >
          <stop stopColor="#006ffb"></stop>
          <stop offset="1" stopColor="#12B7FA"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
