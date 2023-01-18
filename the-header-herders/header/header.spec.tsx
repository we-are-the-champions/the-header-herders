import React from 'react';
import { render } from '@testing-library/react';
import { HeaderComposition } from './header.composition';

describe('HeaderComposition', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<HeaderComposition />);
    expect(getByTestId('header')).toBeInTheDocument();
  });
});
