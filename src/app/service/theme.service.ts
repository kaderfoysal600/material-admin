import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme = 'theme-default'; // Default theme
  constructor() { }


  setActiveTheme(theme: string) {
    this.activeTheme = theme;
  }

  getActiveTheme() {
    return this.activeTheme;
  }
}
