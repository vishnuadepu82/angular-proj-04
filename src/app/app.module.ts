import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ArthService } from './arth.service';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { StudentService } from './student.service';
import { CourseService } from './course.service';
import { UserService } from './user.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, AdminDashboardComponent, AdminHomeComponent, StudentDashboardComponent, StudentHomeComponent, StudentFormComponent, AddCourseComponent, CourseListComponent, EnrollmentsComponent, MenuBarComponent, MsgBoxComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ArthService, StudentService, CourseService, UserService]
})
export class AppModule { }
