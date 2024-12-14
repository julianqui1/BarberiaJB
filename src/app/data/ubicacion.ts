import { Ubicacion } from '../models/ubicacion.interface';

export const UBICACIONES: Ubicacion[] = [
  {
    nombreBarberia: 'Barbería Premium Style',
    direccion: 'Calle 123 #45-67, Local 12, Centro Comercial Plaza Norte',
    descripcion:
      'Ubicada en el corazón del Centro Comercial Plaza Norte, en el segundo piso, junto a la entrada principal. Fácil acceso y parqueadero disponible.',
    mapaFrame:
      '<iframe src="TU_URL_DE_GOOGLE_MAPS_1" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    nombreBarberia: 'Elite Barber Studio',
    direccion: 'Av. Principal 678, Edificio Los Andes, Piso 1, Oficina 5',
    descripcion:
      'Situada en una zona exclusiva de la ciudad, dentro del Edificio Los Andes. Acceso directo desde la avenida principal, con múltiples opciones de transporte público.',
    mapaFrame:
      '<iframe src="TU_URL_DE_GOOGLE_MAPS_2" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    nombreBarberia: 'Urban Cuts',
    direccion: 'Cra. 45 #89-23, Local 8, Zona Comercial Santa María',
    descripcion:
      'Ubicada en la Zona Comercial Santa María, cerca de restaurantes y tiendas. Ambiente acogedor y estacionamiento privado para clientes.',
    mapaFrame:
      '<iframe src="TU_URL_DE_GOOGLE_MAPS_3" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
];
