import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigFormComponent } from './config-form/config-form.component';
import { ViewConfigComponent } from './view-config/view-config.component';

const routes: Routes = [
  // { path: '', component: NavigationComponent },
  { path: 'config', component: ConfigFormComponent },
  { path: 'viewConfig', component: ViewConfigComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }