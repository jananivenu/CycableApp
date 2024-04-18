import styled from 'styled-components'
import { Cover, SectionContainer } from '../../styles'

export const ReportCover = styled(Cover)`
  position: relative;
  height: 24vh;
  background-image: url(${(props) => props.img});
  opacity: 0.8;

  @media (max-width: 768px) {
    position: static;
  }
`

export const ReportGridContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 100px auto min-content;
  grid-template-areas:
    '. . . . . photo photo photo photo'
    'info info info info info photo photo photo photo'
    'content content content content content content btns btns btns';

  gap: 1rem;

  position: relative;
  z-index: 2;
  margin-top: -100px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      '. . photo photo'
      'info info photo photo'
      'content content content .'
      'btns btns btns .';
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      '.'
      'info'
      'content'
      'photo'
      'btns';
  }
`

export const ReportPicture = styled.img`
  max-height: 100%;
  max-width: 100%;

  box-shadow: rgba(0, 0, 0, 0.15) 1.5px 1.5px 2px;

  border-radius: 10px;
  /* border: 6px solid var(--accent-main); */

  grid-area: photo;

  width: 100%;
  margin: 0 0 2rem 0 !important;
  object-fit: cover;
`

export const ReportInfo = styled.div`
  grid-area: info;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  & > :last-child {
    margin-top: auto;
  }
`

export const ReportContent = styled.div`
  grid-area: content;
`

export const ReportNav = styled.div`
  grid-area: btns;
`
