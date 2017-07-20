import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="container">
  <form>
  <div class="form-group">
  <label for="userName">UserName : </label>
  <input type="text" id="userName" placeholder="enter username" class="form-control"/>
  </div>
  <div class="form-group">
  <label for="pwd">Password : </label>
  <input type="password" id="pwd" placeholder="enter password" class="form-control"/>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
  </form>
  </div>`
})
export class AppComponent {

}
