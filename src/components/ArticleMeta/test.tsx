import { screen } from '@testing-library/react';
import { ArticleMeta, ArticleMetaProps } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);
    expect(screen.getByRole('link', { name: 'Marlon Dener' })).toHaveAttribute(
      'href',
      '/author/marlon-dener',
    );

    expect(screen.getByRole('link', { name: 'Tech' })).toHaveAttribute(
      'href',
      '/category/tech',
    );
    expect(screen.getByRole('link', { name: 'JS' })).toHaveAttribute(
      'href',
      '/category/javascript',
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);
    expect(screen.getByText('2 de mar. de 2021')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('should math snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);
    expect(container).toMatchSnapshot();
  });
});
