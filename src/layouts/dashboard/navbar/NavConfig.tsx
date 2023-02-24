import React from 'react'

import SvgIconStyle from '../../../components/SvgIconStyle'

const getIcon = (name: string) => (
  <SvgIconStyle
    src={`/icons/${name}.svg`}
    sx={{
      width: 1,
      height: 1,
    }}
  />
)

const ICONS: Record<string, React.ReactElement> = {
  dashboard: getIcon('ic_dashboard'),
}

const navConfig = [
  {
    items: [
      {
        title: 'Accueil',
        icon: ICONS.dashboard,
        path: '#',
        available: false,
      },
    ],
  },
]

export default navConfig
