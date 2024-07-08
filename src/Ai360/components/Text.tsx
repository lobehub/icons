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
      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}
      viewBox="0 0 78 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M17.978 2H2v1.196c0 1.02.827 1.847 1.848 1.847h14.565a3.913 3.913 0 013.913 3.914v1.304H3.956v3.043h18.37v1.848a3.913 3.913 0 01-3.913 3.913H3.848c-1.02 0-1.848.827-1.848 1.848V22h15.978a7.391 7.391 0 007.392-7.391V9.39A7.391 7.391 0 0017.978 2z"></path>
      <path
        clipRule="evenodd"
        d="M27.978 8.957A6.956 6.956 0 0134.935 2h15.87v1.304c0 .96-.78 1.74-1.74 1.74H34.826a3.913 3.913 0 00-3.913 3.913v1.304h15a4.783 4.783 0 014.783 4.783v2.173A4.783 4.783 0 0145.913 22H34.935a6.956 6.956 0 01-6.957-6.957V8.957zm2.935 4.239v1.848c0 2.22 1.8 4.021 4.022 4.021h10.76c1.201 0 2.175-.973 2.175-2.174V15.37c0-1.201-.974-2.174-2.174-2.174H30.913zM60.26 2.109a6.848 6.848 0 00-6.847 6.848v6.195A6.848 6.848 0 0060.261 22h9.13a6.848 6.848 0 006.848-6.848V8.957a6.848 6.848 0 00-6.848-6.848h-9.13zm0 2.934a3.913 3.913 0 00-3.912 3.914v6.195a3.913 3.913 0 003.913 3.913h9.13a3.913 3.913 0 003.913-3.913V8.957a3.913 3.913 0 00-3.913-3.914h-9.13z"
      ></path>
    </svg>
  );
});

export default Icon;
