import { Component } from '@angular/core';
import { BChildComponent } from '../b-child/b-child.component';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-assignment2',
  standalone: true,
  imports: [BChildComponent,NavbarComponent,MatInputModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './assignment2.component.html',
  styleUrl: './assignment2.component.css'
})
export class Assignment2Component {
  parentMSG:string="";
  childMsg:string="";
  
    boxValue(e:any){
      this.parentMSG=e.target.value;
    }
  
    sendToChild(){
      this.sendMsg();
      console.warn(this.parentMSG);
    }
  
    sendMsg():any{
      return this.parentMSG;
    }
    getChildMsg(value:string){
      this.childMsg=value;
    }
}
