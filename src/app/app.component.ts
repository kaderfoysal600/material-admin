import { Component } from '@angular/core';
import { StaticThemeService } from './service/static-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-admin';
  storedTheme:string
  constructor(private themeService: StaticThemeService) {}

   ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.storedTheme = theme;
    });
   
  }
}
