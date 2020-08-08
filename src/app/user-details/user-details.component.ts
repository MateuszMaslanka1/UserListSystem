import { Component, OnInit } from '@angular/core';
import {GetUserDetailsService} from '../get-user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private getUserDetails: GetUserDetailsService) { }

  userDetails: object;

  ngOnInit() {
    this.userDetails = this.getUserDetails.getDetails();
  }

}
