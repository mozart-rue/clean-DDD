import dayjs from "dayjs";
import { Slug } from "./value-objects/slug";
import { Entity } from "@/core/entites/entity";
import { UniqueEntityId } from "@/core/entites/unique-entity-id";
import { Optional } from "@/core/types/optional";

export interface QuestionProps {
  authorId: UniqueEntityId;
  bestAnswerId?: UniqueEntityId;
  title: string;
  slug: Slug;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {
  get authorId(): UniqueEntityId {
    return this.authorId;
  }

  get slug(): Slug {
    return this.props.slug;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.updatedAt;
  }

  get isNew(): boolean {
    return dayjs().diff(this.createdAt, "days") <= 3;
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat("...");
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  get title(): string {
    return this.props.title;
  }

  set title(title: string) {
    this.props.title = title;
    this.props.slug = Slug.createFromText(title);
    this.touch();
  }

  get content(): string {
    return this.content;
  }

  set content(content: string) {
    this.props.content = content;
    this.touch();
  }

  get bestAnswerId(): UniqueEntityId {
    return this.bestAnswerId;
  }

  set bestAnswerId(bestAnswerId: UniqueEntityId) {
    this.props.bestAnswerId = bestAnswerId;
    this.touch();
  }

  static create(
    props: Optional<QuestionProps, "createdAt" | "slug">,
    id?: UniqueEntityId,
  ) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        createdAt: new Date(),
      },
      id,
    );

    return question;
  }
}
