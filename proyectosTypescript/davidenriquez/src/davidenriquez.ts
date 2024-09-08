export interface automovil {
    tipo: string;
    marca: string;
    modelo: string;
    cilindraje: number;
    numPuertas: number;
}

export interface cEspeciales {
    velocidad: number,
    suspencion: boolean
}

export interface testArray {
    modelos: number[];
    caracteristicas: Array<string[]>;
}

export function arrancaVehiculo( auto:automovil) {
    console.log("El vehiculo arrancó con un motor de ",auto.cilindraje," CC")
}

export function agregarSuspension( auto:cEspeciales){
    if(auto.suspencion == true) {
        console.log(" El auto si tiene suspension")
    }else{
        console.log(" El auto no tiene suspension")
    }
}