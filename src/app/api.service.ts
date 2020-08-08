import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get<{users: object[]}>('http://test.eko.eu/').pipe(
      map(data => {
        return data.users;
    }));
  }

  addUser(user) {
    const formData = new FormData();
    formData.append('first_name', "asdasdasd");
    formData.append('last_name', "asdasd");
    formData.append('postal_code', "asdasd");
    formData.append('street', "asdasd");
    formData.append('city', "asdasd");
    formData.append('age', 25);
    console.log(user);
    const test = JSON.stringify(formData);
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'multipart/form-data',
    //   })
    // };
    return this.http.post('api/user', formData);
  }

  deleteUser(userId) {
    return this.http.delete(`api/user/${userId}`);
  }
}
