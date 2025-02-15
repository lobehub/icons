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
      viewBox="0 0 62 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M4.92 13.81v7.185H2V2.95h7.748c1.668 0 2.958.49 3.871 1.473.914.984 1.37 2.303 1.37 3.957s-.456 2.973-1.37 3.956c-.913.984-2.203 1.473-3.871 1.473H4.921zm0-2.563h4.648c.743 0 1.316-.191 1.73-.58.415-.388.622-.946.622-1.67V7.76c0-.729-.207-1.282-.621-1.67-.415-.388-.993-.58-1.731-.58H4.92v5.738zm16.187 2.563v7.185h-2.921V2.95h7.749c1.667 0 2.957.49 3.871 1.473.913.984 1.37 2.303 1.37 3.957s-.457 2.973-1.37 3.956c-.914.984-2.204 1.473-3.871 1.473h-4.828zm0-2.563h4.647c.743 0 1.317-.191 1.731-.58.415-.388.622-.946.622-1.67V7.76c0-.729-.207-1.282-.622-1.67-.414-.388-.993-.58-1.731-.58h-4.647v5.738zm20.345 7.37v2.378h-7.849v-2.378h2.454V5.335h-2.454V2.957h7.849v2.377h-2.48v13.284h2.48zm13.823 1.793c-.95.388-2.018.585-3.186.585-1.169 0-2.23-.197-3.186-.585a6.554 6.554 0 01-2.454-1.723c-.68-.76-1.205-1.702-1.577-2.824-.372-1.127-.558-2.42-.558-3.887 0-1.468.186-2.766.558-3.888.372-1.122.898-2.063 1.577-2.823a6.676 6.676 0 012.454-1.723c.95-.389 2.017-.585 3.186-.585 1.168 0 2.23.191 3.186.585a6.554 6.554 0 012.454 1.723c.68.76 1.205 1.701 1.577 2.823.372 1.128.557 2.42.557 3.888 0 1.467-.185 2.765-.557 3.887-.372 1.122-.897 2.063-1.577 2.824a6.655 6.655 0 01-2.454 1.723zm-5.161-2.367c.589.229 1.248.346 1.975.346.712 0 1.365-.117 1.96-.346a4.141 4.141 0 001.518-1c.415-.436.744-.962.972-1.59.228-.627.345-1.334.345-2.121V10.62c0-.793-.111-1.5-.345-2.122a4.494 4.494 0 00-.972-1.59 4.096 4.096 0 00-1.518-1 5.337 5.337 0 00-1.96-.346c-.733 0-1.386.117-1.975.346a4.139 4.139 0 00-1.509 1 4.65 4.65 0 00-.971 1.59c-.229.627-.346 1.335-.346 2.122v2.712c0 .792.117 1.5.346 2.121.228.623.552 1.154.971 1.59.42.437.919.771 1.509 1z"
      />
    </svg>
  );
});

export default Icon;
