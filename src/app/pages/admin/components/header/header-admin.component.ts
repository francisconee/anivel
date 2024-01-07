import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.sass']
})
export class HeaderAdminComponent {

  constructor(
    private userService: UserService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
}

