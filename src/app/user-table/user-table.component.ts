import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {FormDialogComponent} from '../form-dialog/form-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor(private observer: BreakpointObserver, public apiService: ApiService, private router: Router, public dialog: MatDialog) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'postalCode', 'street', 'city', 'age', 'actions'];
  hiddenActionButton: boolean;

  ngOnInit() {
    this.observer.observe('(max-width: 1024px)').subscribe(result => {
      this.hiddenActionButton = result.matches;
    });
    this.apiService.getUserList().subscribe();
  }

  deleteUser(userId) {
     this.apiService.deleteUser(userId).subscribe((el) => {
     this.apiService.getUserList().subscribe();
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
