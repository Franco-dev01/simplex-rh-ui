import { Box, Button, Stack } from '@mui/material'
import { FKTextField } from '../../../../components/Formik'
import SelectLeaveType from './SelectLeaveType'

const LeaveRequestCreationForm = () => {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          justifyItems: 'center',
          gap: 1.5,
          p: 5,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        <FKTextField
          type='date'
          name='startDate'
          label=''
          placeholder='Saisir la date de debut'
          fullWidth
          required
        />

        <FKTextField
          type='date'
          name='endDatee'
          label=''
          placeholder='Saisir la date de fin'
          fullWidth
          required
          sx={{
            background: '#0877bc24  !important',
          }}
        />

        <FKTextField
          name='dayNumber'
          label=''
          placeholder='Saisir le nombre de jour'
          fullWidth
          required
        />

        <SelectLeaveType name='leaveType' label='' />
        <FKTextField
          name='justification'
          label=''
          placeholder='Saisir une justification'
          fullWidth
          required
          sx={{
            background: '#0877bc24  !important',
          }}
        />
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{ width: '100%', height: 50 }}
        >
          <Button type='submit' color='primary' variant='outlined' fullWidth>
            Enregistrer
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default LeaveRequestCreationForm
