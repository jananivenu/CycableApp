import styled from 'styled-components'
import { Cover } from '../../styles'

export const ProfileCover = styled(Cover)`
  position: relative;
  height: 30vh;
  background-image: url(${(props) => props.bgImage});
  opacity: 0.8;
`
