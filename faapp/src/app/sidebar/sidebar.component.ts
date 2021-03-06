import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { CONFIG } from '../shared/config';
import { ContactData } from '../shared/models/contact-data.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() sidebarClick: EventEmitter<string> = new EventEmitter<string>();

  links: string[] = ['profile', 'messages']
  userData: ContactData;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem(`${CONFIG.localStorageId}`)){
    this.authService.getSignUser(localStorage.getItem(`${CONFIG.localStorageId}`))
    .subscribe((user: ContactData) => { return this.userData = user})
    }
    console.log('this.userData', this.userData)
  }

  onSidebarClick(item: number){
    this.sidebarClick.emit(this.links[item])
    console.log('item', item)
  }
 


}
