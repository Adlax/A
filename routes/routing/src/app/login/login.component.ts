export class LoginComponent {
  message: string;
  constructor(public authService: AuthService){
    this.message='';
  }
  login(user: string, password: string): boolean {
    this.message = '';
    if(!this.authService.login(user, password)){
      this.message = 'Credentials not correct';
      setTimeout(function(){this.message = '';}.bind(this), 2500);
    }
    return false;
  }
  logout(): boolean {
    this.authService.logout();
    return false;
  }
}
