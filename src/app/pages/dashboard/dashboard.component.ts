import { Component, OnInit } from '@angular/core';
import { StaticThemeService } from 'src/app/service/static-theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  storedTheme:string 
  constructor(private themeService: StaticThemeService) { }

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.storedTheme = theme;
    });
   
  }

}
