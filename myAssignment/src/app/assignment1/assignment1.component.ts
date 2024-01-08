import { Component } from '@angular/core';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment1',
  standalone: true,
  imports: [ContactDetailsComponent,FormsModule,CommonModule,MatButtonModule],
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css'
})
export class Assignment1Component {
  show:boolean=false;
  contactButtonDisabled=false;
  showAlert(){
alert("I will contact you soon!");
  }

  showDetails(){
this.show=!this.show;
this.contactButtonDisabled=true;
console.log(this.show);

  }
  closeTab(){
    this.show=false;
    this.contactButtonDisabled=false;
  }
}
