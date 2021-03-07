import styled from 'styled-components'

export const Container = styled.div`
  background-color: #6b705c;
  color: #ffe8d6;
  width: 100vw;
  height: 100vh;
`

export const Wrapper = styled.div`
  max-width: 600px;
  margin: auto auto;
  padding-top: 10%;
  font-family: 'Montserrat', sans-serif;
  > hr {
    margin: 1em 0;
    opacity: 0.2;
  }
`
export const List = styled.section`
  > ul {
    padding: 1rem 0rem 3rem 2rem;

    > li {
      list-style: none;
      font-weight: 300;
      line-height: 2em;
      > svg {
        margin-right: 0.6em;
      }
      > svg,
      strong {
        color: #ddbea9;
      }
    }
  }
`
export const Tips = styled.section``
export const Social = styled.section`
  text-align: center;

  > h3 {
    margin-top: 2em;
    margin-bottom: 1em;
    > a {
      text-decoration: none;
      color: #ddbea9;
      :hover {
        transition: opacity 0.25s ease-out;
        opacity: 0.5;
      }
    }
  }
`
