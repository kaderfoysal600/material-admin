import { Component, OnInit, ViewEncapsulation , HostListener} from '@angular/core';
import { HeaderService } from '../service/header.service';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { FormControl } from '@angular/forms';
import { MENU_ITEMS } from './pages-menu';

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
  
  

  constructor(private headerService: HeaderService) {
    this.myBooleanValue = this.headerService.getBooleanValue();
   }

  ngOnInit(): void {
    console.log('myBooleanValue', this.myBooleanValue)
    console.log(this.menuData)
    this.toggleSubmenu(true)
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
  if(data.expanded){
    this.sideNav = true;
  }
  return data
}
}
