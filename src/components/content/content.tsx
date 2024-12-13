import { Navigate, Route, Routes } from 'react-router'
import { HomePage, StorePage } from '../../pages'
import { WeatherDisplay } from '../../features/weather'

export const Content = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={'/home'} />} />
      <Route path={'/home'} element={<HomePage />} />
      <Route path={'/store'} element={<Navigate to={'/store/categories'} />} />
      <Route path={'/store/categories'} element={<StorePage />} />
      <Route path={'/weather'} element={<WeatherDisplay />} />
    </Routes>
  )
}
