import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UserInformation } from '../models/user-model';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class UserComponent implements OnInit, OnChanges {
  userInfo: UserInformation;
  users: any;
  total: number = 0;
  displayImage: boolean = true;
  p: number = 1;
  
  constructor(private userService: UserService) {
    this.userInfo = {} as UserInformation;
  }

  toggleImage(): void {
    this.displayImage = !this.displayImage;
  }

  ngOnChanges(changes: SimpleChanges): void {}
  getUsers() {
    this.userService.getUsers(this.p).subscribe((response: any) => {
      this.users = response.data;
      this.total = response.total;
    });
  }
  pageChangeEvent(event: number) {
    this.p = event;
    this.getUsers();
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
