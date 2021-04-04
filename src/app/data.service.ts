import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment as env } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getMenu(): Observable<any>{
    
      return this.http.get(env.apiUri + "/api/menu");

    }
}
