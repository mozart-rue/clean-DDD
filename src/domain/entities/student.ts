import { Entity } from "../../core/entites/entity";

interface StudentProps {
  name: string;
}

export class Student extends Entity<StudentProps> {}
