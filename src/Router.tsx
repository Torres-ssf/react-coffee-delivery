import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppContext } from './context/AppContext'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { OrderConfirmed } from './pages/OrderConfirmed'

export function Router() {
  const { paymentInfo } = useContext(AppContext)

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/order-confirmed"
          element={
            paymentInfo ? <OrderConfirmed /> : <Navigate to="/checkout" />
          }
        />
      </Route>
    </Routes>
  )
}
