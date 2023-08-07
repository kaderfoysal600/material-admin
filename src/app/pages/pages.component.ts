import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { HeaderService } from '../service/header.service';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl } from '@angular/forms';
import { MENU_ITEMS } from './pages-menu';
import { Router } from '@angular/router';
import { ThemeService } from '../service/theme.service';
import { StaticThemeService } from '../service/static-theme.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  menuData = MENU_ITEMS
  sideNav = true;
  submenu = false;
  myBooleanValue: boolean;
  settingsToggle = false;
  settingsLeftToggle = true;
  favoriteSeason: string;
  seasons: any[] = [
    {
      value: 'theme-light',
      viewValue: 'Light Mode'
    },
    {
      value: 'theme-dark',
      viewValue: 'Dark Mode'
    },
    {
      value: 'theme-cosmic',
      viewValue: 'Cosmic'
    }
  ];
  sidearLeft = false;
  sidearRight = true;
  sideNavLeft = true;
  sideNavRight = true;

  storedTheme: string = localStorage.getItem('theme-color')

  constructor(private headerService: HeaderService,
    private router: Router,
    private themeService: ThemeService,
    private staticThemeService: StaticThemeService) {
    this.myBooleanValue = this.headerService.getBooleanValue();
  }

  ngOnInit(): void {
    this.toggleSubmenu(true)
    console.log('this.settingsToggle', this.settingsToggle)
  }

  onRadioChange(theme: string) {
    localStorage.setItem('theme-color', theme)
    this.storedTheme = localStorage.getItem('theme-color')
    this.staticThemeService.setTheme(theme);
  }
  /**
    * SideNavToggle()
    */
  sideNavToggle() {
    this.sideNav = !this.sideNav;
  }
  onMiniSidebarClicked(e){
    e.preventDefault()
    this.sideNav = false;
  }
  sideMenuHide() {
    this.sideNav = false;
  }

  toggleSubmenu(data: any) {
    // this.submenu= !this.submenu
    data.expanded = !data.expanded
    console.log(data.expanded)
    this.menuData.map(elm => {
      if (elm.title !== data.title) {
        elm.expanded = false;
      }
    })
    if (data.expanded) {
      this.sideNav = true;
    }
    return data.expanded
  }
  whitOutSubmenuClick(link: String) {
    this.router.navigate([`${link}`])
  }


  getTooltipContent(data: any) {
    let tooltip = `${data.title}\n`
    for (const item of data.children) {
      tooltip += item.title + '\n';
    }
    return tooltip;
  }

  settingsClicked() {
    if (this.sidearRight) {
      this.settingsToggle = !this.settingsToggle
    }
    else {
      this.settingsLeftToggle = !this.settingsLeftToggle
    }
    console.log('this.settingsToggle', this.settingsToggle)
    
  }

  onSidebarLeft(event,value: String) {
    event.preventDefault();
    if (value == "left") {
      this.sidearLeft = true;
      this.sidearRight = false;
      this.sideNavLeft = false;
      this.sideNavRight = true;
    }
  }

  onSidebarRight(event,value: String) {
    event.preventDefault();
    if (value == "right") {
      this.sidearLeft = false;
      this.sidearRight = true;
      this.sideNavLeft = true;
      this.sideNavRight = false;
    }
  }

}
