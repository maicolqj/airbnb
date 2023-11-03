import { ImageSourcePropType } from "react-native";

export interface CitiesInterface {
    id: string
    imagen: ImageSourcePropType;
    titulo: string;
    descripcion: string;
    descripcionLong: string;
    anfitrion: string
    city: string
    rango: string;
    precio: number;
  }