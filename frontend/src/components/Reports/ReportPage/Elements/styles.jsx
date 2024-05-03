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

  transition: color 0.2s ease;

  &:hover {
    color: var(--accent-main);
  }
`

export const AuthorAvatar = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`

export const ReportButtons = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 0.5rem;

  grid-area: btns;


  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`

export const ReportButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
`
