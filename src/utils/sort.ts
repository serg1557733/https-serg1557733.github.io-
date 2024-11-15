import { Questions } from "../types/types";
import { questions } from "../data/quizQuestions";

export const useShuffledQuestions = (): Questions =>
  questions.slice().sort(() => Math.random() - 0.5);
