import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private userService: UserService) { 
    this.userService.getCurrentUser()
    .then(user=> {
      //this.displayName = user.displayName !=null? user.displayName: user.email
      this.isUserLoggedIn.next(true);
    }
  );
  }


}
