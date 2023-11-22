import { randomUUID } from "node:crypto";

interface QuestionProps {
  authorId: string;
  title: string;
  content: string;
}

export class Question {
  public id: string;
  public title: string;
  public content: string;
  public authorId: string;

  constructor(props: QuestionProps, id?: string) {
    this.id = id ?? randomUUID();
    this.authorId = props.authorId;
    this.title = props.title;
    this.content = props.content;
  }
}
