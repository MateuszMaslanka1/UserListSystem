import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendDataToDetailsService {

  constructor() { }

  private userData = {};

  getUserData() {
    return this.userData;
  }

  setUserData(user) {
    this.userData = user;
  }
}
