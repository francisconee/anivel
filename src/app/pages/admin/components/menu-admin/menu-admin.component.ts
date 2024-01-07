import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.sass']
})
export class MenuAdminComponent {
  addWork: boolean = false
  showAddwork(){
    this.addWork
  }
}
