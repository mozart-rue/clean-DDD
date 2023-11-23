import { Entity } from "../../core/entites/entity";

interface AnswerProps {
  authorId: string;
  questionId: string;
  content: string;
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content;
  }

  constructor(props: AnswerProps, id?: string) {
    super(props, id);
  }
}
