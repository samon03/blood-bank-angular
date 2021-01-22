import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedback: Feedback[];

  readonly feedbackUrl = "http://localhost:3000/feedbacks";

  constructor(private http: HttpClient) { }

  getFeedbacks(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.feedbackUrl);
  }

  postfeedback(feedback: Feedback): Observable<Feedback[]>{
    return this.http.post<Feedback[]>(this.feedbackUrl , feedback);
  }

}
