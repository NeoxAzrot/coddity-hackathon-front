interface Answer extends Timestamps {
  id: string;
  answer: string;
  correct: boolean;
}

interface Answers {
  results: Answer[];
}
