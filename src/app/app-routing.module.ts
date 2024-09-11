import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AuthGuard } from './guards/auth.guard';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { WeatherComponent } from './weather/weather.component';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';

// configure the routes 
const routes: Routes = [
 {path: '', redirectTo: 'login', pathMatch:'full'}, // localhost:4200/
 {path: 'login', component: LoginComponent},
  { path:'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent }, // localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent}, // localhost:4200/conatctus
  { path: 'todos', component: TodoListComponent}, // http://localhost:4200/contactuslllllll
  { path: 'tododetails/:id', component: TodoDetailsComponent},
 
  // configure the lazy loadingS
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'cart', canActivate:[AuthGuard], loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'mobile', loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule) },
  { path: 'electronic', loadChildren: () => import('./electronic/electronic.module').then(m => m.ElectronicModule) },
  { path: 'fashion', loadChildren: () => import('./fashion/fashion.module').then(m => m.FashionModule) },
  { path: 'ecommerce', component: ECommerceComponent},
  { path: 'rxjs', component: RxjsComponent},
  { path: 'weather', component: WeatherComponent},
  { path: 'wiki-search', component: WikiSearchComponent},
  
  {path: '**', component:PagenotfoundComponent}  //wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('AppRoutingModule called');
    
      
    }
 }
