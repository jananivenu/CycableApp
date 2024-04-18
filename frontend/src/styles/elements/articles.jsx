import styled from 'styled-components'

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
