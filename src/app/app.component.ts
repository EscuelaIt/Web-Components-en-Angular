import { Component } from '@angular/core';
import '@dile/dile-menu-hamburger/dile-menu-hamburger.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-components-angular';
  menuOpened = false;

  openMenu() {
    this.menuOpened = ! this.menuOpened;
  }

  menuClosedHandler() {
    this.menuOpened = false;
  }
  menuOpenedHandler() {
    this.menuOpened = true;
  }
}
