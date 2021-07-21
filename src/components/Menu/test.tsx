import { fireEvent, screen } from '@testing-library/react';
import { Menu, MenuProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render button link', () => {
    renderTheme(<Menu {...props} />);

    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });
    const openMenuIcon = screen.getByLabelText('Open menu');

    expect(buttonLink).toBeInTheDocument();
    expect(openMenuIcon).toBeInTheDocument();

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();

    expect(screen.queryByRole('navigation')).toBeInTheDocument();
  });
});
//describe('<Menu />', () => {
//it('should render button click', () => {
//  renderTheme(<Menu {...props} />);

//const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });
//fireEvent.click(buttonLink);
//expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
//expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();

//expect(screen.queryByRole('navigation')).toBeInTheDocument();
// expect(screen.getByRole('heading', { name: 'Marlon Dener' }));
//expect(screen.getByRole('img', { name: 'Marlon Dener' }));
//  });
