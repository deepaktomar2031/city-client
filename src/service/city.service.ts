import apiClient from './apiClient.service'
import { CityData } from 'src/types'

// Get All City data
export const getCityData = async (): Promise<CityData[]> => {
  const response = await apiClient().get('/city')
  return response.data
}
