import { gql } from '@apollo/client';

export const GET_SURVEY = gql`
  query GetSurvey($slug: String!) {
    survey(slug: $slug) {
      slug
      questions {
        results {
          id
          question
          explanation
          answers {
            results {
              id
              answer
              correct
            }
          }
        }
      }
    }
  }
`;

export const GET_SURVEYS = gql`
  query GetSurveys {
    surveys {
      results {
        id
        slug
      }
    }
  }
`;

export const CREATE_SURVEY = gql`
  mutation CreateSurvey {
    createSurvey {
      slug
    }
  }
`;
