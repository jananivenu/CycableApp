import styled from 'styled-components'


export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
`

export const DateText = styled.text`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 1.5rem; /* 24px / 16px = 1.5rem */
    line-height: 2.04875rem;

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`

