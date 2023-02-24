import React, { useEffect, useMemo, useState } from 'react'

import CollapseDrawerContext from '../contexts/CollapseDrawerContext'
import useResponsive from '../hooks/useResponsive'

type CollapseDrawerProviderProps = {
  children: React.ReactNode
}

const CollapseDrawerProvider: React.FC<CollapseDrawerProviderProps> = ({ children }) => {
  const isDesktop = useResponsive('up', 'lg')

  const [collapse, setCollapse] = useState({
    click: false,
    hover: false,
  })

  useEffect(() => {
    if (!isDesktop) {
      setCollapse({
        click: false,
        hover: false,
      })
    }
  }, [isDesktop])

  const handleToggleCollapse = () => {
    setCollapse({
      ...collapse,
      click: !collapse.click,
    })
  }

  const handleHoverEnter = () => {
    if (collapse.click) {
      setCollapse({
        ...collapse,
        hover: true,
      })
    }
  }

  const handleHoverLeave = () => {
    setCollapse({
      ...collapse,
      hover: false,
    })
  }

  const collapseDrawerProviderValue = useMemo(
    () => ({
      isCollapse: collapse.click && !collapse.hover,
      collapseClick: collapse.click,
      collapseHover: collapse.hover,
      onToggleCollapse: handleToggleCollapse,
      onHoverEnter: handleHoverEnter,
      onHoverLeave: handleHoverLeave,
    }),
    [collapse, handleToggleCollapse, handleHoverEnter, handleHoverLeave],
  )

  return (
    <CollapseDrawerContext.Provider value={collapseDrawerProviderValue}>
      {children}
    </CollapseDrawerContext.Provider>
  )
}

export default CollapseDrawerProvider
