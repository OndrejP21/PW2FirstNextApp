export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string[]; // Array<string>
  rating: number;
  languages: string[];
  boxOffice: BoxOffice;
  cast: Cast[];
  awards: string[];
  isAnimated: boolean;
}

export interface BoxOffice {
  budget: number;
  revenue: number;
}

export interface Cast {
  name: string;
  role: string;
  awardWinner: boolean;
}
