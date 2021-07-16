import * as Styled from './styles';

import mock from './mock';

export type MenuProps = {
  title?: string;
};

export function Menu({ title = 'Change-me' }: MenuProps) {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
}
