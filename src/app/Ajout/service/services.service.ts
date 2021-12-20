import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url='http://localhost:8081/odc';

  constructor( private http : HttpClient) { }
  Ajout(data: any){
    console.log(data);
    return this.http.post(this.url+"/saveApprenant", data);
  }
}
