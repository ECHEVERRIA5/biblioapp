import { crearSeed } from './data/seed.js'
import { hoyISO } from './domain/fechas.js'
import Prestamos from './components/Prestamos.jsx'

const USUARIO = 'ana' // la persona con sesión iniciada (el MVP no tiene login)

// Pensada primero para el celular: una sola columna de ~360 px
// que en pantallas grandes queda centrada.
export default function App({ hoy = hoyISO() }) {
  const datos = crearSeed(hoy)

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-fondo text-texto">
      <header className="bg-primario p-4 text-fondo">
        <h1 className="text-xl font-bold">BiblioApp</h1>
      </header>
      <main className="flex-1 p-4">
        <Prestamos datos={datos} usuario={USUARIO} />
      </main>
    </div>
  )
}

