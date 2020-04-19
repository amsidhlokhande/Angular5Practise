import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the World of Angular';
  // Sharing this attribute to child component
  public names = ['Amsidh', 'Anjali', 'Aditya', 'Adithi', 'Raju', 'Babasha', 'Itabai', '********', 'Sanjay'];
  public helloMessage = '';
}
