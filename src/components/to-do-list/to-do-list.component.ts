import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements OnInit{
  editedText:any;
  buttonText: string="ADD";
  isEditButtonShow:boolean= false;
  input: string="";
  taskArray: any[]=[];

constructor(private route: Router){
  
}

  addItem(){
    if(this.input !=""){
      if (this.buttonText==="ADD") {
        this.taskArray.unshift(this.input);
        this.route.navigate(["/add-item"])
      }else{
        this.taskArray[this.taskArray.indexOf(this.editedText)]=this.input;
        this.buttonText ="ADD"
      }
      this.input="";
      localStorage.setItem('cachedData',JSON.stringify(this.taskArray))
    }
  }
  deleteItem(i: any){
    const confirmDelete = confirm('Are you sure you want to delete this task!')
    if (confirmDelete) {
      this.taskArray.splice(i, 1);
      localStorage.setItem('cachedData',JSON.stringify(this.taskArray))
    }
  }
  editItem(item:string){
    this.input=item;
    this.buttonText="Edit";
    this.editedText=item;
  }
  inputValueChanged(element:any){
   
  }
}
