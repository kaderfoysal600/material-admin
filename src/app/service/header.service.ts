import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }


  private myBooleanVariable = false;

  getBooleanValue(): boolean {
    return this.myBooleanVariable;
  }

  setBooleanValue(value: boolean): void {
    this.myBooleanVariable = value;
  }
}
