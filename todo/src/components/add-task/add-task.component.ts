import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})

export class AddTaskComponent implements OnInit{
numberOfTask:number=0;

ngOnInit(): void {
  
}

sendTask()
{
  return null
}

}
