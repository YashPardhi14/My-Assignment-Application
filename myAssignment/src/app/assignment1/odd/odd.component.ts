import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  standalone: true,
  imports: [],
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
 @Input() oddCount:number=0;
 @Input() reset:boolean=false;




}



