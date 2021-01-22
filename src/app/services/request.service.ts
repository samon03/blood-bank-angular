import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requester } from '../models/requester';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  requester: Requester[];

  readonly requesterUrl = "http://localhost:3000/requesters";

  constructor(private http: HttpClient,
    private userService: UserService) { }


  getRequester(): Observable<Requester[]>{
    return this.http.get<Requester[]>(this.requesterUrl);
  }

  postRequester(requester: Requester): Observable<Requester[]>{
    return this.http.post<Requester[]>(this.requesterUrl , requester);
  }

}
