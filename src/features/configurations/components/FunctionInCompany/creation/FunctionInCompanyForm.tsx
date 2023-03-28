import { Box, Button, Stack } from '@mui/material'
import { FKTextField } from '../../../../../components/Formik'
const FunctionInCompanyForm = () => {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          justifyItems: 'center',
          gap: 2,
          p: 2,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
          },
        }}
      >
        <FKTextField
          name='denomination'
          label='Denomination'
          placeholder='Saisir la denomination'
          fullWidth
          required
        />

        <FKTextField
          name='description'
          label='Description'
          placeholder='Saisir la description'
          fullWidth
          required
        />
      </Box>

      <Stack direction='row' justifyContent='start' spacing={2} mb={5} px={2}>
        <Button color='primary' sx={{ width: '50%' }}>
          ENREGISTRER
        </Button>
      </Stack>
    </>
  )
}

export default FunctionInCompanyForm
