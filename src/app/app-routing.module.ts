import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes =
 [{path:"",component:HomepageComponent},
  {path:"category",component:CategoryComponent},
  {path: "detail", component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
