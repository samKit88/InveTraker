import { useForm, zodResolver } from '@mantine/form'
import { useAppDispatch } from '../store/store'
import { SigninForm, signinSchema } from '../Schema/SigninSchema'
import { SigninMutation } from '../api/signinApi'
import { AxiosError } from 'axios'
import SignInForm from './Signin/Components/SigninForm'
import { dispatchUser } from '../store/slice/userDispatcher'
import { useNavigate } from 'react-router-dom'
import { notifications } from '@mantine/notifications'

const Signin = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { mutate, isPending } = SigninMutation(
    (error: AxiosError | any) => {
      console.log(error)
      notifications.show({
        title: 'Error',
        autoClose: 5000,
        message: error?.response?.data.message || 'An error occurred',
        color: 'red',
      })
    },
    (data) => {
      // console.log(data)
      dispatchUser(data, dispatch)
      navigate('/dashboard')
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
    <div className="h-screen flex justify-center bg-gray-50 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm my-auto">
        <p className='className="text-2xl font-bold mb-6 text-center"'>
          SignIn
        </p>
        <SignInForm form={form} onSave={onSave} isLoading={isPending} />
      </div>
    </div>
  )
}

export default Signin
