import React from 'react';
import { renderTheme } from '../../styles/render-theme';
import { PostsTemplate } from '.';

describe('<PostsTemplate />', () => {
  it('should render snapshot', () => {
    renderTheme(<PostsTemplate />);
    const { container } = renderTheme(<PostsTemplate />);
    expect(container).toMatchInlineSnapshot();
  });

  it('should render snapshot without posts', () => {
    renderTheme(<PostsTemplate />);
    const { container } = renderTheme(<PostsTemplate posts={undefined} />);
    expect(container).toMatchInlineSnapshot();
  });
});
