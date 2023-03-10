import { Box, Button, Stack } from '@mui/material'
import { FKTextField } from '../../../../../components/Formik'
const EmployeeForm = () => {
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
        <FKTextField name='firstname' label='Nom' placeholder='Saisir lae nom' fullWidth required />

        <FKTextField
          name='lastname'
          label='Prenom'
          placeholder='Saisir le prenom'
          fullWidth
          required
        />

        <FKTextField
          type='date'
          name='dateBirth'
          label='Date de naissance'
          placeholder='Saisir la date de naissance'
          fullWidth
          required
        />
        <FKTextField
          name='placeBirth'
          label='Lieu de naissance'
          placeholder='Saisir le lieu de naissance'
          fullWidth
          required
        />
        <FKTextField
          name='pieceIdentification'
          label='Piece d identite'
          placeholder='Saisir la piece d identite'
          fullWidth
          required
        />

        <FKTextField
          name='email'
          label='Email personnel'
          placeholder='Saisir l email personnel'
          fullWidth
          required
        />
        <FKTextField
          type='file'
          name='cv'
          label='CV'
          placeholder='Charger l email'
          fullWidth
          required
        />

        <FKTextField
          name='competenceList'
          label='Liste des competences'
          placeholder='Saisir les competences'
          fullWidth
          required
          multiline
          rows={2}
        />

        <FKTextField
          type='file'
          name='motivationLetter'
          label='Lettre de motivation'
          placeholder='charger la lettre de motivation'
          fullWidth
          required
        />

        <FKTextField
          name='post'
          label='Poste occuper'
          placeholder='Saisir le poste occuper'
          fullWidth
          required
        />

        <FKTextField
          type='file'
          name='contract'
          label='Contrat de travail'
          placeholder='Charger le contrat le travail'
          fullWidth
          required
        />

        <FKTextField
          name='contractDuration'
          label='Duree du contrat de travail'
          placeholder='Saisir le contrat le travail'
          fullWidth
          required
        />

        <FKTextField
          name='leave'
          label='Conger'
          placeholder='Saisir le conger'
          fullWidth
          required
        />

        <FKTextField
          name='affectationDepartment'
          label='Departement d affectation'
          placeholder='Saisir le departement d affectation'
          fullWidth
          required
        />

        <FKTextField
          name='postFile'
          label='Fiche de post'
          placeholder='Charger la fiche de poste'
          fullWidth
          required
        />

        <FKTextField
          name='employeeType'
          label='Type d employer'
          placeholder='Selectioner le type d employer'
          fullWidth
          required
        />
      </Box>

      <Stack direction='row' justifyContent='center' paddingX={3} spacing={2} mb={5}>
        <Button color='primary'>Annuler</Button>

        <Button type='submit' color='primary' variant='contained'>
          Ajouter
        </Button>
      </Stack>
    </>
  )
}

export default EmployeeForm
