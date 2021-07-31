import { screen } from '@testing-library/react';
import { PostTags, PostTagsProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props: PostTagsProps = mock;

describe('<PostTags />', () => {
  it('should render', () => {
    renderTheme(<PostTags {...props} />);
    expect(screen.getByText(/Tags:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', {})).toHaveLength(1);
  });

  it('Should match Snapshot', () => {
    const { container } = renderTheme(<PostTags {...props} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin: 2.4rem 0;
      }

      .c0 span {
        margin: 0 0rem 0 0.5rem;
      }

      .c0 span::after {
        content: ', ';
      }

      .c0 span::before {
        content: ' ';
      }

      .c0 span:last-child::after {
        content: '';
      }

      .c0 a {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
        -webkit-transition: all 300ms ease-in-out.;
        transition: all 300ms ease-in-out.;
      }

      <div>
        <p
          class="c0"
        >
          tags:
          <span>
            <a
              href="/tag/use-state"
            >
              useState
            </a>
          </span>
        </p>
      </div>
    `);
  });

  it('Should match Snapshot with no tags', () => {
    const { container } = renderTheme(<PostTags {...props} tags={undefined} />);
    expect(container).toMatchInlineSnapshot(`<div />`);
  });
});
