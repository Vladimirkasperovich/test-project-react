export interface GeoZone {
  status: string
  country: string
  countryCode: string
  region: string
  regionName: string
  city: string
  zip: string
  lat: number
  lon: number
  timezone: string
  isp: string
  org: string
  as: string
  query: string
}
interface Coordinates {
  lon: number
  lat: number
}

interface WeatherDetails {
  id: number
  main: string
  description: string
  icon: string
}

interface MainWeather {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level?: number
  grnd_level?: number
}

interface Wind {
  speed: number
  deg: number
  gust?: number
}

interface Clouds {
  all: number
}

interface SystemInfo {
  type?: number
  id?: number
  country: string
  sunrise: number
  sunset: number
}

export interface WeatherResponse {
  coord: Coordinates
  weather: WeatherDetails[]
  base: string
  main: MainWeather
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: SystemInfo
  timezone: number
  id: number
  name: string
  cod: number
}
