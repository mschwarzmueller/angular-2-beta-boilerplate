// new
import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
      <h3 (click)="onSelect()" [class.clicked]="showDetail === true">
	      Hello, {{contact.firstName}} {{contact.lastName}}
      </h3>
      <input [(ngModel)]="contact.firstName" type="text" />
      <div *ngIf ="showDetail === true">
      	Phone Number: {{contact.phone}}<br>
      	Email: {{contact.email}}
      </div>
      <p>This app cray!!</p>
  `,
  styleUrls: ["../src/css/app.css"]
})

export class AppComponent {
  public contact = { firstName: "James", lastName: "Artz", phone: "123456789", email: "james@james.james" };

  public showDetail = false;

  onSelect() {
    this.showDetail = true;
  }
}
