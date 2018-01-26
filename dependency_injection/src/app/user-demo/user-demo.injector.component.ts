import { Component, ReflectiveInjector } from '@angular/core';
import { UserService } from '../services/user.service.ts';

@Component({
  selector: 'app-injector-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoInjectorComponent {
  userName: string;
  constructor(private userService: UserService){
  }
  signIn(){
    this.userService.setUser({name: 'Nate'});
    this.userName = this.userService.getUser().name;
    console.log('User name is : ', this.userName);
  }
}
