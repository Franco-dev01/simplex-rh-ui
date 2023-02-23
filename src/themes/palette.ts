import { PaletteOptions } from '@mui/material/styles/createPalette'

type PaletteMode = 'default'

const palette: Record<PaletteMode, PaletteOptions> = {
  default: {
    primary: {
      light: '#339F8F',
      main: '#008773',
      dark: '#005E50',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F4FEF7',
      main: '#F2FEF6',
      dark: '#A9B1AC',
      contrastText: '#545454',
    },
  },
}

export default palette
