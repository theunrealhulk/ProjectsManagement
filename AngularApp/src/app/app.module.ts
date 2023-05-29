import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AuthInterceptor } from './services/auth.interceptor';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { C404Component } from './components/c404/c404.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import { JwtModule } from '@auth0/angular-jwt';
import { ItemViewComponent } from './components/item-view/item-view.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { AssignmentDataComponent } from './components/assignment-data/assignment-data.component';
import {MatDatepickerModule} from '@angular/material/datepicker';;
import {MatNativeDateModule} from '@angular/material/core';
import { BrowsProjectsComponent } from './components/brows-projects/brows-projects.component';
import { BrowsAssignmentsComponent } from './components/brows-assignments/brows-assignments.component';
import { ProjectDataComponent } from './components/project-data/project-data.component';
import { DataPresenterComponent } from './components/data-presenter/data-presenter.component';
import { MatTableModule } from '@angular/material/table';
import { DataRepositoryService } from './services/data-repository.service';



// import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    C404Component,
    HomeComponent,
    ItemViewComponent,
    AssignmentDataComponent,
    BrowsProjectsComponent,
    BrowsAssignmentsComponent,
    ProjectDataComponent,
    DataPresenterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,

    JwtModule.forRoot({
      config: {
        // JWT configuration options
      }
    })
  ],
  providers: [

    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
