import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface singleDogResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class DogService {
  dogURL: string = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getDog(): Observable<singleDogResponse> {
    return this.http.get<singleDogResponse>(this.dogURL);
  }
}
