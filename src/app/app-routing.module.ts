import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarInitComponent } from './layout/toolbar-init/toolbar-init.component';

const routes: Routes = [
  {
    path: "", component: ToolbarInitComponent
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
