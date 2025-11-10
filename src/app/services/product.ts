import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  imagen: string;
  nombre: string;
  precio: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})

export class Products {
  private product: Product[] = [
    {
      id: 1,
      imagen: 'img/Bogota.webp',
      nombre: 'Viaje a Bogota',
      precio: 2400000,
      description: 'Sumérgete en la vibrante capital de Colombia con nuestro paquete exclusivo a Bogotá. Explora su rica historia, cultura y gastronomía mientras visitas lugares emblemáticos como la Candelaria, Monserrate y el Museo del Oro. Disfruta de una experiencia inolvidable en una ciudad llena de vida y diversidad.'
    },
    {
      id: 2,
      imagen: 'img/medellin.jpeg',
      nombre: 'Viaje a Medellin',
      precio: 2100000,
      description: 'La ciudad de la eterna primavera te espera con nuestro paquete turístico a Medellín. Descubre su transformación urbana, disfruta de su clima agradable y explora sus vibrantes barrios como El Poblado y Comuna 13. No te pierdas el Jardín Botánico, el Museo de Antioquia y la famosa Feria de las Flores.'
    },
    {
      id: 3,
      imagen: 'img/cartagena.jpg',
      nombre: 'Viaje a Cartagena',
      precio: 2700000,
      description: 'Embárcate en una aventura caribeña con nuestro paquete turístico a Cartagena. Recorre las coloridas calles de la ciudad amurallada, disfruta de sus playas paradisíacas y sumérgete en su rica historia colonial. Visita el Castillo de San Felipe, el Convento de la Popa y déjate cautivar por la vibrante vida nocturna de esta joya del Caribe.'
    },
    {
      id: 4,
      imagen: 'img/santa-marta.jpg',
      nombre: 'Viaje a Santa Marta',
      precio: 2400000,
      description: 'Descubre la magia de Santa Marta con nuestro paquete turístico exclusivo. Explora sus playas de ensueño, visita el Parque Nacional Natural Tayrona y adéntrate en la historia de la ciudad más antigua de Colombia. Disfruta de actividades acuáticas, senderismo y una vibrante vida nocturna en este destino paradisíaco.'
    },
    {
      id: 5,
      imagen: 'img/san-andres.webp',
      nombre: 'Viaje a San Andres',
      precio: 4500000,
      description: 'Sumérgete en las aguas cristalinas del Caribe con nuestro paquete turístico a San Andrés. Disfruta de sus playas de arena blanca, practica snorkel y buceo en sus arrecifes de coral, y explora la cultura local. No te pierdas la oportunidad de visitar la Isla de Providencia y el famoso Hoyo Soplador para una experiencia inolvidable.'
    },
    {
      id: 6,
      imagen: 'img/amazonas.jpg',
      nombre: 'Viaje al Amazonas',
      precio: 3500000,
      description: 'Adéntrate en la selva tropical más grande del mundo con nuestro paquete turístico al Amazonas. Explora la biodiversidad única de la región, conoce las comunidades indígenas y disfruta de actividades como paseos en canoa, avistamiento de fauna y caminatas por la selva. Vive una experiencia auténtica e inolvidable en el corazón de la naturaleza.'
    },
    {
      id: 7,
      imagen: 'img/caño.jpg',
      nombre: 'Viaje al Caño Cristales',
      precio: 3600000,
      description: 'Descubre el río más hermoso del mundo con nuestro paquete turístico al Caño Cristales. Conocido como el "río de los cinco colores", este destino único te sorprenderá con sus aguas cristalinas y la vibrante flora acuática que le da su característico colorido. Disfruta de caminatas guiadas, fotografía paisajística y una experiencia natural inigualable en este paraíso escondido.'
    },
    {
      id: 8,
      imagen: 'img/eje-cafetero.jpg',
      nombre: 'Viaje al Eje Cafetero',
      precio: 2500000,
      description: 'Sumérgete en la cultura cafetera de Colombia con nuestro paquete turístico al Eje Cafetero. Explora pintorescos pueblos como Salento y Manizales, visita fincas cafeteras para aprender sobre el proceso de producción del café y disfruta de paisajes impresionantes como el Valle de Cocora. Vive una experiencia auténtica llena de sabor, tradición y belleza natural en esta región emblemática.'
    },
    {
      id: 9,
      imagen: 'img/guatape.jpg',
      nombre: 'Viaje a Guatape',
      precio: 2800000,
      description: 'Escapa a la encantadora localidad de Guatapé con nuestro paquete turístico exclusivo. Admira las coloridas fachadas de sus casas, sube a la imponente Piedra del Peñol para disfrutar de vistas panorámicas impresionantes y navega por el embalse en un relajante paseo en bote. Disfruta de la gastronomía local y sumérgete en la cultura paisa en este destino lleno de encanto y belleza natural.'
    }
  ]
  constructor() { }
  getProducts(): Product[] {
    return this.product;
  }
  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  }
}