import styled from 'styled-components'
import { Cover } from '../../styles'

export const MapContainer = styled(Cover)`
  height: 100%;
  background-color: var(--gray-300);
  position: relative;
  width: 100%; /* Задаётся ширина контейнера */

  overflow: hidden; 
`

export const MapIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`
