import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	activeNavItem: number = 1;

	setActiveNavItem(navItem: number) {
		this.activeNavItem = navItem;
	}
	public model: any;

	constructor() {}

}