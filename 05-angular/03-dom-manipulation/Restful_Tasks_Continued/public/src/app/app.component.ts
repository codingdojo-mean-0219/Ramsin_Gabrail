import { Component , OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks Continued';
  tasks: any
  showing: any
  showAll: any

  showTask(obj: object): void {
    console.log(`Displaying tasks: ${obj}`)
    this.showing =obj
    ;}

  constructor(private _httpService: HttpService){
  }
  ngOnInit() {
    this.getTasksFromService()
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
      console.log(data);
      console.log(this.tasks," These are the tasks");
      this.showAll = true
    });
  }

}