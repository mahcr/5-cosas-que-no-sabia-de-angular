import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { MaterialModule } from 'src/app/material.module';
import { SessionService } from './session.service';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    MaterialModule
  ],
  providers: [SessionService]
})
export class PageModule { }
