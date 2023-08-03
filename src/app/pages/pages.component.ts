import { Component, OnInit, ViewEncapsulation , HostListener} from '@angular/core';
import { HeaderService } from '../service/header.service';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormControl } from '@angular/forms';
import { MENU_ITEMS } from './pages-menu';
import { Router } from '@angular/router';
import { ThemeService } from '../service/theme.service';

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
  favoriteSeason: string;
  seasons: any[] = [
    {
      value: 'theme-default',
      viewValue: 'Theme Default'
    },
    {
      value: 'theme-dark',
      viewValue: 'Theme Dark'
    },
    {
      value: 'theme-blue',
      viewValue: 'Theme Blue'
    }
  ];
  storedTheme:string = localStorage.getItem('theme-color')

  constructor(private headerService: HeaderService, private router:Router, private themeService: ThemeService) {
    this.myBooleanValue = this.headerService.getBooleanValue();
   }

  ngOnInit(): void {
    this.toggleSubmenu(true)
  }

  setTheme(theme:any){
    localStorage.setItem('theme-color', theme)
    this.storedTheme = localStorage.getItem('theme-color')
  }
 /**
   * SideNavToggle()
   */
 sideNavToggle() {
  this.sideNav = !this.sideNav;
}

sideMenuHide() {
  this.sideNav = false;
}

toggleSubmenu(data:any){
  // this.submenu= !this.submenu
  data.expanded = !data.expanded
  console.log(data.expanded)
  this.menuData.map(elm=> {
    if(elm.title !==data.title){
      elm.expanded = false;
    }
  })
  if(data.expanded){
    this.sideNav = true;
  }
  return data.expanded
}
whitOutSubmenuClick(link:String){
  this.router.navigate([`${link}`])
}


getTooltipContent(data:any){
  let tooltip = `${data.title}\n`
    for (const item of data.children) {
      tooltip += item.title + '\n';
    }
    return tooltip;
}

settingsClicked(){
  this.settingsToggle = !this.settingsToggle
}


onRadioChange(theme: string) {
  // You can use the selectedValue here or perform any other actions
  console.log('Selected value:', theme);
  this.themeService.setActiveTheme(theme);
  // Example: Apply theme based on selected value
  // if (selectedValue === 'Light_mode') {
  //   // Apply light theme
  // } else if (selectedValue === 'Dark_mode') {
  //   // Apply dark theme
  // } else if (selectedValue === 'Cosmic_mode') {
  //   // Apply cosmic theme
  // }
}

}
