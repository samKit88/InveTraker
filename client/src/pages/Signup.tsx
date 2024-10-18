import { useForm, zodResolver } from '@mantine/form'
import { useAppDispatch } from '../store/store'
import { AxiosError } from 'axios'
import { dispatchUser } from '../store/slice/userDispatcher'
import { SignupForm, signupSchema } from '../Schema/SignupSchema'
import SignUpForm from './Signin/Components/SignupForm'
import { SignUpMutation } from '../api/signupApi'
import { TokenResponse } from '../Schema/SigninSchema'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { mutateAsync, isPending } = SignUpMutation(
    (error: AxiosError | any) => {
      console.log(error)
    },
    (data: TokenResponse) => {
      dispatchUser(data, dispatch)
    }
  )

  const onSave = async (values: SignupForm) => {
    try {
      await mutateAsync(values)

      navigate('/signin')
      // console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  const form = useForm<SignupForm>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },

    validate: zodResolver(signupSchema),
  })

  return (
    <div>
      <p>Signup</p>
      <SignUpForm form={form} onSave={onSave} isLoading={isPending} />
    </div>
  )
}

export default Signup
