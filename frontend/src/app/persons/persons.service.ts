import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Person {
  _id: number;
  firstName: string;
  lastName: string;
  year: number;
  balance: string;
  transactions: string;
}

export interface addPersonCredentials {
  firstName: string;
  lastName: string;
  year: number;
}

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  rootUrl = 'http://localhost:7777';
  constructor(private http: HttpClient) {}

  getPersons() {
    return this.http.get<Person[]>(`${this.rootUrl}/person`);
  }

  addPerson(credentials: addPersonCredentials) {
    return this.http.post(`${this.rootUrl}/person`, credentials);
  }
}
