import React, { ReactNode } from 'react';

export type HeaderProps = {
  /**
   * a node to be rendered in the special component.
   * change header and test github actions
   */
  children?: ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <div>
      {children}
    </div>
  );
}
