import { Component } from '@angular/core';
import { EvenComponent } from '../even/even.component';
import { OddComponent } from '../assignment1/odd/odd.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-assignment3',
  standalone: true,
  imports: [EvenComponent,OddComponent,MatButtonModule],
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css'
})
export class Assignment3Component {
  timerRunner:any=0;
  time:any=0;
  
  evenSecondCount:any=[];
  oddSecondCount:any=[];
  
  
  
    startGame(){
      this.time=setInterval(()=>{
        this.timerRunner++;
        if(this.timerRunner%2===0){
       this.evenSecondCount.push(this.timerRunner);
        }else{
  this.oddSecondCount.push(this.timerRunner);
        }
      },1000)
  
    }
  
    stopGame(){
  clearInterval(this.time);
  
    }
    // restartGame(){
    //   this.timerRunner=0;
    //   this.evenSecondCount=this.oddSecondCount=null;
    // }
   
  
    passEvenCount():number{
      return this.evenSecondCount.length;
    }
    passOddCount():number{
  return this.oddSecondCount.length;
    }
  
  
    constructor(private snackBar: MatSnackBar) {}
  
    startBar(){
      this.snackBar.open('Game Started ...Enjoy !!', 'Close', {
        duration: 2000,
      });
    }
    stopBar(){
      this.snackBar.open('Game Stopped ...Thank You !!', 'Close', {
        duration: 2000,
      });
  
    }
}
