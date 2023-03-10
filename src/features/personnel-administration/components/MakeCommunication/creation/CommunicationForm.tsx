import { Box, Button, Stack } from '@mui/material'
import { FKTextField } from '../../../../../components/Formik'
const CommunicationForm = () => {
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
        <FKTextField name='title' label='Titre' placeholder='Saisir le titre' fullWidth required />

        <FKTextField
          name='description'
          label='Contenu principal'
          placeholder='Saisir le contenue'
          fullWidth
          required
        />

        <FKTextField
          name='destination'
          label='Destination'
          placeholder='Saisir la destination'
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

export default CommunicationForm
