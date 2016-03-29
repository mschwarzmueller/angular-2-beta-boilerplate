import {Component} from "angular2/core";


@Component({
	selector: "contact",
	template: `
		<input [(ngModel)]="contact.firstName" type= "text" >
	  <div>
	  	phone number: {{ contact.phone }} <br>
	    email: {{ contact.email }}
		</div>
	`,
	inputs: ["contact"]
})

export class ContactComponent {
	public contact = {};
}



