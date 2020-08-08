import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserDetailsService {

  constructor() { }

  userDetails: object;

  getDetails() {
    return this.userDetails;
  }

  setDetails(userDetails) {
    this.userDetails = userDetails;
  }
}
