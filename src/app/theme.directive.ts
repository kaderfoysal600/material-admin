import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';
import { ThemeService } from './service/theme.service';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {

  constructor(private themeService: ThemeService, private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
    this.applyTheme(this.themeService.getActiveTheme());
    this.themeService.themeChanged.subscribe(theme => this.applyTheme(theme));
  }
  private applyTheme(theme: string) {
    const themeLink = this.renderer.createElement('link');
    themeLink.href = `/theme/${theme}.css`;
    themeLink.rel = 'stylesheet';
    themeLink.type = 'text/css'

    this.renderer.appendChild(this.el.nativeElement, themeLink);
    console.log(themeLink)
  }
}
