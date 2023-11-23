import { Entity } from "../../core/entites/entity";
import { UniqueEntityId } from "../../core/entites/unique-entity-id";

interface AnswerProps {
  authorId: UniqueEntityId;
  questionId: UniqueEntityId;
  content: string;
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content;
  }
}
