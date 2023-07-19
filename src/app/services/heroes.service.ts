import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroes:Heroe[]= [
    {
      origen: "Machala",
      destino: "Pasaje",
      precio: "$2.50",
      descripcion: "Bus con destino de Machala a Pasaje",
      tipo: "interno"
    },
    {
      origen: "Machala",
      destino: "Guayaquil",
      precio: "$6.00",
      descripcion: "Bus con destino de Machala a Guayaquil",
      tipo: "externo"
    },
    {
      origen: "Guayaquil",
      destino: "Cuenca",
      precio: "$7.50",
      descripcion: "Bus con destino de Guayaquil a Cuenca",
      tipo: "interno"
    },
    {
      origen: "Quito",
      destino: "Machala",
      precio: "$15",
      descripcion: "Bus con destino de Quito a Machala",
      tipo: "externo"
    },
    {
      origen: "Riobamba",
      destino: "Guayaquil",
      precio: "$18,30",
      descripcion: "Bus con destino de Riobamba a Guayaquil",
      tipo: "interno"
    },
    {
      origen: "Guayaquil",
      destino: "Loja",
      precio: "$3.50",
      descripcion: "Bus con Destino de Guayaquil a Loja",
      tipo: "externo"
    },
    {
      origen: "Loja",
      destino: "Machala",
      precio: "$8.50",
      descripcion: "Bus con destino de Loja a Machala",
      tipo: "interno"
    },
    {
      origen: "Loja",
      destino: "Tulcan",
      precio: "$12",
      descripcion: "Bus con destino de Loja a Tulcan",
      tipo: "externo"
    },
    {
      origen: "Esmeraldas",
      destino: "Cañar",
      precio: "$8.00",
      descripcion: "Bus con destino de Esmeraldas a Cañar",
      tipo: "interno"
    },
    {
      origen: "Cuenca",
      destino: "Loja",
      precio: "$4.50",
      descripcion: "Bus con destino de Cuenca a Loja",
      tipo: "externo"
    }
  ];

  getHeroes(){
    return this.heroes;
  }

  getHeroe(idx: number){
    return this.heroes[idx];
  }

  constructor() {
    console.log ("Servicio listo para usar....")
   }
   buscarheroes(termino:string){
    let heroesArr:Heroe[]=[];
    termino = termino.toLowerCase();
  
    for(let heroe of this.heroes){
      let CiudadOrigen = heroe. origen.toLowerCase();
      if(CiudadOrigen.indexOf(termino)>=0){
        heroesArr.push(heroe)
      }
      let CiudadDestino = heroe. destino.toLowerCase();
      if(CiudadDestino.indexOf(termino)>=0){
        heroesArr.push(heroe)
      }
    }
      return heroesArr;
  
    }
  
   }



export interface Heroe{
  origen: string;
  destino: string;
  precio: string;
  descripcion: string;
  tipo: string;

}
