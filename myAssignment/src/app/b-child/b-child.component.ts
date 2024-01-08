import { Component, Input, Output,EventEmitter } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-b-child',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule],
 
  templateUrl: './b-child.component.html',
  styleUrl: './b-child.component.css'
})
export class BChildComponent {
 @Input() parentMSG:any="";

 childMsg:string="";

 @Output() childEmitEvent=new EventEmitter<string>();

 childBox(e:any){
this.childMsg=e.target.value;
 }

 sendToParent(){
  this.childEmitEvent.emit(this.childMsg);
 } 




 
  

}
