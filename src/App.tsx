import MotionLazyContainer from './components/animate/MotionLazyContainer'
import { ProgressBarStyle } from './components/ProgressBar'
import AppRoutes from './routes'
import ThemeProvider from './themes'

import AppProviders from './providers/app'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div>
      <AppProviders>
        <ThemeProvider>
          <MotionLazyContainer>
            <ProgressBarStyle />
            <ScrollToTop />
            <AppRoutes />
          </MotionLazyContainer>
        </ThemeProvider>
      </AppProviders>
    </div>
  )
}

export default App
