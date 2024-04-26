import styled from 'styled-components'

export const HiddenInput = styled.input`
  display: none;
`

export const FileUploadButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1rem;
  min-width: max-content;
  //width: max-content;
  margin-top: 0.5rem;

  background-color: transparent;
  border: 2px solid var(--accent-main);
  color: var(--accent-main);
  border-radius: 2rem;

  /* text-transform: uppercase; */
  font-size: 1.5rem;
  font-weight: 500;

  cursor: pointer;
  &:hover {
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
  width: 0.5rem;
  height: 0.5rem;
  font-size: 0.8rem;
  background-color: #444;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 0.2rem;
  color: white;
  cursor: pointer;
`
