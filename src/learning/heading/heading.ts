import { Component, Input, Output,EventEmitter } from '@angular/core';
import { User } from '../../app/shared/models/user.model';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.html',
  styleUrl: './heading.css',
})
export class Heading {
  @Input() title = "Default Title";
  @Input() user!:User;
  @Output() success:EventEmitter<User> = new EventEmitter<User>(); 

  onSubmit() {
      this.user.name = "Sarathikannan";
      this.success.emit(this.user);
  }
}
