import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-desktop-list',
  templateUrl: './desktop-list.component.html',
  styleUrls: ['./desktop-list.component.scss']
})
export class DesktopListComponent implements OnInit {

  constructor() { }
  @Input('userList') userList: Array<object>;
  @Output() deleteUser = new EventEmitter<string>();
  @Output() editUser = new EventEmitter<string>();
  @Output() goToDetails = new EventEmitter<string>();
  userDetailsCorrectOrder = ['first_name', 'last_name', 'postal_code', 'street', 'city', 'age'];
  userDetailsDescriptions = ['First Name', 'Last Name', 'Postal Code', 'Street', 'City', 'Age', 'Actions'];

  ngOnInit() {
    console.log(this.userList);
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
