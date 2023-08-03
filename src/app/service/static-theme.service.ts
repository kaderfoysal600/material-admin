import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticThemeService {

  constructor() { }
  private storedTheme: string = localStorage.getItem('theme-color');

  getTheme(): string {
    return this.storedTheme;
  }

  setTheme(theme: string): void {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = theme;
  }
}
