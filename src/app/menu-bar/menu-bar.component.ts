import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"]
})
export class MenuBarComponent implements OnInit {
  links: string[][];
  isLoggedin: boolean;
  constructor(private userservice: UserService, private router: Router) {
    this.links = [];
    this.isLoggedin = false;
  }

  ngOnInit() {
    if (this.userservice.isLoggedin()) {
      this.isLoggedin = true;
      let role = this.userservice.currentUser().role;
      if (role == "ADMIN") {
        this.links = [
          ["/admin", "Home"],
          ["/admin/courses", "Courses"],
          ["/admin/addcourse", "Add Course"]
        ];
      } else {
        this.links = [
          ["/student", "Home"],
          ["/student/courses", "Courses"],
          ["/student/enrolls", "enrollments"],
          ["/admin/edit", "Profile"]
        ];
      }
    }
    else {
        this.links = [
          ["/", "Home"],
          ["/signup", "Sign Up"]
        ];
      }
  }
  logout()
  {
    this.userservice.logout();
    this.router.navigateByUrl("/");
  }
}
