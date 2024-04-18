import styled from 'styled-components'

// Buttons
// Articles


export const BaseButton = styled.button`
  min-width: max-content;
  padding: 0.6rem 1.8rem;
  border-radius: 3rem;
  cursor: pointer;

  font-size: 1rem;
  font-family: var(--main-font);

  &:focus,
  &:focus-visible {
    outline: 2px solid var(--accent-blue);
  }
`

export const AccentButton = styled(BaseButton)`
  color: white;
  background-color: var(--accent-main);
  border: 0;

  @media (max-width: 480px) {
    display: ${props => props.hide ? 'none' : 'inline-block'};
  }
`

export const SimpleButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid var(--accent-main);
  color: var(--accent-main);
`

export const BaseArticle = styled.article`
  border: 1px solid transparent;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.9rem;
  gap: 0.9rem;

  box-shadow: rgba(0, 0, 0, 0.15) 1.5px 1.5px 2px;
`

export const ArticleComment = styled(BaseArticle)`
  background-color: var(--gray-100);
`

export const ArticleReport = styled(BaseArticle)`
  background-color: ${(props) => `var(--accent-${props.type}-10)`};
  cursor: pointer;

  &:hover {
    box-shadow:
      rgba(17, 17, 26, 0.05) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 0px 8px;
    border: 1px solid ${(props) => `var(--accent-${props.type})`};
  }
`
