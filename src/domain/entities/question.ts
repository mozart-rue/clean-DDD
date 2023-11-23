import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entites/entity";
import { UniqueEntityId } from "../../core/entites/unique-entity-id";

interface QuestionProps {
  authorId: UniqueEntityId;
  bestAnswerId?: UniqueEntityId;
  title: string;
  slug: Slug;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {}
