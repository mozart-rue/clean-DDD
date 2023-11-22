import { randomUUID } from "crypto";

interface AnswerProps {
  authorId: string;
  questionId: string;
  content: string;
}

export class Answer {
  public id: string;
  public instructorId: string;
  public questionId: string;
  public content: string;

  constructor(props: AnswerProps, id?: string) {
    this.id = id ?? randomUUID();
    this.instructorId = props.authorId;
    this.questionId = props.questionId;
    this.content = props.content;
  }
}
