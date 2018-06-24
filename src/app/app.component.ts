import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'English Translation Practice App';
  constructor(){
    console.log('go to app comp!!');
  }
  log(){
    console.log('ahihihihihihih click!!');
  }
}
