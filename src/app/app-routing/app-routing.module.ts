import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { StudentFormComponent } from "../student-form/student-form.component";
import { AdminhomeComponent } from "../adminhome/adminhome.component";
import { StudenthomeComponent } from "../studenthome/studenthome.component";
import { AdmindashboardComponent } from "../admindashboard/admindashboard.component";
import { CourseListComponent } from "../course-list/course-list.component";
import { AddCourseComponent } from "../add-course/add-course.component";
import { AuthGuard } from "../auth.guard";
import { StudentdashboardComponent } from "../studentdashboard/studentdashboard.component";
import { EnrollmentsComponent } from "../enrollments/enrollments.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: StudentFormComponent },
  {
    path: "admin",
    component: AdminhomeComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      { path: "dashboard", component: AdmindashboardComponent },
      { path: "courses", component: CourseListComponent },
      { path: "add courses", component: AddCourseComponent }
    ],
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: "student",
    component: StudenthomeComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      { path: "dashboard", component: StudentdashboardComponent },
      { path: "courses", component: CourseListComponent },
      { path: "enrolls", component: EnrollmentsComponent },
      { path: "edit", component: StudentFormComponent }
    ],
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
