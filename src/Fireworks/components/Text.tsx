'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 155 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2 21.59l.002.002h2.623V12.56h8.47v-2.342h-8.47V4.342h9.317V2H2v19.59zM19.122 7.44h-2.46v14.15h2.46V7.44zM25.359 9.316h.002c-.055.135-.107.218-.273.218-.137 0-.19-.053-.19-.188V7.44h-2.46v14.15h2.455v-8.03c0-2.719 1.26-3.78 3.637-3.78h1.968V7.385h-1.585c-1.939 0-2.923.571-3.554 1.931zM38.679 19.881c-2.638 0-4.606-1.498-4.772-4.679h11.494V13.84c0-3.945-2.404-6.803-6.78-6.803s-7.163 2.858-7.163 7.481c0 4.624 2.705 7.482 7.216 7.482 4.51 0 6.364-2.745 6.78-4.894h-2.565c-.398 1.608-1.573 2.775-4.21 2.775zM38.62 9.153c2.6 0 4.208 1.39 4.32 4.003h-8.966c.408-2.67 2.294-4.003 4.646-4.003zM62.857 18.95c-.06.245-.136.328-.33.328-.196 0-.279-.083-.332-.328L59.46 7.44h-4.238l-2.735 11.51c-.06.245-.135.328-.33.328-.196 0-.278-.083-.331-.328L49.091 7.44h-2.405v.546h.015l3.337 13.604h4.223l2.817-11.865c.053-.193.105-.246.27-.246.136 0 .219.058.271.246l2.818 11.865h4.223l3.336-13.604V7.44h-2.404l-2.735 11.51zM76.572 7.034c-4.13 0-7.409 2.583-7.409 7.482 0 4.9 3.277 7.481 7.41 7.481 4.132 0 7.41-2.582 7.41-7.481 0-4.9-3.28-7.482-7.41-7.482zm.005 12.787c-2.87 0-4.921-1.901-4.921-5.305s2.051-5.305 4.921-5.305 4.922 1.906 4.922 5.305-2.051 5.305-4.922 5.305zM89.504 9.316c-.052.135-.105.218-.27.218-.138 0-.19-.053-.19-.188V7.44h-2.46v14.147h2.454v-8.028c0-2.717 1.26-3.78 3.637-3.78h1.97V7.386h-1.587c-1.938 0-2.923.571-3.554 1.931zM99 14.025V2h-2.46v19.602H99v-4.519l2.667-2.274 5.305 6.788h2.69v-.546l-6.179-7.797 6.179-5.268V7.44h-3.161L99 14.025zM118.186 13.492l-2.022-.381c-1.938-.368-2.787-.774-2.787-1.946s.959-2.042 3.253-2.042 3.607.875 3.797 2.806h2.505c-.278-3.45-2.956-4.89-6.312-4.89-3.356 0-5.713 1.443-5.713 4.16 0 2.719 1.929 3.66 4.704 4.176l2.021.38c1.969.37 2.953.792 2.953 2.015 0 1.222-.987 2.134-3.361 2.134-2.375 0-3.95-.98-4.141-2.858h-2.502c.233 3.374 2.981 4.952 6.645 4.952 3.665 0 5.824-1.563 5.824-4.369 0-2.805-2.27-3.649-4.864-4.137zM153.114 2h-2.758v19.602h2.758V2zM136.981 2.19l-7.645 19.054v.358h2.731l1.936-5.117h9.202l1.936 5.117h2.813v-.353L140.254 2h-3.273v.19zm-2.069 11.925l3.286-8.608h-.002a.378.378 0 01.355-.246h.135a.38.38 0 01.356.246l3.261 8.608h-7.391zM19.122 2h-2.46v2.885h2.46V2z" />
    </svg>
  );
});

export default Icon;
