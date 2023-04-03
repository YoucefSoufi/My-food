import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { IEtape } from '../models/etape';
import { Filtre } from '../models/filtre';
import { Recette } from '../models/recette.model';

const ingredients = ['farine', 'sucre', 'beurre', 'oeufs', 'lait', 'levure', 'sel', 'poivre', 'ail', 'oignon', 'carotte', 'pomme de terre', 'tomate', 'poivron', 'poulet', 'boeuf', 'porc', 'saumon', 'crevettes', 'riz', 'pâtes', 'pain', 'fromage', 'huile d\'olive', 'vinaigre balsamique', 'moutarde', 'mayonnaise', 'ketchup', 'sauce soja', 'miel', 'basilic', 'persil', 'thym', 'romarin', 'cumin', 'curry', 'paprika', 'cannelle', 'vanille', 'chocolat', 'noix', 'amandes', 'noisettes', 'raisins secs', 'abricots secs', 'figues sèches'];

const ustensiles = ['couteau', 'planche à découper', 'poêle', 'casserole', 'fouet', 'mixeur', 'rouleau à pâtisserie', 'spatule', 'balance de cuisine'];

const allergenes = ['gluten', 'lactose', 'fruits à coque', 'arachides', 'soja', 'œufs', 'poisson', 'crustacés'];

const tags = ['Desserts', 'Végétarien', 'Végan', 'Sans gluten', 'Sans lactose', 'Facile', 'Difficile', 'Rapide', 'Familial', 'Repas de fête'];

@Injectable({
  providedIn: 'root'
})
export class RecettesApiService {

  // Tableau de titres possibles pour nos recettes
  titres = ["Pâtes à la carbonara", "Pizza margherita", "Boeuf bourguignon", "Ratatouille", "Couscous", "Sushi", "Moussaka", "Tacos", "Hamburger", "Salade César"];

  // Tableau de résumés possibles pour nos recettes
  resumes = ["Un grand classique de la cuisine italienne.", "La pizza la plus célèbre au monde.", "Un plat traditionnel de la cuisine française.", "Un accompagnement parfait pour vos plats de viande ou de poisson.", "Un plat emblématique de la cuisine nord-africaine.", "Un met délicat de la cuisine japonaise.", "Un plat grec à base d'aubergines et de viande hachée.", "Un sandwich mexicain très populaire.", "Un plat américain incontournable.", "Une salade qui a conquis le monde entier."];

  // Tableau d'images possibles pour nos recettes
  images = ["https://recettes.com/pates-carbonara.jpg", "https://recettes.com/pizza-margherita.jpg", "https://recettes.com/boeuf-bourguignon.jpg", "https://recettes.com/ratatouille.jpg", "https://recettes.com/couscous.jpg", "https://recettes.com/sushi.jpg", "https://recettes.com/moussaka.jpg", "https://recettes.com/tacos.jpg", "https://recettes.com/hamburger.jpg", "https://recettes.com/salade-cesar.jpg"];


  ingredients = ['farine', 'sucre', 'beurre', 'oeufs', 'lait', 'levure', 'sel', 'poivre', 'ail', 'oignon', 'carotte', 'pomme de terre', 'tomate', 'poivron', 'poulet', 'boeuf', 'porc', 'saumon', 'crevettes', 'riz', 'pâtes', 'pain', 'fromage', 'huile d\'olive', 'vinaigre balsamique', 'moutarde', 'mayonnaise', 'ketchup', 'sauce soja', 'miel', 'basilic', 'persil', 'thym', 'romarin', 'cumin', 'curry', 'paprika', 'cannelle', 'vanille', 'chocolat', 'noix', 'amandes', 'noisettes', 'raisins secs', 'abricots secs', 'figues sèches'];

  ustensiles = ['couteau', 'planche à découper', 'poêle', 'casserole', 'fouet', 'mixeur', 'rouleau à pâtisserie', 'spatule', 'balance de cuisine'];

  allergenes = ['gluten', 'lactose', 'fruits à coque', 'arachides', 'soja', 'œufs', 'poisson', 'crustacés'];


  
  public recettes: Recette[] = [];

  constructor() { }


  getRecetteById(id: string): Observable<Recette> {
    const random = Math.random();
    if (random >= 0.1) {
      return of(this.crationJeuxDonne(0)[0]).pipe(
        delay(0) // Delay of 2 seconds (2000 milliseconds)
      );
    } else {
      return throwError('Une erreur s\'est produite lors de la récupération de la recette.');
    }
  }


  getRecettes(filtre : Filtre): Observable<Recette[]> {
    console.log(filtre);
    
    const random = Math.random();
    if (random >= 0.1) {
      return of(this.crationJeuxDonne(filtre.currentPage)).pipe(
        delay(0) // Delay of 2 seconds (2000 milliseconds)
      );
    } else {
      return throwError('Une erreur s\'est produite lors de la récupération de la recette.');
    }
  }


  getRecettesById(listIdRecette: string[]): Observable<Recette[]> {
    console.log(listIdRecette);

    const random = Math.random();
    if (random >= 0.1) {
      return of(this.crationJeuxDonne(0)).pipe(
        delay(0) // Delay of 2 seconds (2000 milliseconds)
      );
    } else {
      return throwError('Une erreur s\'est produite lors de la récupération de la recette.');
    }
  }



  

