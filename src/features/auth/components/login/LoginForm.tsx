import { Button, IconButton, InputAdornment, Link, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import * as Yup from 'yup'

import Iconify from '../../../../components/Iconify'
import { PATH_AUTH } from '../../../../routes/paths'
import { FKProvider, FKTextField } from '../../../../components/Formik'

type LoginProps = {
  login?: string
  password?: string
  remember?: boolean
}

const LoginForm: React.FC<LoginProps> = () => {
  const [showPassword, setShowPassword] = useState(false)

  const validationSchema = Yup.object().shape({
    login: Yup.string().email('L\'email n\'est pas valide').required('L\'email est requis'),
    password: Yup.string()
      .min(8, 'Le mot de passe est trop court')
      .required('Le mot de passe est requis'),
  })

  return (
    <FKProvider value={{}} onSubmit={() => ({})} validationsSchema={validationSchema}>
      <Stack spacing={3}>
        <FKTextField type='email' name='login' label='Email address' />

        <FKTextField
          name='password'
          label='Password'
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                  <Iconify icon={showPassword ? 'bx:show' : 'dashicons:hidden'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ my: 2 }}>
        <Link
          variant='caption'
          component={RouterLink}
          to={PATH_AUTH.passwordForgot.root}
          sx={{ textDecoration: 'none' }}
        >
          Mot de passe oublié
        </Link>
      </Stack>

      <Button fullWidth size='large' type='submit' variant='contained'>
        Connexion
      </Button>
    </FKProvider>
  )
}

export { LoginForm }
