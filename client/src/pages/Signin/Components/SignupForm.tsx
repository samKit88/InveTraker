import { type UseFormReturnType } from '@mantine/form'

import React from 'react'
import { Button, Card, PasswordInput, TextInput } from '@mantine/core'
import { SignupForm } from '../../../Schema/SignupSchema'

interface SignupFormProps {
  form: UseFormReturnType<SignupForm>
  onSave: (values: SignupForm) => void
  isLoading: boolean
}
const SignUpForm: React.FC<SignupFormProps> = ({ form, onSave, isLoading }) => {
  return (
    <>
      <Card>
        <form
          className=" px-3 border border-gray-150 rounded-lg "
          onSubmit={form.onSubmit(onSave)}
        >
          <TextInput
            className="my-1 flex flex-col gap-6 text-gray-700"
            label="First Name"
            placeholder="Enter your first name"
            {...form.getInputProps('firstName')}
            withAsterisk
          />
          <TextInput
            className="pt-3 flex flex-col gap-6 text-gray-700"
            label="Last Name"
            placeholder="Enter your last name"
            {...form.getInputProps('lastName')}
            withAsterisk
          />
          <TextInput
            className="pt-3  flex flex-col gap-6 text-gray-700"
            label="Email"
            placeholder="example@mail.com"
            {...form.getInputProps('email')}
            withAsterisk
          />
          <PasswordInput
            className="pt-3 flex flex-col gap-6 text-gray-700"
            label="Password"
            placeholder="use strong password"
            {...form.getInputProps('password')}
            withAsterisk
          />
          <Button
            className="mx-auto w-28 mt-6 mb-3 py-2 rounded-lg"
            type="submit"
            fullWidth
            loading={isLoading}
            loaderProps={{
              type: 'dots',
            }}
          >
            Sign Up
          </Button>
        </form>
      </Card>
    </>
  )
}

export default SignUpForm
