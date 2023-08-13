import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoleServicesService } from 'src/app/service/role-services.service';
import { StaticThemeService } from 'src/app/service/static-theme.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  storedTheme:string 
  private subDataTwo: Subscription;
  // Data Form
  @ViewChild('formElement') formElement: NgForm;
  dataForm?: FormGroup;

  // Store Data+
  userdata: any;
  allRoles: any;
  constructor(
    private fb: FormBuilder,
    public roleService: RoleServicesService,
    public userService: UserService,
    private router:Router,
    private themeService: StaticThemeService
  ) { }

  ngOnInit(): void {
    // Init Data Form
    this.initDataForm();
    this.getAllRole()
    this.setFormValue();
    this.themeService.theme$.subscribe(theme => {
      this.storedTheme = theme;
    });
  }


  /**
* INIT FORM & Submit
* initDataForm()
* setFormValue()
* onSubmit()
*/
  private initDataForm() {
    this.dataForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      roles: [null],
    });
  }

  private setFormValue() {
    this.dataForm.patchValue(this.userdata);
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      return;
    }
    this.addUser(this.dataForm.value)
    console.log('user data from frontend', this.dataForm.value);
  }
  addUser(data: any) {
    this.subDataTwo = this.userService.addUser(data)
      .subscribe({
        next: (res) => {
          if (res) {
            // this.reloadService.needRefreshData$();
            // this.uiService.success('Review added successfully.')
            this.router.navigate(['/', 'dashboard']);
            console.log('User added successfully')
          } else {
            // this.uiService.wrong('Error! Please try again.')
            console.log('Error! Please try again.')
          }
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  private getAllRole() {
    this.roleService.AllRole().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allRoles = res;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

}
