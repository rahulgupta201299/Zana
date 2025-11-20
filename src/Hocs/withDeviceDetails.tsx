import type React from 'react'
import { createTheme, useMediaQuery } from '@mui/material'

export interface IWithDeviceDetails {
  breakpoint: { [key: string]: boolean }[]
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  tabletLSMin: boolean
}

export default function withDeviceDetails(
  WrappedComponent: React.ComponentType<any>
) {
  const Comp = (props: any) => {
    const theme = createTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
    });

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
    const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'))
    const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'))
    const TabletLandscapeMin = useMediaQuery(theme.breakpoints.up(1010))

    return (
      <WrappedComponent
        {...props}
        breakpoint={theme.breakpoints}
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
        tabletLSMin={TabletLandscapeMin}
      />
    )
  }

  return Comp
}
