import { gql } from '@apollo/client';

export const GET_USERS_BY_SURVEY_ID = gql`
  query GetUsersBySurveyId($id: String!) {
    usersBySurveyId(id: $id) {
      results {
        id
        username
        score
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($params: UserCreateInput!) {
    createUser(params: $params) {
      id
    }
  }
`;
