import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ApiService} from '../core/services/api.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {SendDataToDetailsService} from '../core/services/send-data-to-details.service';
import {ConfirmDeleteDialogComponent} from './confirm-delete-dialog/confirm-delete-dialog.component';
import {FormDialogComponent} from './form-dialog/form-dialog.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor(private observer: BreakpointObserver, public apiService: ApiService, private router: Router,
              public dialog: MatDialog, private sendDataToDetailsService: SendDataToDetailsService) { }

  hiddenActionButton: boolean;
  userList = [];

  ngOnInit() {
    this.observer.observe('(max-width: 1024px)').subscribe(result => {
      this.hiddenActionButton = result.matches;
    });
    this.apiService.getUserList().subscribe(el => this.userList = el);
  }


  addUser() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      disableClose: true,
      width: '350px',
      data: {
        option: 1
      }
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response.addStatus === 1) {
        response.fullUser.id = response.userId;
        this.userList.push(response.fullUser);
      }
    });
  }

  deleteUser(user) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      disableClose: true,
      width: '250px',
      height: '250px',
      data: {
        userIdToDelete: user.id
      }
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response.deletedStatus === 1) {
        this.userList = this.userList.filter((el) => {
            return user !== el;
        });
      }
    });
  }

  goToDetails(user) {
    this.sendDataToDetailsService.setUserData(user);
    this.router.navigate(['/details', user.id]);
  }

  editUser(user): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      disableClose: true,
      width: '350px',
      data: {
        option: 2,
        userData: user
      }
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response.updatedStatus === 1) {
        this.userList = this.userList.filter((el: { id: number }) => {
          return user.id !== el.id;
        });
        response.updatedUser.id = user.id;
        this.userList.push(response.updatedUser);
      }
    });
  }
}
