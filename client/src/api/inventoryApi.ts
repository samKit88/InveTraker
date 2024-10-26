import { useMutation, useQuery } from '@tanstack/react-query'
import { InventoryType } from '../types/Inventory.types'
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'
import { InventoryFormData } from '../Schema/inventory.schema'

export const createInventory = async (
  data: InventoryFormData | any
): Promise<AxiosResponse<any>> => {
  // console.log('from create Inve', data)
  return await axios.post<FormData, AxiosResponse<any>>(
    'http://localhost:3000/inventory',
    data
  )
}

export const updateInventory = async (
  data: InventoryFormData | any
): Promise<AxiosResponse<any>> => {
  return await axios.patch<FormData>(
    'http://localhost:3000/inventory/' + data.id,
    data
  )
}
export const fetchInventorys = async (): Promise<
  AxiosResponse<InventoryType[]>
> => {
  return await axios.get<InventoryType[]>('http://localhost:3000/inventory')
}

export const updateInventoryMutation = (
  onError: (error: AxiosError) => void,
  onSuccess: (data: any) => void
) => {
  return useMutation({ mutationFn: updateInventory, onError, onSuccess })
}

export const fetchInventorysQuery = (queryKey: string[]) => {
  return useQuery({ queryKey, queryFn: fetchInventorys })
}

export const createInventoryMutation = (
  onError?: (error: AxiosError | any) => void,
  onSuccess?: (data: any) => void
) => {
  return useMutation({ mutationFn: createInventory, onError, onSuccess })
}
