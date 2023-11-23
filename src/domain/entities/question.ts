import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entites/entity";
import { UniqueEntityId } from "../../core/entites/unique-entity-id";

interface QuestionProps {
  authorId: UniqueEntityId;
  title: string;
  slug: Slug;
  content: string;
}

export class Question extends Entity<QuestionProps> {}
