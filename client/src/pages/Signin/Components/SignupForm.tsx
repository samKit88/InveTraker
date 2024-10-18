import { type UseFormReturnType } from '@mantine/form'

import React from 'react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import { SignupForm } from '../../../Schema/SignupSchema'

interface SignupFormProps {
  form: UseFormReturnType<SignupForm>
  onSave: (values: SignupForm) => void
  isLoading: boolean
}
const SignUpForm: React.FC<SignupFormProps> = ({ form, onSave, isLoading }) => {
  return (
    <>
      <form onSubmit={form.onSubmit(onSave)}>
        <TextInput
          label="First Name"
          placeholder="Enter your first name"
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Last Name"
          placeholder="Enter your last name"
          {...form.getInputProps('lastName')}
        />
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
          Sign Up
        </Button>
      </form>
    </>
  )
}

export default SignUpForm
