import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home-modal', loadChildren: './home-modal/home-modal.module#HomeModalPageModule' },
  { path: 'feed-modal', loadChildren: './feed-modal/feed-modal.module#FeedModalPageModule' },  { path: 'more', loadChildren: './more/more.module#MorePageModule' }




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
