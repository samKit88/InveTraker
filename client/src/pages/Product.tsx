import {
  Autocomplete,
  Button,
  Card,
  FileInput,
  Grid,
  Group,
  Menu,
  Modal,
  ModalBody,
  NativeSelect,
  NumberInput,
  Pagination,
  rem,
  Table,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core'
import { useDisclosure, useSessionStorage } from '@mantine/hooks'
import {
  IconChevronCompactDown,
  IconChevronDown,
  IconExternalLink,
} from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import {
  createInventoryMutation,
  fetchInventorysQuery,
  updateInventoryMutation,
} from '../api/inventoryApi'
import { AxiosError } from 'axios'
import { useForm } from '@mantine/form'
import { InventoryFormData } from '../Schema/inventory.schema'
import React from 'react'
import { InventoryType } from '../types/Inventory.types'
interface Data {
  id: number
  name: string
  code: number
  category: string
  brand: string
  buyingPrice: number
  productUnit: number
  quantity: number
  taxType: number
  description: string
  productType: string
  image: string
}

const headerData = [
  {
    id: 1,
    name: 'Name',
    code: 'Code',
    category: 'Category',
    brand: 'Brand',
    buyingPrice: 'Buying Price',
    sellingPrice: 'Selling Price',
    productUnit: 'Product Unit',
    quantity: 'Quantity',
    taxType: 'Tax Type',
    description: 'Description',
    productType: 'Product Type',
    action: 'Action',
  },
]

const tableData: Data[] = [
  // {
  //   id: 1,
  //   name: 'retytsdf',
  //   code: 3434,
  //   category: 'Category',
  //   brand: 'Brand',
  //   buyingPrice: 3434,
  //   productUnit: 3434,
  //   quantity: 3434,
  //   taxType: 3434,
  //   description: 'Description',
  //   productType: 'Product Type',
  //   image: 'Image',
  // },
  // {
  //   id: 1,
  //   name: 'jjyuasdf',
  //   code: 3434,
  //   category: 'Category',
  //   brand: 'Brand',
  //   buyingPrice: 3434,
  //   productUnit: 3434,
  //   quantity: 3434,
  //   taxType: 3434,
  //   description: 'Description',
  //   productType: 'Product Type',
  //   image: 'Image',
  // },
  // {
  //   id: 1,
  //   name: 'ppiasdf',
  //   code: 3434,
  //   category: 'Category',
  //   brand: 'Brand',
  //   buyingPrice: 3434,
  //   productUnit: 3434,
  //   quantity: 3434,
  //   taxType: 3434,
  //   description: 'ertytDescription',
  //   productType: 'Product Type',
  //   image: 'Image',
  // },
  // {
  //   id: 1,
  //   name: 'yuiiiasdf',
  //   code: 3434,
  //   category: 'Category',
  //   brand: 'Brand',
  //   buyingPrice: 3434,
  //   productUnit: 3434,
  //   quantity: 3434,
  //   taxType: 3434,
  //   description: 'Description',
  //   productType: 'Product Type',
  //   image: 'Image',
  // },
  // {
  //   id: 1,
  //   name: 'qwqwasdfsda',
  //   code: 3434,
  //   category: 'Category',
  //   brand: 'Brand',
  //   buyingPrice: 3434,
  //   productUnit: 3434,
  //   quantity: 3434,
  //   taxType: 3434,
  //   description: 'Description',
  //   productType: 'Product Type',
  //   image: 'Image',
  // },
]

const Product = () => {
  const recordsPerPage = 10
  const [activePage, setPage] = useState(1)
  const startIndex = (activePage - 1) * recordsPerPage
  const [opened, { open, close }] = useDisclosure(false)
  const [item, setItem] = useState<InventoryType | null>(null)
  const [isViewing, setIsViewing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const { data: inventory } = fetchInventorysQuery(['inventory'])

  const form = useForm<InventoryFormData>({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      barcode: '',
      category: '',
      brand: '',
      buyingPrice: null,
      sellingPrice: null,
      productUnit: '',
      quantity: null,
      taxType: '',
      description: '',
      productType: '',
    },
  })

  const { mutate: updateMutate, isPending: isUpdating } =
    updateInventoryMutation(
      (error: AxiosError | any) => {
        console.log(error)
      },
      () => {
        form.reset()
        close()
        console.log('Inventory item created successfully')
      }
    )

  const { mutate, isPending } = createInventoryMutation(
    (error: AxiosError | any) => {
      console.log(error)
    },
    () => {
      form.reset()
      close()
      console.log('Inventory item created successfully')
    }
  )

  const onSave = (values: InventoryFormData) => {
    try {
      if (item) {
        console.log('we are updating ')
        // @ts-ignore
        values.id = item.id
        updateMutate(values)
      } else {
        mutate(values)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (item && !isDeleting && !isViewing) {
      form.setValues({
        barcode: item.barcode,
        name: item.name,
        category: item.category.name,
        brand: item.brand.name,
        buyingPrice: item.buyingPrice,
        sellingPrice: item.sellingPrice,
        productUnit: item.productUnit,
        quantity: item.quantity,
        taxType: item.taxType,
        description: item.description,
        productType: item.productType,
      })
    }
  }, [item])

  const onCose = () => {
    setItem(null)
    setIsViewing(false)
    setIsDeleting(false)
    form.reset()
    close()
  }

  const header = headerData.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Th>{row.name}</Table.Th>
      <Table.Th>{row.code}</Table.Th>
      <Table.Th>{row.category}</Table.Th>
      <Table.Th>{row.brand}</Table.Th>
      <Table.Th>{row.buyingPrice}</Table.Th>
      <Table.Th>{row.sellingPrice}</Table.Th>
      <Table.Th>{row.productUnit}</Table.Th>
      <Table.Th>{row.quantity}</Table.Th>
      <Table.Th>{row.taxType}</Table.Th>
      <Table.Th>{row.description}</Table.Th>
      <Table.Th>{row.productType}</Table.Th>
      <Table.Th>{row.action}</Table.Th>
    </Table.Tr>
  ))
  const paginatedData = inventory?.data.slice(
    startIndex,
    startIndex + recordsPerPage
  )

  const onEdit = (inventory) => {
    setItem(inventory)
    open()
  }
  const onView = (inventory) => {
    setIsViewing(true)
    setItem(inventory)
    open()
  }

  const onDelete = (inventory) => {
    setIsDeleting(true)
    setItem(inventory)
    open()
  }

  const rows = () => {
    if (inventory === null) {
      return <div></div>
    } else {
      // console.log(inventory?.data)

      // return <>hey</>
      return paginatedData?.map((row) => (
        <Table.Tr key={row.id}>
          <Table.Td>{row.name}</Table.Td>
          <Table.Td>{row.barcode}</Table.Td>
          <Table.Td>{row.category.name}</Table.Td>
          <Table.Td>{row.brand.name}</Table.Td>
          <Table.Td>{row.buyingPrice}</Table.Td>
          <Table.Td>{row.sellingPrice}</Table.Td>
          <Table.Td>{row.productUnit}</Table.Td>
          <Table.Td>{row.quantity}</Table.Td>
          <Table.Td>{row.taxType}</Table.Td>
          <Table.Td>{row.description}</Table.Td>
          <Table.Td>{row.productType}</Table.Td>
          <Table.Td>
            <Menu withArrow>
              <Menu.Target>
                {/* <UserButton
                        image={InveImg}
                        name="Clasi Smai"
                        role="admin"
                      /> */}
                <UnstyledButton>
                  <Group className="gap-1  text-blue-400 ">
                    <Text className="flex justify-between" size="sm" fw={500}>
                      Action
                      <IconChevronCompactDown className="mt-1" size="1rem" />
                    </Text>
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  component="a"
                  href="#"
                  // onClick={}
                >
                  <Button onClick={() => onView(row)}>View</Button>
                </Menu.Item>

                <Menu.Item>
                  <Button onClick={() => onEdit(row)}>Edit</Button>
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconExternalLink
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                  component="a"
                  onClick={onDelete}
                >
                  delete
                </Menu.Item>
              </Menu.Dropdown>
              {/* ... menu items */}
            </Menu>
          </Table.Td>
        </Table.Tr>
      ))
    }
  }

  const Modals = () => {
    return (
      <>
        <Modal
          opened={opened}
          onClose={onCose}
          title={
            isViewing
              ? 'View Inventory'
              : item
              ? 'Edit Inventory'
              : 'Add Inventory'
          }
          centered
          size={'xl'}
        >
          <ModalBody>
            {isViewing && item ? (
              <Grid grow gutter="xl">
                <Grid.Col span={4}>{item.name}</Grid.Col>
                <Grid.Col span={4}>{item.brand.name}</Grid.Col>
                <Grid.Col span={4}>{item.buyingPrice}</Grid.Col>
                <Grid.Col span={4}>{item.barcode}</Grid.Col>
                <Grid.Col span={4}>{item.category.name}</Grid.Col>
                <Grid.Col span={4}>{item.productType}</Grid.Col>
                <Grid.Col span={4}>{item.productUnit}</Grid.Col>
                <Grid.Col span={4}>{item.quantity}</Grid.Col>
                <Grid.Col span={4}>{item.sellingPrice}</Grid.Col>
                <Grid.Col span={4}>{item.taxType}</Grid.Col>
                <Grid.Col span={4}>{item.description}</Grid.Col>
              </Grid>
            ) : isDeleting && item ? (
              <h1>are you sure u want to delete </h1>
            ) : (
              <form
                onSubmit={form.onSubmit(onSave)}
                // className="mt-6 "
              >
                <div className="flex gap-6">
                  <div className="flex-grow">
                    <TextInput
                      label="Name"
                      placeholder="item name"
                      {...form.getInputProps('name')}
                    />
                    <TextInput
                      label="Code"
                      placeholder="3490"
                      {...form.getInputProps('barcode')}
                      mt="md"
                    />

                    <Autocomplete
                      label="Category"
                      placeholder="Pick value or enter anything"
                      data={[
                        ...new Set(
                          inventory?.data.map((data) => data.category.name)
                        ),
                      ]}
                      {...form.getInputProps('category')}
                      mt="md"
                    />

                    <Autocomplete
                      label="Brand"
                      placeholder="Pick value or enter anything"
                      // data={}
                      data={[
                        ...new Set(
                          inventory?.data.map((data) => data.brand.name)
                        ),
                      ]}
                      {...form.getInputProps('brand')}
                      mt="md"
                    />
                    <TextInput
                      label="Buying Price"
                      placeholder="349.4839"
                      {...form.getInputProps('buyingPrice')}
                      mt="md"
                    />
                  </div>
                  <div className="flex-grow">
                    <NumberInput
                      label="Quantity"
                      placeholder="quntity"
                      {...form.getInputProps('quantity')}
                    />
                    <NativeSelect
                      label="Tax Type"
                      rightSection={
                        <IconChevronDown
                          style={{ width: rem(16), height: rem(16) }}
                        />
                      }
                      {...form.getInputProps('taxType')}
                      data={['taxable', 'nonTaxable']}
                      mt="md"
                    />
                    <NativeSelect
                      label="Product Type"
                      rightSection={
                        <IconChevronDown
                          style={{ width: rem(16), height: rem(16) }}
                        />
                      }
                      {...form.getInputProps('productType')}
                      data={['Sale', 'Use']}
                      mt="md"
                    />
                    <NativeSelect
                      label="Product Unit"
                      rightSection={
                        <IconChevronDown
                          style={{ width: rem(16), height: rem(16) }}
                        />
                      }
                      {...form.getInputProps('productUnit')}
                      data={[
                        'pieces',
                        'kilograms',
                        'liters',
                        'boxes',
                        'meters',
                      ]}
                      mt="md"
                    />
                    <TextInput
                      label="Selling Price"
                      placeholder="749.4839"
                      {...form.getInputProps('sellingPrice')}
                      mt="md"
                    />
                    {/* <FileInput
                    label="Image"
                    placeholder="upload image"
                    {...form.getInputProps('Image')}
                    mt="md"
                  /> */}
                  </div>
                </div>
                <TextInput
                  label="Descriprion"
                  placeholder="hulaal lalhulal lhausd"
                  {...form.getInputProps('description')}
                  mt="md"
                />

                <Button
                  type="submit"
                  // fullWidth

                  className="mt-6 mx-auto block"
                  loading={isPending}
                  loaderProps={{
                    type: 'dots',
                  }}
                >
                  Save
                </Button>
              </form>
            )}
          </ModalBody>
        </Modal>
      </>
    )
  }

  return (
    <div>
      <div className="flex justify-between mt-5 mr-5">
        <p>Product</p>
        <Button
          onClick={() => {
            open()
          }}
        >
          Add Item
        </Button>
        <Modals />
      </div>
      <Card className="my-8 mr-3" shadow="xl" padding="" radius="lg" withBorder>
        <Table highlightOnHover verticalSpacing="lg" horizontalSpacing="sm">
          <Table.Thead className="bg-gray-50 text-xs text-gray-600 font-serif">
            {header}
          </Table.Thead>
          <Table.Tbody className="text-gray-600 text-xs">{rows()}</Table.Tbody>
        </Table>
        <Pagination
          className="flex justify-center my-4"
          total={Math.ceil(paginatedData?.length ?? 0 / recordsPerPage)}
          value={activePage}
          onChange={setPage}
        />
      </Card>
    </div>
  )
}

export default Product
