import { QuestionsRepository } from "../repositories/questions-repository";
import { Question } from "../../enterprise/entities/question";
import { CreateQuestionUseCase } from "./create-question";

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {
    console.log(`S{question}`);
  },
};

test("create an answer", async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository);

  const { question } = await createQuestion.execute({
    authorId: "1",
    title: "Nova pergunta",
    content: "conteudo da pergunta",
  });

  expect(question.id).toBeTruthy();
});
