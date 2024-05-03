import styled from 'styled-components'

export const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.5rem;
`

export const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 200px;
  padding: 1rem;
  border-radius: 5px;

  border: 1px solid var(--gray-300);

  &:hover {
    background-color: var(--accent-main-10);
    border: 1px solid var(--gray-500);
  }
`

export const MemberPhoto = styled.div`
  width: 110px;
  aspect-ratio: 1/1;
  background-size: cover;
  background-position: center;
  border: 3px solid var(--accent-main);
  border-radius: 50%;
  border-top-right-radius: 0;
`

export const MemberName = styled.h4`
  margin-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.3;
  font-weight: 900;
`
export const MemberRole = styled.span`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const MemberCountry = styled.span`
  font-size: 0.8rem;
`

export const MemberJob = styled.span`
  margin-top: auto;
  font-size: 0.8rem;
`

export const MemberLinkedIn = styled.a`
  font-size: 1.5rem;
  color: black;

  &:hover {
    color: var(--accent-main);
  }
`
