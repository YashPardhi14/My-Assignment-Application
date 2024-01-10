import { Component } from '@angular/core';
import { EvenComponent } from '../even/even.component';
import { OddComponent } from '../assignment1/odd/odd.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-assignment3',
  standalone: true,
  imports: [EvenComponent,OddComponent,MatButtonModule,CommonModule],
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css'
})
export class Assignment3Component {
  timerRunner:any=0;
  time:any=0;
  show:boolean=false;
  resetIndicator:boolean=false;
  evenSecondCount:number=0;
  oddSecondCount:number=0;
  
  
  
    startGame(){
     this.show=true;
      this.time=setInterval(()=>{
        this.timerRunner++;
        if(this.timerRunner%2===0){
       this.evenSecondCount++;
        }else{
  this.oddSecondCount++;
        }
      },1000)
  
    }
  
    stopGame(){
  clearInterval(this.time);
  
    }
   

    resetGame(){

      this.timerRunner=0;
      this.evenSecondCount=0;
      this.oddSecondCount=0;
      this.stopGame();
      this.show=!this.show;
      
      

    }
   
  
    passEvenCount():number{
      return this.evenSecondCount;
    }
    passOddCount():number{
  return this.oddSecondCount;
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
