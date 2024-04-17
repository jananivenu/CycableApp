import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {},
}

export const GlobalStyle = createGlobalStyle`
  :root {
  /* colors */
  --accent-main: #20B69E;
  --accent-red: #EE4266;
  --accent-blue: #0075FF;
  --accent-orange: #FFB800;

  --accent-main-10: rgba(32, 182, 158, 0.1);
  --accent-red-10: rgba(238, 66, 102, 0.1);
  --accent-blue-10: rgba(0, 117, 255, 0.1);
  --accent-orange-10: rgba(255, 184, 0, 0.1);

  --gray-500: #CCC;
  --gray-300: #F0F0F0;
  --gray-100: #F6F6F6;

  /* fonts */
  --main-font: "Manrope", sans-serif;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100vh;
    font-family: var(--main-font);
    line-height: 1.5;
  }

  #root {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
  } 

  body {
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
  }

  textarea,
  input {
    max-width: 80%;
    border: 1px solid var(--gray-500);
    border-radius: 10px;
    border-top-left-radius: 0;
    padding: 0.5rem;

    font-family: "Manrope", sans-serif;
    font-size: 1rem;
    line-height: 1.2;

    &:focus, &:active {
    outline: 3px solid var(--accent-main);
    border: 1px solid transparent;
  }

    &::placeholder {
      color: var(--gray-500);
    }
  }
`

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  margin: auto auto;
`

export const Cover = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
`

export const SectionContainer = styled.section`
  max-width: 1240px;
  margin: 0 auto;

  padding: 1rem 3rem;

  @media (max-width: 788px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 500px) {
    padding: 1rem 1rem;
  }

  & > h3 {
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 2;
    margin: 2rem 0 1rem 0;
  }
`