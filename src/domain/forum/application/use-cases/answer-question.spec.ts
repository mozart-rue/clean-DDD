import { AnswerQuestionUseCase } from "./answer-question";
import { AnswerRepository } from "../repositories/answers-repository";
import { Answer } from "../../enterprise//entities/answer";

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    console.log(`S{answer}`);
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);

  const answer = await answerQuestion.execute({
    questionId: "1",
    instructorId: "1",
    content: "Nova resposta",
  });

  expect(answer.content).toEqual("Nova resposta");
});
