import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticThemeService {

  constructor() { }
  private storedTheme: string = localStorage.getItem('theme-color');
  private themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.storedTheme);
  theme$ = this.themeSubject.asObservable();
  getTheme(): string {
    return this.storedTheme;
  }

  setTheme(theme: string): void {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = theme;
    this.themeSubject.next(theme); 
  }
}
