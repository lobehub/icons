'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Text: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 56 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M3.67936 23.9993C5.71141 23.9993 7.35872 22.352 7.35872 20.32C7.35872 18.2879 5.71141 16.6406 3.67936 16.6406C1.64731 16.6406 0 18.2879 0 20.32C0 22.352 1.64731 23.9993 3.67936 23.9993Z" />
      <path d="M15.2706 8.73059C15.7515 8.73059 16.1363 9.11536 16.1363 9.59632L16.0882 16.6424C16.0882 20.6584 12.8658 23.929 8.84973 24.0011H8.72949V16.6665H8.75354L8.77759 9.62037C8.77759 9.13941 9.16236 8.75464 9.64332 8.75464H15.2706V8.73059ZM26.5732 8.73059C27.0541 8.73059 27.4389 9.11536 27.4389 9.59632V19.456C27.4389 19.937 27.0541 20.3218 26.5732 20.3218H20.9459C20.465 20.3218 20.0802 19.937 20.0802 19.456V9.59632C20.0802 9.11536 20.465 8.73059 20.9459 8.73059H26.5732ZM35.4229 8.70654H35.5431C39.1503 8.75464 42.0842 11.6645 42.1804 15.2717V19.432C42.1804 19.913 41.7956 20.2977 41.3147 20.2977H32.2245C31.7435 20.2977 31.3588 19.913 31.3588 19.432V9.57228C31.3588 9.09131 31.7435 8.70654 32.2245 8.70654H35.4229ZM50.3086 20.2015C47.2786 20.0091 44.8497 17.4841 44.8497 14.4059C44.8497 11.2075 47.4469 8.61035 50.6453 8.61035C53.7235 8.61035 56.2485 11.0152 56.4409 14.0693V19.3358C56.4409 19.8168 56.0561 20.2015 55.5752 20.2015H50.3086Z" />
      <path d="M23.7477 7.35872C25.7798 7.35872 27.4271 5.71141 27.4271 3.67936C27.4271 1.64731 25.7798 0 23.7477 0C21.7157 0 20.0684 1.64731 20.0684 3.67936C20.0684 5.71141 21.7157 7.35872 23.7477 7.35872Z" />
    </svg>
  );
});

export default Text;
