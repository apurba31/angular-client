import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo:'/customer-list', pathMatch:'full'},// component: CustomersListComponent},
  {path: 'search-customers', component: SearchCustomersComponent},
  {path: 'customer-list', component: CustomersListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SearchCustomersComponent,
                                    CustomersListComponent,
                                    PageNotFoundComponent]
