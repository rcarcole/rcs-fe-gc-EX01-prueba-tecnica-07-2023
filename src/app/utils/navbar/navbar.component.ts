import { Component } from '@angular/core';
// import { NgbModal, NgbTypeaheadConfig, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeNavItem: number = 1;

  setActiveNavItem(navItem: number) {
    this.activeNavItem = navItem;}
  public model: any;

	constructor() {
		
	}

	// search = (text$: Observable<string>) =>
	// 	text$.pipe(
	// 		debounceTime(200),
	// 		distinctUntilChanged(),
	// 		map((term) =>
	// 			term.length < 2 ? [] : characters.splice(0, 10),
	// 		),
	// 	);
}