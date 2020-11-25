import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: number;
  nom: string;
  prenom: string;
  societe: string;
  email: string;
  telephone: string;
  mobile: string;
  notes: string;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj)
    }
  }
}
