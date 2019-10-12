import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  tableHeaders = [
    "Id",
    "Email",
    "First Name",
    "Last Name",
    "Avatar",
    "Action"
  ]

  loading = false;
  users =[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.loading = true;
    this.http.getHttp("users?page=2").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.users = data['data'];
    });
  }

}
