import { screen } from '@testing-library/react';
import { PostCard } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<PostCard />', () => {
  it('should render', () => {
    renderTheme(<PostCard />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
