import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const AuthorNameWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background-color: var(--gray-100);
  border-radius: 1rem;
`

export const AuthorLink = styled(Link)`
  margin: 0 0.5rem;
  text-decoration: none;
  color: black;
  font-weight: 700;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: var(--accent-main);
  text-decoration-thickness: 0.5px;

  transition: color 0.2s ease;

  &:hover {
    color: var(--accent-main);
  }
`
