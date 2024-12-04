import { useEffect, useState } from 'react'
import { WeatherResponse } from '../types/weather.types.ts'
import { weatherService } from '../services/weather-api.ts'
import { AxiosError } from 'axios'

interface Props {
  weatherData: WeatherResponse
  error: string
  loading: boolean
}
export const useGetCurrentWeather = (): Props => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const coordinatesResponse = await weatherService.getUserCoordinates()
        const weatherResponse = await weatherService.getCurrentWeather({
          lat: String(coordinatesResponse.lat),
          lon: String(coordinatesResponse.lon),
        })
        setWeatherData(weatherResponse)
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          setError(error.response?.data)
        }
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { weatherData: weatherData!, loading, error }
}
