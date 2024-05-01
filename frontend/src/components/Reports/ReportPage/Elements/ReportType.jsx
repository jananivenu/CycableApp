import React, { useState } from 'react'
import { StyledH2 } from '../../../../styles/elements/typography'

const ReportType = ({ type }) => {
  console.log(type)
  //   const [title, setTitle] = useState('')
  let title = ''
  if (type === 'bicycle_accident') {
    title = 'Bicycle Accident'
  } else if (type === 'bicycle_theft') {
    title = 'Bicycle Theft'
  } else if (type === 'near_miss') {
    title = 'Dangerous Location'
  } else if (type === 'violations') {
    title = 'Violations'
  }
  return <StyledH2>{title}</StyledH2>
}

export default ReportType
