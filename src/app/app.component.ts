import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  editedText:any;
  buttonText: string="ADD";
  isEditButtonShow:boolean= false;
  input: string="";
  taskArray: any[]=[];
  addItem(){
    if (this.buttonText==="ADD") {
      this.taskArray.unshift(this.input);
    }else{
      this.taskArray[this.taskArray.indexOf(this.editedText)]=this.input;
    }
    this.input="";
  }
  deleteItem(i: any){
    this.taskArray.splice(i,1);
  }
  editItem(item:string){
    this.input=item;
    this.buttonText="Edit";
    this.editedText=item;
  } 
}
