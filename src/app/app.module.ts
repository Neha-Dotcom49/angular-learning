import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { OnewaydatabindComponent } from './onewaydatabind/onewaydatabind.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StrucdirComponent } from './strucdir/strucdir.component';
import { StructAssignComponent } from './struct-assign/struct-assign.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { AttridirComponent } from './attridir/attridir.component';
import { CustomDirective } from './custom.directive';
import { CountryStateComponent } from './country-state/country-state.component';
import { ChildComponent } from './child/child.component';
import { ChildAssignComponent } from './child-assign/child-assign.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TdfAssignComponent } from './tdf-assign/tdf-assign.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material';
import { ReactiveAssignComponent } from './reactive-assign/reactive-assign.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ApikeyInterceptor } from './services/apikey.interceptor';
import { HooksComponent } from './hooks/hooks.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RandomUserapiComponent } from './random-userapi/random-userapi.component';
import { Chat1Component } from './chat1/chat1.component';
import { Chat2Component } from './chat2/chat2.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { WeatherComponent } from './weather/weather.component';
import { SearchComponent } from './search/search.component';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    OnewaydatabindComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    StrucdirComponent,
    StructAssignComponent,
    ParentComponentComponent,
    ProductComponentComponent,
    AttridirComponent,
    CustomDirective,
    CountryStateComponent,
    ChildComponent,
    ChildAssignComponent,
    SimpleformComponent,
    DatabindingComponent,
    ReactiveformComponent,
    TdfAssignComponent,
    ReactiveAssignComponent,
    TodoListComponent,
    FilterPipe,
    HomeComponent,
    ContactusComponent,
    LoginComponent,
    AboutusComponent,
    PagenotfoundComponent,
    TodoDetailsComponent,
    ECommerceComponent,
    HooksComponent,
    ProductListComponent,
    RandomUserapiComponent,
    Chat1Component,
    Chat2Component,
    RxjsComponent,
    WeatherComponent,
    SearchComponent,
    WikiSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatCheckboxModule ,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ApikeyInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    console.log('AppModule called');   
    }
}
