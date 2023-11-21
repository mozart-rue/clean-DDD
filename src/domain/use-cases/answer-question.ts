import { Answer } from "../entities/answer";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  quastionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  execute({ instructorId, quastionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer(content);

    return answer;
  }
}
