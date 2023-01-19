import React from 'react';
import { Logo } from '@teambit/design.ui.brand.logo';
import { Header as BaseHeader } from '@teambit/design.blocks.header';

export const Header = () => {
  return (
    <BaseHeader
      data-testid="header"
      plugins={[
        <div>
          {' '}
          I am the header component being herd by{' '}
          <a href="https://bit.cloud/we-are-the-champions/the-header-herders">
            the header herders team
          </a>
        </div>,
      ]}
      logo={
        <a href="https://bit.cloud">
          <Logo />
        </a>
      }
    />
  );
};
