import { StateClient } from '../enums/state-client.enum';
import { TypeCommande } from '../enums/type-commande.enum';

export interface CommandeI {
  id: number;
  client_id: number;
  intitule: string;
  tjmHt: number;
  nbJours: number;
  tauxTva: number;
  statut: string;
  typeCommande: TypeCommande;
  notes: string;

  totalHT(): number;
  totalTTC(): number;
}
