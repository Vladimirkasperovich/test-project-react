import { useEffect, useState } from 'react'
import { GeoZone } from '../types/weather.types.ts'
import { weatherService } from '../services/weather-api.ts'
import { AxiosError } from 'axios'

export const useGetCoordinates = () => {
  const [coordinates, setCoordinates] = useState<GeoZone | null>(null)
  const [coordinatesError, setCoordinatesError] = useState('')
  const [coordinatesLoading, setCoordinatesLoading] = useState(false)
  useEffect(() => {
    ;(async () => {
      try {
        setCoordinatesLoading(true)
        const coordinatesResponse = await weatherService.getUserCoordinates()
        setCoordinates(coordinatesResponse)
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          setCoordinatesError(error.response?.data)
        }
      } finally {
        setCoordinatesLoading(false)
      }
    })()
  }, [])
  return { coordinates, coordinatesError, coordinatesLoading }
}
