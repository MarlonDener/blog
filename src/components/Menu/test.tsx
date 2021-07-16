import { screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
