import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticThemeService {

  constructor() { }
  private storedTheme: string = localStorage.getItem('theme-color');
  private storedSetting: string = localStorage.getItem('theme-settings');
  private themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.storedTheme);
  private settingSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.storedSetting);
  theme$ = this.themeSubject.asObservable();
  setting$ = this.themeSubject.asObservable();
  getTheme(): string {
    return this.storedTheme;
  }
  getSetting(): string {
    return this.storedSetting;
  }
  setTheme(theme: string): void {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = theme;
    this.themeSubject.next(theme); 
  }

  setSetting(setting: string): void {
    localStorage.setItem('theme-settings', setting);
    this.storedSetting = setting;
    this.settingSubject.next(setting); 
  }
}
