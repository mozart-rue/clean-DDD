import { CreateQuestionUseCase } from "./create-question";
import { InMemoryQuestionRepository } from "test/respositories/in-memory-question-repository";

let inMemoryQuestionRespository: InMemoryQuestionRepository;
let sut: CreateQuestionUseCase;

describe("Create Question", () => {
  beforeEach(() => {
    inMemoryQuestionRespository = new InMemoryQuestionRepository();
    sut = new CreateQuestionUseCase(inMemoryQuestionRespository);
  });

  it("create an answer", async () => {
    const { question } = await sut.execute({
      authorId: "1",
      title: "Nova pergunta",
      content: "conteudo da pergunta",
    });

    expect(question.id).toBeTruthy();
    expect(inMemoryQuestionRespository.items[0].id).toEqual(question.id);
  });
});
