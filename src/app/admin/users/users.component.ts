import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[];
  hasPermission = true;

  constructor() {}

  ngOnInit(): void {
    if (this.hasPermission) {
      this.getUsers()
        .then(users => (this.users = this.users))
        .catch(e => console.log(e.message));
    } else {
      this.users = [];
    }
  }

  async getUsers() {
    return [
      { name: 'john', email: 'john@angular.com' },
      { name: 'collen', email: 'colleen@angular.com' }
    ];
  }
}
