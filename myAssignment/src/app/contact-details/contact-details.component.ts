import { Component, EventEmitter,Output } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {
  mail:string="yashpardhi142814@outlook.com";
  git:string="yp142814";
  downloadResume(){
    alert('downloading the resume.......');
  }
  @Output() closeEventEmitter =new EventEmitter();

  closeTab(){
    return this.closeEventEmitter.emit(false);
  }
}
