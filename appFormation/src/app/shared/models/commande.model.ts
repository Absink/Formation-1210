import { TypeCommande } from '../enums/type-commande.enum';
import { CommandeI } from '../interfaces/commande-i';

export class Commande implements CommandeI {
  id: number;
  client_id: number;
  intitule: string;
  tjmHt = 500;
  nbJours = 1;
  tauxTva = 20;
  statut: string;
  typeCommande = TypeCommande.OPTION;
  notes: string;

  totalHT(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTTC(): number {
    return this.totalHT() * (1 + this.tauxTva/100);
  }


  constructor(obj?: Partial<Commande>) {
    if(obj) {
      Object.assign(this, obj)
    }
  }
}
