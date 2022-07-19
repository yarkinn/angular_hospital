import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  private empUrl: string;

  constructor(private http: HttpClient) {
    this.empUrl = 'http://localhost:8080/employees';
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empUrl);
  }

  public save(employee: Employee) {
    return this.http.post<Employee>(this.empUrl, employee);
  }
}