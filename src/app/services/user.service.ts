import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  user: User[];

  readonly userUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
     return this.http.get<User[]>(this.userUrl);
  }

  getUser(id: number): Observable<User> {
     return this.http.get<User>(this.userUrl + `/${id}`);
  }

  postUser(user: User): Observable<User[]>{
    if(user.id  == 1)
    {
      user.isAdmin = true;
    }
    else {
      user.isAdmin = false;
    }
    user.isRegistered = true;
    return this.http.post<User[]>(this.userUrl , user);
  }

  putUser(user: User): Observable<User[]>{
    return this.http.put<User[]>(`${this.userUrl}/${user.id}`, user);
  }

}
