import { screen } from '@testing-library/react';
import { ToggleTheme } from '.';
import { renderTheme } from '../styles/render-theme';

describe('<ToggleTheme />', () => {
  it('should render', () => {
    renderTheme(<ToggleTheme />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
