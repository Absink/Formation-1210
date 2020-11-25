import { UtilisateurI } from '../interfaces/utilisateur-i';

export class Utilisateur implements UtilisateurI {
  id: number;
  username: string;
  pass: string;
  email: string;

  constructor(o?: Partial<Utilisateur>) {
    if(o){
      Object.assign(this, o)
    }
  }

}
