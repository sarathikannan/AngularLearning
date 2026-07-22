import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from "./shared/side-bar/side-bar";
import { FormsModule } from '@angular/forms';
import { Heading } from '../learning/heading/heading';
import { User } from './shared/models/user.model';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar,Heading],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
  // Add a property to hold the heading value
  //heading = "My Heading";

  user:User = {
    name: "Sarathi",
    age: 30,
    gender: true
  };

  onSuccess(user: User) {
    this.user = user;
  }
}
