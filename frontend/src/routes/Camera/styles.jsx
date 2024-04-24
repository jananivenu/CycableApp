export const FileUploadButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  min-width: max-content;
  //width: max-content;
  margin-top: 0.5rem;

  background: var(--accent-main);
  color: white;
  border-radius: 2rem;
  border: 0;

  text-transform: uppercase;
  font-size: 01rem;
  font-weight: 500;
  font-family: var(--main-font);

  &:focus,
  &:focus-visible {
    outline: 2px solid var(--accent-blue);
  }

  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media (max-width: 480px) {
      display: ${(props) => (props.hide ? 'none' : 'inline-block')};
    }
  }
`
