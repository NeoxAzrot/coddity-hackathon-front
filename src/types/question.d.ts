interface Question extends Timestamps {
  id: string;
  question: string;
  explanation: string;
  answers: Answers;
}

interface Questions {
  results: Question[];
}
