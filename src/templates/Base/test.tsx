import { screen } from '@testing-library/react';
import { BaseTemplate, BaseTemplateProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props: BaseTemplateProps = mock;

describe('<BaseTemplate />', () => {
  it('should render', () => {
    renderTheme(<BaseTemplate {...props} />);
    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });
});
