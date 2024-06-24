export interface ICharacterResponse {
  count: number;
  next?: string;
  previous?: string;
  results: ICharacter[];
}

export interface ICharacter {
  birth_year: string;
  name: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  created: string;
  edited: string;
}
