import styled from 'styled-components'
import { Cover, SectionContainer } from '../../styles'

export const ProfileCover = styled(Cover)`
  position: relative;
  height: 30vh;
  background-image: url(${(props) => props.img});
  opacity: 0.8;
`

export const ProfileGridContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'photo .'
    'photo about';

  gap: 1rem;

  position: relative;
  z-index: 2;
  margin-top: -100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'photo'
      'about';
  }
`

export const ProfilePicture = styled.img`
  max-height: 200px;
  max-width: 200px;
  aspect-ratio: 1/1;

  border-radius: 50%;
  border: 6px solid var(--accent-main);

  grid-area: photo;

  width: 100%;
  margin: 0 !important;
  object-fit: cover;

  @media (max-width: 768px) {
    align-self: center;

  }
`

export const ProfileAbout = styled.article`
  grid-area: about;
`
