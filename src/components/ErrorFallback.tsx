import { Stack, Typography, Button, Box } from '@mui/material'
import { FallbackProps } from 'react-error-boundary'

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <Stack height='100%' width='100%' justifyContent='center' alignItems='center' p={[4, null, 8]}>
    <Box>
      <Typography variant='h3' color='primary' sx={{ maxInlineSize: '25ch' }}>
        Oops !
      </Typography>
      <Typography variant='h4' color='primary' sx={{ maxInlineSize: '30ch' }}>
        we could not render this component...
      </Typography>
      <Box component='pre' sx={{ whiteSpace: 'normal' }}>
        <code>{error.stack}</code>
      </Box>
      <Button onClick={resetErrorBoundary} sx={{ paddingX: 4 }}>
        Refresh
      </Button>
    </Box>
  </Stack>
)

export default ErrorFallback
