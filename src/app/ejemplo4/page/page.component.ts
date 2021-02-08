import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SessionService } from './session.service';

@Component({
  selector: 'demo-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(public userService: UserService, public sessionService: SessionService) { }

  ngOnInit(): void { }

}
