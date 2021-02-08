import { Component, OnInit } from '@angular/core';
import { SessionService } from '../page/session.service';
import { UserService } from '../user.service';

@Component({
  selector: 'demo-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(public userService: UserService, public sessionService: SessionService) { }

  ngOnInit(): void {
  }

}
