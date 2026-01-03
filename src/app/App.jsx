import { Routes, Route } from 'react-router-dom'
import Home from './home/home.jsx'
import Login from './login/login.jsx'
import Register from './registrar/register.jsx'
import Mestre from './mestre/mestre.jsx'
import Ficha from './ficha/ficha.jsx'
import CriarPersonagem from './criar-personagem/criar-personagem.jsx'
import Guard from './guard.jsx'
import Anao from "./racas/anao.jsx"




export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/racas/anao" element={<Anao />} />


      <Route
        path="/mestre"
        element={
          <Guard>
            <Mestre />
          </Guard>
        }
      />

      <Route
        path="/ficha"
        element={
          <Guard>
            <Ficha />
          </Guard>
        }
      />

      <Route
        path="/criar-personagem"
        element={
          <Guard>
            <CriarPersonagem />
          </Guard>
        }
      />
    </Routes>
  )
}
