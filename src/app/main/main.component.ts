import { Component, OnInit } from '@angular/core';
import {AddUserDialogComponent} from '../add-user-dialog/add-user-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    // this.apiService.addUser().subscribe((el) => {
    //   console.log(el);
    // })
  }

}
