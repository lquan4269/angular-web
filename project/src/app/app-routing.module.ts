import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { InsertNodeComponent } from './insert-node/insert-node.component';
import { ItemNodeComponent } from './item-node/item-node.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'main', component:MainComponent , 
  canActivate:[AuthGuard],
  children :[
    {path:"itemnode",component:ItemNodeComponent},
    {path:"tablefb",component:HomeComponent},
    {path:"add",component:InsertNodeComponent},
    {path:"delete",component:InsertNodeComponent},


  

  ]},




    

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
