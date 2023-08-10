import { Component, OnInit, ViewEncapsulation, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { HeaderService } from '../service/header.service';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl } from '@angular/forms';
import { MENU_ITEMS } from './pages-menu';
import { Router } from '@angular/router';
import { ThemeService } from '../service/theme.service';
import { StaticThemeService } from '../service/static-theme.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  menuData = MENU_ITEMS
  sideNav = false;
  submenu = false;
  myBooleanValue: boolean;
  settingsToggle = false;
  settingsLeftToggle = false;
  favoriteSeason: string;
  showTooltip = false;
  miniSidebar = true;
  seasons: any[] = [
    {
      value: 'theme-light',
      viewValue: 'Light Mode',
      checked: true
    },
    {
      value: 'theme-dark',
      viewValue: 'Dark Mode',
      checked: false
    },
    {
      value: 'theme-cosmic',
      viewValue: 'Cosmic',
      checked: false
    }
  ];
  settingsLeft = false;
  settingsRight = false;
  sideNavLeft = true;
  sideNavRight = true;
  private settingsInterval: Subscription | null = null;
  storedTheme: string = localStorage.getItem('theme-color')
  themeSetting = localStorage.getItem('theme-settings');

  constructor(private headerService: HeaderService,
    private router: Router,
    private themeService: ThemeService,
    private staticThemeService: StaticThemeService,
    private elementRef: ElementRef, private renderer: Renderer2
    )
     {
    this.myBooleanValue = this.headerService.getBooleanValue();
  }

  ngOnInit(): void {
    // this.toggleSubmenu(true)
    console.log('this.settingsToggle', this.settingsToggle)
    console.log('this.savedSidebarPosition', this.themeSetting)
    this.settingLoaded()

    // console.log(localStorage)
  }

  onRadioChange(theme: string) {
    localStorage.setItem('theme-color', theme)
    this.storedTheme = localStorage.getItem('theme-color')
    this.staticThemeService.setTheme(theme);
  }
  settingLoaded(){
    if (this.themeSetting === "left") {
      this.settingsLeft = true;
      this.settingsRight = false;
      this.sideNavLeft = false;
      this.sideNavRight = true;
      
    } else if(this.themeSetting === "right"){
      this.settingsLeft = false;
      this.settingsRight = true;
      this.sideNavLeft = true;
      this.sideNavRight = false;
    }
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

  toggleSubmenu(data: any, sideNav: boolean) {
    // this.submenu= !this.submenu
  if(sideNav){
    data.expanded = !data.expanded
  }
    console.log(data.expanded)
    this.menuData.map(elm => {
      if (elm.title !== data.title) {
        elm.expanded = false;
      }
    })

      this.sideNav = true;
    return data.expanded
  }
  whitOutSubmenuClick(link: String) {
    this.router.navigate([`${link}`])
  }
  settingsClicked() {
    if (this.settingsRight) {
      this.settingsToggle = !this.settingsToggle
    }
    else {
      this.settingsLeftToggle = !this.settingsLeftToggle
    }


    if (this.settingsInterval) {
      this.settingsInterval.unsubscribe(); // Clear the interval if it's already running
    }

     this.settingsInterval = interval(10000).subscribe(() => {
      this.settingsToggle = false; 
      if(this.settingsLeft ){
        this.settingsLeftToggle = false;
      }
      
    });
    
  }
  onSidebarLeft(event,value: string) {
    localStorage.setItem('theme-settings', value)
    this.themeSetting = localStorage.getItem('theme-settings')
    this.staticThemeService.setSetting(value);
    const savedSidebarPosition = localStorage.getItem('theme-settings');

    event.preventDefault();
    if (this.themeSetting === "left") {
      console.log('savedSidebarPosition savedSidebarPosition', savedSidebarPosition)
      this.settingsLeft = true;
      this.settingsRight = false;
      this.sideNavLeft = false;
      this.sideNavRight = true;
    }
    
  }
  onSidebarRight(event,value: string) {

    localStorage.setItem('theme-settings', value)
    this.themeSetting = localStorage.getItem('theme-settings')
    this.staticThemeService.setSetting(value);
    event.preventDefault();
    if (this.themeSetting == "right") {
      this.settingsLeft = false;
      this.settingsRight = true;
      this.sideNavLeft = true;
      this.sideNavRight = false;
    }
  }
  handleOutsideClick(): void {
    this.settingsToggle = false;
    this.settingsLeftToggle = false;
  }

}
