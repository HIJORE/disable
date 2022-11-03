import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisableService {

  constructor(private http:HttpClient) { }

  private url:string="https://jsonplaceholder.typicode.com/users"; 
  
  private ulrl1:string="http://192.168.0.146:8089/api/get";

    getData(){
      //return this.http.get(this.url);
      return this.http.get(this.ulrl1)
      
    }
}
