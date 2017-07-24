import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="container">
  <form>
  <div class="form-group" [ngClass]="{'has-error':!name.valid}">
  <label for="userName">UserName : </label>
  <input type="text" name="username" id="userName" placeholder="enter username" [(ngModel)]="uname" (ngModelChange)="onChange()" required minlength="4" maxlength="8" class="form-control"  #name="ngModel"/>
  </div>
  <div class="form-group" [ngClass]="{'has-error':!pass.valid}">
  <label for="pwd">Password : </label>
  <input type="password" name="pwd" id="pwd" placeholder="enter password" [(ngModel)]="pwd" (ngModelChange)="onChange()" required minlength="4" maxlength="8" class="form-control"  #pass="ngModel"/>
  </div>
  <button type="submit" class="btn btn-success" [disabled]='!name.valid' (click)="onSubmit($event)">Submit</button>
  </form>
  </div>`
})
export class AppComponent {
uname="";
pwd="";
onSubmit(e:any){
  console.log(e.target.value);
}
onChange(){
  console.log(this.uname);
  console.log(this.pwd)
};
}
