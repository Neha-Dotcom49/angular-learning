import { Component, OnInit } from '@angular/core';
import { RandomuserService } from '../services/randomuser.service';

@Component({
  selector: 'app-random-userapi',
  templateUrl: './random-userapi.component.html',
  styleUrls: ['./random-userapi.component.css']
})
export class RandomUserapiComponent implements OnInit {
  users: any[] = [];
  constructor(private randomuserservice:RandomuserService) { }

  ngOnInit(): void {
    this.randomuserservice.getUsers().subscribe(response => {
      this.users = response.results;
    });
  }

}
