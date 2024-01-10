import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  standalone: true,
  imports: [],
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
 @Input() evenCount:number=0;

 @Input() reset:boolean=false;

 






}
