import { useForm, zodResolver } from '@mantine/form'
import { useAppDispatch } from '../store/store'
import { SigninForm, signinSchema } from '../Schema/SigninSchema'
import { SigninMutation } from '../api/signinApi'
import { AxiosError } from 'axios'
import SignInForm from './Signin/Components/SigninForm'
import { dispatchUser } from '../store/slice/userDispatcher'

function Signin() {
  const dispatch = useAppDispatch()

  const { mutate, status } = SigninMutation(
    (error: AxiosError | any) => {
      console.log(error)
    },
    (data) => {
      // console.log(data)
      dispatchUser(data, dispatch)
    }
  )

  const onSave = async (values: SigninForm) => {
    try {
      mutate(values)
      // console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  const form = useForm<SigninForm>({
    initialValues: {
      email: '',
      password: '',
    },

    validate: zodResolver(signinSchema),
  })

  return (
    <div>
      <p>Signup</p>
      <SignInForm form={form} onSave={onSave} />
    </div>
  )
}

export default Signin
