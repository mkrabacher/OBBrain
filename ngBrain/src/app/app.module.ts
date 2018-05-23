import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrainComponent } from './brain/brain.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { BrainDisplayComponent } from './brain-display/brain-display.component';

@NgModule({
    declarations: [
        AppComponent,
        LogRegComponent,
        PageNotFoundComponent,
        BrainComponent,
        BrainDisplayComponent,
        CourseViewComponent,
        CourseCreateComponent,
        CourseUpdateComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }
