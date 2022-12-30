import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  // { path: 'user', component: UserComponent },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   children: [
  //     {
  //       path: 'telephone', // child route path
  //       component: UserDetailsComponent, // child route component that the router renders
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true,
      // onSameUrlNavigation: 'reload',
      // scrollPositionRestoration: 'top',
      // relativeLinkResolution: 'legacy',
      // paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
