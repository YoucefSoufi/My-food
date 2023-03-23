export interface IEtape {
    id: number;
    titre: string;
    image: string;
    resume: string;
    duree: number;
    ingredients: string[];
    ustensiles: string[];
}

export class Etape implements IEtape{
    public id!: number;
    public titre!: string;
    public image!: string;
    public resume!: string;
    public duree!: number;
    public ingredients!: string[];
    public ustensiles!: string[];
}

