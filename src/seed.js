import { sumarDias } from '../domain/fechas.js'
// Datos de ejemplo de BiblioApp. Todo es ficticio.
// Las fechas se calculan a partir de "hoy" para que siempre se vean cercanas.
export function crearSeed(hoy) {
    const en = (dias) => sumarDias(hoy, dias)
    return {
      libros: [
     ibros: [
{ id: 'L1', titulo: 'Ingeniería de Software', autor: 'Ian Sommerville',
tema: 'software', ejemplares: 2 },
{ id: 'L2', titulo: 'Redes de Computadoras', autor: 'Andrew Tanenbaum',
tema: 'redes', ejemplares: 1 },
{ id: 'L3', titulo: 'Clean Code', autor: 'Robert C. Martin', tema:
'software', ejemplares: 1 },
{ id: 'L4', titulo: 'Bases de Datos', autor: 'Abraham Silberschatz',
tema: 'datos', ejemplares: 3 },
{ id: 'L5', titulo: 'Scrum', autor: 'Jeff Sutherland', tema:
'metodologías ágiles', ejemplares: 1 },
{ id: 'L6', titulo: 'Curso intensivo de Python', autor: 'Eric Matthes',
tema: 'programación', ejemplares: 3 },
{ id: 'L7', titulo: 'Sistemas Operativos Modernos', autor: 'Andrew
Tanenbaum', tema: 'sistemas', ejemplares: 1 },
],
