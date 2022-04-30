interface CreateSurvey extends Timestamps {
  createSurvey: {
    id: string;
    slug: string;
  };
}

interface GetSurvey extends Timestamps {
  survey: {
    id: string;
    slug: string;
    questions: Questions;
  };
}
