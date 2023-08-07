import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { StaticThemeService } from 'src/app/service/static-theme.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  storedTheme:string 
  constructor(private themeService: StaticThemeService) { }

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
    this.storedTheme = theme;
    });
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}
