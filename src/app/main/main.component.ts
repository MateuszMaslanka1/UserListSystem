import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormDialogComponent} from '../form-dialog/form-dialog.component';
import {UserTableComponent} from '../user-table/user-table.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @ViewChild('child', {static: false}) child: UserTableComponent;

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '350px',
      data: {
        option: 1
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.child.getDataUser();
    });
  }

}
