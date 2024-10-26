import {
  AppShell,
  Avatar,
  Burger,
  Button,
  Group,
  Menu,
  rem,
  Tabs,
  Text,
  UnstyledButton,
} from '@mantine/core'
import {
  IconChevronRight,
  IconChevronCompactDown,
  IconExternalLink,
} from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import { forwardRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/store'
import { logout } from '../store/slice/authSlice'
import InveImg from '../image/Inve4.avif'
import ProductImg from '../image/Product.png'
import TradingImg from '../image/exposure.png'
import ExpesneImg from '../image/receipt-dollar.png'
import PeopleImg from '../image/exposure.png'
import ReportImg from '../image/reorder.png'
import TransferImg from '../image/brand-asana.png'
import WarehouseImg from '../image/building-warehouse.png'
import SettingImg from '../image/settings.png'

const Image = [
  ProductImg,
  TradingImg,
  ExpesneImg,
  PeopleImg,
  ProductImg,
  ReportImg,
  TransferImg,
  WarehouseImg,
  SettingImg,
]

const data = [
  { link: './Inventory', label: 'Inventory', icon: ProductImg },
  { link: './Product', label: 'Product', icon: ProductImg },
  { link: '', label: 'Trading', icon: TradingImg },
  { link: '', label: 'Expesne', icon: ExpesneImg },
  { link: '.', label: 'People', icon: PeopleImg },
  { link: '.', label: 'User Management', icon: ProductImg },
  { link: '.', label: 'Reports', icon: ReportImg },
  { link: '.', label: 'Transfer', icon: TransferImg },
  { link: '.', label: 'Warehouse', icon: WarehouseImg },
  { link: '.', label: 'Administrative Tools', icon: SettingImg },
]

interface UserButton extends React.ComponentPropsWithoutRef<'button'> {
  image: string
  name: string
  role: string
  icon?: React.ReactNode
}

const UserButton = forwardRef<HTMLButtonElement, UserButton>(
  ({ image, name, role, icon, ...others }: UserButton, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: 'var(--mantine-spacing-md)',
        color: 'var(--mantine-color-text)',
        borderRadius: 'var(--mantine-radius-sm)',
      }}
      {...others}
    >
      <Group>
        <Avatar src={InveImg} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {name}
          </Text>

          <Text c="dimmed" size="xs">
            {role}
          </Text>
        </div>

        {icon || <IconChevronCompactDown size="1rem" />}
      </Group>
    </UnstyledButton>
  )
)

const Dashboard = () => {
  const [opened, { toggle }] = useDisclosure()
  const navigate = useNavigate()
  const [active, setActive] = useState<'olala' | 'Company'>('olala')
  const dispatch = useAppDispatch()

  const onLogOut = () => {
    dispatch(logout())
    navigate('/signin')
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="sm"
      className="flex"
    >
      <AppShell.Header className="flex justify-end pr-6">
        <Menu withArrow>
          <Menu.Target>
            <UserButton image={InveImg} name="Clasi Smai" role="admin" />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item component="a" href="#">
              Your work space
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconExternalLink style={{ width: rem(14), height: rem(14) }} />
              }
              component="a"
              onClick={onLogOut}
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
          {/* ... menu items */}
        </Menu>
      </AppShell.Header>

      <AppShell.Navbar p="md" className="w-52">
        {data?.map((data) => (
          <div key={data.label}>
            <Button
              fullWidth
              size="sm"
              variant={active === data.label ? 'light' : 'transparent'}
              leftSection={
                // <data.icon size={22} stroke={1.2} className="text-sm" />
                <Avatar
                  src={data.icon}
                  radius="sm"
                  size={20}
                  className="bg-gray-200"
                />
              }
              className="text-sm font-medium text-gray-900 hover:bg-gray-100 mt-2"
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

      <AppShell.Main className="ml-0 w-full">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default Dashboard
