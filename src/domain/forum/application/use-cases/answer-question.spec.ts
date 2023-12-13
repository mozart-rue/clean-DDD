import { InMemoryAnswerRepository } from "test/respositories/in-memory-answer-repository";
import { AnswerQuestionUseCase } from "./answer-question";

let inMemoryAnswerRespository: InMemoryAnswerRepository;
let sut: AnswerQuestionUseCase;

describe("Create Answer", () => {
  beforeEach(() => {
    inMemoryAnswerRespository = new InMemoryAnswerRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswerRespository);
  });

  it("should be able to crate an answer", async () => {
    const { answer } = await sut.execute({
      questionId: "1",
      instructorId: "1",
      content: "Conteudo da resposta",
    });

    expect(answer.id).toBeTruthy();
    expect(inMemoryAnswerRespository.items[0].id).toEqual(answer.id);
  });
});
