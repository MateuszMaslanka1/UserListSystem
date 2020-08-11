import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ApiService} from '../../core/services/api.service';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.scss']
})
export class ConfirmDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
              private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close({deletedStatus: 0});
  }

  deleteUser() {
    this.apiService.deleteUser(this.data.userIdToDelete).subscribe((el: { status: number }) => {
      return this.dialogRef.close({deletedStatus: el.status});
    });
  }
}