  crationJeuxDonne(page: number) {
    this.recettes = [];
    for (let i = 0; i < 10; i++) {
      
      const titreAleatoire = this.titres[nombreAleatoire(0, this.titres.length - 1)]; // Sélectionne un titre aléatoire dans le tableau
      const imageAleatoire = this.images[nombreAleatoire(0, this.images.length - 1)]; // Sélectionne une image aléatoire dans le tableau
      const dureeAléatoire = nombreAleatoire(25, 50); // Sélectionne une duree aléatoire entre 25 / 50
      const ingredients = getRandomIngredients();
      const allergenes = getRandomAllergenes();
      const ustensiles = getRandomUstensiles();
      const tags = getRandomTags();
      const randomNombreEtapePreparation = Math.floor(Math.random() * 5) + 3;
      const etapes = generateRandomEtapes(randomNombreEtapePreparation);
      const indiceCalorique = Math.floor(Math.random() * 20) + 1;
      const resumeAleatoire = `Lorem ipsum dolor sit amet. Quo sunt internos 33 perspiciatis ipsam ut eveniet vero est sequi voluptas ut quibusdam aspernatur qui quia natus et optio sunt. Qui voluptatem laborum id consequatur accusantium ad quia beatae est temporibus consectetur. Et laborum consequatur eos nemo quos in dicta distinctio. Est magnam ipsa et consequatur dolore sed excepturi aperiam et impedit consequatur est accusamus vero aut amet odio aut voluptatem quasi.`;
      const phrasesAleatoires = [
        'Croyez-moi, cette recette en vaut vraiment la peine!',
        'Le résultat est incroyablement délicieux!',
        'Vous ne pourrez plus vous en passer!',
        'N\'hésitez pas à laisser libre cours à votre créativité.',
        'Bon appétit!'
      ];

      let resumeFinal = `${resumeAleatoire}`;

      while (resumeFinal.length < 300) {
        resumeFinal += ` ${phrasesAleatoires[Math.floor(Math.random() * phrasesAleatoires.length)]}`;
      }

      const nouvelleRecette: Recette = { id: i + (10 * page), titre: titreAleatoire, resume: resumeAleatoire, image: imageAleatoire, duree: dureeAléatoire, ingredients: ingredients, allergenes: allergenes, ustensiles: ustensiles, nombreEtapePreparation: randomNombreEtapePreparation, etapes: etapes, indiceCalorique: indiceCalorique, tags: tags }; // Crée une nouvelle recette avec les valeurs aléatoires
      this.recettes.push(nouvelleRecette);
    }
    console.log(this.recettes);
    
    return this.recettes;
  }
}

// Fonction pour générer un nombre aléatoire entre min et max
function nombreAleatoire(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

function getRandomIngredients(): string[] {
  const ingredientsCount = getRandomNumber(10) + 5;
  const selectedIngredients: string[] = [];

  for (let i = 0; i < ingredientsCount; i++) {
    const ingredientIndex = getRandomNumber(ingredients.length);
    selectedIngredients.push(ingredients[ingredientIndex]);
  }

  return selectedIngredients;
}


function getRandomUstensiles(): string[] {
  const ustensilesCount = getRandomNumber(5) + 3;
  const selectedUstensiles: string[] = [];

  for (let i = 0; i < ustensilesCount; i++) {
    const ustensileIndex = getRandomNumber(ustensiles.length);
    selectedUstensiles.push(ustensiles[ustensileIndex]);
  }

  return selectedUstensiles;
}

function getRandomTags(): string[] {
  const tagsCount = getRandomNumber(5);
  const selectedTags: string[] = [];

  for (let i = 0; i < tagsCount; i++) {
    const tagIndex = getRandomNumber(tags.length);
    selectedTags.push(tags[tagIndex]);
  }

  return selectedTags;
}

function getRandomAllergenes(): string[] {
  const allergenesCount = getRandomNumber(3) + 1;
  const selectedAllergenes: string[] = [];

  for (let i = 0; i < allergenesCount; i++) {
    const allergeneIndex = getRandomNumber(allergenes.length);
    selectedAllergenes.push(allergenes[allergeneIndex]);
  }

  return selectedAllergenes;
}

function generateRandomEtapes(randomNombreEtapePreparation: number): IEtape[] {

  const etapes = [];

  let etapeAleatoire = {
    id: 0,
    titre: 0,
    image: 'https://picsum.photos/200', // Use random image from placeholder image API
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Generate random summary
    duree: Math.floor(Math.random() * 10), // Generate random duration
    ingredients: getRandomIngredients(), // Get 2 random ingredients from the array
    ustensiles: getRandomUstensiles(), // Get 1 random ustensile from the array
  }

  const resumeEtape = `Lorem ipsum dolor sit amet. Quo sunt internos 33 perspiciatis ipsam ut eveniet vero est sequi voluptas ut quibusdam aspernatur qui quia natus et optio sunt. Qui voluptatem laborum id consequatur accusantium ad quia beatae est temporibus consectetur. Et laborum consequatur eos nemo quos in dicta distinctio. Est magnam ipsa et consequatur dolore sed excepturi aperiam et impedit consequatur est accusamus vero aut amet odio aut voluptatem quasi.`;

  etapeAleatoire.resume = resumeEtape;

  for (let i = 0; i < randomNombreEtapePreparation; i++) {
    etapes.push({
      ...etapeAleatoire, id: i, titre: "Etape : " + (i+1) + "/" + randomNombreEtapePreparation
    });
  }

  return etapes;
}
