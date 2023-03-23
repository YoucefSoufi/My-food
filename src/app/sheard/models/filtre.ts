export interface IFiltre {
    tags: string[];
    recherche: string;
    currentPage: number;
}


export class Filtre {
    public tags: string[] = [];
    public recherche: string = '';
    public currentPage: number = 0;
}
