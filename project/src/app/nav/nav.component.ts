import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharingService } from '../services/sharing.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  displayName: string="";
  constructor(private userService: UserService, 
    private sharingSrv: SharingService,
    private router : Router
    ) { 
	

  }

  ngOnInit(): void {
    this.sharingSrv.isUserLoggedIn.subscribe( value=>{
      if(value==true){
        this.userService.getCurrentUser()
        .then(user=> this.displayName = user.displayName !=null? user.displayName: user.email);	

      }else{
        this.displayName=""
      }
    }

    )
				//console.log(this.displayName);	
  }

  Logout(){
    this.userService.logout();
    location.href="/login";
  }

}
