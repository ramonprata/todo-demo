import { ICharacter } from '../ICharacter';

export interface IRickMortyResponse {
  count: number;
  next: string;
  pages: number;
  results: ICharacter[];
}
