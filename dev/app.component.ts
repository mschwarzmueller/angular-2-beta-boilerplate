// new
import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="#contact of contacts"
          (click)="onSelect(contact)" 
          [class.clicked]="showDetail === true"
      >
          {{contact.firstName}} {{contact.lastName}}
      </li>
    </ul>
    <input [(ngModel)]="selectedContact.firstName" type="text" />
    <div>
      phone number: {{selectedContact.phone}}<br>
      email: {{selectedContact.email}}
    </div>
  `,
  styleUrls: ["../src/css/app.css"]
})

export class AppComponent {
  public contacts = [
    { firstName: "James", lastName: "Artz", phone: "123456789", email: "james@james.james" },
    { firstName: "Jimbo", lastName: "Flenderson", phone: "99999999", email: "jimmy@jimmy.jimmy" },
    { firstName: "Boris", lastName: "McBoatFace", phone: "5454545454", email: "flargus@flargus.flargus" },
    ];

  public selectedContact = {};

  onSelect(contact) {
    this.selectedContact = contact;
  }
}
