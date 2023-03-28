import { Box, Button, Stack } from '@mui/material'
import { FKTextField } from '../../../../../components/Formik'

const TaskCreationForm = () => {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          justifyItems: 'center',
          gap: 2,
          p: 5,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <FKTextField name='name' label='' placeholder='Saisir l intituler' fullWidth required />

        <FKTextField
          name='name'
          label=''
          placeholder='Saisir le detail'
          fullWidth
          required
          multiline
          rows={1.5}
        />
        <FKTextField
          name='name'
          label=''
          placeholder='Saisir le detail de realisation'
          fullWidth
          required
          multiline
          rows={1.5}
        />

        <FKTextField
          name='name'
          label=''
          placeholder='Selectionner un executant'
          fullWidth
          required
        />
        <FKTextField name='name' label='' placeholder='Selectionner le projet' fullWidth required />

        <Stack direction='row' justifyContent='center' alignItems='center' width='100%'>
          <Button type='submit' color='primary' variant='outlined' fullWidth>
            ENREGISTREMENT
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default TaskCreationForm
