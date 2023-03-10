import { Box, Button, Stack } from '@mui/material'
import { FKTextField } from '../../../../../components/Formik'
const FunctionInCompanyForm = () => {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          justifyItems: 'center',
          gap: 5,
          p: 5,
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

      <Stack direction='row' justifyContent='center' paddingX={3} spacing={2} mb={5}>
        <Button color='primary'>Annuler</Button>

        <Button type='submit' color='primary' variant='contained'>
          Créer
        </Button>
      </Stack>
    </>
  )
}

export default FunctionInCompanyForm
