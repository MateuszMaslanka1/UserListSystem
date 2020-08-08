import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {GetUserDetailsService} from '../get-user-details.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor(private observer: BreakpointObserver, private apiService: ApiService, private router: Router, private getUserDetails: GetUserDetailsService) { }

  // dataSource = [
  //   {firstName: 'Janusz', lastName: 'Hydrogen', postalCode: '45-567', street: 'fajna', city: 'Katwoice', age: 20},
  //   {firstName: 'Janusz', lastName: 'Hydrogen', postalCode: '45-567', street: 'fajna', city: 'Katwoice', age: 20},
  //   {firstName: 'Janusz', lastName: 'Hydrogen', postalCode: '45-567', street: 'fajna', city: 'Katwoice', age: 20},
  //   {firstName: 'Janusz', lastName: 'Hydrogen', postalCode: '45-567', street: 'fajna', city: 'Katwoice', age: 20},
  //   {firstName: 'Janusz', lastName: 'Hydrogen', postalCode: '45-567', street: 'fajna', city: 'Katwoice', age: 20},
  //   {firstName: 'Janusz', lastName: 'Hydrogen', postalCode: '45-567', street: 'fajna', city: 'Katwoice', age: 20},
  //   {firstName: 'Janusz', lastName: 'Hydrogen', postalCode: '45-567', street: 'fajna', city: 'Katwoice', age: 20}
  // ];
  userList = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'postalCode', 'street', 'city', 'age', 'actions'];

  hiddenActionButton: boolean;

  ngOnInit() {
    this.observer.observe('(max-width: 1024px)').subscribe(result => {
      this.hiddenActionButton = result.matches;
    });
    this.apiService.getUserList().subscribe((userList: object[]) => {
      this.userList = userList;
    });
  }

  deleteUser(userId) {
   this.apiService.deleteUser(userId).subscribe((el) => {
     this.userList = this.userList.filter((userIdToDelete) => {
       return userId !== userIdToDelete.id;
     });
   });
  }

  goToDetails(userDetails) {
    this.router.navigate(['/details', userDetails.id]);
    this.getUserDetails.setDetails(userDetails);
  }
}
