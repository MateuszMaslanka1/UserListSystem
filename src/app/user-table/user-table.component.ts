import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor() { }

  dataSource = [
    {firstName: 'Janusz', lastName: 'Hydrogen', postalCode: '45-567', street: 'fajna', city: 'Katwoice', age: 20},
  ];
  displayedColumns: string[] = ['firstName', 'lastName', 'postalCode', 'street', 'city', 'age'];

  ngOnInit() {
  }

}
