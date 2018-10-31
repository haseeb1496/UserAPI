import {Component, Inject, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: any;

  ageDropdown: Array<number>;

  constructor(private http: HttpClient) {
    this.http.get('http://127.0.10.1:1360/api/users').subscribe(data => this.users = data);
  }

  displayedColumns: string[] = ['Name', 'Age', 'Salary', 'Address', 'delete', 'edit'];

  delete(id: any) {
    const url = 'http://127.0.10.1:1360/api/users/' + id;
    this.http.delete(url).subscribe();
  }

  ngOnInit() {
  }
}
