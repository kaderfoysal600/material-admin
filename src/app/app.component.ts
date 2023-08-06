import { Component } from '@angular/core';
import { StaticThemeService } from './service/static-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-admin';
  // currentTheme: string;
  storedTheme:string = localStorage.getItem('theme-color')
  constructor(private staticThemeService: StaticThemeService) {
    // this.currentTheme = this.staticThemeService.getTheme();
   }
}
