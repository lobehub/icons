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
      viewBox="0 0 169 54"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M9.14689 53.1637V32.285H23.1941C28.0518 32.285 31.8078 30.8581 34.462 28.0041C37.1162 25.1502 38.4433 21.32 38.4433 16.5134C38.4433 11.7068 37.1162 7.87651 34.462 5.02259C31.8078 2.16867 28.0518 0.741714 23.1941 0.741714H0.658447V53.1637H9.14689ZM22.6683 24.8498H9.14688V8.17693H22.6683C24.8217 8.17693 26.4994 8.7402 27.7013 9.86675C28.9032 10.9933 29.5041 12.608 29.5041 14.7109V18.3158C29.5041 20.4187 28.9032 22.0335 27.7013 23.16C26.4994 24.2865 24.8217 24.8498 22.6683 24.8498ZM56.2464 32.285V53.1637H47.758V0.741728H70.2937C75.1514 0.741728 78.9073 2.16869 81.5615 5.0226C84.2157 7.87652 85.5428 11.7068 85.5428 16.5134C85.5428 21.32 84.2157 25.1502 81.5615 28.0041C78.9073 30.8581 75.1514 32.285 70.2937 32.285H56.2464ZM69.7679 24.8498H56.2464V8.17693H69.7679C71.9213 8.17693 73.5989 8.7402 74.8008 9.86675C76.0027 10.9933 76.6037 12.608 76.6037 14.7109V18.3158C76.6037 20.4187 76.0027 22.0335 74.8008 23.16C73.5989 24.2865 71.9213 24.8498 69.7679 24.8498ZM115.44 46.2542V53.1637H92.604V46.2542H99.7403V7.65121H92.604V0.741728H115.44V7.65121H108.229V46.2542H115.44ZM146.389 53.1712C149.795 53.1712 152.887 52.6024 155.666 51.4649C158.446 50.3273 160.825 48.6572 162.803 46.4546C164.781 44.252 166.308 41.517 167.385 38.2494C168.462 34.9819 169 31.2181 169 26.9582C169 22.6983 168.462 18.9346 167.385 15.667C166.308 12.3995 164.781 9.66441 162.803 7.46183C160.825 5.25926 158.446 3.58918 155.666 2.45159C152.887 1.314 149.795 0.745202 146.389 0.745202C142.984 0.745202 139.891 1.314 137.112 2.45159C134.333 3.58918 131.954 5.25926 129.976 7.46183C127.998 9.66441 126.47 12.3995 125.393 15.667C124.317 18.9346 123.778 22.6983 123.778 26.9582C123.778 31.2181 124.317 34.9819 125.393 38.2494C126.47 41.517 127.998 44.252 129.976 46.4546C131.954 48.6572 134.333 50.3273 137.112 51.4649C139.891 52.6024 142.984 53.1712 146.389 53.1712ZM140.64 44.586C142.348 45.2548 144.263 45.5892 146.385 45.5892C148.455 45.5892 150.357 45.2548 152.09 44.586C153.824 43.9172 155.299 42.9498 156.515 41.6839C157.731 40.4179 158.676 38.8773 159.349 37.0619C160.022 35.2466 160.358 33.1924 160.358 30.8994V23.017C160.358 20.724 160.022 18.6698 159.349 16.8545C158.676 15.0391 157.731 13.4985 156.515 12.2326C155.299 10.9666 153.824 9.99923 152.09 9.33042C150.357 8.66162 148.455 8.32722 146.385 8.32722C144.263 8.32722 142.348 8.66162 140.64 9.33042C138.932 9.99923 137.47 10.9666 136.254 12.2326C135.038 13.4985 134.093 15.0391 133.421 16.8545C132.748 18.6698 132.411 20.724 132.411 23.017V30.8994C132.411 33.1924 132.748 35.2466 133.421 37.0619C134.093 38.8773 135.038 40.4179 136.254 41.6839C137.47 42.9498 138.932 43.9172 140.64 44.586Z"
        fillRule="evenodd"
      />
    </svg>
  );
});

export default Icon;
