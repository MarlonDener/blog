import { screen } from '@testing-library/react';
import { PostCard, PostCardProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props: PostCardProps = mock;

describe('<PostCard />', () => {
  it('should render a heading cover and excerpt', () => {
    renderTheme(<PostCard {...props} />);
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: mock.title })).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: mock.title })[0],
    ).toHaveAttribute('href', `/post/${mock.slug}`);
  });

  it('Should match Snapshot ', () => {
    const { container } = renderTheme(<PostCard {...props} />);
    expect(container).toMatchInlineSnapshot(`
      .c4 {
        color: #000000;
        font-size: 2.4rem;
        text-transform: none;
        line-height: 1.2;
      }

      .c0 {
        border-radius: 1rem;
        box-shadow: 1rem 0.4rem 2rem 1rem rgba(0,0,0,0.2);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        cursor: pointer;
      }

      .c0 .c3 {
        margin: 0;
        margin-top: 1.1rem;
        padding: 0;
        max-width: 100%;
      }

      .c0 a {
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
      }

      .c0 .titleClass {
        color: #000000;
        font-size: 2.4rem;
      }

      .c0:hover a {
        color: #dc143c;
      }

      .c0:hover img {
        opacity: 0.8;
      }

      .c1 {
        max-width: 100%;
        -webkit-transition: opacity 300ms ease-in-out;
        transition: opacity 300ms ease-in-out;
        width: 100%;
        object-fit: contain;
        margin: 0 auto;
      }

      .c5 {
        position: relative;
        top: -10px;
        max-width: 100%;
        font-size: 1.5rem;
      }

      .c2 {
        padding: 1rem 1.1rem;
      }

      <div>
        <div
          class="c0"
        >
          <a
            href="/post/como-utilizar-use-state-e-suas-vantagens"
          >
            <img
              alt="Como utilizar useState e suas vantagens"
              class="c1"
              src="https://res.cloudinary.com/marlondener/image/upload/v1626378714/react_eb1ec86784.png"
            />
          </a>
          <div
            class="c2"
          >
            <h2
              class="c3 c4"
            >
              <a
                class="titleClass"
                href="/post/como-utilizar-use-state-e-suas-vantagens"
              >
                Como utilizar useState e suas vantagens
              </a>
            </h2>
            <p
              class="c5"
            >
              O Hook de Efeito, useEffect, adiciona a funcionalidade de executar efeitos colaterais através de um componente funcional. 
      Assim quando atualizar algum dado na página, os dados que estão ligados a ele também são alterados.
            </p>
          </div>
        </div>
      </div>
    `);
  });
});
