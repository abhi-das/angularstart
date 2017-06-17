import { Component, Input } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: "user-info",
	templateUrl: "./partials/user-info.html"
})

export class UserInfoComponent {

	@Input() imgPath:string = "./img/";
	imgName:string = "userpic.png";

	constructor() {}
}