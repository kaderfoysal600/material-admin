import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  myBooleanValue: boolean;
  constructor(private headerService: HeaderService) {
   
   }

  ngOnInit(): void {
    this.myBooleanValue = this.headerService.getBooleanValue();
  }
  toggleBoolean() {
    this.myBooleanValue = !this.myBooleanValue;
    this.headerService.setBooleanValue(this.myBooleanValue);
    console.log(this.myBooleanValue);
    
  }

}
