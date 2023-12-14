import { InMemoryQuestionRepository } from "test/respositories/in-memory-question-repository";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
import { Question } from "../../enterprise/entities/question";
import { UniqueEntityId } from "@/core/entites/unique-entity-id";
import { Slug } from "../../enterprise/entities/value-objects/slug";

let inMemoryQuestionRespository: InMemoryQuestionRepository;
let sut: GetQuestionBySlugUseCase;

describe("Get Question By Slug", () => {
  beforeEach(() => {
    inMemoryQuestionRespository = new InMemoryQuestionRepository();
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRespository);
  });

  it("should be able to get a question by slug", async () => {
    const newQuestion = Question.create({
      authorId: new UniqueEntityId(),
      title: "Example question",
      slug: Slug.create("example-question"),
      content: "example content",
    });

    await inMemoryQuestionRespository.create(newQuestion);

    const { question } = await sut.execute({
      slug: "example-question",
    });

    expect(question.id).toBeTruthy();
    expect(question.title).toEqual(newQuestion.title);
  });
});
