// Reglas de los préstamos. Son funciones puras: reciben datos y devuelven
// un resultado, sin tocar la pantalla. Por eso son fáciles de probar.
export function prestamosActivos(prestamos, usuario) {
  return prestamos.filter((p) => p.usuario === usuario && !p.devuelto)
}