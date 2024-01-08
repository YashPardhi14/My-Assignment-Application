import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { ShowAssignment1Component } from './show-assignment1/show-assignment1.component';
import { ShowAssignment3Component } from './show-assignment3/show-assignment3.component';
import { ShowAssignment2Component } from './show-assignment2/show-assignment2.component';

export const routes: Routes = [
  {
    path:'',
    component:LogInComponent,


  } ,{
    path:'home',
    component:HomeComponent,
    children:[
        {
            path:'assignment1',
            component:Assignment1Component,
        },{
            path:'assignment2',
            component:Assignment2Component,

        },{
            path:'assignment3',
            component:Assignment3Component,
        },{
          path:'showassignment1',
          component:ShowAssignment1Component
        },{
          path:'showassignment2',
          component:ShowAssignment2Component
        },{
          path:'showassignment3',
          component:ShowAssignment3Component
        }
    ]
  },

  {
    path:'**',
    component:ErrorComponent,

  }
];
