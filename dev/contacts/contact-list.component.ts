import {Component} from "angular2/core";
import {ContactComponent} from "./contact.component";

@Component({
	selector: "contact-list",
	template:`
		<ul>
	    <li *ngFor="#contact of contacts"
	        (click)="onSelect(contact)" 
	        [class.clicked]="selectedContact === contact"
	    >
	        {{contact.firstName}} {{contact.lastName}}
	    </li>
	  </ul>
	  <contact [contact]="selectedContact"></contact>
	`,
	directives: [ContactComponent],
  styleUrls: ["../src/css/app.css"]
})

export class ContactListComponent {
  public contacts = [
    { firstName: "James", lastName: "Artz", phone: "123456789", email: "james@james.james" },
    { firstName: "Jimbo", lastName: "Flenderson", phone: "99999999", email: "jimmy@jimmy.jimmy" },
    { firstName: "Boris", lastName: "Johnson", phone: "5454545454", email: "flargus@flargus.flargus" },
	];

  public selectedContact = {};

  onSelect(contact) {
    this.selectedContact = contact;
  }
}