import { PaletteOptions } from '@mui/material/styles/createPalette'

type PaletteMode = 'default'

const palette: Record<PaletteMode, PaletteOptions> = {
  default: {
    primary: {
      light: '#eceff1',
      main: '#0877bc',
      dark: '#b0bec5',
      contrastText: '#90a4ae',
    },
    secondary: {
      light: '',
      main: '#b6bbc2',
      dark: '#4c5d70',
    },
  },
}

export default palette
