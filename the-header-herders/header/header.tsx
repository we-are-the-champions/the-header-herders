import React from 'react';
import { Logo } from '@teambit/design.ui.brand.logo';
import { Header as BaseHeader } from '@teambit/design.blocks.header';

export const Header = () => {
  return (
    <BaseHeader
      data-testid="header"
      logo={
        <a href="https://bit.cloud">
          <Logo />
        </a>
      }
    />
  );
};
