import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent} from './app.component';
import { SearchComponent} from './search.component';
import { UsersComponent} from './users.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'search', component: SearchComponent},
  {path: 'users', component: UsersComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
