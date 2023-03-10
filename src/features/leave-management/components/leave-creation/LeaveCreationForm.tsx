import { Box, Button, Stack } from '@mui/material'
import { FKTextField } from '../../../../components/Formik'

const LeaveCreationForm = () => {
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
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <FKTextField
          type='date'
          name='startDate'
          label='Date de debut'
          placeholder='Saisir la date de debut'
          fullWidth
          required
        />

        <FKTextField
          type='date'
          name='endDatee'
          label='Date de fin'
          placeholder='Saisir la date de fin'
          fullWidth
          required
        />

        <FKTextField
          name='dayNumber'
          label='Nombre de jour'
          placeholder='Saisir le nombre de jour'
          fullWidth
          required
        />
        <FKTextField
          name='leaveType'
          label='Type de conger'
          placeholder='Selectionner le type de conger'
          fullWidth
          required
        />
        <FKTextField
          name='justification'
          label='Justification'
          placeholder='Saisir une justification'
          fullWidth
          required
        />
      </Box>

      <Stack direction='row' justifyContent='center' paddingX={3} spacing={2} mb={5}>
        <Button color='primary'>Annuler</Button>

        <Button type='submit' color='primary' variant='contained'>
          Créer une demande
        </Button>
      </Stack>
    </>
  )
}

export default LeaveCreationForm
