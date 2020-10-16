import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private pCollection: Observable<User[]>;
  private url: string = environment.url;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<User[]>(`${this.url}users`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new User(obj)
        })
      })
    );
  }

  // Getter
  public get collection(): Observable<User[]> {
    return this.pCollection;
  }

  // Setter
  public set collection(col: Observable<User[]>) {
    this.pCollection = col;
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}users`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new User(obj)
        })
      })
    );
  }

  // Get by Username and password
  public getByUsernameAndPassword(user: User): Observable<User> {
    return this.http.get<User>(`${this.url}users?username=${user.username}&password=${user.password}`).pipe(
      map(data => {
        return new User(data);
      })
    )
  }

  // Get by Username and password
  public getByUsernameAndPassword2(username: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.url}users?username=${username}&password=${password}`).pipe(
      map(data => {
        return new User(data);
      })
    )
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}users/${id}`).pipe(
      map(data => {
        return new User(data);
      })
    )
  }
}
