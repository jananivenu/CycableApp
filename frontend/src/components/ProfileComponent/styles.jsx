import styled from 'styled-components'
import { Cover, SectionContainer } from '../../styles'
import { BasicForm } from '../../styles/elements/forms'
import { StyledH2 } from '../../styles/elements/typography'

export const ProfileCover = styled(Cover)`
  position: relative;
  height: 30vh;
  background-image: url(${(props) => props.img});
  opacity: 0.8;

  z-index: 0;
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

export const EditProfileForm = styled(BasicForm)`
  gap: 0;
  margin-bottom: 1rem;

  & > :last-child {
    margin: 16px;
  }

  grid-area: about;

  ${StyledH2} {
    margin-left: 16px;
  }
`

export const ProfilePictureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 3rem;

  grid-area: photo;

  /* &:last-child {
    margin-top: auto;
  } */
`

export const ProfilePicture = styled.img`
  max-height: 200px;
  max-width: 200px;
  aspect-ratio: 1/1;

  border-radius: 50%;
  border: 6px solid var(--accent-main);

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

export const EditProfileButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
