import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataInterface } from './dataInterface';
import { myClass } from './myclass';

@Injectable({
  providedIn: 'root'
})
export class ServicehttpService {

  

  constructor(private http: HttpClient) { }

  getdata():Observable<dataInterface>{
    return this.http.get<dataInterface>('http://localhost:3000/petienttable')
  }

  addDataS(obj:myClass):Observable<dataInterface>{
    return this.http.post<dataInterface>('http://localhost:3000/petienttable', obj)
  }

  deleteS(id:any):Observable<dataInterface>{
    return this.http.delete<dataInterface>('http://localhost:3000/petienttable?id='+ id)
  }

  editS(id: any, updatedData: dataInterface): Observable<dataInterface> {
    const url = `http://localhost:3000/petienttable?id=${id}`;
    return this.http.put<dataInterface>(url, updatedData);
  }
  

  

  
  

}
