import { Navigate } from 'react-router-dom'
import { buscarSessao } from '../services/storage/session.js'

export default function guard({ children }) {
  const usuario = buscarSessao()

  if (!usuario) {
    return <Navigate to="/" />
  }

  return children
}
