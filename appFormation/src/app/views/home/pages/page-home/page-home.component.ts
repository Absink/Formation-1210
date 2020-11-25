import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  public userConnected: string;

  constructor() { }

  ngOnInit(): void {
    this.userConnected = localStorage.username;

    // 1. Creation Observable (parler du mot clé CONST)
    const data = new Observable(observer => {
      observer.next(1);     // 'next' envoie une valeur;
      observer.next(5);
      // 4. Ajouter l'error:  observer.error(new Error('Error detected')):
      // 5. Retester le console log, l'erreur inréromp la fin du traitement
      observer.next(30);
      observer.complete();  // 'complete' signale la fin
    });

    // 2. Souscription (3 états)
    data.subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log('Finish')
    });
    // 'error' et 'complete' = 'reject' et 'resolve' pour les promises

    // 3. Demo avec F12 !

  }




}
