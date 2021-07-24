import { screen } from '@testing-library/react';
import { PostGrid, PostGridProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';
const post: PostGridProps = mock;

describe('<PostGrid />', () => {
  it('should render', () => {
    renderTheme(<PostGrid {...post} />);
  });
});
