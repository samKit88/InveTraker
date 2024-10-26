import { type UseFormReturnType } from '@mantine/form'

import React from 'react'
import { Button, Card, PasswordInput, TextInput } from '@mantine/core'
import { SigninForm } from '../../../Schema/SigninSchema'

interface SigninFormProps {
  form: UseFormReturnType<SigninForm>
  onSave: (values: SigninForm) => void
  isLoading: boolean
}
const SignInForm: React.FC<SigninFormProps> = ({ form, onSave, isLoading }) => {
  return (
    <>
      <Card className="mb-4">
        <form
          className=" px-3 py-2 border border-gray-150 rounded-lg "
          onSubmit={form.onSubmit(onSave)}
        >
          <TextInput
            className="mb-1 flex flex-col gap-6 text-gray-700"
            label="Email"
            placeholder="example@mail.com"
            {...form.getInputProps('email')}
            withAsterisk
          />
          <PasswordInput
            className="mb-1 flex flex-col gap-6 text-gray-700"
            label="Password"
            placeholder="use strong password"
            {...form.getInputProps('password')}
            withAsterisk
          />
          <Button
            className="mx-auto w-28 mt-6 py-2 rounded-lg"
            type="submit"
            fullWidth
            loading={isLoading}
            loaderProps={{
              type: 'dots',
            }}
          >
            Sign In
          </Button>
        </form>
      </Card>
    </>
  )
}

export default SignInForm
