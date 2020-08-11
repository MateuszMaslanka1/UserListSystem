import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ApiService} from '../../core/services/api.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormDialogComponent>, private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data) { }

  addUserForm = new FormGroup({
    first_name: new FormControl( '', [Validators.required, Validators.maxLength(100)]),
    last_name: new FormControl( '', [Validators.required, Validators.maxLength(100)]),
    street: new FormControl( '', [Validators.required, Validators.maxLength(100)]),
    postal_code: new FormControl( '', [Validators.required, Validators.maxLength(10)]),
    city: new FormControl( '', [Validators.maxLength(100)]),
    age: new FormControl( '', [Validators.required, Validators.maxLength(3)])
  });

  ngOnInit() {
    if (this.data.option === 2) {
      this.addUserForm.setValue({
        first_name: this.data.userData.first_name,
        last_name: this.data.userData.last_name,
        street: this.data.userData.street,
        postal_code: this.data.userData.postal_code,
        city: this.data.userData.city,
        age: this.data.userData.age
      });
    }
  }

  closeDialog() {
    this.dialogRef.close({addStatus: 0, updatedStatus: 0});
  }

  switchBetweenAction() {
    const getUserData = this.addUserForm.value;
    this.data.option === 1 ? this.addUser(getUserData) : this.editUser(getUserData);
  }

  addUser(getUserData) {
    this.apiService.addUser(getUserData).subscribe((el: { status: number, id: number }) => {
      return this.dialogRef.close({addStatus: el.status, userId: el.id, fullUser: getUserData});
    });
  }

  editUser(getUserData) {
    this.apiService.editUser(getUserData, this.data.userData.id).subscribe((el: { status: number }) => {
      return this.dialogRef.close({updatedStatus: el.status, updatedUser: getUserData});
    });
  }

}
