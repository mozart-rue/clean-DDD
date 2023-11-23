import { Entity } from "../../core/entites/entity";

interface InstructorProps {
  name: string;
}

export class Instructor extends Entity<InstructorProps> {}
