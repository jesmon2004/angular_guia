// ...existing code...
export interface Juego {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  genres: Genre[];
  platforms?: Platform[];
  description_raw?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Platform {
  platform: {
    id: number;
    name: string;
  };
}
