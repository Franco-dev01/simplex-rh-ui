import Box from '@mui/material/Box'
import React from 'react'

import ProgressBar from '../ProgressBar'

type LoadingScreenType = {
  isDashboard?: boolean
}

function LoadingScreen({ isDashboard = false }: LoadingScreenType) {
  return (
    <>
      <ProgressBar />

      {!isDashboard && (
        <Box height='100vh' display='flex' justifyContent='center' alignItems='center'>
          Chargement...
        </Box>
      )}
    </>
  )
}

export default LoadingScreen
