import './style.css'
import './davidenriquez'
import { agregarSuspension, arrancaVehiculo, automovil, cEspeciales, testArray } from './davidenriquez'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Guia 1
`
const miVehiculo1:automovil =
{
    tipo: 'Camioneta',
    marca: 'Chevrolet',
    modelo: '2002',
    cilindraje: 1600,
    numPuertas: 4
}

const miVehiculo2: cEspeciales = {
    velocidad: 500,
    suspencion: true
}

const miVehiculo3: testArray ={
  modelos: [2000,1999,2002,2019],
  caracteristicas: [
    ["azul","verde"],
    ["Rin 15","Rin 17"],
    ["2 puertas", "4 puertas"]
  ]
}

console.log(miVehiculo1)
arrancaVehiculo(miVehiculo1)
agregarSuspension(miVehiculo2)
console.table(miVehiculo3)
console.log(miVehiculo3.caracteristicas[0][0])
console.log(miVehiculo3.caracteristicas[2][1])

let index = 1

miVehiculo3.caracteristicas.forEach(miVehiculo3 => 
  {
  console.log(miVehiculo3[index])
});

let index1 = 0

miVehiculo3.caracteristicas.forEach(miVehiculo3 => 
  {
  console.log(miVehiculo3[index1])
});

