import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  users: Array<any> = [];
  constructor(private http: Http) {}
  ngOnInit() {
    this.http
      .get('gifs/search?q=dog&api_key=fe184b81e9dd4d3cbea265f829c43df5&limit=5')
      .subscribe((users: any) => {
        console.log(this.http);
        console.log(users.json());
      });
  }
}
