import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { style } from '@angular/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  // templateUrl: './home/home.component.html',
  styleUrl: './app.component.css',
  template: '<app-home/> <p> Marwa</p> Hello {{city}} {{1+1}} @if (isserverrunning) {<p>Server is running!!! </p>} @else{<p>Not Running !!!</p>} @for(os of operatingsystems;track os.id){<p>{{os.name}}</p>} @for(user of users; track user.id){<p>{{user.name}}</p>} <button type="button" (click)="welcome()" (mouseover)="my_hover()" >Khaled</button>',
  styles: ['p {<color:red></color:red>;}'],
})
export class AppComponent {
  // title = 'khaled_title';
  city = 'cairo'
  message = 'Hi Khaled'
  isserverrunning = false
  operatingsystems = [{ id: 'win', name: 'Windows' }, { id: 'Apple', name: 'MAC' }, {}]
  users = [{ id: 0, name: 'sara' }, { id: 1, name: 'Ahmed' }]
  welcome() { console.log('Welcome Khaled') }
  my_hover() { window.alert(this.message); }
}
