import styles from './weather-display.module.scss'
import { useGetCurrentWeather } from '../../hooks/use-get-current-weather'

export const WeatherDisplay = () => {
  const { weatherData, loading, clientGeoData } = useGetCurrentWeather()

  if (loading && !weatherData && !clientGeoData) {
    return <h1>...Loading</h1>
  }

  return (
    <div className={styles.main}>
      <div className={styles.block}>
        <h1>Current weather your location</h1>
        <h2>{clientGeoData?.city}</h2>
        <div>
          {weatherData?.weather.map((data) => (
            <div key={data.id}>
              <img
                src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
                alt='some description'
              />
              <p>{data.main}</p>
            </div>
          ))}
          <p>{Math.round((weatherData?.main.temp as number) - 273.15)}</p>
        </div>
      </div>
    </div>
  )
}
