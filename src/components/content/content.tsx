import { Navigate, Route, Routes } from 'react-router'
import { HomePage, StorePage } from '../../pages'

export const Content = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={'/home'} />} />
      <Route path={'/home'} element={<HomePage />} />
      <Route path={'/store'} element={<StorePage />} />
      <Route path={'/second'} element={<h1>Second</h1>} />
    </Routes>
  )
}
