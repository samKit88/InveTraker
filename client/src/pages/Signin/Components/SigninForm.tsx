import { type UseFormReturnType } from '@mantine/form'

import React from 'react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import { SigninForm } from '../../../Schema/SigninSchema'

interface SigninFormProps {
  form: UseFormReturnType<SigninForm>
  onSave: (values: SigninForm) => void
  isLoading: boolean
}
const SignInForm: React.FC<SigninFormProps> = ({ form, onSave, isLoading }) => {
  return (
    <>
      <form onSubmit={form.onSubmit(onSave)}>
        <TextInput
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          placeholder="use strong password"
          {...form.getInputProps('password')}
        />
        <Button
          type="submit"
          fullWidth
          className="mt-6"
          loading={isLoading}
          loaderProps={{
            type: 'dots',
          }}
        >
          Sign In
        </Button>
      </form>
    </>
  )
}

export default SignInForm
