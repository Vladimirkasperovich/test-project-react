import { Layout } from './components'
import { useGetCurrentWeather } from './features/weather/hooks/use-get-current-weather.ts'

function App() {
  const { weatherData } = useGetCurrentWeather()
  console.log(weatherData)
  return <Layout />
}

export default App
