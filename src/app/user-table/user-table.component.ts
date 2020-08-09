import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {FormDialogComponent} from '../form-dialog/form-dialog.component';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {ConfirmDeleteDialogComponent} from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor(private observer: BreakpointObserver, public apiService: ApiService, private router: Router, public dialog: MatDialog) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'postalCode', 'street', 'city', 'age', 'actions'];
  hiddenActionButton: boolean;
  userList: MatTableDataSource<object>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.observer.observe('(max-width: 1024px)').subscribe(result => {
      this.hiddenActionButton = result.matches;
    });
    this.apiService.getUserList().subscribe((el) => {
      this.userList = new MatTableDataSource(el);
      this.userList.paginator = this.paginator;
    });
  }

  deleteUser(userId) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '250px',
      height: '250px',
      data: {
        userIdToDelete: userId
      }
    });
  }

  goToDetails(userId) {
    this.router.navigate(['/details', userId]);
  }

  editUser(user): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '350px',
      data: {
        option: 2,
        userData: user
      }
    });
  }
}
