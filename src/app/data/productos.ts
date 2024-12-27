import { Producto } from '../models/productos.interface';

export const PRODUCTOS: Producto[] = [
  {
    nombre: 'Pomada para Cabello',
    descripcion:
      'Pomada de fijación fuerte y acabado mate para peinados modernos.',
    precio: '$35.000',
    descuento: '10% de descuento',
    url_img: '../assets/pomada_cabello.jpg',
  },
  {
    nombre: 'Aceite para Barba',
    descripcion:
      'Aceite hidratante con esencia de cedro para mantener tu barba suave y brillante.',
    precio: '$40.000',
    descuento: '15% de descuento por compras mayores a 2 unidades',
    url_img: '../assets/aceite_barba.jpg',
  },
  {
    nombre: 'Shampoo Anticaspa',
    descripcion:
      'Shampoo especializado para eliminar la caspa y fortalecer el cabello.',
    precio: '$25.000',
    descuento: '5% de descuento',
    url_img: '../assets/shampoo_anticaspa.jpg',
  },
  {
    nombre: 'Cera Modeladora',
    descripcion: 'Cera premium para fijación media y acabado natural.',
    precio: '$30.000',
    descuento: '20% de descuento en la segunda unidad',
    url_img: '../assets/cera_modeladora.jpg',
  },
  {
    nombre: 'Peine de Carbono',
    descripcion: 'Peine resistente al calor, ideal para alisado o rizos.',
    precio: '$15.000',
    descuento: 'Compra 3 y paga 2',
    url_img: '../assets/peine_de_carbono.jpg',
  },
  {
    nombre: 'Aftershave Refrescante',
    descripcion:
      'Loción calmante para después del afeitado, con aroma cítrico.',
    precio: '$20.000',
    descuento: '10% de descuento en tu próxima compra',
    url_img: '../assets/aftershave.jpg',
  },
  {
    nombre: 'Kit de Afeitado',
    descripcion:
      'Set completo con navaja, crema de afeitar y brocha de alta calidad.',
    precio: '$70.000',
    descuento: 'Incluye envío gratuito',
    url_img: '../assets/kit_de_afeitado.jpg',
  },
  {
    nombre: 'Cepillo para Barba',
    descripcion:
      'Cepillo con cerdas naturales para mantener la barba impecable.',
    precio: '$25.000',
    descuento: '15% de descuento',
    url_img: '../assets/cepillo_barba.jpeg',
  },
  {
    nombre: 'Tónico Capilar',
    descripcion:
      'Tónico revitalizante para estimular el crecimiento del cabello.',
    precio: '$45.000',
    descuento: 'Compra 2 y recibe un 25% de descuento',
    url_img: '../assets/tonico_capilar.jpg',
  },
  {
    nombre: 'Toalla Caliente para Tratamientos',
    descripcion: 'Toalla premium para tratamientos faciales o capilares.',
    precio: '$18.000',
    descuento: '20% de descuento en tu primera compra',
    url_img: '../assets/toalla_caliente.jpg',
  },
];
