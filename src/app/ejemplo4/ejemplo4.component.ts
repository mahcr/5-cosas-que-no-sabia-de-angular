import { Component, OnInit } from '@angular/core';
import { SessionService } from './page/session.service';
import { UserService } from './user.service';

@Component({
  selector: 'demo-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.scss']

})
export class Ejemplo4Component implements OnInit {

  constructor(public userService: UserService, public sessionService: SessionService) { }

  ngOnInit(): void {
  }

}
