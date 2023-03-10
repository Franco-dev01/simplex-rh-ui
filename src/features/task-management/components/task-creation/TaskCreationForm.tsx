import { Box, Button, Stack } from '@mui/material'
import { FKTextField } from '../../../../components/Formik'

const TaskCreationForm = () => {
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
          name='name'
          label='Intituler'
          placeholder='Saisir l intituler'
          fullWidth
          required
        />

        <FKTextField
          name='name'
          label='Details'
          placeholder='Saisir le detail'
          fullWidth
          required
          multiline
          rows={1.5}
        />

        <FKTextField
          name='name'
          label='Executant'
          placeholder='Selectionner un executant'
          fullWidth
          required
        />
        <FKTextField
          name='name'
          label='Projet'
          placeholder='Selectionner le projet'
          fullWidth
          required
        />
      </Box>

      <Stack direction='row' justifyContent='center' paddingX={3} spacing={2} mb={5}>
        <Button color='primary'>Annuler</Button>

        <Button type='submit' color='primary' variant='contained'>
          Créer une tache
        </Button>
      </Stack>
    </>
  )
}

export default TaskCreationForm
