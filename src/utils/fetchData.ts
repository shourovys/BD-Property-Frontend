import { API_URL } from './config'

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(API_URL + url)

    if (!response.ok) {
      // Handle non-successful responses
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data: T = await response.json()
    return data
  } catch (error: any) {
    // Explicitly type the error parameter
    console.error('Error fetching data:', error.message)
    throw error
  }
}

export default fetchData
