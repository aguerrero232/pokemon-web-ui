import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationCardListViewComponent } from './generation-card-list-view/generation-card-list-view.component';

const routes: Routes = [
  { path: '', component: GenerationCardListViewComponent },
  { path: '*', component: GenerationCardListViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
