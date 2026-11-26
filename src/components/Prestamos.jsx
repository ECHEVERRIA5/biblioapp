import { prestamosActivos } from '../domain/prestamos.js'
import { formatoFecha } from '../domain/fechas.js'
export default function Prestamos({ datos, usuario }) {
  const lista = prestamosActivos(datos.prestamos, usuario)
  const libroDe = (p) => datos.libros.find((l) => l.id === p.libroId)

  return (
    <section aria-labelledby="titulo-prestamos">
    <h2 id="titulo-prestamos" className="mb-3 text-xl font-semibold">

      Mis préstamos
    </h2>
    {lista.length === 0 ? (
      <p className="rounded-lg bg-tarjeta p-4 shadow">No tienes préstamos
activos.</p>
    ) : (
      <ul className="space-y-3">
        {lista.map((p) => {
          const libro = libroDe(p)
          return (
            <li key={p.id} className="rounded-lg bg-tarjeta p-4 shadow">
              <p className="font-semibold">{libro.titulo}</p>
              <p className="text-sm">{libro.autor}</p>
              <p className="mt-2">Devolución: {formatoFecha(p.vence)}</p>
            </li>
          )
        })}
      </ul>
      )}
    </section>
  )
}
