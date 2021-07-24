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
      .c3 {
        color: #000000;
        font-size: 2.4rem;
        text-transform: none;
        line-height: 1.2;
      }

      .c0 {
        border: 2px solid #000000;
        border-radius: 1rem;
        box-shadow: 0.3rem 0.4rem 0.3rem 0.2rem rgba(0,0,0,0.3);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 2rem 2.5rem;
        cursor: pointer;
      }

      .c0 .c2 {
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
        object-fit: cover;
        border-radius: 2rem;
        max-height: 200px;
        margin: 0 auto;
        min-height: 200px;
      }

      .c4 {
        position: relative;
        top: -10px;
        max-width: 100%;
        font-size: 1.5rem;
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
          <h2
            class="c2 c3"
          >
            <a
              class="titleClass"
              href="/post/como-utilizar-use-state-e-suas-vantagens"
            >
              Como utilizar useState e suas vantagens
            </a>
          </h2>
          <p
            class="c4"
          >
            O Hook de Efeito, useEffect, adiciona a funcionalidade de executar efeitos colaterais através de um componente funcional. 
      Assim quando atualizar algum dado na página, os dados que estão ligados a ele também são alterados.
          </p>
        </div>
      </div>
    `);
  });
});
