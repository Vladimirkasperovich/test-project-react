import { GeoZone } from '../types/weather.types.ts'
import { geoInstance } from './geo-instance.ts'

class WeatherApi {
  private async getMyLocation(): Promise<GeoZone> {
    return (await geoInstance.get<GeoZone>('')).data
  }
  public getGeoLocation = this.getMyLocation
}
export const weatherService = new WeatherApi()
