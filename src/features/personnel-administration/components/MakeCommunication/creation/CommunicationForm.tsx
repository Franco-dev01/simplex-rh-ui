import { Box, Button, Stack } from '@mui/material'
import { FKTextField } from '../../../../../components/Formik'
import SelectDestination from './SelectDestination'
const CommunicationForm = () => {
  return (
    <Stack sx={{ position: 'sticky', overflow: 'scroll', height: '300px' }}>
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
        <FKTextField name='title' label='' placeholder='Saisir le titre' fullWidth required />

        <FKTextField
          name='description'
          label=''
          placeholder='Saisir le contenue'
          fullWidth
          required
          multiline
          rows={3}
        />

        <SelectDestination name='destination' label='' />
      </Box>

      <Stack direction='row' justifyContent='start' spacing={2} mb={5} px={2}>
        <Button color='primary' sx={{ width: '50%' }}>
          ENREGISTRER
        </Button>
      </Stack>
    </Stack>
  )
}

export default CommunicationForm
