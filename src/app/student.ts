import { Enrollment } from "./enrollment";

export class Student {
  public id: number;
  public fullname: string;
  public mobilenumber: number;
  public enrollments: Enrollment[];
}
