import { UniqueEntityId } from "@/core/entites/unique-entity-id";
import {
  Question,
  QuestionProps,
} from "@/domain/forum/enterprise/entities/question";
import { Slug } from "@/domain/forum/enterprise/entities/value-objects/slug";

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    authorId: new UniqueEntityId(),
    title: "Example question",
    slug: Slug.create("example-question"),
    content: "example content",
    ...override,
  });

  return question;
}
