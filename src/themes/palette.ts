import { PaletteOptions } from '@mui/material/styles/createPalette'

type PaletteMode = 'default'

const palette: Record<PaletteMode, PaletteOptions> = {
  default: {
    primary: {
      light: '#eceff1',
      main: '#cfd8dc',
      dark: '#b0bec5',
      contrastText: '#90a4ae',
    },
    secondary: {
      light: '#AAF27F',
      main: '#54D62C',
      dark: '#229A16',
    },
  },
}

export default palette
