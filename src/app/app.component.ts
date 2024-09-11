import { Component } from '@angular/core';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  lastName: string = 'Sparrow';
  parentData = 'yellow';
  
  employee:any= {
    id: 1,
    name: 'jack',
    position: 'Software Engineer'
  };

// Variable to store posts data
records: any[] = [];
isDestroy: boolean = true;
   // inject the demo service
   constructor(private _demoService: DemoService) {
   
    this._demoService.getPosts().subscribe(res => {
      console.log('geeting data from server', res);
      this.records = res; // Store the data in the posts array
    })
       // this._demoService.getComments().then(res => {
    //   console.log('commenst', res);
      
    // })
    
    // this._demoService.hello().subscribe(res => {
    //   console.log('my custom observable', res);
      
    // })
    
    this._demoService.createPost().subscribe(res => {
      console.log('created new post', res);
      
    })
  }
  

  handleEvent(data: string) {
    console.log('getting data from child component', data);
    
  }
  OnDestroy() {
    this.isDestroy = false;
    }
}
