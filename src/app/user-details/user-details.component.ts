
import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute ) { }

  userDetails: object;
  userDetailsCorrectOrder = ['first_name', 'last_name', 'postal_code', 'street', 'city', 'age'];
  userDetailsDescriptions = ['First Name', 'Last Name', 'Postal Code', 'Street', 'City', 'Age'];

  ngOnInit() {
    const getUserId = this.activatedRoute.snapshot.url[1].path;
    this.userDetails = this.apiService.getUserDetailsId(getUserId).subscribe((el) => {
      this.userDetails = el;
    });
  }

}
