import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ReportPreviewHreader = styled.div`
  position: relative;
  height: 3rem;

  display: flex;
  align-items: center;
  padding: 0.6rem;

  background-color: ${(props) => `var(--accent-${props.type}-10)`};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  font-weight: 700;
  font-size: 0.9rem;

  .close-button {
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 0.9rem;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`

export const ReportPreviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  margin-top: 1rem;
  min-height: 1.5rem;

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const ReportPreviewRow = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: start;
  justify-content: flex-start;
  padding: 0.2rem 0.8rem 0.2rem 0.6rem;

  font-size: 0.9rem;
`

export const ReportPreviewImage = styled.div`
  display: flex;
  grid-template-columns: min-content 1fr;
  align-items: center;
  justify-content:center;
  overflow: hidden;
  
  margin-bottom: 0.6rem;
   
`

export const PreviewImage = styled.div`
    object-fit: cover;
    width: 100%; /* Set the width of the container */
    height: 170px; /* Set the height of the container */
    background-size: cover;
    background-position: bottom;
`

export const ShowDetailsLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  color: black;

  &:hover {
    color: var(--accent-main);
  }
`
