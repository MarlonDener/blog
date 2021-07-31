import React from 'react';
import { renderTheme } from '../../styles/render-theme';
import { PostTemplate } from '.';

describe('<PostTemplate />', () => {
  it('should render snapshot', () => {
    const { container } = renderTheme(<PostTemplate />);
    expect(container).toMatchSnapshot();
  });
});
