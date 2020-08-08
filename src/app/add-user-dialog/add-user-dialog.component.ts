import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>, private apiService: ApiService) { }

  addUserForm = new FormGroup({
    first_name: new FormControl( '', [Validators.required, Validators.maxLength(30)]),
    last_name: new FormControl( '', [Validators.required, Validators.maxLength(30)]),
    street: new FormControl( '', [Validators.required, Validators.maxLength(30)]),
    postal_code: new FormControl( '', [Validators.required, Validators.maxLength(10)]),
    city: new FormControl( '', [Validators.maxLength(5)]),
    age: new FormControl( '', [Validators.maxLength(5)])
  });

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  addUser() {
    const getUserData = this.addUserForm.value;
   // const test = JSON.stringify(getUserData);
    this.apiService.addUser(getUserData).subscribe((el) => {
      console.log(el);
    });
  }
}
