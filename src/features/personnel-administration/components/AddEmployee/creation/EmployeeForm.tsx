import { Box, Button, Stack } from '@mui/material'
import { FKTextField } from '../../../../../components/Formik'
const EmployeeForm = () => {
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
        <FKTextField name='firstname' label='' placeholder='Saisir le nom' fullWidth required />

        <FKTextField
          name='lastname'
          label=''
          placeholder='Saisir le prenom'
          fullWidth
          required
          sx={{
            background: '#0877bc24  !important',
          }}
        />

        <FKTextField
          type='date'
          name='dateBirth'
          label=''
          placeholder='Saisir la date de naissance'
          fullWidth
          required
        />
        <FKTextField
          name='placeBirth'
          label=''
          placeholder='Saisir le lieu de naissance'
          fullWidth
          required
        />
        <FKTextField
          name='pieceIdentification'
          label=''
          placeholder='Saisir la piece d identite'
          fullWidth
          required
          sx={{
            background: '#0877bc24  !important',
          }}
        />

        <FKTextField
          name='email'
          label=''
          placeholder='Saisir l email personnel'
          fullWidth
          required
        />
        <FKTextField
          type='file'
          name='cv'
          label=''
          placeholder='Charger l email'
          fullWidth
          required
        />

        <FKTextField
          name='competenceList'
          label=''
          placeholder='Saisir les competences'
          fullWidth
          required
          multiline
          rows={1.5}
          sx={{
            background: '#0877bc24  !important',
          }}
        />

        <FKTextField
          type='file'
          name='motivationLetter'
          label=''
          placeholder='charger la lettre de motivation'
          fullWidth
          required
        />

        <FKTextField
          name='post'
          label=''
          placeholder='Saisir le poste occuper'
          fullWidth
          required
        />

        <FKTextField
          type='file'
          name='contract'
          label=''
          placeholder='Charger le contrat le travail'
          fullWidth
          required
          sx={{
            background: '#0877bc24  !important',
          }}
        />

        <FKTextField
          name='contractDuration'
          label=''
          placeholder='Saisir le contrat le travail'
          fullWidth
          required
        />

        <FKTextField name='leave' label='' placeholder='Saisir le conger' fullWidth required />

        <FKTextField
          name='affectationDepartment'
          label=''
          placeholder='Saisir le departement d affectation'
          fullWidth
          required
          sx={{
            background: '#0877bc24  !important',
          }}
        />

        <FKTextField
          name='postFile'
          label=''
          placeholder='Charger la fiche de poste'
          fullWidth
          required
        />

        <FKTextField
          name='employeeType'
          label=''
          placeholder='Selectioner le type d employer'
          fullWidth
          required
        />

        <Stack direction='row' justifyContent='flex-start' sx={{ width: '100%', height: 50 }}>
          <Button type='submit' color='primary' variant='outlined' fullWidth>
            ENREGISTRER
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default EmployeeForm
