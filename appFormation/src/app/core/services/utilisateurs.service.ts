import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utilisateur } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private pCollection: Observable<Utilisateur[]>;
  private url: string = environment.url;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Utilisateur[]>(`${this.url}users`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new Utilisateur(obj)
        })
      })
    );
  }

  // Getter
  public get collection(): Observable<Utilisateur[]> {
    return this.pCollection;
  }

  // Setter
  public set collection(col: Observable<Utilisateur[]>) {
    this.pCollection = col;
  }

  public getAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.url}users`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new Utilisateur(obj)
        })
      })
    );
  }

  // Get by Username and password
  public getByUsernameAndPassword(user: Utilisateur): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.url}users?username=${user.username}&pass=${user.pass}`).pipe(
      map(data => {
        return new Utilisateur(data);
      })
    )
  }

  // Get by Username and password
  public getByUsernameAndPassword2(username: string, password: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.url}users?username=${username}&password=${password}`).pipe(
      map(data => {
        return new Utilisateur(data);
      })
    )
  }

  public getById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.url}users/${id}`).pipe(
      map(data => {
        return new Utilisateur(data);
      })
    )
  }

  public add(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.url}users`, user).pipe(
      map(data => {
        return new Utilisateur(data);
      })
    )
  }
}
