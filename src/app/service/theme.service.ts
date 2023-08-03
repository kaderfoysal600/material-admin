import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme = new BehaviorSubject<string>('theme-default');
  public themeChanged: Observable<string> = this.activeTheme.asObservable();
  constructor() { }


  setActiveTheme(theme: string) {
    this.activeTheme.next(theme);
  }

  getActiveTheme() {
    return this.activeTheme.getValue();
  }
}
