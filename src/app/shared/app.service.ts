import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public  key = "QD4lef4X-U9OFzD9CZ1F0m_9mJe9fACpRMNcC2akhs4"; 
  public  page = 1;
  public  per_page = 30;

  constructor( private http: HttpClient ) { }

  getImage() {
    return this.http.get(
      `https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.key}`
    );
  }
}

