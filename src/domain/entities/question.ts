import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entites/entity";

interface QuestionProps {
  authorId: string;
  title: string;
  slug: Slug;
  content: string;
}

export class Question extends Entity<QuestionProps> {
  constructor(props: QuestionProps, id?: string) {
    super(props, id);
  }
}
