import styled from 'styled-components'

export const Container = styled.div`
  color: #ddbea9;
`
export const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;

  > li {
    font-size: 1.5em;
    margin-right: 1em;
    &:last-child {
      margin-right: 0;
    }
    span {
      cursor: pointer;
      &:hover {
        opacity: 0.6;
        transition: opacity 0.25s ease-out;
      }
    }
  }
`
