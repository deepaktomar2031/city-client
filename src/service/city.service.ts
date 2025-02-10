import apiClient from './apiClient.service'
import { CityData } from 'src/types'

// Get All City data
export const getCityData = async (): Promise<CityData[]> => {
  try {
    const response = await apiClient().get('/city')
    return response.data
  } catch (error: unknown) {
    console.error(`CityService: getCityData: ${error}`)
    return []
  }
}
