import { GeoZone, WeatherResponse } from '../types/weather.types'
import { geoInstance } from './geo-instance'
import { weatherInstance } from './weather-instance'

class WeatherApi {
  private async userCoordinates(): Promise<GeoZone> {
    return (await geoInstance.get<GeoZone>('')).data
  }

  private async currentWeather(payload: { lat: string; lon: string }): Promise<WeatherResponse> {
    const { lat, lon } = payload
    return (
      await weatherInstance.get<WeatherResponse>(
        `weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
      )
    ).data
  }

  public getUserCoordinates = this.userCoordinates
  public getCurrentWeather = this.currentWeather
}

export const weatherService = new WeatherApi()
// appid: 15c9a33acfa3d9f1a6a03e80b65d6dcd
