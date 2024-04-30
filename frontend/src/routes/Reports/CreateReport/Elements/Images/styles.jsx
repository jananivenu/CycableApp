import styled from 'styled-components'

export const HiddenInput = styled.input`
  display: none;
`

export const FileUploadButton = styled.label`
  max-width: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 0.8rem;

  border-radius: 6px;
  border: 2px solid transparent;
  background-color: var(--gray-300);

  color: black;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1;

  cursor: pointer;

  &:hover {
    color: white;
    background-color: var(--accent-main);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`

export const ImagePreviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0 2rem 0;
`

export const ImagePreview = styled.div`
  width: 6rem;
  height: 6rem;
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  position: relative;
  border: 1px solid #777;
`

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;

  background-color: #444;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 0.3rem;

  font-size: 0.8rem;
  line-height: 1;
  color: white;
  cursor: pointer;

  /* min-width: min-content; */
  height: min-content; 
  aspect-ratio: 1/1 !important;
`
