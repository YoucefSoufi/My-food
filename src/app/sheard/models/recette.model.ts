import { Etape } from "./etape";

export interface IRecette{ 
  id: number;
  titre: string;
  image: string;
  resume: string;
  duree: number;  
  ingredients: string[];
  nombreEtapePreparation: number;
  ustensiles: string[];
  allergenes: string[];
  indiceCalorique: number;
  etapes: Etape[];
  tags: string[];
}

export class Recette implements IRecette {
  public ingredients!: string[];
  public nombreEtapePreparation!: number;
  public ustensiles!: string[];
  public allergenes!: string[];
  public indiceCalorique!: number;
  public etapes!: Etape[];
  public id!: number;
  public titre!: string;
  public image!: string;
  public resume!: string;
  public duree!: number; 
  public tags! : string[];
}
