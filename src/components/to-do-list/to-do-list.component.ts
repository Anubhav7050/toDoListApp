import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  editedText:any;
  buttonText: string="ADD";
  isEditButtonShow:boolean= false;
  input: string="";
  taskArray: any[]=[];
  addItem(){
    if(this.input !=""){
      if (this.buttonText==="ADD") {
        this.taskArray.unshift(this.input);
      }else{
        this.taskArray[this.taskArray.indexOf(this.editedText)]=this.input;
      }
      this.input="";
    }
  }
  deleteItem(i: any){
    const confirmDelete = confirm('Are you sure you want to delete this task!')
    if (confirmDelete) {
      this.taskArray.splice(i, 1);
    }
  }
  editItem(item:string){
    this.input=item;
    this.buttonText="Edit";
    this.editedText=item;
  }
}
