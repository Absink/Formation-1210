import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { PageHomeComponent } from './views/home/pages/page-home/page-home.component';
import { PageNotFoundComponent } from './views/page-not-found/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'orders', loadChildren: () => import('./views/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'clients', loadChildren: () =>import('./views/clients/clients.module').then(m => m.ClientsModule) },
  { path: 'users', loadChildren: () =>import('./views/users/users.module').then(m => m.UsersModule) },
  { path: 'login', loadChildren: () =>import('./views/authent/authent.module').then(m => m.AuthentModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,   // true for dev
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 1))
  }
}
