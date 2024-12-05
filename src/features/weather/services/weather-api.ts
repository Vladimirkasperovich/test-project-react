import { GeoZone, WeatherResponse } from '../types/weather.types'
import { geoInstance } from './geo-instance'
import { weatherInstance } from './weather-instance'

class WeatherApi {
  private async userCoordinates(): Promise<GeoZone> {
    return (await geoInstance.get<GeoZone>('')).data
  }

  private async currentWeather(payload: {
    latitude: string
    longitude: string
  }): Promise<WeatherResponse> {
    const { latitude, longitude } = payload
    return (
      await weatherInstance.get<WeatherResponse>(
        `weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
      )
    ).data
  }

  public getUserCoordinates = this.userCoordinates
  public getCurrentWeather = this.currentWeather
}

export const weatherService = new WeatherApi()
