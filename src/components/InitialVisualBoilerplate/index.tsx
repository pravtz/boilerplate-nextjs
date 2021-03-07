import * as S from './styled'

import {
  SiStyledComponents,
  SiTypescript,
  SiJest,
  SiDiscover,
  SiBabel
} from 'react-icons/si'
import SocialIcons from '../SocialIcons'

const InitialVisualBoilerplate = () => (
  <S.Container>
    <S.Wrapper>
      <h1>
        <span>Welcome</span> to my Boilerplate made in NextJs
      </h1>
      <h2>In this boilerplate you have:</h2>
      <S.List>
        <ul>
          <li>
            <SiStyledComponents />
            CSS-in-JS styles with <strong>Styled-Components</strong>
          </li>
          <li>
            <SiTypescript />
            Super set <strong>Typescript</strong>
          </li>
          <li>
            <SiJest />A test library with <strong>Jest</strong> and utilities
            <strong> Testing Library</strong>
          </li>
          <li>
            <SiDiscover />
            <strong>Husky</strong> in conjunction with{' '}
            <strong>Lint stage</strong> to protect our git from shit
          </li>
          <li>
            <SiBabel />
            Our big buddy <strong>Babel</strong>
          </li>
        </ul>
      </S.List>

      <hr />
      <S.Social>
        <h3>
          My name is <a href="http://pravtz.com.br">Ederson Pravtz</a>
        </h3>
        <SocialIcons />
      </S.Social>
    </S.Wrapper>
  </S.Container>
)

export default InitialVisualBoilerplate
