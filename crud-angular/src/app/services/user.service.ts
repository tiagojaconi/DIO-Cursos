import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../models/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiUrl: string = 'Link API (https://sheet.best)';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  
  getUser(id: number): Observable<UserInterface[]>{
    return this.httpClient.get<UserInterface[]>(`${this.apiUrl}/id/${id}`);
  }

  getUsers(): Observable<UserInterface[]>{
    return this.httpClient.get<UserInterface[]>(this.apiUrl);
  }

  postUser(user: UserInterface): Observable<UserInterface>{
    return this.httpClient.post<UserInterface>(this.apiUrl, user, this.httpOptions);
  }

  deleteUser(id: number): Observable<UserInterface>{
    return this.httpClient.delete<UserInterface>(`${this.apiUrl}/id/${id}`);
  }

  updateUser(id: number, user: UserInterface): Observable<UserInterface>{
    return this.httpClient.put<UserInterface>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }
}
