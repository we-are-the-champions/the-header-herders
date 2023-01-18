import React from 'react';
import { menuContent } from '@teambit/design.ui.navigation.menu';
import { Logo } from '@teambit/design.ui.brand.logo';
import { Header as BaseHeader } from '@teambit/design.blocks.header';

export const Header = () => {
  return (
    <BaseHeader
      data-testid="header"
      menuLinks={menuContent}
      logo={
        <a href="https://bit.cloud">
          <Logo />
        </a>
      }
    />
  );
};
