import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogRegComponent } from './log-reg/log-reg.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrainComponent } from './brain/brain.component';
import { BrainDisplayComponent } from './brain-display/brain-display.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseUpdateComponent } from './course-update/course-update.component';

const routes: Routes = [
    { path: 'log-reg', component: LogRegComponent },
    { path: 'brain', component: BrainComponent, children : [
        { path: 'brain-display', component: BrainDisplayComponent },
        { path: 'course-view', component: CourseViewComponent },
        { path: 'course-create', component: CourseCreateComponent },
        { path: 'course-update', component: CourseUpdateComponent },
    ] },
    { path: '', pathMatch: 'full', redirectTo: '/log-reg' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
