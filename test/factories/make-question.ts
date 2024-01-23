import { UniqueEntityId } from "@/core/entites/unique-entity-id";
import { faker } from "@faker-js/faker";
import {
  Question,
  QuestionProps,
} from "@/domain/forum/enterprise/entities/question";

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    authorId: new UniqueEntityId(),
    title: faker.lorem.sentence(),
    content: faker.lorem.text(),
    ...override,
  });

  return question;
}
