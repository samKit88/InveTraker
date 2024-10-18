import { AppShell, Burger, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/store'
import { logout } from '../store/slice/authSlice'

const data = [{ link: './Inventory', label: 'Inventory', icon: '' }]

const Dashboard = () => {
  const [opened, { toggle }] = useDisclosure()
  const navigate = useNavigate()
  const [active, setActive] = useState<'olala' | 'Company'>('olala')

  const dispatch = useAppDispatch()

  const onLogOut = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
        <Button onClick={onLogOut}>Logout</Button>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        Navbar
        {data?.map((data) => (
          <div
            className="w-full 
              bg-gray-100
            "
            key={data.label}
          >
            <Button
              fullWidth
              size="sm"
              variant={active === data.label ? 'light' : 'transparent'}
              // leftSection={
              //   <data.icon size={22} stroke={1.2} className="text-sm" />
              // }
              className="text-sm font-medium text-gray-900 hover:bg-gray-100"
              justify="start"
              onClick={(e) => {
                e.preventDefault()
                setActive(data.label as any)
                navigate(data.link)
              }}
            >
              {data.label}
            </Button>
          </div>
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default Dashboard
