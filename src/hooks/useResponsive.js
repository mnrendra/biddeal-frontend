import { useState, useEffect } from 'react'
import useWindowSize from './useWindowSize'

const ORIENTATION = {
  PORTRAIT: 'portrait',
  LANDSCAPE: 'landscape'
}

const MIN_WIDTH = {
  PORTRAIT: {
    HANDSET: { MEDIUM: 360, LARGE: 480 },
    TABLET: { MEDIUM: 600, LARGE: 720 },
    DESKTOP: { MEDIUM: 840, LARGE: 960 }
  },
  LANDSCAPE: {
    HANDSET: { MEDIUM: 640, LARGE: 800 },
    TABLET: { MEDIUM: 960, LARGE: 1120 },
    DESKTOP: { MEDIUM: 1280, LARGE: 1440 }
  }
}

const DEVICE_TYPE = {
  HANDSET: 'handset',
  TABLET: 'tablet',
  DESKTOP: 'desktop'
}

const SIZE_TYPE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large'
}

const getDeviceType = (width = 0, { HANDSET, TABLET, DESKTOP }) => {
  if /* ------ */ (width < HANDSET.MEDIUM) /* - */ return { device: DEVICE_TYPE.HANDSET, size: SIZE_TYPE.SMALL }
  else if /* - */ (width < HANDSET.LARGE) /* -- */ return { device: DEVICE_TYPE.HANDSET, size: SIZE_TYPE.MEDIUM }
  else if /* - */ (width < TABLET.MEDIUM) /* -- */ return { device: DEVICE_TYPE.HANDSET, size: SIZE_TYPE.LARGE }
  else if /* - */ (width < TABLET.LARGE) /* --- */ return { device: DEVICE_TYPE.TABLET, size: SIZE_TYPE.MEDIUM }
  else if /* - */ (width < DESKTOP.MEDIUM) /* - */ return { device: DEVICE_TYPE.TABLET, size: SIZE_TYPE.LARGE }
  else if /* - */ (width < DESKTOP.LARGE) /* -- */ return { device: DEVICE_TYPE.DESKTOP, size: SIZE_TYPE.MEDIUM }
  else /* ------------------------------------- */ return { device: DEVICE_TYPE.DESKTOP, size: SIZE_TYPE.LARGE }
}

const useResponsive = () => {
  // use Window Size hooks
  const { width, height } = useWindowSize()

  // responsive State
  const [responsive, setResponsive] = useState({
    orientation: ORIENTATION.LANDSCAPE,
    device: DEVICE_TYPE.DESKTOP,
    size: SIZE_TYPE.MEDIUM
  })

  // responsive Effect
  useEffect(() => {
    /* handle Responsive */
    const handleResponsive = (width = 0, height = 0) => {
      // set Orientation
      const orientation = width < height ? ORIENTATION.PORTRAIT : ORIENTATION.LANDSCAPE
      // set Device Type
      const { device, size } = orientation === ORIENTATION.PORTRAIT
        ? getDeviceType(width, MIN_WIDTH.PORTRAIT)
        : getDeviceType(width, MIN_WIDTH.LANDSCAPE)
      // set Responsive
      setResponsive({ orientation, device, size })
    }

    handleResponsive(width, height)
  }, [width, height])

  // return responsive
  return responsive
}

export default useResponsive
