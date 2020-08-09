import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  userList = [];

  getUserList(): Observable<any> {
    return this.http.get<{users: object[]}>('/api').pipe(
      map(data => {
         this.userList = data.users;
    }));
  }

  addUser(user) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(user)) {
      formData.append(`${key}`, `${value}`);
    }
    return this.http.post('api/user', formData);
  }

  editUser(user, userId) {
    const body = new HttpParams()
      .set('first_name', user.first_name)
      .set('last_name', user.last_name)
      .set('street', user.street)
      .set('postal_code', user.postal_code)
      .set('city', user.city)
      .set('age', user.age);

    return this.http.put(`api/user/${userId}`, body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  deleteUser(userId) {
    return this.http.delete(`api/user/${userId}`);
  }

  getUserDetailsId(userId) {
     return this.http.get<{user: object}>(`api/user/${userId}`).pipe(
      map(data => {
         return data.user;
      }));
  }
}
