import { Components, Theme } from '@mui/material'
import { ProductSansRegular } from '../../assets/fonts/ProductSans/stylesheet'

type CssBaselineOverridesOptions = () => {
  MuiCssBaseline: Components<Theme>['MuiCssBaseline']
}

const cssBaseline: CssBaselineOverridesOptions = () => ({
  MuiCssBaseline: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    '@global': {
      '@font-face': [ProductSansRegular],
    },
  },
})

export default cssBaseline()
