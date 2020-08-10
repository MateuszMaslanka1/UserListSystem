import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss']
})
export class MobileListComponent implements OnInit {

  constructor() { }

  userDetailsCorrectOrder = ['first_name', 'last_name', 'postal_code', 'street', 'city', 'age'];
  userDetailsDescriptions = ['First Name', 'Last Name', 'Postal Code', 'Street', 'City', 'Age'];
  @Input('userList') userList: Array<object>;
  @Output() deleteUser = new EventEmitter<string>();
  @Output() editUser = new EventEmitter<string>();
  @Output() goToDetails = new EventEmitter<string>();

  ngOnInit() {
  }

  deleteUserInParent(userId): void {
    this.deleteUser.next(userId);
  }

  editUserInParent(userId): void {
    this.editUser.next(userId);
  }

  goToDetailsInParent(userId): void {
    this.goToDetails.next(userId);
  }
}
