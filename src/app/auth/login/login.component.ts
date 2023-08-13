import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/service/DataSharingService.service';
import { StaticThemeService } from 'src/app/service/static-theme.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Reactive Form

  storedTheme:string 
  loginForm: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  constructor(
    private userService: UserService,
    public router: Router,
    private dataSharingService: DataSharingService,
    private themeService: StaticThemeService
  ) { }

  ngOnInit(): void {
    // Main reactive form..
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });

    this.themeService.theme$.subscribe(theme => {
      this.storedTheme = theme;
    });
  }

      /**
   * Login
   */
      onLogin() {
        if (this.loginForm.invalid) {
         console.log('Invalid Input field!');
          return;
        }
        // Form Data..
        const username = this.loginForm.value.username.trim().toLowerCase();
        const password = this.loginForm.value.password;
    
        const data = {username, password};
    
    
        this.userService.loginUser(data).subscribe({
          next: (res) => {
            if (res && res['status']=="ok" && res['data']['accessToken'] ) {
              console.log(res)
              console.log('login successfully')
               localStorage.setItem('token', res['data']['accessToken']);
                 this.router.navigate(['/', 'dashboard']);
                  this.dataSharingService.setUserLoggedInStatus(true)
                 
            } else {
              console.log('Error! Please try again.')
            }
          },
          error: (err) => {
            console.log(err)
          }
        })
      }

}
