import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Employee } from '../common/employee';
import { Observable } from 'rxjs';
import{ map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/employee';

  constructor(private httpClient: HttpClient) { }
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response=> response._embedded.employees ));
  }
}
interface GetResponse{
  _embedded:{
    employees:Employee[];
  }
}