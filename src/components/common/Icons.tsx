import * as React from 'react'
import { theme } from '@/theme'

export interface IPropsSVG {
  color?: string
  height?: number
  width?: number
}

const mergeDefaultProps = (props: IPropsSVG): Required<IPropsSVG> => {
  return Object.assign({}, {
    color: '#b2b2b2',
    height: 24,
    width: 24
  }, props)
}

export const IconExplore = (props: IPropsSVG): JSX.Element => {
  const { color, height, width } = mergeDefaultProps(props)

  return (
    <svg className="IconExplore" xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox="0 0 24 24">
      <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}

export const IconEmail = (props: IPropsSVG): JSX.Element => {
  const { color, height, width } = mergeDefaultProps(props)

  return (
    <svg className="IconEmail" xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}

export const IconPhone = (props: IPropsSVG): JSX.Element => {
  const { color, height, width } = mergeDefaultProps(props)

  return (
    <svg className="IconPhone" xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}