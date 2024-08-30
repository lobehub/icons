import { CSSProperties, forwardRef, useMemo } from 'react';

import DefaultAvatar from './DefaultAvatar';
import DefaultIcon from './DefaultIcon';
import { ModelProvider, ModelProviderKey, providerMappings } from './const';

export interface ProviderIconProps {
  className?: string;
  forceMono?: boolean;
  provider?: ModelProviderKey | string;
  size?: number;
  style?: CSSProperties;
  type?: 'avatar' | 'mono' | 'color' | 'combine' | 'combine-color';
}

const ProviderIcon = forwardRef<any, ProviderIconProps>(
  ({ provider: originProvider, size = 12, type = 'avatar', forceMono, ...rest }, ref) => {
    const Render = useMemo(() => {
      if (!originProvider) return;
      const provider = originProvider.toLowerCase();

      for (const item of providerMappings) {
        if (item.keywords.some((keyword) => new RegExp(keyword, 'i').test(provider))) {
          return item;
        }
      }
    }, [originProvider]);

    const props = {
      ref,
      size,
      ...Render?.props,
      ...rest,
    };

    switch (type) {
      case 'avatar': {
        if (!Render?.Icon) return <DefaultAvatar {...props} />;
        return <Render.Icon.Avatar {...props} />;
      }
      case 'mono': {
        if (!Render?.Icon) return <DefaultIcon {...props} />;
        if (!forceMono && originProvider === ModelProvider.LobeHub) {
          // @ts-ignore
          return <Render.Icon.Color {...props} />;
        }
        return <Render.Icon {...props} />;
      }
      case 'color': {
        if (!Render?.Icon) return <DefaultIcon {...props} />;
        return Render.Icon?.Color ? <Render.Icon.Color {...props} /> : <Render.Icon {...props} />;
      }
      case 'combine': {
        if (!Render?.Icon) return <DefaultIcon {...props} />;
        return Render.Icon?.Combine ? (
          <Render.Icon.Combine type={'mono'} {...props} />
        ) : Render.Icon?.Brand ? (
          <Render.Icon.Brand {...props} />
        ) : Render.Icon?.Text ? (
          <Render.Icon.Text {...props} />
        ) : (
          <Render.Icon {...props} />
        );
      }
      case 'combine-color': {
        if (!Render?.Icon) return <DefaultIcon {...props} />;
        return Render.Icon?.Combine ? (
          <Render.Icon.Combine type={'color'} {...props} />
        ) : Render.Icon?.BrandColor ? (
          <Render.Icon.BrandColor {...props} />
        ) : Render.Icon?.Text ? (
          <Render.Icon.Text {...props} />
        ) : (
          <Render.Icon {...props} />
        );
      }
      default: {
        return <DefaultIcon {...props} />;
      }
    }
  },
);

export default ProviderIcon;
